import {
  BookOpen,
  FlaskConical,
  Globe,
  Lightbulb,
  Rocket,
  Wrench,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Rapid Prototyping",
      description: "Get your MVP running in minutes, not days",
    },
    {
      icon: Lightbulb,
      title: "Proof of Concepts",
      description: "Validate ideas before investing in infrastructure",
    },
    {
      icon: BookOpen,
      title: "Learning & Tutorials",
      description: "Perfect for educational content and coding tutorials",
    },
    {
      icon: Wrench,
      title: "Integration Testing",
      description: "Test API integrations without mock data",
    },
    {
      icon: FlaskConical,
      title: "Hackathons",
      description: "Ship faster during time-constrained events",
    },
    {
      icon: Globe,
      title: "Demo Applications",
      description: "Showcase your frontend skills with live data",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built for Developers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Perfect for any scenario where you need a backend yesterday
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
