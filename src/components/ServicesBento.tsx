import { motion } from "framer-motion";
import { LucideIcon, Code2, Server, Shield, FileCheck, Cloud, Database } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "End-to-end application development with modern frameworks and best practices.",
    features: ["React/Next.js", "Node.js/Python", "PostgreSQL/MongoDB", "REST/GraphQL APIs"],
  },
  {
    icon: Server,
    title: "Site Reliability Engineering",
    description: "Ensure your systems are always available, scalable, and performant.",
    features: ["24/7 Monitoring", "Incident Response", "SLA Management", "Chaos Engineering"],
    highlight: true,
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Streamline your deployment pipeline and cloud infrastructure.",
    features: ["CI/CD Pipelines", "Kubernetes/Docker", "AWS/GCP/Azure", "Infrastructure as Code"],
  },
  {
    icon: Shield,
    title: "Site Administration",
    description: "Professional management and maintenance of your web infrastructure.",
    features: ["Server Config", "SSL/Security", "Performance Tuning", "Backup Solutions"],
  },
  {
    icon: FileCheck,
    title: "QA & Documentation",
    description: "Comprehensive testing and documentation for enterprise-grade quality.",
    features: ["Automated Testing", "API Documentation", "Runbooks", "Compliance"],
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Design and optimize your data layer for maximum efficiency.",
    features: ["Schema Design", "Query Optimization", "Migrations", "Replication"],
  },
];

const ServicesBento = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className={`glass-card p-6 rounded-2xl relative overflow-hidden group ${
            service.highlight ? "neon-border lg:col-span-1 lg:row-span-1" : "border border-border/30"
          }`}
        >
          {/* Background Gradient on Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon */}
          <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
            service.highlight ? "bg-primary/20" : "bg-secondary"
          }`}>
            <service.icon className={`w-7 h-7 ${service.highlight ? "text-primary" : "text-foreground"}`} />
          </div>

          {/* Content */}
          <h3 className="font-orbitron font-bold text-lg mb-2 text-foreground group-hover:neon-text transition-all">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-foreground/70">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Highlight Badge */}
          {service.highlight && (
            <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-accent/20 border border-accent/40">
              <span className="text-xs font-medium gold-text">Popular</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesBento;
