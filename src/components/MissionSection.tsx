import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Lightbulb, Heart } from 'lucide-react';

const MissionSection = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Providing accessible, high-quality educational resources and personalized learning experiences for every child."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering strong community bonds and creating support networks that uplift entire neighborhoods."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Using creative teaching methods and modern tools to make learning engaging and effective."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Approaching every child with love, understanding, and unwavering belief in their potential."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Mission & Values
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that education is the foundation of hope. Our mission is to break the cycle of poverty 
            through accessible, quality education that empowers children and transforms communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-6 max-w-4xl mx-auto">
            "Education is the most powerful weapon which you can use to change the world."
          </blockquote>
          <cite className="text-lg text-muted-foreground">- Nelson Mandela</cite>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;