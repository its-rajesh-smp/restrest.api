import { Logo } from ".";

export const Footer = () => {
  return (
    <footer className="py-24 bg-gradient-to-b from-muted/30 to-muted/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build?</h2>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              You focus on the{" "}
              <span className="font-semibold text-foreground">frontend</span>.
            </p>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;ll handle the{" "}
              <span className="font-semibold text-foreground">REST</span>.
            </p>
          </div>

          <div className="bg-code text-code-foreground p-8 rounded-xl font-mono text-sm max-w-3xl mx-auto break-all shadow-2xl border border-white/10">
            https://restrest.api/endpoint/a7f9c2d4e8b1x5k3m9n6p2q8r4t7v1w3
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your unique REST endpoint is live and waiting for requests. No
              account needed. No credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✓ Instant Setup
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✓ Full CRUD Support
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                ✓ 100% Free
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Logo />
              <span className="text-xl font-bold tracking-tight">
                restrest.api
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 restrest.api • Built for developers, by developers
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="text-primary hover:underline font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-primary hover:underline font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-primary hover:underline font-medium">
                API Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
