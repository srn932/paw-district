import { MessageSquareMore } from "lucide-react";

export function ChatWidget() {
  if (process.env.NEXT_PUBLIC_CHAT_ENABLED !== "true") return null;
  return <div id="paw-district-chat-mount" className="fixed bottom-24 right-6 z-40 w-80 rounded-3xl border border-ink/10 bg-white p-5 shadow-soft" aria-label="Chat container"><div className="flex items-center gap-3"><span className="rounded-full bg-mint p-3"><MessageSquareMore className="h-5 w-5" /></span><div><p className="font-bold">District chat</p><p className="text-sm text-muted">Future chatbot integration mount.</p></div></div></div>;
}
