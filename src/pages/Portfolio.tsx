import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

// Portfolio projects data - easily add new projects here
const projects = [
  {
    id: 1,
    title: "CloudScale Analytics Platform",
    client: "FinTech Solutions Inc.",
    description: "Built a real-time analytics dashboard handling 10M+ daily events with sub-second latency. Implemented auto-scaling infrastructure on AWS with Kubernetes orchestration.",
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"],
    year: "2024",
    teamSize: "5 engineers",
    link: "https://example.com/cloudscale",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "E-Commerce Mobile Platform",
    client: "RetailMax Global",
    description: "Developed a cross-platform mobile commerce solution serving 500K+ users across 12 countries. Integrated payment gateways, inventory management, and real-time order tracking.",
    technologies: ["React Native", "Firebase", "Stripe", "Node.js"],
    year: "2024",
    teamSize: "4 engineers",
    link: "https://example.com/retailmax",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Healthcare Data Pipeline",
    client: "MedCore Systems",
    description: "Architected HIPAA-compliant data infrastructure processing 50TB+ of medical records. Implemented end-to-end encryption, audit logging, and disaster recovery protocols.",
    technologies: ["Python", "Apache Kafka", "Azure", "MongoDB", "Docker"],
    year: "2023",
    teamSize: "6 engineers",
    link: "https://example.com/medcore",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "AI-Powered CRM Suite",
    client: "SalesForce Pro",
    description: "Created an intelligent CRM with predictive lead scoring, automated follow-ups, and sentiment analysis. Reduced sales cycle by 40% through ML-driven insights.",
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    year: "2023",
    teamSize: "5 engineers",
    link: "https://example.com/crmsuite",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "IoT Fleet Management",
    client: "TransLogix Corp",
    description: "Deployed IoT infrastructure tracking 10,000+ vehicles in real-time. Built predictive maintenance algorithms reducing downtime by 60% and fuel costs by 25%.",
    technologies: ["Go", "MQTT", "TimescaleDB", "Grafana", "AWS IoT"],
    year: "2023",
    teamSize: "4 engineers",
    link: "https://example.com/translogix",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "DevOps Automation Suite",
    client: "TechOps Innovations",
    description: "Implemented comprehensive CI/CD pipelines reducing deployment time from hours to minutes. Achieved 99.99% uptime with zero-downtime deployments.",
    technologies: ["Terraform", "Jenkins", "Docker", "Ansible", "Prometheus"],
    year: "2024",
    teamSize: "3 engineers",
    link: "https://example.com/techops",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-bold mb-6"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our portfolio of successful projects. Each solution represents our commitment to 
            excellence, innovation, and delivering measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">{project.client}</span>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.teamSize}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-orbitron font-bold text-lg mb-3 group-hover:neon-text transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
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
            Ready to Build Your <span className="gold-text">Next Project</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss how we can bring your vision to life with precision engineering and cutting-edge technology.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-3 btn-neon text-lg font-orbitron py-4 px-10"
          >
            Start Your Project
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
    </div>
  );
};

export default Portfolio;
