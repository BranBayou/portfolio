import React, { useState } from 'react';
import { profile } from '../data';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldClass =
  'w-full bg-transparent border border-muted px-4 py-2 text-white placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Without a form service configured, hand the message to the visitor's email app.
    if (!profile.contactFormEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`);
      const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(profile.contactFormEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[620px]">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Name</span>
          <input name="name" type="text" required autoComplete="name" placeholder="Name" className={fieldClass} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-white font-medium">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email" className={fieldClass} />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-white font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project..."
          className={`${fieldClass} resize-y`}
        />
      </label>
      {/* Honeypot: hidden from people, filled in by bots, ignored by Formspree. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex px-4 py-2 border border-primary text-white font-medium hover:bg-primary/20 transition-colors disabled:opacity-60 disabled:cursor-wait"
        >
          {status === 'sending' ? 'Sending...' : 'Send ->'}
        </button>
        <p role="status" className="text-muted">
          {status === 'sent' && <span className="text-white">Thanks! Your message is on its way.</span>}
          {status === 'error' && (
            <>
              Couldn't send that. Email me at{' '}
              <a href={`mailto:${profile.email}`} className="text-primary hover:text-white">{profile.email}</a>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
