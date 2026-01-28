import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/20 bg-card/30">
      <div className="container px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Logo & Quote */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/voice-62ddc.firebasestorage.app/o/dharmaLogo.png?alt=media&token=eca586ba-6b52-4328-8365-5db706212ab0"
                alt="Dharma Hundi Logo"
                className="w-[65px] h-[65px] object-contain"
              />
              <div className="relative">
                <span className="text-lg md:text-xl font-medium tracking-wide text-foreground/80">
                  Dharma Hundi
                </span>
              </div>
            </div>
            <blockquote className="text-lg md:text-xl font-bold text-primary/90 border-l-4 border-primary/40 pl-4 py-3 bg-primary/5 rounded-r-lg">
              "धर्मो रक्षति रक्षति"
            </blockquote>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
              If you protect Dharma, Dharma protects you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-medium text-foreground mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#categories" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Dharma Categories
                </Link>
              </li>
              <li>
                <Link href="#vision" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Our Vision
                </Link>
              </li>
              <li>
                <Link href="#mission" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-foreground/70 hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Message */}
          <div>
            <h3 className="text-lg md:text-xl font-medium text-foreground mb-5">Our Mission</h3>
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
              Follow Dharma. Live Dharma. Spread Dharma.<br /><br />
              Let Dharma guide our present, and shape a stronger future for the world.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-sm md:text-base text-foreground/50">
            &copy; {new Date().getFullYear()} Dharma Hundi. All rights reserved.
          </p>
          <p className="mt-3 text-xs md:text-sm text-foreground/40">
            A Worldwide Dharma Movement - Making Dharma a Daily Habit
          </p>
          <div className="mt-4 pt-4 border-t border-border/20">
            <a
              href="https://wa.me/919014882779?text=Hi%2C%20I%20have%20a%20software%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary/80 hover:text-primary rounded-full text-sm md:text-base font-medium transition-all duration-200 border border-primary/20"
            >
              <span>Built by Harte Labs</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
