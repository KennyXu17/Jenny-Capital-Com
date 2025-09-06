import { useState } from "react";
import { EbookViewer } from "./EbookViewer";
import { ChatBot } from "./ChatBot";
import { Button } from "@/components/ui/button";
import { Book, MessageCircle } from "lucide-react";

export function EbookChatLayout() {
  const [activeTab, setActiveTab] = useState<'ebook' | 'chat'>('ebook');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-soft">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Ebook & AI Assistant</h1>
          
          {/* Mobile tab switcher */}
          <div className="md:hidden flex gap-1 bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === 'ebook' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('ebook')}
              className="flex items-center gap-2"
            >
              <Book className="h-4 w-4" />
              Book
            </Button>
            <Button
              variant={activeTab === 'chat' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('chat')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Chat
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 h-[calc(100vh-4rem)]">
        {/* Desktop: Split screen layout */}
        <div className="hidden md:flex h-full gap-4 py-4">
          <div className="flex-1 rounded-lg border bg-card shadow-medium overflow-hidden">
            <EbookViewer />
          </div>
          <div className="flex-1 rounded-lg border bg-card shadow-medium overflow-hidden">
            <ChatBot />
          </div>
        </div>

        {/* Mobile: Tabbed layout */}
        <div className="md:hidden h-full py-4">
          <div className="h-full rounded-lg border bg-card shadow-medium overflow-hidden">
            {activeTab === 'ebook' ? <EbookViewer /> : <ChatBot />}
          </div>
        </div>
      </div>
    </div>
  );
}