import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../ui/Icons";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import {
  updateContactFormField,
  setContactFormStatus
} from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const Contact = () => {
  const dispatch = useDispatch();
  const { contactForm, soundEnabled } = useSelector((state) => state.portfolio);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    playSound("success", soundEnabled);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleInputChange = (field, value) => {
    dispatch(updateContactFormField({ field, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      playSound("click", soundEnabled);
      alert("Please fill in your name, email, and message.");
      return;
    }

    dispatch(setContactFormStatus("submitting"));
    playSound("open", soundEnabled);

    // Simulate sending with realistic network latency
    setTimeout(() => {
      dispatch(setContactFormStatus("success"));
      playSound("success", soundEnabled);

      // Trigger refined celebratory confetti burst
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#ffffff", "#e2e8f0", "#94a3b8", "#cbd5e1"],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
          Contact
        </Badge>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3">
          Let's <span className="text-theme-gradient">Connect</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          Whether you have an open frontend opportunity, a project idea, or just want to connect, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Details
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Feel free to reach out via email or connect with me on LinkedIn. I typically reply within 24 hours.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-mono block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href="mailto:priyankapbiswal99@gmail.com"
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      priyankapbiswal99@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("priyankapbiswal99@gmail.com", "email")}
                  title="Copy email"
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copiedType === "email" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-mono block">
                    LOCATION
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Bhubaneswar, Odisha, India
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-mono block">
                      LINKEDIN
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 font-mono block">
                      GITHUB
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                      Explore GitHub Profile
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Side */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl relative">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-slate-300" />
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Drop a note below and I will get back to you as soon as possible.
            </p>

            {contactForm.status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Message Sent!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! I've received your note and will get back to you shortly.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(setContactFormStatus("idle"))}
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-slate-500 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-slate-500 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Frontend Role / Project Discussion"
                    value={contactForm.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-slate-500 focus:outline-none text-sm text-white placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Priyanka, I came across your work and would love to discuss a frontend role..."
                    value={contactForm.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-slate-500 focus:outline-none text-sm text-white placeholder:text-slate-600 resize-none transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  disabled={contactForm.status === "submitting"}
                  className="w-full gap-2 font-semibold"
                >
                  {contactForm.status === "submitting" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;