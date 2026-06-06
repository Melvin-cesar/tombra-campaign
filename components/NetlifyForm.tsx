"use client";

import { FormEvent, ReactNode, useState } from "react";

type NetlifyFormProps = {
  name: string;
  children: ReactNode;
  className?: string;
  id?: string;
  successMessage: string;
  errorMessage: string;
};

function encodeForm(formData: FormData) {
  return new URLSearchParams(
    Array.from(formData.entries()).map(([key, value]) => [
      key,
      value.toString(),
    ])
  ).toString();
}

export function NetlifyForm({
  name,
  children,
  className,
  id,
  successMessage,
  errorMessage,
}: NetlifyFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData(form);
      formData.set("form-name", name);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(formData),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className={className}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id={id}
      method="POST"
      name={name}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={name} />
      <p className="hidden">
        <label>
          Do not fill this out if you are human:
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {children}
      <div aria-live="polite" className="min-h-6 text-sm font-semibold">
        {status === "submitting" ? (
          <p className="text-slate-600">Sending...</p>
        ) : null}
        {status === "success" ? (
          <p className="text-bayelsa-green">{successMessage}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-red-700">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}

