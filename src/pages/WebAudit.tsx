import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  Shield, 
  Zap, 
  Smartphone, 
  Code2, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Loader2,
  ArrowRight,
  BarChart3,
  Lock,
  Gauge
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AuditResult {
  category: string;
  icon: React.ElementType;
  score: number;
  status: "good" | "warning" | "error";
  findings: string[];
}

const WebAudit = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);

  const performAudit = async () => {
    if (!websiteUrl.trim()) return;
    
    setIsAuditing(true);
    setAuditComplete(false);

    // Simulate audit delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Generate mock audit results based on URL
    const results: AuditResult[] = [
      {
        category: "Performance",
        icon: Gauge,
        score: Math.floor(Math.random() * 40) + 60,
        status: Math.random() > 0.5 ? "good" : "warning",
        findings: [
          "Large images detected - consider compression",
          "Render-blocking resources found",
          "First Contentful Paint: 2.1s",
          "Time to Interactive: 3.8s"
        ]
      },
      {
        category: "SEO",
        icon: Search,
        score: Math.floor(Math.random() * 30) + 70,
        status: Math.random() > 0.6 ? "good" : "warning",
        findings: [
          "Meta descriptions present on all pages",
          "Some images missing alt attributes",
          "Sitemap.xml detected",
          "Robots.txt properly configured"
        ]
      },
      {
        category: "Security",
        icon: Shield,
        score: Math.floor(Math.random() * 25) + 75,
        status: Math.random() > 0.7 ? "good" : "error",
        findings: [
          "HTTPS enabled ✓",
          "Missing Content-Security-Policy header",
          "X-Frame-Options header missing",
          "Mixed content warnings detected"
        ]
      },
      {
        category: "Mobile Responsiveness",
        icon: Smartphone,
        score: Math.floor(Math.random() * 20) + 80,
        status: Math.random() > 0.5 ? "good" : "warning",
        findings: [
          "Viewport meta tag present",
          "Touch targets adequately sized",
          "Font sizes readable on mobile",
          "Some elements overflow on small screens"
        ]
      },
      {
        category: "Accessibility",
        icon: Code2,
        score: Math.floor(Math.random() * 35) + 65,
        status: Math.random() > 0.4 ? "warning" : "error",
        findings: [
          "Color contrast issues detected",
          "Some form fields missing labels",
          "ARIA landmarks properly used",
          "Skip navigation link missing"
        ]
      },
      {
        category: "Best Practices",
        icon: Zap,
        score: Math.floor(Math.random() * 30) + 70,
        status: Math.random() > 0.5 ? "good" : "warning",
        findings: [
          "Modern image formats not used",
          "Browser caching configured",
          "No console errors detected",
          "JavaScript minification applied"
        ]
      }
    ];

    setAuditResults(results);
    setIsAuditing(false);
    setAuditComplete(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const overallScore = auditResults.length > 0
    ? Math.round(auditResults.reduce((acc, r) => acc + r.score, 0) / auditResults.length)
    : 0;

  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass-card neon-border px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Instant Infrastructure Audit
              </span>
            </div>
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Web Audit</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get a detailed analysis of your website's performance, security, SEO, 
              and accessibility in seconds.
            </p>
          </motion.div>

          {/* Audit Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card neon-border rounded-2xl p-6 md:p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="url"
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="pl-12 h-14 bg-background/50 border-border/50 focus:border-primary text-lg"
                />
              </div>
              <Button
                onClick={performAudit}
                disabled={isAuditing || !websiteUrl.trim()}
                className="h-14 px-8 btn-neon font-orbitron text-base"
              >
                {isAuditing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Auditing...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Run Audit
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Loading State */}
          {isAuditing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
              </div>
              <h3 className="font-orbitron text-xl mb-2">Analyzing Your Website</h3>
              <p className="text-muted-foreground">
                Scanning performance, security, SEO, and more...
              </p>
            </motion.div>
          )}

          {/* Results */}
          {auditComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* Overall Score */}
              <div className="glass-card gold-border rounded-2xl p-6 md:p-8 mb-8 text-center">
                <h3 className="font-orbitron text-lg mb-4 text-muted-foreground">
                  Overall Score
                </h3>
                <div className={`font-orbitron text-6xl md:text-7xl font-bold mb-2 ${getScoreColor(overallScore)}`}>
                  {overallScore}
                </div>
                <p className="text-muted-foreground">out of 100</p>
                <div className="mt-6 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm">Good (80+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-sm">Needs Work (60-79)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-sm">Poor (&lt;60)</span>
                  </div>
                </div>
              </div>

              {/* Category Results */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {auditResults.map((result, index) => (
                  <motion.div
                    key={result.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <result.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-orbitron font-medium">{result.category}</h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-orbitron text-2xl font-bold ${getScoreColor(result.score)}`}>
                          {result.score}
                        </span>
                        {getStatusIcon(result.status)}
                      </div>
                    </div>
                    <div className="w-full h-2 bg-background rounded-full overflow-hidden mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${result.score}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        className={`h-full rounded-full ${
                          result.score >= 80 ? "bg-green-500" :
                          result.score >= 60 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                      />
                    </div>
                    <ul className="space-y-2">
                      {result.findings.map((finding, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {finding}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-card neon-border rounded-2xl p-6 md:p-8 text-center"
              >
                <Lock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="font-orbitron text-xl font-bold mb-2">
                  Want a <span className="gold-text">Deeper Analysis?</span>
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Our engineers will provide a comprehensive infrastructure review 
                  with actionable recommendations and implementation support.
                </p>
                <Button className="btn-gold py-4 px-8 font-orbitron">
                  Schedule Expert Review
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebAudit;
