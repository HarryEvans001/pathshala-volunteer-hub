import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Basti Ki Pathshala</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Empowering communities through education. We believe every child deserves access to quality learning, regardless of their background.
            </p>
            <div className="flex items-center text-sm text-secondary-foreground/70">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              Made with love for the community
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <a href="#programs" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:info@bastikipathshala.org" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@bastikipathshala.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <a href="tel:+919876543210" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                <span className="text-secondary-foreground/80">
                  Community Center, <br />
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/60">
            © 2024 Basti Ki Pathshala. All rights reserved. Spreading education, spreading hope.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;