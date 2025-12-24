import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
    content: "OpsFuxion transformed our infrastructure. Deployment times went from hours to minutes. Their DevOps expertise is unmatched.",
  },
  {
    name: "Marcus Williams",
    role: "VP Engineering",
    company: "FinanceFlow",
    content: "The Site Reliability Engineering work was exceptional. Our uptime improved to 99.99% within the first quarter.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "StartupHub",
    content: "From zero to production-ready in 3 weeks. Their full-stack development team delivered beyond expectations.",
  },
  {
    name: "James Morrison",
    role: "IT Director",
    company: "GlobalTech Corp",
    content: "The infrastructure audit saved us $50K/month. OpsFuxion identified inefficiencies we didn't even know existed.",
  },
  {
    name: "Aisha Patel",
    role: "Product Manager",
    company: "CloudFirst",
    content: "Their documentation and QA processes are gold standard. Every deployment is now predictable and stress-free.",
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "ScaleUp Solutions",
    content: "Working with OpsFuxion felt like having an entire engineering department on demand. Highly recommended.",
  },
];

const TestimonialGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="glass-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
        >
          {/* Quote Icon */}
          <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
          
          {/* Content */}
          <p className="text-foreground/80 text-sm leading-relaxed mb-6">
            "{testimonial.content}"
          </p>
          
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center">
              <span className="font-bold text-background text-sm">
                {testimonial.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}, <span className="gold-text">{testimonial.company}</span>
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
