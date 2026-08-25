import { Link } from 'react-router-dom';
import { Zap, Terminal, Command, Key, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-white bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed relative">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
      
      <div className="relative z-10">
        <header className="container mx-auto px-6 py-6 flex justify-between items-center glass sticky top-0 z-50 rounded-b-2xl mb-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Velocity AI
            </h1>
          </Link>
          <nav className="flex gap-6 items-center">
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link>
            <Link to="/auth" className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium">
              Sign In
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12 pb-32 max-w-5xl flex flex-col md:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <div className="glass p-6 rounded-2xl sticky top-32">
              <h3 className="font-bold text-lg mb-4 text-white">Contents</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#getting-started" className="hover:text-primary transition-colors">Getting Started</a></li>
                <li><a href="#authentication" className="hover:text-primary transition-colors">Authentication</a></li>
                <li><a href="#commands" className="hover:text-primary transition-colors">CLI Commands</a></li>
                <li><a href="#models" className="hover:text-primary transition-colors">Supported Models</a></li>
                <li><a href="#configuration" className="hover:text-primary transition-colors">Configuration & Keys</a></li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass p-8 md:p-12 rounded-3xl"
          >
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-gray-400 mb-12">Everything you need to master the Velocity AI terminal assistant.</p>

            <div className="space-y-16 text-gray-300 leading-relaxed">
              
              <section id="getting-started">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary"><Terminal size={24} /></div>
                  <h2 className="text-3xl font-semibold text-white">Getting Started</h2>
                </div>
                <p className="mb-4">Velocity AI is distributed as an npm package. To run it on your system, ensure you have Node.js installed, then execute:</p>
                <div className="bg-black/50 p-4 rounded-xl font-mono text-sm border border-white/10 mb-6 text-primary">
                  npx velocity-ai@latest
                </div>
                <p className="mb-4">Once installed, you can launch the interactive chat interface by simply typing:</p>
                <div className="bg-black/50 p-4 rounded-xl font-mono text-sm border border-white/10 text-primary">
                  velocity chat
                </div>
              </section>

              <section id="authentication">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary"><Key size={24} /></div>
                  <h2 className="text-3xl font-semibold text-white">Authentication</h2>
                </div>
                <p className="mb-4">When you first run <code className="text-primary">velocity chat</code>, the CLI will detect that you are not authenticated.</p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>Press <strong>Enter</strong> when prompted. This will securely spin up a temporary local server and automatically open this website in your default web browser.</li>
                  <li>Sign up or sign in using your email and password.</li>
                  <li>Once successful, the web page will redirect your secure session token back to your terminal automatically.</li>
                  <li>The terminal will print your Session ID and you are ready to chat!</li>
                </ol>
                <p className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-200 text-sm">
                  <strong>Note:</strong> Authentication is required to use the free tier Velocity Large model, ensuring fair usage and protecting rate limits (6 messages per 8 hours).
                </p>
              </section>

              <section id="commands">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary"><Command size={24} /></div>
                  <h2 className="text-3xl font-semibold text-white">CLI Commands</h2>
                </div>
                <p className="mb-6">Inside the interactive REPL, you can type natural language to chat, or use slash commands to control the environment:</p>
                
                <div className="grid gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-primary font-bold mb-1">/cd &lt;path&gt;</div>
                    <p className="text-sm">Changes the AI's current workspace directory. It will read the context of the new folder.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-primary font-bold mb-1">/model &lt;name&gt;</div>
                    <p className="text-sm">Switches the active AI model instantly. Type <code className="text-white">/model</code> without a name to open an interactive selection menu.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-primary font-bold mb-1">/clear</div>
                    <p className="text-sm">Clears the current conversation history and resets the terminal UI.</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                    <div className="font-mono text-primary font-bold mb-1">/exit</div>
                    <p className="text-sm">Safely closes the Velocity AI session.</p>
                  </div>
                </div>
              </section>

              <section id="models">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary"><Folder size={24} /></div>
                  <h2 className="text-3xl font-semibold text-white">Supported Models</h2>
                </div>
                <p className="mb-4">Velocity AI supports multiple providers through its unified gateway architecture:</p>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <div>
                      <strong className="text-white block">Velocity Large (Mistral Large) - Default</strong>
                      Provides excellent coding capabilities. Free tier available upon signup subject to rate limits.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <div>
                      <strong className="text-white block">OpenAI GPT-4o</strong>
                      Requires setting <code className="text-xs bg-white/10 px-1 rounded">OPENAI_API_KEY</code>.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <div>
                      <strong className="text-white block">Anthropic Claude 3.5 Sonnet</strong>
                      Requires setting <code className="text-xs bg-white/10 px-1 rounded">ANTHROPIC_API_KEY</code>.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <div>
                      <strong className="text-white block">Google Gemini 1.5 Pro</strong>
                      Requires setting <code className="text-xs bg-white/10 px-1 rounded">GEMINI_API_KEY</code>.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <div>
                      <strong className="text-white block">Ollama (Local)</strong>
                      Requires Ollama running locally on port 11434. Completely free and offline.
                    </div>
                  </li>
                </ul>
              </section>

            </div>
          </motion.div>
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
