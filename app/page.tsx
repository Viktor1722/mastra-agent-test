import { ChatInterface } from "./chat/chat-interface";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ChatInterface />
    </div>
  );
}
