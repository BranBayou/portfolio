import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate network request
    setTimeout(() => {
      setFormState('sent');
      // Reset after success message
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dev-bg to-dev-panel/50 relative overflow-hidden">
       {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-dev-blue via-dev-purple to-dev-green" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Info */}
          <div className="flex flex-col h-full">
             <ScrollReveal>
               <h2 className="text-4xl font-bold text-white mb-6">Let's build something <br/> <span className="text-dev-blue">amazing together.</span></h2>
               <p className="text-dev-muted mb-8 text-lg">
                 Whether you have a question, a project proposal, or just want to discuss the latest in frontend tech, my inbox is always open.
               </p>
             </ScrollReveal>
             
             <div className="space-y-6 mb-8">
               <ScrollReveal delay={200}>
                 <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="p-3 bg-dev-panel border border-dev-border rounded-lg group-hover:border-dev-blue transition-colors">
                     <Mail className="text-dev-blue w-5 h-5" />
                   </div>
                   <div>
                     <div className="text-sm text-dev-muted">Email</div>
                     <div className="text-white font-medium">berhan.baye@gmail.com</div>
                   </div>
                 </div>
               </ScrollReveal>
               
               <ScrollReveal delay={300}>
                 <div className="flex items-center gap-4 group cursor-pointer">
                   <div className="p-3 bg-dev-panel border border-dev-border rounded-lg group-hover:border-dev-green transition-colors">
                     <MapPin className="text-dev-green w-5 h-5" />
                   </div>
                   <div>
                     <div className="text-sm text-dev-muted">Location</div>
                     <div className="text-white font-medium">Addis Ababa, Ethiopia</div>
                   </div>
                 </div>
               </ScrollReveal>
             </div>

             {/* Map Integration */}
             <ScrollReveal delay={400} className="mt-auto pt-4">
                <div className="w-full h-48 rounded-xl overflow-hidden border border-dev-border bg-dev-panel relative group">
                  {/* Overlay to create dark mode effect on iframe map */}
                  <div className="absolute inset-0 bg-dev-blue/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-300 mix-blend-overlay"></div>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.02028974562!2d38.61332858671199!3d8.963479542403238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1709228425269!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(20%) contrast(85%)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                </div>
             </ScrollReveal>
          </div>

          {/* Form */}
          <ScrollReveal delay={400} className="h-full">
            <div className="bg-dev-panel p-8 rounded-2xl border border-dev-border shadow-2xl h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-mono text-dev-blue uppercase tracking-wider">Name</label>
                    <input type="text" id="name" required className="w-full bg-dev-bg border border-dev-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dev-blue transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-mono text-dev-blue uppercase tracking-wider">Email</label>
                    <input type="email" id="email" required className="w-full bg-dev-bg border border-dev-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dev-blue transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-mono text-dev-blue uppercase tracking-wider">Message</label>
                  <textarea id="message" rows={4} required className="w-full bg-dev-bg border border-dev-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dev-blue transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    formState === 'idle' 
                      ? 'bg-dev-blue hover:bg-blue-600 text-white' 
                      : formState === 'sending'
                        ? 'bg-dev-border text-dev-muted cursor-wait'
                        : 'bg-dev-green text-white'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                  {formState === 'sending' && 'Sending...'}
                  {formState === 'sent' && (
                    <>
                      Message Sent <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;