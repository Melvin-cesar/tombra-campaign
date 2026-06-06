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
  const [debugMessage, setDebugMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setDebugMessage("");
    setStatus("submitting");

    try {
      const formData = new FormData(form);
      formData.set("form-name", name);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(
          `Netlify form submission failed with ${response.status} ${response.statusText}: ${responseText.slice(0, 180)}`
        );
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      if (process.env.NODE_ENV !== "production") {
        setDebugMessage(error instanceof Error ? error.message : String(error));
      }
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
      netlify-honeypot="bot-field"
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
          <p className="text-red-700">
            {errorMessage}
            {debugMessage ? (
              <span className="mt-2 block text-xs font-medium text-red-800">
                Debug: {debugMessage}
              </span>
            ) : null}
          </p>
        ) : null}
      </div>
    </form>
  );
}
