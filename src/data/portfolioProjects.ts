export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  client: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  year: string;
  teamSize: string;
  duration: string;
  link: string;
  image: string;
  gallery: string[];
}

export const projects: PortfolioProject[] = [
  {
    id: 1,
    slug: "cloudscale-analytics",
    title: "CloudScale Analytics Platform",
    client: "FinTech Solutions Inc.",
    description: "Built a real-time analytics dashboard handling 10M+ daily events with sub-second latency. Implemented auto-scaling infrastructure on AWS with Kubernetes orchestration.",
    fullDescription: "FinTech Solutions needed a robust analytics platform capable of processing massive volumes of financial transaction data in real-time. Their existing solution struggled with scale, often experiencing delays of several minutes during peak trading hours.",
    challenge: "The primary challenge was building a system that could ingest, process, and visualize 10+ million events daily while maintaining sub-second query latency. The solution needed to be cost-effective at scale and handle unpredictable traffic spikes during market events.",
    solution: "We architected a cloud-native solution using Apache Kafka for event streaming, Apache Flink for real-time processing, and ClickHouse for analytical queries. The entire infrastructure was containerized and deployed on Kubernetes with custom auto-scaling policies based on queue depth and processing latency.",
    results: [
      "Reduced data latency from 5+ minutes to under 500ms",
      "Achieved 99.99% uptime during the first year of operation",
      "Cut infrastructure costs by 40% compared to previous solution",
      "Enabled real-time fraud detection saving $2M+ annually",
      "Successfully processed 1.5B events during a major market event"
    ],
    technologies: ["React", "Node.js", "AWS", "Kubernetes", "PostgreSQL", "Apache Kafka", "Apache Flink", "ClickHouse", "Redis"],
    year: "2024",
    teamSize: "5 engineers",
    duration: "8 months",
    link: "https://example.com/cloudscale",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop"
    ]
  },
  {
    id: 2,
    slug: "retailmax-mobile",
    title: "E-Commerce Mobile Platform",
    client: "RetailMax Global",
    description: "Developed a cross-platform mobile commerce solution serving 500K+ users across 12 countries. Integrated payment gateways, inventory management, and real-time order tracking.",
    fullDescription: "RetailMax Global, a fast-growing international retailer, needed to modernize their mobile shopping experience. Their existing native apps were difficult to maintain and suffered from inconsistent user experiences across platforms.",
    challenge: "Building a unified mobile experience for iOS and Android that could handle localization for 12 countries, integrate with 8 different payment providers, and sync real-time with their existing inventory management system.",
    solution: "We developed a React Native application with a Node.js backend, implementing a modular architecture that made it easy to add new markets and payment providers. The app features offline-first capabilities, intelligent caching, and real-time websocket connections for order tracking.",
    results: [
      "Increased mobile sales by 65% within 6 months of launch",
      "Achieved 4.8-star rating on both App Store and Play Store",
      "Reduced customer support tickets by 45%",
      "Successfully processed $50M+ in transactions in first year",
      "Expanded to 5 new markets with minimal additional development"
    ],
    technologies: ["React Native", "Firebase", "Stripe", "Node.js", "TypeScript", "Redis", "PostgreSQL"],
    year: "2024",
    teamSize: "4 engineers",
    duration: "6 months",
    link: "https://example.com/retailmax",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
    ]
  },
  {
    id: 3,
    slug: "medcore-healthcare",
    title: "Healthcare Data Pipeline",
    client: "MedCore Systems",
    description: "Architected HIPAA-compliant data infrastructure processing 50TB+ of medical records. Implemented end-to-end encryption, audit logging, and disaster recovery protocols.",
    fullDescription: "MedCore Systems serves over 200 healthcare facilities and needed to modernize their data infrastructure while maintaining strict HIPAA compliance. Their legacy systems were siloed and couldn't support the analytics capabilities their clients demanded.",
    challenge: "Migrating 50TB+ of sensitive medical records to a modern cloud infrastructure while ensuring zero downtime, complete HIPAA compliance, and maintaining interoperability with existing hospital systems using HL7 and FHIR standards.",
    solution: "We designed a secure data lake architecture on Azure with comprehensive encryption at rest and in transit. Implemented Apache Kafka for real-time data streaming, with custom connectors for HL7 and FHIR protocols. Built a complete audit trail system and automated compliance reporting.",
    results: [
      "Successfully migrated 50TB+ of medical records with zero data loss",
      "Passed HIPAA compliance audit with zero findings",
      "Reduced data retrieval time from hours to seconds",
      "Enabled real-time patient data analytics for first time",
      "Achieved 99.999% uptime for critical systems"
    ],
    technologies: ["Python", "Apache Kafka", "Azure", "MongoDB", "Docker", "Terraform", "HL7 FHIR", "ElasticSearch"],
    year: "2023",
    teamSize: "6 engineers",
    duration: "10 months",
    link: "https://example.com/medcore",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop"
    ]
  },
  {
    id: 4,
    slug: "salesforce-crm",
    title: "AI-Powered CRM Suite",
    client: "SalesForce Pro",
    description: "Created an intelligent CRM with predictive lead scoring, automated follow-ups, and sentiment analysis. Reduced sales cycle by 40% through ML-driven insights.",
    fullDescription: "SalesForce Pro wanted to differentiate their CRM product by integrating cutting-edge AI capabilities. They needed a solution that could provide actionable insights to sales teams without requiring data science expertise.",
    challenge: "Building ML models that could accurately predict lead conversion probability, automate personalized follow-up sequences, and analyze communication sentiment—all while being explainable and trustworthy for enterprise customers.",
    solution: "We developed custom ML models using TensorFlow for lead scoring and natural language processing. The system integrates with email, calendar, and phone systems to automatically track interactions and suggest optimal follow-up timing. All predictions include confidence scores and explanations.",
    results: [
      "Reduced average sales cycle from 45 to 27 days",
      "Increased lead conversion rate by 35%",
      "Saved sales reps an average of 10 hours per week",
      "Achieved 89% accuracy in lead scoring predictions",
      "Helped close $15M+ in additional revenue in first year"
    ],
    technologies: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Redis", "FastAPI", "OpenAI API", "AWS SageMaker"],
    year: "2023",
    teamSize: "5 engineers",
    duration: "9 months",
    link: "https://example.com/crmsuite",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=500&fit=crop"
    ]
  },
  {
    id: 5,
    slug: "translogix-iot",
    title: "IoT Fleet Management",
    client: "TransLogix Corp",
    description: "Deployed IoT infrastructure tracking 10,000+ vehicles in real-time. Built predictive maintenance algorithms reducing downtime by 60% and fuel costs by 25%.",
    fullDescription: "TransLogix Corp operates one of the largest private fleet networks in the region. They needed visibility into their vehicle operations and wanted to leverage data for predictive maintenance and route optimization.",
    challenge: "Collecting and processing telemetry data from 10,000+ vehicles in real-time, building accurate predictive maintenance models, and creating a dispatch system that could optimize routes while accounting for driver schedules, vehicle capabilities, and customer requirements.",
    solution: "We deployed custom IoT gateways in each vehicle collecting engine diagnostics, GPS, and driver behavior data. This data flows through MQTT to our processing pipeline, where ML models predict maintenance needs and optimize routes. The dispatch dashboard provides real-time visibility and alerts.",
    results: [
      "Reduced vehicle downtime by 60% through predictive maintenance",
      "Cut fuel costs by 25% with optimized routing",
      "Decreased maintenance costs by $3.2M annually",
      "Improved on-time delivery rate from 87% to 98%",
      "Reduced insurance premiums by 15% through driver safety insights"
    ],
    technologies: ["Go", "MQTT", "TimescaleDB", "Grafana", "AWS IoT", "React", "Python", "Apache Spark"],
    year: "2023",
    teamSize: "4 engineers",
    duration: "7 months",
    link: "https://example.com/translogix",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=500&fit=crop"
    ]
  },
  {
    id: 6,
    slug: "techops-devops",
    title: "DevOps Automation Suite",
    client: "TechOps Innovations",
    description: "Implemented comprehensive CI/CD pipelines reducing deployment time from hours to minutes. Achieved 99.99% uptime with zero-downtime deployments.",
    fullDescription: "TechOps Innovations, a growing SaaS company, was struggling with slow, error-prone deployments that often resulted in downtime. Their manual processes couldn't keep up with their rapid development pace.",
    challenge: "Transforming a manual deployment process that took 4+ hours and required weekend maintenance windows into an automated system capable of multiple daily deployments with zero downtime.",
    solution: "We implemented a comprehensive GitOps workflow using Terraform for infrastructure, Jenkins for CI/CD, and Kubernetes for container orchestration. Included automated testing, security scanning, gradual rollouts, and automatic rollback capabilities.",
    results: [
      "Reduced deployment time from 4 hours to 12 minutes",
      "Enabled 15+ deployments per day (up from weekly)",
      "Achieved 99.99% uptime with zero-downtime deployments",
      "Eliminated weekend maintenance windows entirely",
      "Reduced deployment-related incidents by 95%"
    ],
    technologies: ["Terraform", "Jenkins", "Docker", "Ansible", "Prometheus", "Kubernetes", "ArgoCD", "Vault"],
    year: "2024",
    teamSize: "3 engineers",
    duration: "4 months",
    link: "https://example.com/techops",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=500&fit=crop"
    ]
  },
];

export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string): PortfolioProject[] => {
  return projects
    .filter(project => project.slug !== currentSlug)
    .slice(0, 3);
};
