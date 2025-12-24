import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";

const Resources = () => {
  const resources = [
    {
      title: "The DevOps Starter Guide",
      description: "Learn the fundamentals of modern DevOps practices and CI/CD pipelines.",
      type: "PDF Guide",
    },
    {
      title: "Infrastructure Checklist",
      description: "A comprehensive checklist for auditing your cloud infrastructure.",
      type: "Checklist",
    },
    {
      title: "SRE Best Practices",
      description: "Industry-standard practices for Site Reliability Engineering.",
      type: "eBook",
    },
  ];

  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>

            <h1 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              Thank You for Your <span className="neon-text">Interest!</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              While our premium services are designed for established businesses, 
              we've prepared some valuable resources to help you on your journey.
            </p>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mb-12"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-5 rounded-xl text-left flex items-center gap-4 hover:border-primary/30 border border-transparent transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{resource.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {resource.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-card neon-border p-6 rounded-2xl"
          >
            <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-orbitron font-bold mb-2">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get tips, guides, and updates on scaling your infrastructure.
            </p>
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary outline-none text-sm"
              />
              <button className="btn-neon py-2 px-4 text-sm">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8"
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

export default Resources;
