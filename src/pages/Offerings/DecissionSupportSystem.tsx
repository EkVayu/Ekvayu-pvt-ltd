import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OfferingHeroSection from "./Offering-hero-Section";
import Dsm from "../../assets/offerings/Decison-support.jpg";
import {
  Brain,
  Network,
  Shield,
  CheckCircle,
  Lock,
  Eye,
  Database,
  Settings,
  FileSearch,
  ShieldAlert,
  Zap,
  Target,
  Sparkles,
  Cpu,
  Timer,
  Scale,
  FileStack,
  Languages,
  Star,
  Layers,
  BarChart,
  
  
} from "lucide-react";

const heroData = {
  backgroundImage: Dsm,
  title: "Decision Support System",
  subtitle:
    "AI based information collation and presentation system on 3D georaphical interface",
  buttonText: "Explore Capabilities",
  buttonLink: "DecisionSupportSystem",
};

const analyticsFeatures = [
  {
    icon: Brain,
    title: "AI Risk Analysis",
    description: "Advanced machine learning algorithms for threat assessment",
    benefits: [
      "Predictive threat detection",
      "Behavioral analysis",
      "Anomaly detection",
    ],
  },
  {
    icon: Shield,
    title: "Spam Intelligence",
    description: "Real-time global threat intelligence integration",
    benefits: [
      "Global threat feeds",
      "Zero-day detection",
      "Threat correlation",
    ],
  },
  {
    icon: Network,
    title: "Network Defense",
    description: "Comprehensive network security monitoring",
    benefits: [
      "Traffic analysis",
      "Intrusion detection",
      "Network segmentation",
    ],
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Intelligent access management system",
    benefits: [
      "Role-based access",
      "Authentication monitoring",
      "Privilege escalation detection",
    ],
  },
  {
    icon: Brain,
    title: "Reasonal Analysis",
    description: "Intelligent data reasoning and pattern analysis system",
    benefits: [
      "Advanced pattern recognition",
      "Predictive analytics",

      "Real-time insights generation",
    ],
  },

  {
    icon: Target,
    title: "Decision Master",
    description: "Advanced decision orchestration and optimization platform",
    benefits: [
      "Strategic decision modeling",
      "Multi-criteria analysis",
      "Risk-based prioritization",
      "Scenario simulation",
    ],
  },
];
const securityMetrics = [
  {
    number: "∞",
    label: "Wide Knowledge",
    icon: Sparkles,
    description: "Infinite learning potential",
  },
  {
    number: "<30sec",
    label: "Response Time",
    icon: Zap,
    description: "Rapid incident response",
  },
  {
    number: "24/7/365",
    label: "Strong Monitoring",
    icon: Eye,
    description: "Continuous security surveillance",
  },
  {
    number: "500+",
    label: "Security Rules",
    icon: FileSearch,
    description: "Comprehensive rule engine",
  },
];

const DecisionSupportSystem = () => {
  const SecurityMetricsSection = () => (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Security Intelligence Metrics
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time monitoring and advanced threat detection capabilities
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {securityMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <metric.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-primary mb-2">
                {metric.number}
              </h3>
              <p className="text-lg font-medium text-foreground mb-2">
                {metric.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const AdvancedAnalyticsSection = () => (
    <section className="py-20 bg-gradient-to-r from-background via-secondary/5 to-background">
      <motion.div
        className="w-full px-4 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6 text-center text-primary">
          Advanced Security Analytics
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Enterprise-grade security analytics powered by artificial intelligence
          and machine learning
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary hover:scale-105"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground/90 mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );

  const SecurityWorkflowSection = () => (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">
            Intelligent Security Workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automated decision support process for enhanced security operations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Data Collection",
              description: "Continuous security data gathering",
              icon: Database,
            },
            {
              step: "2",
              title: "AI Analysis",
              description: "Machine learning threat detection",
              icon: Brain,
            },
            {
              step: "3",
              title: "Risk Assessment",
              description: "Automated risk scoring and analysis",
              icon: ShieldAlert,
            },
            {
              step: "4",
              title: "Response",
              description: "Intelligent incident response",
              icon: Zap,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <div className="mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground/90">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const BenefitsSection = () => (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.h2
          className="text-5xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Key Benefits
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Enhanced Decision Making",
              description:
                "AI-driven insights for faster, more accurate security decisions",
              icon: Brain,
            },
            {
              title: "Proactive Defense",
              description:
                "Anticipate and prevent security threats before they occur",
              icon: Shield,
            },
            {
              title: "Operational Efficiency",
              description:
                "Streamlined security operations with automated workflows",
              icon: Settings,
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const CallToAction = () => (
    <motion.section
      className="py-24 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          Transform Your Security Operations
        </motion.h2>
        <motion.p
          className="text-2xl mb-12 max-w-3xl mx-auto text-white/90"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Empower your security team with AI-driven decision support
        </motion.p>
        <Link to="/contact-us">
          <motion.button
            className="bg-white text-primary font-bold py-4 px-12 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
  const StrengthsSection = () => (
    <section className="py-20 bg-gradient-to-r from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Our Core Strengths</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by advanced AI capabilities and years of expertise
          </p>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Cpu,
              title: "Advanced AI Engine",
              features: [
                "State-of-the-art algorithms",
                "Real-time processing",
                "Adaptive learning capabilities",
                "Neural network architecture"
              ]
            },
            {
              icon: Timer,
              title: "10+ Years AI Maturity",
              features: [
                "Proven track record",
                "Refined algorithms",
                "Industry expertise",
                "Continuous evolution"
              ]
            },
            {
              icon: FileSearch,
              title: "Data Drill Down",
              features: [
                "Granular analysis",
                "Deep data exploration",
                "Interactive visualization",
                "Pattern recognition"
              ]
            },
            {
              icon: Scale,
              title: "Truth Score System",
              features: [
                "AI-powered verification",
                "Multi-source validation",
                "Confidence metrics",
                "Accuracy assessment"
              ]
            }
          ].map((strength, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <strength.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground/90">{strength.title}</h3>
              <ul className="space-y-2">
                {strength.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
  
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FileStack,
              title: "Multi-Data Sources",
              description: "Support for Text, MS Office, PDF and various file formats",
              features: ["Document parsing", "Format conversion", "Content extraction"]
            },
            {
              icon: Languages,
              title: "Multi-Language Support",
              description: "Complete coverage of Indian languages and international languages",
              features: ["Regional language processing", "Translation capabilities", "Cultural context"]
            },
            {
              icon: Database,
              title: "Source Tracking",
              description: "Comprehensive data lineage and source verification",
              features: ["Origin tracking", "Version control", "Change history"]
            },
            {
              icon: Star,
              title: "Confidence Scoring",
              description: "AI-powered truth scoring with analyst validation",
              features: ["Automated scoring", "Manual verification", "Confidence metrics"]
            },
            {
              icon: Layers,
              title: "Classification Handling",
              description: "Advanced data classification and security levels",
              features: ["Security clearance", "Access control", "Data protection"]
            },
            {
              icon: BarChart,
              title: "Analytics Dashboard",
              description: "Comprehensive visualization and reporting",
              features: ["Real-time monitoring", "Custom reports", "Trend analysis"]
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground/90">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
  

  return (
    <div className="bg-background text-foreground">
      <OfferingHeroSection data={heroData} />
      <div id="DecisionSupportSystem">
        <SecurityMetricsSection />
        <AdvancedAnalyticsSection />
        <StrengthsSection />
        <SecurityWorkflowSection />
        <BenefitsSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default DecisionSupportSystem;
