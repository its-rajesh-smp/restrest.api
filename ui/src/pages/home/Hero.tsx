import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const apiEndpoint =
    "https://restrest.api/endpoint/a7f9c2d4e8b1x5k3m9n6p2q8r4t7v1w3";

  const copyEndpoint = () => {
    navigator.clipboard.writeText(apiEndpoint);
    toast.success("Endpoint copied to clipboard!");
  };

  return (
    <section className="bg-hero text-hero-foreground py-28">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center space-y-10">
          <div className="inline-block">
            <div className="bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
              ⚡ Instant REST API • No Setup Required
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              REST API Backend <br />
              <span className="text-primary">in Seconds</span>
            </h1>
            <p className="text-xl md:text-2xl text-hero-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Prototype faster with instant REST endpoints. Full CRUD operations
              without writing a single line of backend code.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <code className="text-sm md:text-base text-hero-foreground font-mono break-all flex-1">
                  {apiEndpoint}
                </code>
                <Button
                  onClick={copyEndpoint}
                  variant="ghost"
                  size="sm"
                  className="text-hero-foreground hover:text-hero-foreground hover:bg-white/10 shrink-0"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              >
                View Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-hero-foreground hover:bg-white/10 font-semibold px-10 py-6 text-lg"
              >
                Try Demo
              </Button>
            </div>

            <p className="text-hero-foreground/70 text-sm">
              Your unique endpoint is ready. Start making requests with GET,
              POST, PUT & DELETE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
