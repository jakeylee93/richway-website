"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  postcode: string;
  message: string;
}

const projectTypes = [
  "House Extension",
  "Loft Conversion",
  "Full Renovation",
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    postcode: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email address";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.projectType) newErrors.projectType = "Please select a project type";
    if (!form.postcode.trim()) newErrors.postcode = "Postcode is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-warm-grey rounded-2xl p-12 text-center">
        <div className="text-5xl mb-6">✅</div>
        <h3
          className="text-3xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Message Sent!
        </h3>
        <p className="text-charcoal/70 text-lg">
          Thanks, {form.name}! We&apos;ll be in touch within 24 hours to
          discuss your project.
        </p>
      </div>
    );
  }

  const fieldClass = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-lg outline-none transition-colors bg-white text-charcoal placeholder-charcoal/40 focus:border-amber ${
      errors[field] ? "border-red-400" : "border-mid-grey"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={fieldClass("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={fieldClass("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="07700 900000"
            className={fieldClass("phone")}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Postcode *
          </label>
          <input
            type="text"
            name="postcode"
            value={form.postcode}
            onChange={handleChange}
            placeholder="E4 7AB"
            className={fieldClass("postcode")}
          />
          {errors.postcode && (
            <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Project Type *
        </label>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={fieldClass("projectType")}
        >
          <option value="">Select project type...</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-2">
          Message *
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project — size, location, timeline, any specific requirements..."
          className={`${fieldClass("message")} resize-none`}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-amber hover:bg-amber-dark text-white font-semibold py-4 rounded-lg text-lg transition-colors"
      >
        Send Message
      </button>
      <p className="text-charcoal/40 text-xs text-center">
        We aim to respond within 24 hours on working days.
      </p>
    </form>
  );
}
