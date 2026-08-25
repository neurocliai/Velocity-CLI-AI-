import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Zap, Code, Shield, Copy, Check, Cpu, Search, Workflow, User } from 'lucide-react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Landing() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm cache clean --force\nnpm i -g velocity-ai@latest\nvelocity chat');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="min-h-screen bg-background text-white relative overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] pointer-events-none z-0" />

      <div className="relative z-10">
        <header className="container mx-auto px-6 py-6 flex justify-between items-center glass sticky top-0 z-50 rounded-b-2xl mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Velocity AI
            </h1>
          </div>
          <nav className="flex gap-6 items-center">
            <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            <Link to="/auth" className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 font-medium">
              Sign In
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-6">
          <section className="flex flex-col items-center text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-primary mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-shadow duration-300 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              v0.1.3 is now available
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight max-w-4xl tracking-tight"
            >
              The Next-Generation <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-purple-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                Terminal AI Assistant
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light"
            >
              Transform your CLI experience with real-time AI assistance, beautiful typography, and seamless workspace integration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-6 rounded-3xl flex flex-col items-center gap-4 max-w-md w-full relative overflow-hidden group border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.25)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="text-gray-400 text-sm font-mono flex items-center justify-between w-full border-b border-white/10 pb-4 relative z-10">
                <span className="flex items-center gap-2 text-gray-300">
                  <Terminal className="w-4 h-4 text-primary" />
                  Install globally
                </span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
              </div>

              <div className="w-full relative z-10">
                <div className="bg-[#0D1117] p-5 rounded-xl border border-white/5 font-mono text-left space-y-3 relative group/code shadow-inner">
                  <div className="flex items-center text-gray-300">
                    <span className="text-primary mr-3 select-none">❯</span>
                    <span><span className="text-blue-400">npm</span> cache clean --force</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-primary mr-3 select-none">❯</span>
                    <span><span className="text-blue-400">npm</span> <span className="text-yellow-200">i</span> -g velocity-ai@latest</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-primary mr-3 select-none">❯</span>
                    <span><span className="text-green-400">velocity</span> chat</span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-all opacity-0 group-hover/code:opacity-100 backdrop-blur-sm"
                    title="Copy commands"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Link to="/auth" className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 relative z-10 group/btn">
                <span>Get Started Now</span>
                <Zap className="w-4 h-4 group-hover/btn:animate-pulse" />
              </Link>
            </motion.div>
          </section>

          <section id="how-it-works" className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">How Velocity AI Works</h3>
                <div className="space-y-10">
                  <div className="flex gap-6 group cursor-default">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                      <Terminal className="text-primary w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">1. Initialize in Terminal</h4>
                      <p className="text-gray-400 leading-relaxed">Run <code className="text-primary bg-primary/10 px-2 py-1 rounded font-mono text-sm border border-primary/20">velocity chat</code> anywhere in your system. It automatically detects your current workspace.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-default">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 border border-secondary/20 group-hover:border-secondary/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300">
                      <Shield className="text-secondary w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2 group-hover:text-secondary transition-colors">2. Secure Authentication</h4>
                      <p className="text-gray-400 leading-relaxed">Seamlessly authenticate via the browser. Your session is securely synced directly to your CLI environment.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-default">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0 border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                      <Code className="text-primary w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">3. Chat & Generate Code</h4>
                      <p className="text-gray-400 leading-relaxed">Get beautifully formatted markdown responses, syntax highlighting, and instant answers right in your terminal.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10 group-hover:bg-secondary/20 transition-colors duration-700" />

                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono flex-1 text-center font-medium tracking-wider">bash - velocity chat</span>
                </div>

                <div className="font-mono text-sm space-y-4 leading-relaxed">
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="text-cyan-400/80">┌   ⚡ Velocity AI </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400/80">│</motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                    <span className="text-cyan-400/80">◇  Session Started ───────────────────────╮</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                    <span className="text-cyan-400/80">│</span>  Model: <span className="text-green-400">Velocity Large</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <span className="text-cyan-400/80">│</span>  Workspace: <span className="text-yellow-400">Web Dashboard</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                    <span className="text-cyan-400/80">├─────────────────────────────────────────╯</span>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
                    <div className="text-cyan-400/80">│</div>
                    <div><span className="text-blue-500 font-bold">◇  You</span></div>
                    <div className="text-gray-300">can u scan current directory and explain current code base</div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.0 }}>
                    <div className="text-cyan-400/80">│</div>
                    <div><span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">◇  Velocity AI</span></div>
                    <div className="text-gray-400 text-xs mt-1 ml-4 border-l-2 border-white/10 pl-2">
                      [Executing Tool: list_directory]<br />
                      Completed.
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }}>
                    <div className="text-cyan-400/80">│</div>
                    <div><span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">◇  Velocity AI</span></div>
                    <div className="text-gray-300 typewriter-text w-full max-w-fit">
                      The current directory suggests this is a React web app built with Vite.<br />
                      Main folder: src/ <br />
                      - App.tsx: Root component<br />
                      - pages/: Top-level views
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.0 }}>
                    <div className="text-cyan-400/80 mt-4">│</div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">◇ </span>
                      <span className="text-gray-500 font-mono animate-pulse">_</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <section id="what-it-can-do" className="py-24 border-t border-white/10">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Everything You Need to Build Faster</h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">Velocity AI brings an entire team of specialized AI agents right into your terminal, giving you superpowers to code, debug, and orchestrate complex tasks.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">Intelligent Generation</h4>
                <p className="text-gray-400 leading-relaxed">Instantly scaffold entire files, boilerplate, or specific algorithms based on natural language prompts.</p>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-secondary transition-colors">Surgical Code Edits</h4>
                <p className="text-gray-400 leading-relaxed">Velocity intelligently modifies specific blocks of code within large files without blindly rewriting the entire document.</p>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-blue-400/10 flex items-center justify-center mb-6 group-hover:bg-blue-400/20 transition-colors">
                  <Terminal className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">Deep Workspace Context</h4>
                <p className="text-gray-400 leading-relaxed">It reads your file tree, understands your project structure, and searches across all files to find the exact context it needs.</p>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-green-400/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-green-400/10 flex items-center justify-center mb-6 group-hover:bg-green-400/20 transition-colors">
                  <Cpu className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">Multi-Agent Swarms</h4>
                <p className="text-gray-400 leading-relaxed">Spin up autonomous sub-agents that collaborate, verify code, and execute complex multi-step workflows in parallel.</p>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <Search className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">Semantic Code Search</h4>
                <p className="text-gray-400 leading-relaxed">Stop grepping blindly. Ask questions about your architecture, and Velocity will semantically retrieve the right files.</p>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/10 hover:border-rose-400/40 hover:shadow-[0_0_30px_rgba(251,113,133,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-rose-400/10 flex items-center justify-center mb-6 group-hover:bg-rose-400/20 transition-colors">
                  <Workflow className="w-6 h-6 text-rose-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-rose-400 transition-colors">Continuous Orchestration</h4>
                <p className="text-gray-400 leading-relaxed">Execute background bash tasks, monitor file changes, and trigger code transformations dynamically.</p>
              </div>
            </div>
          </section>

          <section id="about-founder" className="py-24 border-t border-white/10">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">About the Founder & Developer</h3>
            </div>

            <div className="max-w-4xl mx-auto glass p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 shrink-0 rounded-full bg-gradient-to-tr from-primary to-secondary p-1 flex items-center justify-center">
                <div className="w-full h-full bg-[#0D1117] rounded-full flex items-center justify-center overflow-hidden">
                  <User className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Malladi Vishwanath Tanmai
                </h4>
                <p className="text-primary font-medium mb-4">Founder & Lead Developer, VelocityGpt AI</p>
                <a href="https://www.linkedin.com/in/vishwanath-tanmai-b09063226/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0077b5]/10 hover:bg-[#0077b5]/20 text-blue-400 border border-[#0077b5]/30 hover:border-[#0077b5]/50 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] transition-all font-medium w-fit mb-6">
                  <LinkedinIcon className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
                <div className="text-gray-400 leading-relaxed space-y-3">
                  <p>Malladi Vishwanath Tanmai is the visionary founder and lead developer behind Velocity AI. Driven by a deep passion for artificial intelligence and developer productivity, Tanmai built Velocity to seamlessly bridge the gap between complex AI capabilities and intuitive terminal workflows.</p>
                  <p>With deep expertise in full-stack engineering and autonomous agent orchestration, Tanmai designed a platform that brings multi-agent swarms directly into the developer's local workspace. The ultimate mission is to empower developers worldwide by providing an intelligent assistant that doesn't just suggest code snippets, but actively builds, debugs, and scales entire software architectures alongside you.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-12 mt-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-xl font-bold text-white">Velocity AI</span>
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </div>
              <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Velocity AI. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
