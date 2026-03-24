import { Link, useLocation } from "react-router-dom";
import { Logo } from ".";
import { useEffect } from "react";

export const Header = () => {
  const location = useLocation();

  useEffect(() => {
    setInterval(() => {
      console.log("HELLO");
    }, 1000);
  }, []);

  return (
    <header className="bg-hero text-hero-foreground border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Logo />
            <span className="text-xl font-bold tracking-tight">
              restrest.api
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`transition-colors font-medium ${
                location.pathname === "/"
                  ? "text-hero-foreground"
                  : "text-hero-foreground/80 hover:text-hero-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`transition-colors font-medium ${
                location.pathname === "/dashboard"
                  ? "text-hero-foreground"
                  : "text-hero-foreground/80 hover:text-hero-foreground"
              }`}
            >
              Dashboard
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
