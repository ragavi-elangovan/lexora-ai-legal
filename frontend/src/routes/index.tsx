import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Scale, FileText, Brain, Sparkles, Zap, Lock,
  Upload, BookOpen, MessageSquare, CheckCircle2, Github, Twitter, Linkedin,
} from "lucide-react";
import { AnimatedBackground } from "@/components/lexora/Background";
import { LexoraLogo } from "@/components/lexora/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lexora AI — AI-Powered Legal Research & Document Intelligence" },
      { name: "description", content: "Upload legal case documents and instantly receive accurate, context-aware answers using RAG, semantic search and Google Gemini AI." },
      { property: "og:title", content: "Lexora AI" },
      { property: "og:description", content: "AI-Powered Legal Research & Document Intelligence." },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const features = [
  { icon: Scale, emoji: "⚖️", title: "AI Legal Research", desc: "Deep contextual research across statutes, judgments and case law in seconds." },
  { icon: FileText, emoji: "📄", title: "Intelligent PDF Analysis", desc: "Parse complex legal PDFs with structure-aware understanding." },
  { icon: Brain, emoji: "🧠", title: "RAG Semantic Search", desc: "Retrieval-augmented generation grounded in your uploaded documents." },
  { icon: Sparkles, emoji: "🤖", title: "Google Gemini Powered", desc: "State-of-the-art reasoning built on Gemini's multimodal intelligence." },
  { icon: Zap, emoji: "⚡", title: "Lightning Fast Retrieval", desc: "Vector indexing delivers sub-second answers from massive case files." },
  { icon: Lock, emoji: "🔒", title: "Secure Document Intelligence", desc: "Enterprise-grade encryption keeps privileged documents private." },
];

const steps = [
  { icon: Upload, title: "Upload Legal PDF", desc: "Drag in any judgment, contract, FIR or case bundle." },
  { icon: Brain, title: "AI Reads & Indexes", desc: "Lexora chunks, embeds and indexes the document semantically." },
  { icon: MessageSquare, title: "Ask Legal Questions", desc: "Query in natural language — get cited, grounded answers." },
  { icon: CheckCircle2, title: "Instant AI Answers", desc: "Receive structured responses with retrieved context and confidence." },
];

const audience = ["Lawyers", "Law Students", "Legal Researchers", "Judiciary", "Corporate Legal Teams", "Government Departments"];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />

      {/* Nav */}
      <header className="sticky top-0 z-40">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass px-5 py-3 mx-4 sm:mx-auto">
          <LexoraLogo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#audience" className="hover:text-foreground transition">For whom</a>
          </nav>
          <Link
            to="/workspace"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground glow-blue transition hover:opacity-90"
          >
            Launch App
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 12px var(--glow)" }} />
            Powered by Google Gemini · RAG · Semantic Search
          </div>
          <h1 className="font-display text-6xl font-semibold tracking-tight sm:text-7xl md:text-8xl text-gradient">
            Lexora AI
          </h1>
          <p className="mt-6 text-xl font-medium text-foreground/90 sm:text-2xl">
            AI-Powered Legal Research & Document Intelligence
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Upload legal case documents and instantly receive accurate, context-aware answers using
            Retrieval-Augmented Generation, Semantic Search and Google Gemini AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/workspace"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground glow-blue transition hover:scale-[1.03]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="#features"
              className="rounded-full glass px-7 py-3.5 text-base font-medium text-foreground transition hover:bg-white/5"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Hero glass preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="rounded-3xl glass-strong p-2 glow-blue">
            <div className="rounded-[20px] bg-background/60 p-8 text-left">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="space-y-4">
                <div className="rounded-xl bg-white/[0.03] p-4">
                  <div className="text-xs text-muted-foreground">You</div>
                  <div className="mt-1 text-sm">Summarize the petitioner's primary argument in this judgment.</div>
                </div>
                <div className="rounded-xl glass p-4">
                  <div className="text-xs text-primary">Lexora AI</div>
                  <div className="mt-1 text-sm leading-relaxed text-foreground/90">
                    The petitioner contends that Section 19(2) was misapplied, arguing the seizure violated
                    procedural safeguards under Article 21. Three precedents are cited, with primary reliance on
                    <span className="text-primary"> Maneka Gandhi v. Union of India</span>…
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-muted-foreground">
                    <span className="rounded-full bg-white/5 px-2 py-0.5">Context: 4 chunks</span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5">Confidence 94%</span>
                    <span className="rounded-full bg-white/5 px-2 py-0.5">1.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="relative px-6 py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Why Lexora AI?</h2>
          <p className="mt-4 text-muted-foreground">Built for the precision and rigor of legal work.</p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group hover-lift rounded-3xl glass p-7 transition hover:border-primary/30"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-2xl glow-blue">
                {f.emoji}
              </div>
              <h3 className="font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative px-6 py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">How Lexora AI Works</h2>
          <p className="mt-4 text-muted-foreground">From upload to insight in four seamless steps.</p>
        </motion.div>
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-6 flex gap-6"
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl glass-strong glow-blue">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 rounded-2xl glass p-5">
                <div className="text-xs uppercase tracking-wider text-primary">Step {i + 1}</div>
                <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section id="audience" className="relative px-6 py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Perfect For</h2>
          <p className="mt-4 text-muted-foreground">Trusted across the legal profession.</p>
        </motion.div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="hover-lift rounded-2xl glass p-6 text-center"
            >
              <BookOpen className="mx-auto mb-3 h-5 w-5 text-primary" />
              <div className="font-display text-base font-medium">{a}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl rounded-3xl glass-strong p-12 text-center glow-blue"
        >
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl text-gradient">
            Start researching smarter.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Open the Lexora workspace and turn any legal document into a conversation.
          </p>
          <Link
            to="/workspace"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground glow-blue transition hover:scale-[1.03]"
          >
            Launch Workspace <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-sm text-muted-foreground sm:flex-row">
          <LexoraLogo />
          <div className="text-xs">© {new Date().getFullYear()} Lexora AI. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full glass transition hover:bg-white/10">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
