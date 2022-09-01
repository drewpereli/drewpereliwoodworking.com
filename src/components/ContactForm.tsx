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

        <InputGroup label="Email" value={email} onInput={setEmail} type="email" required />

        <InputGroupWrapper>
          <Label label="Message" htmlFor="contact-form-message" required />
          <TextArea id="contact-form-message" value={message} onInput={setMessage} required />
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

function Label({ label, htmlFor, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <span className="space-x-1">
      <label htmlFor={htmlFor} className="text-sm font-bold">
        {label}
      </label>

      {required && <span className="text-red-500">*</span>}
    </span>
  );
}

function Input({
  id,
  value,
  onInput,
  required,
  type,
}: {
  id: string;
  value: string;
  onInput: (val: string) => unknown;
  required?: boolean;
  type?: string;
}) {
  return (
    <input
      id={id}
      value={value}
      onInput={e => onInput((e.target as HTMLInputElement).value)}
      className="bg-slate-100 rounded-sm text-neutral-900 mt-1 p-1"
      required={required}
      type={type}
    />
  );
}

function TextArea({
  id,
  value,
  onInput,
  required,
}: {
  id: string;
  value: string;
  onInput: (val: string) => unknown;
  required?: boolean;
}) {
  return (
    <textarea
      id={id}
      value={value}
      onInput={e => onInput((e.target as HTMLInputElement).value)}
      className="bg-slate-100 rounded-sm text-neutral-900 mt-1 p-1"
      rows={7}
      required={required}
    />
  );
}

function InputGroupWrapper({ children }: { children: ReactNode }) {
  return <div className="flex flex-col space-y-2">{children}</div>;
}

function InputGroup({
  label,
  value,
  onInput,
  required,
  type,
}: {
  label: string;
  value: string;
  onInput: (val: string) => unknown;
  required?: boolean;
  type?: string;
}) {
  const id = useId();

  return (
    <InputGroupWrapper>
      <Label label={label} htmlFor={id} required={required} />
      <Input id={id} value={value} onInput={onInput} required={required} type={type} />
    </InputGroupWrapper>
  );
}