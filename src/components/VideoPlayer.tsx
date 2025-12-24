import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnailUrl?: string;
}

const VideoPlayer = ({ 
  videoUrl = "https://www.youtube.com/embed/VIDEO_ID_HERE",
  thumbnailUrl 
}: VideoPlayerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Glow Effect Background */}
      <div className="absolute -inset-1 bg-gradient-neon rounded-2xl blur-xl opacity-30 animate-glow-pulse" />
      
      {/* Video Container */}
      <div className="relative glass-card neon-border rounded-2xl overflow-hidden">
        <div className="aspect-video relative bg-charcoal-light">
          {/* Video Embed */}
          <iframe
            src={videoUrl}
            title="OpsFuxion Strategy Webinar"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          
          {/* Play Button Overlay (hidden when video loads) */}
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/50 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm neon-border">
              <Play className="w-8 h-8 text-primary fill-primary ml-1" />
            </div>
          </div>
        </div>

        {/* Video Label */}
        <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full">
          <span className="text-xs font-medium text-primary uppercase tracking-wider">
            🔴 Webinar Replay
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary animate-pulse" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
    </motion.div>
  );
};

export default VideoPlayer;
