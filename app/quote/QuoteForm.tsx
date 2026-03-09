"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectType = "Extension" | "Loft Conversion" | "Renovation" | "Other";
type PropertyType = "Terraced" | "Semi-detached" | "Detached" | "Flat";
type ProjectSize = "Small" | "Medium" | "Large";

interface QuoteData {
  projectType: string;
  propertyType: string;
  projectSize: string;
  postcode: string;
  name: string;
  email: string;
  phone: string;
}

const projectTypes: { value: ProjectType; label: string; icon: string; desc: string }[] = [
  { value: "Extension", label: "House Extension", icon: "🏠", desc: "Rear, side return, or wraparound" },
  { value: "Loft Conversion", label: "Loft Conversion", icon: "🔼", desc: "Dormer, hip-to-gable, mansard, or Velux" },
  { value: "Renovation", label: "Full Renovation", icon: "✨", desc: "Kitchen, bathroom, or whole-house" },
  { value: "Other", label: "Other", icon: "💬", desc: "Something else — let's talk" },
];

const propertyTypes: { value: PropertyType; label: string; icon: string }[] = [
  { value: "Terraced", label: "Terraced", icon: "🏘️" },
  { value: "Semi-detached", label: "Semi-detached", icon: "🏡" },
  { value: "Detached", label: "Detached", icon: "🏠" },
  { value: "Flat", label: "Flat / Apartment", icon: "🏢" },
];

const projectSizes: { value: ProjectSize; label: string; desc: string }[] = [
  { value: "Small", label: "Small", desc: "Single room or minor works. Under 20m²" },
  { value: "Medium", label: "Medium", desc: "Significant project. 20–50m² or multiple rooms" },
  { value: "Large", label: "Large", desc: "Major transformation. 50m²+ or whole-house" },
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<QuoteData>({
    projectType: "",
    propertyType: "",
    projectSize: "",
    postcode: "",
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Partial<QuoteData>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

  const validateStep = (): boolean => {
    const newErrors: Partial<QuoteData> = {};
    if (step === 1 && !data.projectType) newErrors.projectType = "Please select a project type";
    if (step === 2 && !data.propertyType) newErrors.propertyType = "Please select a property type";
    if (step === 3 && !data.projectSize) newErrors.projectSize = "Please select a project size";
    if (step === 4 && !data.postcode.trim()) newErrors.postcode = "Postcode is required";
    if (step === 5) {
      if (!data.name.trim()) newErrors.name = "Name is required";
      if (!data.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Invalid email";
      if (!data.phone.trim()) newErrors.phone = "Phone is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) {
      if (step < totalSteps) setStep((s) => s + 1);
      else setSubmitted(true);
    }
  };

  const back = () => {
    setStep((s) => s - 1);
    setErrors({});
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <div className="text-6xl mb-6">🎉</div>
        <h2
          className="text-3xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Thanks, {data.name}!
        </h2>
        <p className="text-charcoal/70 text-lg mb-2">
          We&apos;ve received your quote request.
        </p>
        <p className="text-charcoal/70 mb-8">
          We&apos;ll be in touch within{" "}
          <span className="font-semibold text-amber">24 hours</span> to arrange
          your free consultation.
        </p>
        <div className="bg-warm-grey rounded-xl p-6 max-w-sm mx-auto text-left text-sm space-y-2 text-charcoal/70">
          <div className="flex justify-between">
            <span className="font-medium text-charcoal">Project:</span>
            <span>{data.projectType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-charcoal">Property:</span>
            <span>{data.propertyType}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-charcoal">Size:</span>
            <span>{data.projectSize}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-charcoal">Postcode:</span>
            <span>{data.postcode}</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-charcoal/60">
            Step {step} of {totalSteps}
          </span>
          <span className="text-sm font-semibold text-amber">
            {Math.round((step / totalSteps) * 100)}% complete
          </span>
        </div>
        <div className="h-2 bg-mid-grey rounded-full">
          <motion.div
            className="h-full bg-amber rounded-full"
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {["Project", "Property", "Size", "Location", "Contact"].map((label, i) => (
            <span
              key={label}
              className={`text-xs ${
                i + 1 <= step ? "text-amber font-semibold" : "text-charcoal/30"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div>
              <h2
                className="text-2xl text-charcoal mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What type of project are you planning?
              </h2>
              <p className="text-charcoal/60 text-sm mb-6">
                Select the option that best describes your project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => {
                      setData((d) => ({ ...d, projectType: pt.value }));
                      setErrors((e) => ({ ...e, projectType: undefined }));
                    }}
                    className={`p-5 rounded-xl border-2 text-left transition-all ${
                      data.projectType === pt.value
                        ? "border-amber bg-amber/5"
                        : "border-mid-grey hover:border-charcoal/30"
                    }`}
                  >
                    <span className="text-2xl block mb-2">{pt.icon}</span>
                    <span className="font-semibold text-charcoal block">
                      {pt.label}
                    </span>
                    <span className="text-charcoal/50 text-sm">{pt.desc}</span>
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p className="text-red-500 text-sm mt-3">{errors.projectType}</p>
              )}
            </div>
          )}

          {/* Step 2: Property Type */}
          {step === 2 && (
            <div>
              <h2
                className="text-2xl text-charcoal mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                What type of property do you have?
              </h2>
              <p className="text-charcoal/60 text-sm mb-6">
                This helps us understand the scope of work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {propertyTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => {
                      setData((d) => ({ ...d, propertyType: pt.value }));
                      setErrors((e) => ({ ...e, propertyType: undefined }));
                    }}
                    className={`p-6 rounded-xl border-2 text-center transition-all ${
                      data.propertyType === pt.value
                        ? "border-amber bg-amber/5"
                        : "border-mid-grey hover:border-charcoal/30"
                    }`}
                  >
                    <span className="text-3xl block mb-3">{pt.icon}</span>
                    <span className="font-semibold text-charcoal text-sm">
                      {pt.label}
                    </span>
                  </button>
                ))}
              </div>
              {errors.propertyType && (
                <p className="text-red-500 text-sm mt-3">{errors.propertyType}</p>
              )}
            </div>
          )}

          {/* Step 3: Project Size */}
          {step === 3 && (
            <div>
              <h2
                className="text-2xl text-charcoal mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                How would you describe the size of the project?
              </h2>
              <p className="text-charcoal/60 text-sm mb-6">
                Don&apos;t worry — this is just an initial estimate.
              </p>
              <div className="space-y-4">
                {projectSizes.map((ps) => (
                  <button
                    key={ps.value}
                    onClick={() => {
                      setData((d) => ({ ...d, projectSize: ps.value }));
                      setErrors((e) => ({ ...e, projectSize: undefined }));
                    }}
                    className={`w-full p-5 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                      data.projectSize === ps.value
                        ? "border-amber bg-amber/5"
                        : "border-mid-grey hover:border-charcoal/30"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                        data.projectSize === ps.value
                          ? "border-amber bg-amber"
                          : "border-mid-grey"
                      }`}
                    >
                      {data.projectSize === ps.value && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-charcoal block">
                        {ps.label}
                      </span>
                      <span className="text-charcoal/50 text-sm">{ps.desc}</span>
                    </div>
                  </button>
                ))}
              </div>
              {errors.projectSize && (
                <p className="text-red-500 text-sm mt-3">{errors.projectSize}</p>
              )}
            </div>
          )}

          {/* Step 4: Postcode */}
          {step === 4 && (
            <div>
              <h2
                className="text-2xl text-charcoal mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Where is the property?
              </h2>
              <p className="text-charcoal/60 text-sm mb-6">
                Your postcode helps us confirm we cover your area.
              </p>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Postcode *
                </label>
                <input
                  type="text"
                  value={data.postcode}
                  onChange={(e) => {
                    setData((d) => ({
                      ...d,
                      postcode: e.target.value.toUpperCase(),
                    }));
                    setErrors((er) => ({ ...er, postcode: undefined }));
                  }}
                  placeholder="e.g. E4 7AB"
                  className={`w-full max-w-xs px-4 py-3 border rounded-lg outline-none transition-colors text-charcoal bg-white focus:border-amber text-lg tracking-widest ${
                    errors.postcode ? "border-red-400" : "border-mid-grey"
                  }`}
                  maxLength={8}
                />
                {errors.postcode && (
                  <p className="text-red-500 text-sm mt-2">{errors.postcode}</p>
                )}
              </div>
              <div className="mt-8 p-5 bg-warm-grey rounded-xl">
                <p className="text-sm font-semibold text-charcoal mb-2">
                  We cover all of London & Essex
                </p>
                <p className="text-charcoal/60 text-sm">
                  Including Chingford, Epping, Waltham Forest, Redbridge, Woodford, Loughton, Buckhurst Hill, and surrounding areas.
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Contact Details */}
          {step === 5 && (
            <div>
              <h2
                className="text-2xl text-charcoal mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Almost done — your contact details
              </h2>
              <p className="text-charcoal/60 text-sm mb-6">
                We&apos;ll use these to arrange your free consultation.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => {
                      setData((d) => ({ ...d, name: e.target.value }));
                      setErrors((er) => ({ ...er, name: undefined }));
                    }}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors bg-white text-charcoal placeholder-charcoal/40 focus:border-amber ${
                      errors.name ? "border-red-400" : "border-mid-grey"
                    }`}
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
                    value={data.email}
                    onChange={(e) => {
                      setData((d) => ({ ...d, email: e.target.value }));
                      setErrors((er) => ({ ...er, email: undefined }));
                    }}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors bg-white text-charcoal placeholder-charcoal/40 focus:border-amber ${
                      errors.email ? "border-red-400" : "border-mid-grey"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={data.phone}
                    onChange={(e) => {
                      setData((d) => ({ ...d, phone: e.target.value }));
                      setErrors((er) => ({ ...er, phone: undefined }));
                    }}
                    placeholder="07700 900000"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition-colors bg-white text-charcoal placeholder-charcoal/40 focus:border-amber ${
                      errors.phone ? "border-red-400" : "border-mid-grey"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-mid-grey">
        <button
          onClick={back}
          disabled={step === 1}
          className={`px-6 py-3 rounded-lg font-semibold text-sm transition-colors ${
            step === 1
              ? "text-charcoal/30 cursor-not-allowed"
              : "text-charcoal hover:text-amber"
          }`}
        >
          ← Back
        </button>
        <button
          onClick={next}
          className="bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          {step === totalSteps ? "Submit Request" : "Next →"}
        </button>
      </div>
    </div>
  );
}
