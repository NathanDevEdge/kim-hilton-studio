"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "@/components/ui/Text";

type Status = "idle" | "sending" | "success" | "error";

const subjects = [
  "Photography",
  "Marketing",
  "Design",
  "Prints / shop",
  "Something else",
];

interface Field {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const empty: Field = { name: "", email: "", subject: "", message: "" };

function InputField({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  id: keyof Field;
  value: string;
  onChange: (id: keyof Field, v: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block font-body text-xs uppercase tracking-widest text-black-forest/50 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b py-3 font-body text-sm text-black-forest placeholder-black-forest/25 outline-none transition-colors duration-300 focus:border-copperwood ${
          error ? "border-red-400" : "border-black-forest/20"
        }`}
      />
      {error && (
        <p className="font-body text-xs text-red-400 mt-1.5">{error}</p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [fields, setFields] = useState<Field>(empty);
  const [errors, setErrors] = useState<Partial<Field>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  function update(id: keyof Field, value: string) {
    setFields((f) => ({ ...f, [id]: value }));
    if (errors[id]) setErrors((e) => ({ ...e, [id]: undefined }));
  }

  function validate(): boolean {
    const e: Partial<Field> = {};
    if (!fields.name.trim()) e.name = "Your name is required.";
    if (!fields.email.trim()) {
      e.email = "Your email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = "Please enter a valid email.";
    }
    if (!fields.subject) e.subject = "Please choose a subject.";
    if (!fields.message.trim()) {
      e.message = "Please write a message.";
    } else if (fields.message.trim().length < 10) {
      e.message = "Message is a bit short — tell us a little more.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    setServerError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setFields(empty);
      }
    } catch {
      setServerError("Could not send your message. Please check your connection.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 text-center"
        >
          <div
            className="w-12 h-12 mx-auto mb-6 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #606C38, #DDA15E)" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10l5 5 7-7" stroke="#FEFAE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <Text variant="h3" className="text-black-forest mb-3">
            Message sent.
          </Text>
          <Text variant="body-sm" className="text-black-forest/50 mb-8">
            Thanks for reaching out — Kim will be in touch within 2 business days.
          </Text>
          <button
            onClick={() => setStatus("idle")}
            className="font-body text-xs uppercase tracking-widest text-copperwood hover:text-black-forest transition-colors border-b border-copperwood/40 pb-px"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          noValidate
          className="space-y-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <InputField
              label="Your name"
              id="name"
              value={fields.name}
              onChange={update}
              placeholder="Jane Smith"
              error={errors.name}
            />
            <InputField
              label="Email address"
              id="email"
              type="email"
              value={fields.email}
              onChange={update}
              placeholder="jane@example.com"
              error={errors.email}
            />
          </div>

          {/* Subject select */}
          <div>
            <label
              htmlFor="subject"
              className="block font-body text-xs uppercase tracking-widest text-black-forest/50 mb-2"
            >
              What's this about?
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => update("subject", s)}
                  className={`font-body text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                    fields.subject === s
                      ? "bg-copperwood text-cornsilk border-copperwood"
                      : "border-black-forest/20 text-black-forest/60 hover:border-black-forest/40 hover:text-black-forest"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {errors.subject && (
              <p className="font-body text-xs text-red-400 mt-2">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-body text-xs uppercase tracking-widest text-black-forest/50 mb-2"
            >
              Your message
            </label>
            <textarea
              id="message"
              value={fields.message}
              onChange={(e) => update("message", e.target.value)}
              rows={6}
              placeholder="Tell me about your project, your business, or just say hello…"
              className={`w-full bg-transparent border-b py-3 font-body text-sm text-black-forest placeholder-black-forest/25 outline-none resize-none transition-colors duration-300 focus:border-copperwood ${
                errors.message ? "border-red-400" : "border-black-forest/20"
              }`}
            />
            {errors.message && (
              <p className="font-body text-xs text-red-400 mt-1.5">{errors.message}</p>
            )}
          </div>

          {serverError && (
            <p className="font-body text-xs text-red-400">{serverError}</p>
          )}

          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="font-body text-sm uppercase tracking-widest px-8 py-4 bg-copperwood text-cornsilk hover:bg-black-forest transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <Text variant="caption">
              Usually replied to within 2 business days.
            </Text>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
