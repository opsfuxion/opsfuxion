import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, ExternalLink, TrendingUp, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";

// Blog posts data - easily add new posts here
const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI-Assisted Development: What It Means for Your Team",
    excerpt: "Explore how AI code assistants are transforming software development workflows and how teams can leverage these tools for maximum productivity without sacrificing code quality.",
    category: "AI & Development",
    date: "December 28, 2024",
    readTime: "8 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Kubernetes Best Practices for Production Workloads in 2025",
    excerpt: "A comprehensive guide to running reliable, scalable Kubernetes clusters. From resource management to security hardening, learn the patterns that keep production systems running smoothly.",
    category: "DevOps",
    date: "December 25, 2024",
    readTime: "12 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Zero Trust Security: Implementing Modern Authentication Patterns",
    excerpt: "Why perimeter-based security is dead and how to implement zero trust architecture in your applications. Includes practical examples with OAuth 2.0 and JWT.",
    category: "Security",
    date: "December 20, 2024",
    readTime: "10 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Serverless at Scale: Lessons from Processing 1B Requests/Day",
    excerpt: "Real-world insights from scaling serverless functions to handle massive traffic. Learn about cold starts, cost optimization, and when serverless makes sense.",
    category: "Cloud",
    date: "December 15, 2024",
    readTime: "15 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "The Complete Guide to Database Migrations Without Downtime",
    excerpt: "Step-by-step strategies for migrating databases in production without affecting users. Covers PostgreSQL, MongoDB, and distributed database systems.",
    category: "Database",
    date: "December 10, 2024",
    readTime: "14 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Building Resilient Microservices: Circuit Breakers and Beyond",
    excerpt: "Learn how to design microservices that gracefully handle failures. Explore circuit breakers, retries, timeouts, and chaos engineering practices.",
    category: "Architecture",
    date: "December 5, 2024",
    readTime: "11 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
];

// Side links - external resources
const sideLinks = [
  { title: "AWS Architecture Blog", url: "https://aws.amazon.com/blogs/architecture/" },
  { title: "Google Cloud Blog", url: "https://cloud.google.com/blog" },
  { title: "Kubernetes Blog", url: "https://kubernetes.io/blog/" },
  { title: "The New Stack", url: "https://thenewstack.io/" },
  { title: "DevOps.com", url: "https://devops.com/" },
  { title: "InfoQ", url: "https://www.infoq.com/" },
  { title: "Hacker News", url: "https://news.ycombinator.com/" },
  { title: "TechCrunch", url: "https://techcrunch.com/" },
];

const categories = ["All", "AI & Development", "DevOps", "Security", "Cloud", "Database", "Architecture"];

const Blog = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Tech Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-orbitron text-3xl md:text-5xl font-bold mb-6"
          >
            Engineering <span className="gradient-text">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Stay ahead of the curve with insights on cloud architecture, DevOps practices, 
            AI integration, and software engineering best practices.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Blog Content */}
            <div className="flex-1">
              {/* Categories */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      index === 0
                        ? "bg-primary text-primary-foreground"
                        : "glass-card hover:border-primary/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Featured Posts */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="text-primary">{post.category}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-bold text-lg mb-3 group-hover:neon-text transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Regular Posts */}
              <h2 className="font-orbitron text-xl font-bold mb-6">
                Latest <span className="neon-text">Articles</span>
              </h2>
              <div className="space-y-6">
                {regularPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 flex flex-col md:flex-row gap-6 group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="md:w-48 h-32 md:h-auto rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <span className="text-primary">{post.category}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-orbitron font-bold text-lg mb-2 group-hover:neon-text transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80 space-y-8">
              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card neon-border rounded-xl p-6"
              >
                <h3 className="font-orbitron font-bold mb-3">
                  <span className="gold-text">Subscribe</span> to Updates
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the latest articles delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors text-sm"
                  />
                  <button className="w-full btn-neon py-3 text-sm font-orbitron">
                    Subscribe
                  </button>
                </div>
              </motion.div>

              {/* Trending Topics */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-orbitron font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Trending Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["AI/ML", "Kubernetes", "Serverless", "DevOps", "Cloud Native", "Security", "Microservices", "React"].map(
                    (topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 cursor-pointer transition-colors"
                      >
                        {topic}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* External Resources */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-orbitron font-bold mb-4">
                  More <span className="neon-text">Resources</span>
                </h3>
                <ul className="space-y-3">
                  {sideLinks.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span>{link.title}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </aside>
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
            Want to <span className="gold-text">Contribute</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Share your expertise with our community. We're always looking for guest authors and industry insights.
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center gap-3 btn-neon text-lg font-orbitron py-4 px-10"
          >
            Get in Touch
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

export default Blog;
