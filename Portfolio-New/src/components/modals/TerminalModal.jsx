import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Terminal, Send, X, CornerDownLeft, Sparkles } from "lucide-react";
import Dialog from "../ui/Dialog";
import { addTerminalCommand, closeModal } from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const TerminalModal = () => {
  const dispatch = useDispatch();
  const { activeModal, terminalLines, soundEnabled } = useSelector(
    (state) => state.portfolio
  );
  const [inputVal, setInputVal] = useState("");
  const endRef = useRef(null);

  const isOpen = activeModal === "terminal";

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLines, isOpen]);

  const handleCommand = (cmdText) => {
    const text = cmdText || inputVal;
    if (!text.trim()) return;
    playSound("click", soundEnabled);
    dispatch(addTerminalCommand(text));
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  const quickCommands = ["help", "skills", "projects", "education", "demo", "contact", "clear"];

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
      title="PriyDev CLI • Developer Console"
      subtitle="Interactive portfolio terminal shell"
      maxWidth="max-w-2xl"
    >
      <div className="font-mono text-xs sm:text-sm">
        {/* Quick Commands Bar */}
        <div className="flex flex-wrap items-center gap-1.5 pb-3 mb-3 border-b border-slate-800">
          <span className="text-[11px] text-slate-500 mr-1">Quick:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors text-xs cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Console Output Screen */}
        <div className="min-h-[260px] max-h-[360px] overflow-y-auto space-y-2 pr-2">
          {terminalLines.map((line, idx) => {
            if (line.type === "system") {
              return (
                <div key={idx} className="text-purple-400 font-semibold">
                  {line.text}
                </div>
              );
            }
            if (line.type === "user") {
              return (
                <div key={idx} className="text-cyan-300 font-bold">
                  {line.text}
                </div>
              );
            }
            if (line.type === "success") {
              return (
                <div key={idx} className="text-emerald-400">
                  ✔ {line.text}
                </div>
              );
            }
            if (line.type === "error") {
              return (
                <div key={idx} className="text-pink-400">
                  ✖ {line.text}
                </div>
              );
            }
            return (
              <div key={idx} className="text-slate-300 whitespace-pre-line leading-relaxed">
                {line.text}
              </div>
            );
          })}
          <div ref={endRef} />
        </div>

        {/* Input Line */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
          <span className="text-purple-400 font-bold">priyanka@dev:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs sm:text-sm font-mono"
            autoFocus={isOpen}
          />
          <button
            onClick={() => handleCommand()}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 transition-colors"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default TerminalModal;
