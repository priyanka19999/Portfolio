import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Sparkles,
  Download,
  Clock,
  Wand2,
  Image as ImageIcon,
  Layers,
  CheckCircle,
  Cpu,
  RefreshCw
} from "lucide-react";
import Dialog from "../ui/Dialog";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import {
  closeModal,
  setVisionPrompt,
  setVisionStyle,
  startVisionGeneration,
  completeVisionGeneration
} from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const VisionDemoModal = () => {
  const dispatch = useDispatch();
  const { activeModal, visionDemo, soundEnabled } = useSelector(
    (state) => state.portfolio
  );
  const [generationStep, setGenerationStep] = useState("");

  const isOpen = activeModal === "vision-demo";

  const styles = [
    "Sci-Fi Realism",
    "Cyberpunk Neon",
    "3D Digital Art",
    "Cosmic Fantasy",
    "Minimal Architecture"
  ];

  const presets = [
    "Futuristic holographic AI interface with vibrant neon violet lights and sleek glass panels",
    "Cyberpunk neon street market with flying vehicles and reflective rain puddles, 8k",
    "Ethereal astronaut walking in cosmic glass desert with floating crystal orbs",
    "Biophilic sustainable smart skyscraper with hanging terraced gardens and drone docks"
  ];

  const presetImages = {
    "Sci-Fi Realism": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80",
    "Cyberpunk Neon": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1000&auto=format&fit=crop&q=80",
    "3D Digital Art": "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1000&auto=format&fit=crop&q=80",
    "Cosmic Fantasy": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=1000&auto=format&fit=crop&q=80",
    "Minimal Architecture": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80"
  };

  const handleGenerate = () => {
    if (!visionDemo.prompt.trim()) return;

    dispatch(startVisionGeneration());
    playSound("open", soundEnabled);

    setGenerationStep("Tokenizing text prompts with Appwrite token auth...");
    setTimeout(() => {
      setGenerationStep("Sampling latent diffusion noise tensors...");
      setTimeout(() => {
        setGenerationStep("Denoising 4K high-resolution asset...");
        setTimeout(() => {
          const selectedUrl =
            presetImages[visionDemo.style] ||
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80";

          const newImage = {
            id: `img-${Date.now()}`,
            prompt: visionDemo.prompt,
            style: visionDemo.style,
            timestamp: "Just now",
            url: selectedUrl
          };

          dispatch(completeVisionGeneration(newImage));
          playSound("success", soundEnabled);
          setGenerationStep("");
        }, 800);
      }, 700);
    }, 700);
  };

  const handleDownload = () => {
    playSound("click", soundEnabled);
    const link = document.createElement("a");
    link.href = visionDemo.currentResult.url;
    link.target = "_blank";
    link.download = `vision-ai-${Date.now()}.jpg`;
    link.click();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
      title="VISION • AI Image Generator Simulator"
      subtitle="Interactive live preview of prompt-to-image engine built by Priyanka"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Architecture Callout Banner */}
        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-slate-300 shrink-0" />
            <span className="text-slate-300">
              <strong className="text-white">Live Simulator:</strong> Experience the VISION image generation flow with Appwrite storage schemas & Framer Motion feedback.
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Appwrite Auth: Verified</span>
          </div>
        </div>

        {/* Prompt Input Box */}
        <div className="space-y-3">
          <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
            AI Prompt Prompt-to-Image Input
          </label>
          <div className="relative">
            <textarea
              rows={2}
              value={visionDemo.prompt}
              onChange={(e) => dispatch(setVisionPrompt(e.target.value))}
              placeholder="Describe what you want the AI to visualize..."
              className="w-full px-4 py-3 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-500 transition-colors resize-none pr-28"
            />
            <Button
              variant="glow"
              size="sm"
              disabled={visionDemo.isGenerating}
              onClick={handleGenerate}
              className="absolute right-3 bottom-3 gap-1.5 font-semibold"
            >
              {visionDemo.isGenerating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Generate</span>
                </>
              )}
            </Button>
          </div>

          {/* Quick Preset Prompts */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-slate-500 font-mono mr-1">Presets:</span>
            {presets.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  playSound("hover", soundEnabled);
                  dispatch(setVisionPrompt(p));
                }}
                className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors truncate max-w-[200px] cursor-pointer"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Style Selector */}
        <div>
          <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
            Visual Render Style:
          </label>
          <div className="flex flex-wrap gap-2">
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => {
                  playSound("click", soundEnabled);
                  dispatch(setVisionStyle(s));
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  visionDemo.style === s
                    ? "bg-white text-slate-950 font-semibold shadow-md"
                    : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Live Generation Progress View */}
        {visionDemo.isGenerating && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-white/20 text-center space-y-3">
            <div className="w-10 h-10 rounded-full border-2 border-slate-700 border-t-white animate-spin mx-auto" />
            <p className="text-sm font-semibold text-white animate-pulse">
              {generationStep}
            </p>
            <div className="h-1.5 w-64 max-w-full bg-slate-800 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-slate-600 via-white to-slate-400 animate-shimmer" />
            </div>
          </div>
        )}

        {/* Current Result Showcase */}
        {visionDemo.currentResult && !visionDemo.isGenerating && (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden group">
              <img
                src={visionDemo.currentResult.url}
                alt={visionDemo.currentResult.prompt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
                <div className="max-w-md">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="cyan">{visionDemo.currentResult.style}</Badge>
                    <span className="text-[11px] font-mono text-slate-400">
                      Generated {visionDemo.currentResult.timestamp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    "{visionDemo.currentResult.prompt}"
                  </p>
                </div>

                <Button
                  variant="glow"
                  size="sm"
                  onClick={handleDownload}
                  className="gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download High-Res</span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Generation History Logs */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              Generation History Logs ({visionDemo.history.length})
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {visionDemo.history.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  playSound("click", soundEnabled);
                  dispatch(completeVisionGeneration(item));
                }}
                className="relative h-24 sm:h-28 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500 cursor-pointer group transition-all"
              >
                <img
                  src={item.url}
                  alt={item.prompt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-1.5 left-1.5 right-1.5 text-[10px] text-white truncate font-medium">
                  {item.style}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default VisionDemoModal;
