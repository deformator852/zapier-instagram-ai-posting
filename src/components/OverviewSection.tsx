import { motion } from "framer-motion";
import { Target, Users, Zap, Sparkles, Bot, Send } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Problem Solved",
    description:
      "Automates Instagram caption creation and posting. Eliminates the need to manually write captions, upload images, and organize content.",
  },
  {
    icon: Users,
    title: "Target Audience",
    description:
      "Content creators, social media managers, and anyone who posts regularly on Instagram and wants a more efficient workflow with organized content management.",
  },
  {
    icon: Zap,
    title: "Key Features",
    description:
      "Automatically picks the first image from a designated Google Drive folder · Generates captions using OpenAI · Posts images with captions to Instagram · Moves posted images to a 'Posted' folder for organization.",
  },
  {
    icon: Send,
    title: "Results & Impact",
    description:
      "Reduces manual posting effort · Ensures consistent captions for posts · Keeps images organized for easy tracking · Streamlines social media workflow and saves time.",
  },
];

const OverviewSection = () => {
  return (
    <section id="overview" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Project Overview
          </h2>
          <p className="text-muted-foreground">
            A comprehensive look at what this project entails and the value it
            delivers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 lg:p-8 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
