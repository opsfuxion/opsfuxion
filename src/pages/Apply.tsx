import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, User, Building2, Briefcase, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  fullName: string;
  email: string;
  company: string;
  companyStage: string;
  techStack: string;
  needs: string[];
}

// Company stages that qualify for strategy session (established companies)
const QUALIFIED_STAGES = ["growth", "scaleup", "enterprise"];

const Apply = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    companyStage: "",
    techStack: "",
    needs: [],
  });

  const totalSteps = 4;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNeedsChange = (need: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      needs: checked
        ? [...prev.needs, need]
        : prev.needs.filter((n) => n !== need),
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final submission - check company stage qualification
      if (QUALIFIED_STAGES.includes(formData.companyStage)) {
        navigate("/thank-you");
      } else {
        navigate("/resources");
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.fullName.trim().length > 0 && formData.email.includes("@");
      case 2:
        return formData.company.trim().length > 0;
      case 3:
        return formData.companyStage.length > 0;
      case 4:
        return formData.needs.length > 0;
      default:
        return false;
    }
  };

  const stepIcons = [User, Building2, Briefcase, Target];

  const companyStageOptions = [
    { 
      value: "ideation", 
      label: "Ideation / Pre-Seed", 
      staffRange: "1-3 people",
      description: "You're validating your idea, building an MVP, or seeking initial funding. Technical decisions at this stage shape your entire future."
    },
    { 
      value: "earlystage", 
      label: "Early-Stage Startup", 
      staffRange: "4-15 people",
      description: "You've launched your product and are acquiring early customers. You need to build fast while maintaining quality and reliability."
    },
    { 
      value: "growth", 
      label: "Growth-Stage Company", 
      staffRange: "16-50 people",
      description: "You're scaling rapidly, expanding your team, and need robust infrastructure to handle increasing demand and complexity."
    },
    { 
      value: "scaleup", 
      label: "Scale-Up / Series B+", 
      staffRange: "51-200 people",
      description: "You're a proven business scaling operations. Enterprise-grade reliability, security compliance, and performance optimization are critical."
    },
    { 
      value: "enterprise", 
      label: "Enterprise / Corporation", 
      staffRange: "200+ people",
      description: "You're an established organization requiring strategic technical partnerships, large-scale migrations, or digital transformation initiatives."
    },
  ];

  const needsOptions = [
    { id: "app-dev", label: "Application Development", description: "Full-stack web/mobile apps" },
    { id: "devops", label: "DevOps & Cloud", description: "CI/CD, Kubernetes, AWS/GCP" },
    { id: "sre", label: "Site Reliability Engineering", description: "Monitoring, uptime, scaling" },
    { id: "admin", label: "Site Administration", description: "Server management, security" },
    { id: "qa", label: "QA & Documentation", description: "Testing, technical writing" },
  ];

  return (
    <div className="min-h-screen bg-background circuit-bg">
      <Navbar />

      <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-orbitron text-2xl md:text-3xl font-bold mb-3">
              Project <span className="neon-text">Diagnostic</span>
            </h1>
            <p className="text-muted-foreground">
              Help us understand your needs to provide the best solution.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4].map((s) => {
              const Icon = stepIcons[s - 1];
              return (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      s === step
                        ? "bg-primary text-primary-foreground neon-border"
                        : s < step
                        ? "bg-primary/30 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {s < 4 && (
                    <div
                      className={`w-12 h-0.5 ${
                        s < step ? "bg-primary" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Form Card */}
          <div className="glass-card neon-border rounded-2xl p-6 md:p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-orbitron font-bold">Personal Details</h2>
                      <p className="text-sm text-muted-foreground">Tell us about yourself</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="John Smith"
                        className="mt-2 bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        className="mt-2 bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Company Info */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-orbitron font-bold">Company Information</h2>
                      <p className="text-sm text-muted-foreground">Tell us about your business</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="company" className="text-foreground">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Acme Corporation"
                        className="mt-2 bg-secondary border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="techStack" className="text-foreground">Current Tech Stack (Optional)</Label>
                      <Input
                        id="techStack"
                        value={formData.techStack}
                        onChange={(e) => handleInputChange("techStack", e.target.value)}
                        placeholder="e.g., React, Node.js, AWS, PostgreSQL"
                        className="mt-2 bg-secondary border-border focus:border-primary"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Company Stage */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-orbitron font-bold">Company Stage</h2>
                      <p className="text-sm text-muted-foreground">Select your current growth phase</p>
                    </div>
                  </div>

                  <RadioGroup
                    value={formData.companyStage}
                    onValueChange={(value) => handleInputChange("companyStage", value)}
                    className="space-y-3"
                  >
                    {companyStageOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`p-4 rounded-lg border transition-all cursor-pointer ${
                          formData.companyStage === option.value
                            ? "border-primary bg-primary/10"
                            : "border-border bg-secondary/50 hover:border-primary/50"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <Label htmlFor={option.value} className="cursor-pointer font-medium text-foreground">
                                {option.label}
                              </Label>
                              <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                                {option.staffRange}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </motion.div>
              )}

              {/* Step 4: Needs */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-orbitron font-bold">Your Needs</h2>
                      <p className="text-sm text-muted-foreground">Select all that apply</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {needsOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                          formData.needs.includes(option.id)
                            ? "border-primary bg-primary/10"
                            : "border-border bg-secondary/50 hover:border-primary/50"
                        }`}
                        onClick={() =>
                          handleNeedsChange(option.id, !formData.needs.includes(option.id))
                        }
                      >
                        <Checkbox
                          checked={formData.needs.includes(option.id)}
                          onCheckedChange={(checked) =>
                            handleNeedsChange(option.id, checked as boolean)
                          }
                        />
                        <div className="flex-1">
                          <Label className="cursor-pointer font-medium">{option.label}</Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  step === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-secondary text-foreground"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center gap-2 btn-neon py-3 px-6 text-sm font-orbitron ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {step === totalSteps ? "Submit Application" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Step Indicator */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Step {step} of {totalSteps}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Apply;
