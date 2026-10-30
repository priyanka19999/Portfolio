import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Utensils,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Truck,
  Heart,
  QrCode,
  KeyRound,
  Sparkles,
  Phone,
  Building2,
  X,
  Plus
} from "lucide-react";
import Dialog from "../ui/Dialog";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import {
  closeModal,
  claimSharePlateDonation,
  closeSharePlateClaimPass,
  setSharePlateCategory
} from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const SharePlateDemoModal = () => {
  const dispatch = useDispatch();
  const { activeModal, shareplateDemo, soundEnabled } = useSelector(
    (state) => state.portfolio
  );

  const isOpen = activeModal === "shareplate-demo";
  const { donations, selectedCategory, activeClaimedDonation, stats } =
    shareplateDemo;

  const categories = ["All", "Cooked Meals", "Bakery", "Produce"];

  const filteredDonations =
    selectedCategory === "All"
      ? donations
      : donations.filter((d) => d.category === selectedCategory);

  const handleClaim = (donation) => {
    playSound("success", soundEnabled);
    dispatch(claimSharePlateDonation(donation.id));

    // Celebratory food rescue confetti!
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#10b981", "#38bdf8", "#fbbf24", "#34d399"]
    });
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
      title="SHAREPLATE • Food Rescue & NGO Coordination Simulator"
      subtitle="Interactive live preview of real-time surplus food redistribution with secure PIN verification"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Live Metrics Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 backdrop-blur-md">
          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block font-semibold">
              Meals Rescued
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-white">
              {stats.mealsRescued.toLocaleString()}+
            </span>
            <span className="text-[11px] text-slate-400 block">Diverted from waste</span>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-semibold">
              Surplus Saved
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-white">
              {stats.kgDiverted} kg
            </span>
            <span className="text-[11px] text-slate-400 block">Food distributed</span>
          </div>

          <div className="text-center sm:text-left">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block font-semibold">
              Verified Shelters
            </span>
            <span className="text-xl sm:text-2xl font-extrabold text-white">
              {stats.activeShelters} Active
            </span>
            <span className="text-[11px] text-slate-400 block">Bhubaneswar & BLR</span>
          </div>

          <div className="text-center sm:text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>FSSAI Compliant</span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono mt-0.5">
              Hot &gt;60°C • Cold &lt;5°C
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 font-mono mr-1">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSound("click", soundEnabled);
                  dispatch(setSharePlateCategory(cat));
                }}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-white text-slate-950 font-semibold shadow-md"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Live Surplus Feed (Bhubaneswar Hub)</span>
          </span>
        </div>

        {/* Live Donations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDonations.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border p-4 sm:p-5 flex flex-col justify-between transition-all ${
                item.status === "Claimed"
                  ? "bg-slate-950/70 border-slate-800 opacity-80"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700 shadow-xl"
              }`}
            >
              <div>
                {/* Image and Badges */}
                <div className="relative h-36 rounded-xl overflow-hidden mb-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <Badge variant="emerald">{item.category}</Badge>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/80 text-emerald-300 border border-emerald-500/30">
                      {item.diet}
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="bg-slate-950/80 px-2 py-0.5 rounded-md border border-slate-800">
                      {item.mealsCount} Meals ({item.quantity})
                    </span>
                    <span className="bg-slate-950/80 px-2 py-0.5 rounded-md border border-slate-800 text-amber-400">
                      {item.expiryTime}
                    </span>
                  </div>
                </div>

                {/* Title & Donor */}
                <h4 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h4>
                <div className="text-xs text-slate-400 mb-2 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-slate-200">{item.donorName}</span>
                </div>
                <div className="text-[11px] text-slate-500 mb-3 flex items-center gap-1.5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>{item.locality}</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-850 text-[11px] text-slate-400 mb-4 flex items-center justify-between">
                  <span>Storage: {item.storage}</span>
                  <span className="text-slate-500">Prepared: {item.preparedTime}</span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                {item.status === "Available" ? (
                  <Button
                    variant="glow"
                    size="sm"
                    onClick={() => handleClaim(item)}
                    className="w-full gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 shadow-emerald-500/20"
                  >
                    <Truck className="w-4 h-4" />
                    <span>Claim for Shelter (Generate Collection PIN)</span>
                  </Button>
                ) : (
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Claimed by {item.claimedBy}
                    </span>
                    <span className="font-mono text-[11px] text-purple-300">
                      PIN: ****
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Collection Handover Pass Modal Overlay */}
        <AnimatePresence>
          {activeClaimedDonation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-emerald-500/50 shadow-2xl relative space-y-4"
            >
              <button
                onClick={() => dispatch(closeSharePlateClaimPass())}
                className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <KeyRound className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Driver Collection & Handover Pass
                  </h4>
                  <p className="text-xs text-slate-400">
                    Assigned to Asha Care Shelter & Community Kitchen
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-slate-500 block">
                    SURPLUS DONATION
                  </span>
                  <p className="text-sm font-bold text-slate-100">
                    {activeClaimedDonation.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Donor: {activeClaimedDonation.donorName} • {activeClaimedDonation.locality}
                  </p>
                </div>

                {/* 4-Digit Handover PIN Highlight */}
                <div className="text-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/40 min-w-[140px]">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block font-bold">
                    HANDOVER PIN
                  </span>
                  <span className="text-3xl font-mono font-extrabold text-white tracking-widest">
                    {activeClaimedDonation.handoverPin}
                  </span>
                  <span className="text-[10px] text-slate-400 block">
                    Verify at pickup
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-slate-300 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Security Handover Protocol:</strong> The collection driver presents this 4-digit PIN upon arrival at {activeClaimedDonation.donorName}. Once entered by the donor, custody transfers securely, guaranteeing safe food allocation and full traceability.
                </span>
              </div>

              <div className="flex justify-end pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => dispatch(closeSharePlateClaimPass())}
                  className="border-slate-700"
                >
                  Dismiss Collection Pass
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Dialog>
  );
};

export default SharePlateDemoModal;

