import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { Heart, Users, BookOpen, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    profession: '',
    experience: '',
    availability: '',
    skills: [],
    motivation: '',
    commitment: false
  });

  const handleSkillChange = (skill: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      skills: checked 
        ? [...prev.skills, skill]
        : prev.skills.filter(s => s !== skill)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.commitment) {
      toast({
        title: "Please confirm your commitment",
        description: "You must agree to our commitment requirements to volunteer.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you within 48 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      age: '',
      profession: '',
      experience: '',
      availability: '',
      skills: [],
      motivation: '',
      commitment: false
    });
  };

  const opportunities = [
    {
      icon: BookOpen,
      title: "Teaching Assistant",
      description: "Help children with reading, writing, and basic math skills",
      commitment: "4-6 hours/week"
    },
    {
      icon: Users,
      title: "Mentor",
      description: "Guide older students with career advice and life skills",
      commitment: "2-3 hours/week"
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Connect with families and spread awareness about education",
      commitment: "Flexible"
    },
    {
      icon: Clock,
      title: "Event Coordinator",
      description: "Help organize educational events and fundraising activities",
      commitment: "Project-based"
    }
  ];

  const skillOptions = [
    "Teaching/Education",
    "Child Psychology",
    "Subject Expertise (Math, Science, English)",
    "Arts & Crafts",
    "Music & Dance",
    "Sports & Physical Education",
    "Technology & Computers",
    "Social Work",
    "Event Management",
    "Photography/Videography"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Join Our <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Become a volunteer and help us transform lives through education. 
              Your time and skills can make a lasting difference in a child's future.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-foreground">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <opportunity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{opportunity.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{opportunity.description}</p>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                    {opportunity.commitment}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-foreground">Volunteer Application</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get in touch with you soon!
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age *</Label>
                      <Input
                        id="age"
                        type="number"
                        min="18"
                        value={formData.age}
                        onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="profession">Profession/Occupation</Label>
                    <Input
                      id="profession"
                      value={formData.profession}
                      onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="availability">Availability *</Label>
                    <Select value={formData.availability} onValueChange={(value) => setFormData(prev => ({ ...prev, availability: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays-morning">Weekdays - Morning</SelectItem>
                        <SelectItem value="weekdays-evening">Weekdays - Evening</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <Label className="text-base font-medium">Skills & Expertise</Label>
                    <p className="text-sm text-muted-foreground mb-4">Select all that apply</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skillOptions.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={formData.skills.includes(skill)}
                            onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                          />
                          <Label htmlFor={skill} className="text-sm">{skill}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Previous Experience (Optional)</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about any relevant experience you have..."
                      value={formData.experience}
                      onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                    <Textarea
                      id="motivation"
                      placeholder="Share your motivation and what you hope to contribute..."
                      value={formData.motivation}
                      onChange={(e) => setFormData(prev => ({ ...prev, motivation: e.target.value }))}
                      required
                      className="mt-2"
                    />
                  </div>

                  {/* Commitment Checkbox */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="commitment"
                      checked={formData.commitment}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, commitment: checked as boolean }))}
                    />
                    <Label htmlFor="commitment" className="text-sm leading-relaxed">
                      I understand that volunteering requires a minimum commitment of 3 months and 
                      I am dedicated to making a positive impact on children's lives through education. *
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;