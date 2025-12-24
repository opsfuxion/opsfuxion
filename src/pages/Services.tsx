import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import ServicesBento from "@/components/ServicesBento";
import TestimonialGrid from "@/components/TestimonialGrid";
import CountdownTimer from "@/components/CountdownTimer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Services = () => {
  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card gold-border px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium gold-text">Premium Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Enterprise-Grade <span className="neon-text">Engineering</span>
            <br />
            <span className="gold-text">On Demand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            From startup MVPs to enterprise transformations, we deliver precision-engineered 
            solutions that scale with your ambitions.
          </motion.p>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ServicesBento />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              Our <span className="neon-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A systematic approach to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Deep dive into your requirements" },
              { step: "02", title: "Strategy", desc: "Custom roadmap & architecture" },
              { step: "03", title: "Execute", desc: "Agile delivery with transparency" },
              { step: "04", title: "Optimize", desc: "Continuous improvement & support" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center relative group"
              >
                <span className="font-orbitron text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {item.step}
                </span>
                <h3 className="font-orbitron font-bold mt-2 mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              Client <span className="gold-text">Success Stories</span>
            </h2>
          </motion.div>

          <TestimonialGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card neon-border p-8 md:p-12 rounded-3xl"
        >
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
            Ready to <span className="neon-text">Scale</span> Your Operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Book your free strategy session and discover how we can accelerate your growth.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-3 btn-neon text-lg font-orbitron py-4 px-10"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 OpsFuxion Technologies Ltd. All rights reserved.
        </p>
      </footer>

      <CountdownTimer />
      <WhatsAppWidget />
    </div>
  );
};

export default Services;
