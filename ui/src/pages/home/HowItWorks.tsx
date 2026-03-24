import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const HowItWorks = () => {
  const apiEndpoint =
    "https://restrest.api/endpoint/a7f9c2d4e8b1x5k3m9n6p2q8r4t7v1w3";

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4" />
            Quick Start Guide
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        </div>

        <div className="space-y-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                1
              </div>
              <h3 className="text-2xl font-semibold">
                Get Your Unique Endpoint
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-16">
              Every visitor gets a unique REST API endpoint instantly. No
              sign-up, no configuration. Just start building. Your endpoint
              automatically handles any resource you throw at it.
            </p>
            <div className="bg-code text-code-foreground p-6 rounded-lg font-mono text-sm ml-16 shadow-lg">
              {apiEndpoint}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                2
              </div>
              <h3 className="text-2xl font-semibold">
                Define Your Data Structure
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-16">
              Let&apos;s say you&apos;re building a task management app. You
              need to store tasks with titles, descriptions, and status.
              Here&apos;s what a task object might look like:
            </p>
            <div className="bg-muted p-6 rounded-lg ml-16 shadow-sm">
              <code className="text-sm font-mono">
                {`{ "title": "Launch MVP", "description": "Deploy version 1.0", "status": "in-progress" }`}
              </code>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                3
              </div>
              <h3 className="text-2xl font-semibold">
                Make Your First Request
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-16">
              POST your JSON data to any resource name you choose. We&apos;ll
              use{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">tasks</code>{" "}
              as the resource name. restrest.api automatically creates the
              collection:
            </p>
            <div className="bg-code text-code-foreground p-6 rounded-lg font-mono text-sm ml-16 break-all shadow-lg">
              {apiEndpoint}/tasks
            </div>
            <div className="text-center py-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg"
              >
                Try Creating a Task
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary text-xl">
                4
              </div>
              <h3 className="text-2xl font-semibold">Access Your Data</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed pl-16">
              Retrieve all tasks with a simple GET request to{" "}
              <a
                href={`${apiEndpoint}/tasks`}
                className="text-primary hover:underline font-medium"
              >
                your tasks endpoint
              </a>
              . Each record gets a unique{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">_id</code>{" "}
              that you can use for updates and deletes.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6 ml-16 rounded">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pro Tip:</strong> Use the
                auto-generated ID in your URLs for individual operations:{" "}
                <code className="bg-muted px-2 py-1 rounded text-xs">
                  /tasks/{"{id}"}
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
