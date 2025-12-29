import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Cloud, Cpu, Code2, Server } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import VideoPlayer from "@/components/VideoPlayer";
import TestimonialGrid from "@/components/TestimonialGrid";
import CountdownTimer from "@/components/CountdownTimer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  const benefits = [
    { icon: Zap, text: "Deploy 10x Faster" },
    { icon: Shield, text: "99.99% Uptime SLA" },
    { icon: TrendingUp, text: "Scale Without Limits" },
  ];

  const capabilities = [
    {
      icon: Cpu,
      title: "AI Software Engineering",
      description: "Autonomous code generation and intelligent debugging powered by advanced AI models."
    },
    {
      icon: Cloud,
      title: "Cloud Migrations",
      description: "Seamless transitions to cloud-native architectures with zero downtime."
    },
    {
      icon: Server,
      title: "Site Reliability",
      description: "Rigorous SRE standards ensuring absolute data integrity and uptime."
    },
    {
      icon: Code2,
      title: "Mobile-First Platforms",
      description: "Scalable mobile solutions built for performance and global reach."
    }
  ];

  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Trusted by 100+ Engineering Teams
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Precision Engineering at the{" "}
            <br className="hidden md:block" />
            <span className="gradient-text">Speed of Thought</span>
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6"
          >
            The future of software is autonomous, and at OpsFuxion, we're already there. 
            By fusing <span className="text-primary">Advanced AI Software Engineering</span> with 
            rigorous Site Reliability standards, we deliver production-ready systems in record time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8"
          >
            We provide the technical stewardship needed to navigate complex cloud migrations, 
            scale mobile-first platforms, and maintain absolute data integrity. 
            <span className="gold-text"> Where others see complexity, we see an opportunity for orchestration.</span>
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                <benefit.icon className="w-5 h-5 text-primary" />
                <span>{benefit.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 w-full max-w-5xl px-4 mb-12"
        >
          <HeroCarousel />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative z-10"
        >
          <Link
            to="/apply"
            className="group inline-flex items-center gap-3 btn-neon text-lg font-orbitron py-4 px-8 md:py-5 md:px-12"
          >
            Apply for a Strategy Session
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-center text-sm text-muted-foreground mt-4">
            <CheckCircle className="w-4 h-4 inline mr-1 text-green-500" />
            Free 30-min consultation • No obligation
          </p>
        </motion.div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              Orchestrate <span className="neon-text">Intelligence</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We transform complexity into elegant, scalable solutions that drive your business forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron font-medium mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              Watch Our <span className="gold-text">Strategy Session</span> Replay
            </h2>
            <p className="text-muted-foreground">
              Discover how top companies scale their infrastructure without the chaos.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <VideoPlayer />
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
              What Our <span className="neon-text">Clients</span> Say
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join hundreds of companies who've transformed their infrastructure with OpsFuxion.
            </p>
          </motion.div>

          <TestimonialGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "99.99%", label: "Uptime SLA" },
              { value: "10x", label: "Faster Deploys" },
              { value: "500+", label: "Projects Delivered" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <p className="font-orbitron text-2xl md:text-3xl font-bold neon-text mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center glass-card neon-border p-8 md:p-12 rounded-3xl"
        >
          <h2 className="font-orbitron text-2xl md:text-3xl font-bold mb-4">
            Ready to <span className="gold-text">Transform</span> Your Infrastructure?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Apply now and get a personalized strategy session with our senior engineers.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-3 btn-gold text-lg font-orbitron py-4 px-10"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 OpsFuxion Technologies Ltd. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">
          Orchestrate Intelligence, Deliver with Precision
        </p>
      </footer>

      {/* Floating Widgets */}
      <CountdownTimer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
