"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Sparkles, MapPin, GraduationCap, Utensils } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function useSimulatedChat() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "assistant",
      content:
        "Përshëndetje! Jam guida juaj virtuale për Elbasanin. Më pyesni çdo gjë rreth Kalasë, historisë, traditës, apo Shkollës Profesionale!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const processQuery = async (query: string) => {
    setIsLoading(true)
    const lowerQuery = query.toLowerCase()

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000))

    let response = "Më falni, nuk e kuptova plotësisht. Mund të pyesni për Kalana, muzetë, ushqimin, ose shkollat?"

    if (lowerQuery.includes("kala") || lowerQuery.includes("mure")) {
      response =
        "Kalaja e Elbasanit është një monument kulture i kategorisë së parë. Ajo është ndërtuar nga perandori romak Justiniani në shekullin VI. Është unike sepse vazhdon të jetë e banuar edhe sot, duke ndërthurur historinë me jetën e përditshme."
    } else if (lowerQuery.includes("muze") || lowerQuery.includes("etnografik")) {
      response =
        "Muzeu Etnografik ndodhet në një shtëpi karakteristike të shekullit XVIII. Ai pasqyron kulturën, veshjet, dhe mënyrën e jetesës së qytetarëve elbasanas ndër shekuj."
    } else if (
      lowerQuery.includes("shkoll") ||
      lowerQuery.includes("profesionale") ||
      lowerQuery.includes("shpe") ||
      lowerQuery.includes("mesimdhenie")
    ) {
      response =
        "Shkolla e Mesme Profesionale Elbasan (SHPE) është qendra kryesore e inovacionit në qytet. Me drejtime si TIK, Elektronikë dhe Ekonomi, ajo është promotore e këtij projekti dixhital dhe përgatit brezin e ri për tregun global të punës."
    } else if (lowerQuery.includes("ushqim") || lowerQuery.includes("tav") || lowerQuery.includes("ha")) {
      response =
        "Nuk mund të vizitoni Elbasanin pa provuar Tavën e Kosit! Është pjata më tradicionale, e njohur ndërrekombëtarisht, e përgatitur me mish qengji dhe kos të freskët. Gjithashtu provoni ballokumet për ëmbëlsirë!"
    } else if (lowerQuery.includes("pershendetje") || lowerQuery.includes("ckemi")) {
      response = "Përshëndetje! Si mund t'ju ndihmoj të zbuloni Elbasanin sot?"
    }

    setMessages((prev) => [...prev, { id: Date.now().toString(), role: "assistant", content: response }])
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: Date.now().toString(), role: "user", content: input }
    setMessages((prev) => [...prev, userMsg])
    const currentInput = input
    setInput("")

    await processQuery(currentInput)
  }

  return { messages, input, handleInputChange: (e: any) => setInput(e.target.value), handleSubmit, isLoading }
}

export function ElbasanChat() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useSimulatedChat()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-4 z-50 w-[350px] md:w-[400px] h-[600px] bg-background/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            {/* Header with gradient */}
            <div className="p-4 bg-gradient-to-r from-red-600 to-red-800 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">Elbasani AI</h3>
                  <span className="text-xs text-red-100 opacity-80">Guida juaj personale</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 text-white hover:bg-white/20 hover:text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4 bg-slate-50/50 dark:bg-slate-900/50" ref={scrollRef}>
              <div className="space-y-4 pb-4">
                {messages.map((m) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                        m.role === "user"
                          ? "bg-red-600 text-white rounded-br-none"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-100 dark:border-slate-700"
                      }`}
                    >
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1 items-center border border-slate-100 dark:border-slate-700">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1 }}
                        className="w-2 h-2 bg-red-400 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.2 }}
                        className="w-2 h-2 bg-red-500 rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1, delay: 0.4 }}
                        className="w-2 h-2 bg-red-600 rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Actions */}
            <div className="px-4 py-2 bg-background/50 backdrop-blur-sm flex gap-2 overflow-x-auto no-scrollbar">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs whitespace-nowrap bg-white/50"
                onClick={() => handleInputChange({ target: { value: "Më trego për Kalanë" } })}
              >
                <MapPin className="w-3 h-3 mr-1 text-red-500" /> Kalaja
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs whitespace-nowrap bg-white/50"
                onClick={() => handleInputChange({ target: { value: "Ku të ha?" } })}
              >
                <Utensils className="w-3 h-3 mr-1 text-orange-500" /> Ushqimi
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs whitespace-nowrap bg-white/50"
                onClick={() => handleInputChange({ target: { value: "Shkolla Profesionale?" } })}
              >
                <GraduationCap className="w-3 h-3 mr-1 text-blue-500" /> Shkolla
              </Button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-3 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex gap-2 items-center"
            >
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Shkruaj pyetjen tënde..."
                className="flex-1 rounded-full bg-slate-100 dark:bg-slate-900 border-none focus-visible:ring-1 focus-visible:ring-red-500"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full bg-red-600 hover:bg-red-700 text-white w-10 h-10 shrink-0 shadow-md"
                disabled={!input.trim() || isLoading}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed bottom-6 right-6 z-50" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 shadow-2xl bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 border-4 border-white/20 text-white"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="sr-only">Open Chat</span>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
          </span>
        </Button>
      </motion.div>
    </>
  )
}
