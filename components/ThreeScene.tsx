import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    // Flag to prevent updates if component unmounts
    let isMounted = true;

    // Cleanup any existing child nodes (fixes React Strict Mode duplicate canvas)
    while (mountNode.firstChild) {
      mountNode.removeChild(mountNode.firstChild);
    }

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // Set explicit size for better resolution control
    const size = 450;
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap at 2x for performance
    
    mountNode.appendChild(renderer.domElement);

    // Group for the central interactive elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Geometric Shape (Wireframe Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(1.2, 0);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x58a6ff, // dev-blue
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const coreSphere = new THREE.Mesh(geometry, material);
    mainGroup.add(coreSphere);

    // 2. Inner Solid Shape (Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(0.6, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xbc8cff, // dev-purple
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 3. Orbital Rings (Torus) - Adds complexity
    const ringGeo = new THREE.TorusGeometry(2.2, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ 
      color: 0x30363d, 
      transparent: true, 
      opacity: 0.4 
    });
    const ringX = new THREE.Mesh(ringGeo, ringMat);
    const ringY = new THREE.Mesh(ringGeo, ringMat);
    
    ringY.rotation.x = Math.PI / 2;
    ringX.rotation.y = Math.PI / 2;
    
    mainGroup.add(ringX);
    mainGroup.add(ringY);

    // 4. Logo Particle System
    const particleGroup = new THREE.Group();
    scene.add(particleGroup);

    const logoUrls = [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    ];

    const loader = new THREE.TextureLoader();
    const createdMaterials: THREE.PointsMaterial[] = [];
    const createdGeometries: THREE.BufferGeometry[] = [];

    logoUrls.forEach((url) => {
      loader.load(url, (texture) => {
        if (!isMounted) return;

        const partGeo = new THREE.BufferGeometry();
        const count = 15; // Number of particles per logo
        const posArray = new Float32Array(count * 3);

        for(let i = 0; i < count * 3; i+=3) {
            // Create a wider cloud around the object
            const r = 3 + Math.random() * 3; // radius between 3 and 6
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            posArray[i] = r * Math.sin(phi) * Math.cos(theta);
            posArray[i+1] = r * Math.sin(phi) * Math.sin(theta);
            posArray[i+2] = r * Math.cos(phi);
        }

        partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        createdGeometries.push(partGeo);
        
        const partMat = new THREE.PointsMaterial({
            size: 0.35, // Larger size to see the logos
            map: texture,
            transparent: true,
            alphaTest: 0.01, // Helps with transparent background artifacts
            opacity: 0.9,
            depthWrite: false, // Prevents z-buffer blocking
            sizeAttenuation: true
        });
        createdMaterials.push(partMat);
        
        const points = new THREE.Points(partGeo, partMat);
        
        // Add random rotation to each particle system for variety
        points.rotation.x = Math.random() * Math.PI;
        points.rotation.y = Math.random() * Math.PI;
        
        particleGroup.add(points);
      });
    });

    camera.position.z = 3.5;

    // Mouse Interaction Handler
    const handleMouseMove = (event: MouseEvent) => {
        // Normalize mouse coordinates to range -1 to 1
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate objects automatically
      coreSphere.rotation.y += 0.002;
      coreSphere.rotation.x -= 0.001;
      
      innerMesh.rotation.y -= 0.005;
      innerMesh.rotation.z += 0.002;

      // Breathing effect for inner mesh
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.1;
      innerMesh.scale.set(scale, scale, scale);

      // Wobble rings
      ringX.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1;
      ringY.rotation.x = (Math.PI / 2) + Math.cos(elapsedTime * 0.5) * 0.1;

      // Drift particle group
      particleGroup.rotation.y = elapsedTime * 0.08;
      particleGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1;

      // Mouse Interaction: Smoothly interpolate rotation towards mouse position
      const targetRotX = mouseRef.current.y * 0.5; // Look up/down
      const targetRotY = mouseRef.current.x * 0.5; // Look left/right

      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05;
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05;
      
      // Parallax for particles (move them slightly opposite to main group for depth)
      particleGroup.rotation.x += (targetRotX * 0.1 - particleGroup.rotation.x) * 0.05;
      particleGroup.rotation.y += (targetRotY * 0.1 - particleGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      isMounted = false;
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (mountNode && renderer.domElement && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      
      // Dispose Geometry/Materials
      geometry.dispose();
      material.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      
      createdGeometries.forEach(g => g.dispose());
      createdMaterials.forEach(m => {
        if(m.map) m.map.dispose();
        m.dispose();
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-[450px] h-[450px] flex items-center justify-center outline-none pointer-events-none md:pointer-events-auto"
      aria-hidden="true"
    />
  );
};

export default ThreeScene;