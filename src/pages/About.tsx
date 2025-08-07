import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Students Impacted" },
    { icon: Target, number: "10+", label: "Communities" },
    { icon: Award, number: "5", label: "Years of Service" },
    { icon: Globe, number: "3", label: "States Reached" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Basti Ki Pathshala</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Born from a simple belief that every child, regardless of their circumstances, 
              deserves access to quality education and the opportunity to dream big.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Basti Ki Pathshala began in 2019 when a group of passionate educators and social workers 
                noticed that children in urban slums were being left behind in the education system. 
                Despite their eagerness to learn, these bright minds lacked access to quality resources, 
                dedicated teachers, and safe learning environments.
              </p>
              <p>
                What started as weekend tutoring sessions under a makeshift tent has grown into a 
                comprehensive educational program serving over 500 children across 10 communities. 
                We don't just teach subjects; we nurture dreams, build confidence, and create pathways 
                to brighter futures.
              </p>
              <p>
                Our approach is holistic - combining academic excellence with life skills, health education, 
                and emotional support. We work closely with families and communities to ensure that 
                education becomes a priority and a possibility for every child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Our Vision</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We envision a world where every child, regardless of their socio-economic background, 
              has access to quality education that empowers them to break the cycle of poverty 
              and become changemakers in their communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">What We Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Provide free, quality education to underprivileged children</li>
                  <li>• Train and support community volunteers as teachers</li>
                  <li>• Distribute educational materials and resources</li>
                  <li>• Organize health and nutrition programs</li>
                  <li>• Conduct parent engagement and awareness sessions</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">How We Work</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Community-based approach with local partnerships</li>
                  <li>• Culturally sensitive and multilingual education</li>
                  <li>• Regular assessments and personalized learning plans</li>
                  <li>• Integration of technology and innovative teaching methods</li>
                  <li>• Focus on holistic development and life skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;