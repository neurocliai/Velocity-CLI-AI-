import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Privacy() {
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
            <Link to="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link>
            <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/auth" className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-medium">
              Sign In
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-12 pb-32 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="space-y-8 text-gray-300 leading-relaxed">
              
              <section>
                <p className="text-lg">At Velocity AI, your privacy is our priority. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and command-line interface application (collectively, the "Services").</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-medium text-white mb-2 mt-4">Personal Data</h3>
                <p>When you create an account, we may collect personally identifiable information, such as your email address and password (which is securely hashed by our authentication provider, Supabase). If you connect third-party API keys (e.g., OpenAI, Anthropic), these are stored locally on your machine and are never transmitted to our servers.</p>
                
                <h3 className="text-xl font-medium text-white mb-2 mt-4">Usage Data & Prompts</h3>
                <p>When using the Velocity AI CLI, the prompts you type are sent directly to the respective AI provider (e.g., Mistral, OpenAI). We do not store a permanent copy of your source code or conversation history on our servers. However, we do track basic usage statistics (such as the number of messages sent) to enforce our free tier rate limits.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide, operate, and maintain our Services.</li>
                  <li>Authenticate your identity when you log into the CLI.</li>
                  <li>Enforce rate limits for the free tier models.</li>
                  <li>Improve, personalize, and expand our Services.</li>
                  <li>Understand and analyze how you use our Services.</li>
                  <li>Communicate with you regarding updates, security alerts, and support.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Data Sharing and Third-Party Services</h2>
                <p>We do not sell your personal information. We may share your data in the following situations:</p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li><strong>AI Model Providers:</strong> Your prompts and workspace context are transmitted to third-party LLM providers (e.g., Mistral API) to generate responses. These providers operate under their own strict privacy policies.</li>
                  <li><strong>Infrastructure Providers:</strong> We use Supabase to securely manage authentication and databases.</li>
                  <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                <p>We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Local Data Storage</h2>
                <p>The Velocity AI CLI stores your active session tokens, local chat history, and API keys on your local file system (e.g., in `~/.velocity-ai-auth.json` and your `.env` files). It is your responsibility to secure access to your local machine.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Data Rights</h2>
                <p>Depending on your location, you may have the right to request access to the personal data we hold about you, to request that your personal data be corrected or deleted, and to withdraw your consent to our processing of your data. To exercise these rights, please contact our support team.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us via our GitHub repository or support channels.</p>
              </section>

              <p className="pt-8 border-t border-white/10 text-sm">Last Updated: August 2026</p>
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
