"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ShieldCheck, User } from "lucide-react";
import styles from "./ChatWidget.module.css";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "ai",
      text: "Hello! I'm your Seren Place Care Concierge. How can I help you or your loved one today?",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasUnread, setHasUnread] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
    }
  }, [messages, isOpen, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg: Message = { id: Date.now().toString(), sender: "user", text: inputVal };
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setInputVal("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: inputVal,
          conversationHistory: updatedMessages.slice(0, -1),
        }),
      });

      const data = await response.json();
      
      // Artificial delay for better UX
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: data.reply || "Thank you. A Care Coordinator will reach out shortly.",
          },
        ]);
        setIsTyping(false);
      }, 600);
    } catch (error) {
      console.error("Chat API error:", error);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: "I am having trouble connecting right now. A Care Coordinator will reach out to you via email shortly.",
          },
        ]);
        setIsTyping(false);
      }, 600);
    }
  };

  return (
    <div className={styles.widgetContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={styles.chatWindow}
          >
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <h3>Care Concierge</h3>
                <div className={styles.headerStatus}>
                  <div className={styles.statusDot} />
                  <span>Online</span>
                </div>
                <div className={styles.hipaaBadge}>
                  <ShieldCheck size={12} /> HIPAA Secure
                </div>
              </div>
              <button 
                className={styles.closeButton} 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            <div className={styles.messagesArea}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${
                    msg.sender === "ai" ? styles.messageAi : styles.messageUser
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isTyping && (
                <div className={styles.messageTyping}>
                  <div className={styles.typingDot} />
                  <div className={styles.typingDot} />
                  <div className={styles.typingDot} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className={styles.inputArea}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type your message..."
                  className={styles.input}
                  aria-label="Chat message"
                />
                <button 
                  type="submit" 
                  className={styles.sendButton}
                  disabled={!inputVal.trim()}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
              <div className={styles.disclaimer}>
                Data securely routed to our coordinator desk.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.15 }}
          >
            {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
          </motion.div>
        </AnimatePresence>
        {!isOpen && hasUnread && <span className={styles.badge} />}
      </button>
    </div>
  );
}
