import { Star } from "lucide-react";
import { BIRTHDAY_CONFIG } from "@/lib/birthday-config";

export function Footer() {
  return (
    <footer className="relative py-10 px-4 text-center">
      <p className="font-script text-lg text-primary flex items-center justify-center gap-2">
        Made with <Star className="w-4 h-4 fill-primary text-primary" /> by {BIRTHDAY_CONFIG.fromName}
      </p>
      <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest opacity-60">
        © {new Date().getFullYear()} — Always in your corner
      </p>
    </footer>
  );
}
