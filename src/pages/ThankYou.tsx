import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Gift, ArrowRight, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProjectTracker from "@/components/ProjectTracker";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
              style={{ boxShadow: "0 0 40px rgba(34, 197, 94, 0.3)" }}
            >
              <CheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>

            <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
              Application <span className="neon-text">Received!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              Our team will review your project requirements and reach out within 24 hours 
              to schedule your strategy session.
            </p>
          </motion.div>

          {/* Project Tracker */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <ProjectTracker />
          </motion.div>

          {/* Micro-Product Upsell */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-card gold-border rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Gift className="w-7 h-7 text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-orbitron font-bold text-lg">
                    Immediate Infrastructure Audit
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-accent/20 text-xs font-medium gold-text">
                    LIMITED OFFER
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Don't wait for your strategy session. Get an immediate deep-dive analysis 
                  of your current infrastructure with actionable recommendations.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Complete security vulnerability scan",
                    "Performance bottleneck identification",
                    "Cost optimization opportunities",
                    "Scaling readiness assessment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button className="btn-gold py-3 px-6 text-sm font-orbitron flex items-center gap-2">
                    Get Instant Audit — $297
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-sm text-muted-foreground">
                    <span className="line-through">$597</span>
                    <span className="gold-text ml-2 font-medium">50% OFF</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Return to Home
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
