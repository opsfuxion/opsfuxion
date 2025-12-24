import { motion } from "framer-motion";
import { CheckCircle2, Clock, AlertCircle, Rocket } from "lucide-react";

interface ProjectStep {
  status: "completed" | "in-progress" | "pending";
  title: string;
  description: string;
  date?: string;
}

const projectSteps: ProjectStep[] = [
  {
    status: "completed",
    title: "Strategy Session Booked",
    description: "Your consultation has been scheduled successfully.",
    date: "Today",
  },
  {
    status: "completed",
    title: "Pre-Call Questionnaire",
    description: "We've received your project requirements.",
    date: "Today",
  },
  {
    status: "in-progress",
    title: "Infrastructure Analysis",
    description: "Our team is reviewing your current tech stack.",
    date: "In Progress",
  },
  {
    status: "pending",
    title: "Custom Proposal Delivery",
    description: "Tailored solution document with pricing.",
    date: "Upcoming",
  },
  {
    status: "pending",
    title: "Project Kickoff",
    description: "Begin implementation with dedicated team.",
    date: "Upcoming",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-green-500",
    bg: "bg-green-500/20",
    border: "border-green-500/30",
  },
  "in-progress": {
    icon: Clock,
    color: "text-primary",
    bg: "bg-primary/20",
    border: "border-primary/30",
  },
  pending: {
    icon: AlertCircle,
    color: "text-muted-foreground",
    bg: "bg-muted/50",
    border: "border-border",
  },
};

const ProjectTracker = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card neon-border rounded-2xl p-6 md:p-8 max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Rocket className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-orbitron font-bold text-lg">Project Status Tracker</h3>
          <p className="text-sm text-muted-foreground">Your journey with OpsFuxion</p>
        </div>
      </div>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border" />
        <div 
          className="absolute left-6 top-6 w-0.5 bg-gradient-to-b from-green-500 via-primary to-transparent"
          style={{ height: "45%" }}
        />

        {/* Steps */}
        <div className="space-y-6">
          {projectSteps.map((step, index) => {
            const config = statusConfig[step.status];
            const Icon = config.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 relative"
              >
                {/* Status Icon */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${config.bg} border ${config.border}`}>
                  <Icon className={`w-5 h-5 ${config.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}>
                      {step.date}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectTracker;
