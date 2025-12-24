import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background circuit-bg flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-destructive/20 flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-destructive" />
        </div>

        <h1 className="font-orbitron text-6xl md:text-8xl font-bold neon-text mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page doesn't exist in our infrastructure.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 btn-neon py-3 px-6 font-orbitron"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
