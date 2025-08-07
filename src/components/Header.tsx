import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Basti Ki Pathshala
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              About Us
            </Link>
            <Link 
              to="/volunteer" 
              className={`hover:text-primary transition-colors ${isActive('/volunteer') ? 'text-primary font-medium' : 'text-foreground'}`}
            >
              Volunteer
            </Link>
          </nav>

          <Button asChild className="hidden md:inline-flex">
            <Link to="/volunteer">Join Us</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-primary transition-colors ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/volunteer" 
                className={`hover:text-primary transition-colors ${isActive('/volunteer') ? 'text-primary font-medium' : 'text-foreground'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteer
              </Link>
              <Button asChild className="w-fit">
                <Link to="/volunteer" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;