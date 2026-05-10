import { motion } from "framer-motion";
import { Film, Tv, Play, Star, Popcorn, Ticket } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const movieStats = [
  { label: "Binge-Watch Level", value: "Expert", icon: Tv },
  { label: "Movie Critic Score", value: "99%", icon: Star },
  { label: "Popcorn Consumption", value: "Legendary", icon: Popcorn },
  { label: "Plot Twist Detection", value: "Instant", icon: Play },
];

export function CinemaCorner() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <SectionTitle kicker="streaming now" title="The Cinema Queen 👑" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Movie Awards Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 soft-shadow border-2 border-rose/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-8 h-8 text-rose-deep" />
              <h3 className="text-2xl font-display font-bold">The Golden Globe Awards</h3>
            </div>
            <div className="space-y-6">
              {movieStats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-rose/10 flex items-center justify-center text-rose-deep group-hover:bg-rose-deep group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground font-body">{stat.label}</span>
                    </div>
                    <span className="font-display font-bold text-lg">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Watchlist Teaser */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 soft-shadow bg-gradient-to-br from-rose/5 to-lavender/5 border-2 border-lavender/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Ticket className="w-8 h-8 text-rose-deep" />
              <h3 className="text-2xl font-display font-bold">Coming Soon...</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                <p className="font-script text-xl text-rose-deep">"The Best Year Ever"</p>
                <p className="text-sm text-muted-foreground">Starring: Sharmistha</p>
                <p className="text-xs uppercase tracking-tighter mt-2 text-rose-deep/60">Directed by: The Universe</p>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Whether it's a 10-episode binge or a 3-hour cinematic masterpiece, your life is the best show I've ever watched. Can't wait for the next season!
              </p>
              <div className="pt-4">
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-rose-deep"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] uppercase text-muted-foreground">Buffering Joy...</span>
                  <span className="text-[10px] uppercase text-rose-deep font-bold">Ready to Play</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
