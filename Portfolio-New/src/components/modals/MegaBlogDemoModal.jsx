import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MessageSquare,
  Send,
  Heart,
  Share2,
  BookOpen,
  User,
  Clock,
  Sparkles,
  Database,
  CheckCircle2
} from "lucide-react";
import Dialog from "../ui/Dialog";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import {
  closeModal,
  setActivePostId,
  setNewCommentText,
  addBlogComment
} from "../../store/portfolioSlice";
import { playSound } from "../../utils/sound";

export const MegaBlogDemoModal = () => {
  const dispatch = useDispatch();
  const { activeModal, megablogDemo, soundEnabled } = useSelector(
    (state) => state.portfolio
  );
  const [authorName, setAuthorName] = useState("");

  const isOpen = activeModal === "megablog-demo";

  const activePost =
    megablogDemo.posts.find((p) => p.id === megablogDemo.activePostId) ||
    megablogDemo.posts[0];

  const filteredComments = megablogDemo.comments.filter(
    (c) => c.postId === megablogDemo.activePostId
  );

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!megablogDemo.newCommentText.trim()) return;

    playSound("success", soundEnabled);
    dispatch(
      addBlogComment({
        postId: megablogDemo.activePostId,
        text: megablogDemo.newCommentText,
        author: authorName.trim() || "Visiting Developer"
      })
    );
    setAuthorName("");
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={() => dispatch(closeModal())}
      title="MEGABLOG • Real-Time CMS Simulator"
      subtitle="Interactive preview of Appwrite Document DB and live reactive threads"
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Status Callout */}
        <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-slate-300">
              <strong className="text-white">Appwrite Real-Time Listeners:</strong> Synchronizing database document changes and interactive user discussions.
            </span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Sync: Live (SSE)</span>
          </div>
        </div>

        {/* Post Selection Tabs */}
        <div className="flex flex-wrap gap-2 pb-2 border-b border-slate-800">
          {megablogDemo.posts.map((post) => (
            <button
              key={post.id}
              onClick={() => {
                playSound("click", soundEnabled);
                dispatch(setActivePostId(post.id));
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                megablogDemo.activePostId === post.id
                  ? "bg-white text-slate-950 shadow-md"
                  : "bg-slate-950 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {post.category}
            </button>
          ))}
        </div>

        {/* Active Article View */}
        {activePost && (
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <Badge variant="default">{activePost.category}</Badge>
              <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readTime}
                </span>
                <span>•</span>
                <span>{activePost.date}</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activePost.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <User className="w-3.5 h-3.5" />
              <span>By {activePost.author}</span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
              {activePost.content}
            </p>
          </div>
        )}

        {/* Interactive Comments Section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              Live Discussion Threads ({filteredComments.length})
            </h4>
            <span className="text-[11px] text-slate-500 font-mono">
              Persisted in Redux Store
            </span>
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handlePostComment} className="space-y-2.5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Your Name (e.g. Lead Engineer)"
                className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-500"
              />
              <input
                type="text"
                required
                value={megablogDemo.newCommentText}
                onChange={(e) => dispatch(setNewCommentText(e.target.value))}
                placeholder="Share your thoughts on this architecture..."
                className="sm:col-span-2 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-slate-500"
              />
            </div>
            <div className="flex justify-end">
              <Button variant="cyan" size="sm" type="submit" className="gap-1.5">
                <Send className="w-3.5 h-3.5" />
                <span>Post Comment (Live)</span>
              </Button>
            </div>
          </form>

          {/* Comment Thread List */}
          <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
            {filteredComments.map((comment) => (
              <div
                key={comment.id}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0">
                  {comment.author.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-200">
                      {comment.author}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MegaBlogDemoModal;
