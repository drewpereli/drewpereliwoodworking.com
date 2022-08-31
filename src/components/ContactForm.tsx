import React, { ReactNode, useId, useState } from 'react';
import emailjs from '@emailjs/browser';

const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env;

export default function ContactForm({ className }: { className: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const r = await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: email,
          message,
        },
        VITE_EMAILJS_PUBLIC_KEY
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-8 ${className}`}>
      <div className="space-y-4">
        <InputGroup label="Name" value={name} onInput={setName} />

        <InputGroup label="Email" value={email} onInput={setEmail} />

        <InputGroupWrapper>
          <Label label="Message" htmlFor="contact-form-message" />
          <TextArea id="contact-form-message" value={message} onInput={setMessage} />
        </InputGroupWrapper>
      </div>

      <button
        type="submit"
        className="mt-4 w-full py-2 px-4 rounded bg-gradient-to-br from-blue-400 to-blue-600 transition-transform font-bold hover:-translate-y-px hover:scale-105 active:translate-y-px"
      >
        Send
      </button>
    </form>
  );
}

function Label({ label, htmlFor }: { htmlFor: string; label: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-bold">
      {label}
    </label>
  );
}

function Input({ id, value, onInput }: { id: string; value: string; onInput: (val: string) => unknown }) {
  return (
    <input
      id={id}
      value={value}
      onInput={e => onInput((e.target as HTMLInputElement).value)}
      className="bg-slate-100 rounded-sm text-neutral-900 mt-1 p-1"
    />
  );
}

function TextArea({ id, value, onInput }: { id: string; value: string; onInput: (val: string) => unknown }) {
  return (
    <textarea
      id={id}
      value={value}
      onInput={e => onInput((e.target as HTMLInputElement).value)}
      className="bg-slate-100 rounded-sm text-neutral-900 mt-1 p-1"
      rows={7}
    />
  );
}

function InputGroupWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col space-y-2">{children}</div>;
}

function InputGroup({ label, value, onInput }: { label: string; value: string; onInput: (val: string) => unknown }) {
  const id = useId();

  return (
    <InputGroupWrapper>
      <Label label={label} htmlFor={id} />
      <Input id={id} value={value} onInput={onInput} />
    </InputGroupWrapper>
  );
}
