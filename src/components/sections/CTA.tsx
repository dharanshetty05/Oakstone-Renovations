"use client";

import { useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { company } from "@/constants/company";
import { layout } from "@/design/layout";
import { typography } from "@/design/typography";
import { cn } from "@/lib/utils";

const fieldBase =
  "peer w-full rounded-2xl border border-border bg-white px-5 text-text-primary outline-none transition-all duration-200 ease-out focus:border-2 focus:border-primary";

const singleLineField = cn(fieldBase, "h-14");
const selectField = cn(fieldBase, "h-14 appearance-none cursor-pointer pr-10");
const textareaField = cn(fieldBase, "pt-6 pb-3 resize-none");

function floatingLabelClass(floated: boolean, focused: boolean, variant?: "textarea") {
  return cn(
    "absolute left-5 origin-left pointer-events-none select-none transition-all duration-200 ease-out",
    floated
      ? cn(
          "top-0 -translate-y-1/2 scale-90 bg-white px-1.5 text-xs",
          focused ? "text-primary" : "text-text-secondary"
        )
      : cn(
          "text-base text-text-muted",
          variant === "textarea" ? "top-5" : "top-1/2 -translate-y-[65%]"
        )
  );
}

type FieldKey = "name" | "email" | "phone" | "projectType" | "message";

export function CTA() {
  const [values, setValues] = useState<Record<FieldKey, string>>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [focused, setFocused] = useState<Record<FieldKey, boolean>>({
    name: false,
    email: false,
    phone: false,
    projectType: false,
    message: false,
  });

  const handleChange = (field: FieldKey) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => setValues((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFocus = (field: FieldKey) => () =>
    setFocused((prev) => ({ ...prev, [field]: true }));

  const handleBlur = (field: FieldKey) => () =>
    setFocused((prev) => ({ ...prev, [field]: false }));

  const isFloated = (field: FieldKey) => focused[field] || values[field].length > 0;

  return (
    <section id="contact" aria-labelledby="cta-heading" className="bg-primary">
      <div className={cn(layout.container, layout.sectionCompact)}>
        <div className="grid items-center gap-10 lg:grid-cols-[40%_60%]">
          {/* Left Content */}
          <div className="space-y-6">
            <SectionHeader
              align="left"
              eyebrow="Free Consultation"
              title="Ready to Start Your Renovation?"
              description="Tell us about your project and receive a free, no-obligation quote from our experienced team."
              className="mb-0 [&>*]:text-white [&_.text-text-primary]:text-white [&_.text-text-secondary]:text-white/80 [&_.text-primary]:text-white"
            />

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone size={16} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className={typography.small}>Phone</p>
                  <a
                    href={`tel:${company.phone}`}
                    className="block text-base font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail size={16} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className={typography.small}>Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="block text-base font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin size={16} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className={typography.small}>Service Areas</p>
                  <p className="text-base font-semibold text-white">
                    {company.areas.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl md:p-7">
            <form className="space-y-4">
              <h2 id="cta-heading" className={typography.h3}>
                Request Your Free Quote
              </h2>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange("name")}
                      onFocus={handleFocus("name")}
                      onBlur={handleBlur("name")}
                      className={singleLineField}
                    />
                    <label
                      htmlFor="name"
                      className={floatingLabelClass(isFloated("name"), focused.name)}
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange("phone")}
                      onFocus={handleFocus("phone")}
                      onBlur={handleBlur("phone")}
                      className={singleLineField}
                    />
                    <label
                      htmlFor="phone"
                      className={floatingLabelClass(isFloated("phone"), focused.phone)}
                    >
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      onFocus={handleFocus("email")}
                      onBlur={handleBlur("email")}
                      className={singleLineField}
                    />
                    <label
                      htmlFor="email"
                      className={floatingLabelClass(isFloated("email"), focused.email)}
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <select
                      id="project-type"
                      name="projectType"
                      value={values.projectType}
                      onChange={handleChange("projectType")}
                      onFocus={handleFocus("projectType")}
                      onBlur={handleBlur("projectType")}
                      className={selectField}
                    >
                      <option value="" disabled>
                        Select a project
                      </option>
                      <option>Kitchen Renovation</option>
                      <option>Bathroom Renovation</option>
                      <option>Home Extension</option>
                      <option>Full Home Renovation</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-muted"
                      aria-hidden="true"
                    />
                    <label
                      htmlFor="project-type"
                      className={cn(
                        floatingLabelClass(isFloated("projectType"), focused.projectType),
                        !isFloated("projectType") && "opacity-0"
                      )}
                    >
                      Project Type
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={handleChange("message")}
                    onFocus={handleFocus("message")}
                    onBlur={handleBlur("message")}
                    className={textareaField}
                  />
                  <label
                    htmlFor="message"
                    className={floatingLabelClass(
                      isFloated("message"),
                      focused.message,
                      "textarea"
                    )}
                  >
                    Tell Us About Your Project
                  </label>
                </div>
              </div>

              <Button type="submit" size="large" className="w-full">
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}