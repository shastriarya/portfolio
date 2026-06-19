"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMessage2,
  IconMessageDots,
  IconSend2,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
  IconCircleCheckFilled,
  IconExclamationCircle,
  IconX,
} from "@tabler/icons-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const contactDetails = [
  {
    icon: IconMail,
    label: "Email",
    value: "shastreearya@gmail.com",
    href: "mailto:shastreearya@gmail.com",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+91 95566 95247",
    href: "tel:+9556695247",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Bhubaneswar, Odisha, India",
    href: null,
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "github.com/shastriarya",
    href: "https://github.com/shastriarya",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    value: "arya-kumar-shastree",
    href: "https://www.linkedin.com/in/arya-kumar-shastree-4a59a8277/",
  },
  {
    icon: IconFileCv,
    label: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
  },
];

function StatusModal({ status, onClose }) {
  if (status === "idle") return null;

  const isSending = status === "sending";
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Message status"
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
    >
      <div
        onClick={!isSending ? onClose : undefined}
        aria-hidden="true"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      />

      <div
        className="relative w-full max-w-[380px] rounded-2xl border border-gray-200
          bg-white p-8 text-center shadow-xl transition-all duration-300"
      >
        {!isSending && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center
              rounded-lg text-gray-400 transition-colors duration-200 hover:bg-gray-50 hover:text-ink"
          >
            <IconX size={18} stroke={1.75} />
          </button>
        )}

        {isSending && (
          <>
            <span
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50"
              aria-hidden="true"
            >
              <span className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-black" />
            </span>
            <h3 className="font-display text-[1.15rem] font-bold tracking-tight text-ink mb-2">
              Sending your message
            </h3>
            <p className="text-[0.88rem] text-gray-500 leading-[1.6]">
              Please wait a moment while your message is delivered.
            </p>
          </>
        )}

        {isSuccess && (
          <>
            <span
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50"
              aria-hidden="true"
            >
              <IconCircleCheckFilled size={30} className="text-green-500" />
            </span>
            <h3 className="font-display text-[1.15rem] font-bold tracking-tight text-ink mb-2">
              Message sent successfully
            </h3>
            <p className="text-[0.88rem] text-gray-500 leading-[1.6] mb-6">
              Thanks for reaching out — I&apos;ll get back to you by email as soon as possible.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl bg-black px-6 py-3 text-[0.88rem] font-semibold
                text-white transition-colors duration-300 hover:bg-gray-800"
            >
              Done
            </button>
          </>
        )}

        {isError && (
          <>
            <span
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-red-50"
              aria-hidden="true"
            >
              <IconExclamationCircle size={30} className="text-red-500" />
            </span>
            <h3 className="font-display text-[1.15rem] font-bold tracking-tight text-ink mb-2">
              Something went wrong
            </h3>
            <p className="text-[0.88rem] text-gray-500 leading-[1.6] mb-6">
              Your message couldn&apos;t be sent. Please try again or email me directly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl border border-gray-200 px-6 py-3 text-[0.88rem]
                font-semibold text-ink transition-colors duration-300 hover:border-black"
            >
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const closeModal = () => setStatus("idle");
  const isSending = status === "sending";

  return (
    <section id="contact" className="py-24 px-6 bg-white" aria-label="Contact">
      <div className="max-w-[1100px] mx-auto">

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Left column ── */}
          <div>
            <p className="reveal text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-gray-400 mb-3">
              Contact
            </p>
            <h2 className="reveal delay-1 font-display text-[clamp(2rem,4.5vw,3.2rem)]
              font-extrabold tracking-tight leading-[1.1] text-ink mb-5">
              Let&apos;s build something exceptional.
            </h2>
            <p className="reveal delay-2 text-[1.05rem] text-gray-500 leading-[1.8] mb-10 max-w-[480px]">
              Have a project in mind or looking for an engineer who can own the problem
              end to end? I&apos;m available for freelance work, long-term contracts, and
              consulting.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((detail, i) => {
                const Icon = detail.icon;
                const Wrapper = detail.href ? "a" : "div";
                const wrapperProps = detail.href
                  ? {
                      href: detail.href,
                      target: detail.href.startsWith("http") ? "_blank" : undefined,
                      rel: detail.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined,
                    }
                  : {};

                return (
                  <Wrapper
                    key={detail.label}
                    {...wrapperProps}
                    aria-label={`${detail.label}: ${detail.value}`}
                    className={`reveal delay-${(i % 6) + 1} group flex items-start gap-3
                      rounded-xl border border-gray-200 bg-white p-5 shadow-sm
                      transition-all duration-300 hover:border-black`}
                  >
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center
                        rounded-lg bg-gray-50 text-gray-700 transition-colors duration-300
                        group-hover:bg-black group-hover:text-white"
                      aria-hidden="true"
                    >
                      <Icon size={18} stroke={1.75} />
                    </span>
                    <span className="flex flex-col min-w-0">
                      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-gray-400">
                        {detail.label}
                      </span>
                      <span className="text-[0.88rem] font-medium text-ink truncate">
                        {detail.value}
                      </span>
                    </span>
                  </Wrapper>
                );
              })}
            </div>

            <div className="reveal delay-3 mt-8 flex items-center gap-2.5 rounded-xl
              border border-gray-200 bg-white p-4 shadow-sm">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <p className="text-[0.85rem] font-medium text-gray-600">
                Available for freelance and full-time opportunities.
              </p>
            </div>
          </div>

          {/* ── Right column — form ── */}
          <div className="reveal delay-2 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-gray-500"
                >
                  Name
                </label>
                <div className="relative">
                  <IconUser
                    size={18}
                    stroke={1.75}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    aria-label="Your full name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4
                      text-[0.9rem] text-ink placeholder:text-gray-400 outline-none
                      transition-all duration-300 focus:border-black focus:ring-2
                      focus:ring-black/5 disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-gray-500"
                >
                  Email
                </label>
                <div className="relative">
                  <IconMail
                    size={18}
                    stroke={1.75}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-label="Your email address"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4
                      text-[0.9rem] text-ink placeholder:text-gray-400 outline-none
                      transition-all duration-300 focus:border-black focus:ring-2
                      focus:ring-black/5 disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-gray-500"
                >
                  Subject
                </label>
                <div className="relative">
                  <IconMessage2
                    size={18}
                    stroke={1.75}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                    aria-hidden="true"
                  />
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    required
                    aria-label="Message subject"
                    placeholder="Project brief, collaboration, consulting..."
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4
                      text-[0.9rem] text-ink placeholder:text-gray-400 outline-none
                      transition-all duration-300 focus:border-black focus:ring-2
                      focus:ring-black/5 disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-gray-500"
                >
                  Message
                </label>
                <div className="relative">
                  <IconMessageDots
                    size={18}
                    stroke={1.75}
                    className="pointer-events-none absolute left-3.5 top-4 text-gray-400"
                    aria-hidden="true"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-label="Your message"
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSending}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4
                      text-[0.9rem] text-ink placeholder:text-gray-400 outline-none
                      transition-all duration-300 focus:border-black focus:ring-2
                      focus:ring-black/5 disabled:bg-gray-50 disabled:text-gray-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                aria-label="Send message"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black
                  px-6 py-3.5 text-[0.9rem] font-semibold text-white transition-all duration-300
                  hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? (
                  <>
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <IconSend2 size={17} stroke={1.75} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      <StatusModal status={status} onClose={closeModal} />
    </section>
  );
}