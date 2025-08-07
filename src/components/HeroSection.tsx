import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-education.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Communities Through 
            <span className="block text-accent"> Education</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Every child deserves access to quality education. Join us in transforming lives and building a brighter future for underprivileged communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary">
              <Link to="/volunteer">
                Become a Volunteer <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">
                Learn Our Story
              </Link>
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <BookOpen className="w-6 h-6 mr-2 text-accent" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-white/80">Children Educated</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Users className="w-6 h-6 mr-2 text-accent" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-white/80">Active Volunteers</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start mb-2">
                <Heart className="w-6 h-6 mr-2 text-accent" />
                <span className="text-3xl font-bold">10+</span>
              </div>
              <p className="text-white/80">Communities Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;