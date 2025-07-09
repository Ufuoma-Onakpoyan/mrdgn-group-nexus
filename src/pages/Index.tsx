
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Clapperboard, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const subsidiaries = [
    {
      name: 'MrDGN Entertainment',
      description: 'Creating captivating content and experiences across digital and traditional media platforms.',
      icon: Clapperboard,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'MrDGN Construction',
      description: 'Building tomorrow\'s infrastructure with innovative construction solutions and sustainable practices.',
      icon: Building2,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Mansa Realty',
      description: 'Premium real estate services connecting people with their perfect properties and investment opportunities.',
      icon: Home,
      color: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${Math.random() * 5}s` }}
              />
            ))}
          </div>
        </div>

        {/* Parallax Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary to-destructive rounded-full animate-float opacity-60 blur-sm" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-r from-destructive to-primary rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-20 w-6 h-6 bg-destructive/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-fade-in leading-tight">
              Building the
              <span className="block bg-gradient-to-r from-primary via-white to-destructive bg-clip-text text-transparent animate-pulse-slow text-glow">
                Future
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-destructive mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-white/95 mb-12 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.5s' }}>
            MrDGN Group is a <span className="text-primary font-semibold">modern holding company</span> driving innovation across entertainment, construction, and real estate industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-destructive text-white hover:scale-105 transform transition-all duration-300 px-10 py-4 text-lg shadow-glow hover:shadow-glow-intense group">
              <Link to="/about" className="flex items-center gap-3">
                Discover Our Story
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg backdrop-blur-sm hover:scale-105 transform transition-all duration-300 group">
              <Link to="/businesses" className="flex items-center gap-3">
                Explore Our Businesses
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Businesses Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We operate diverse businesses united by a commitment to excellence, innovation, and sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => {
              const IconComponent = subsidiary.icon;
              return (
                <Card 
                  key={subsidiary.name} 
                  className="tile-glassy cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${subsidiary.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {subsidiary.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {subsidiary.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8 py-3">
              <Link to="/businesses" className="flex items-center gap-2">
                Learn More About Our Businesses
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join forces with MrDGN Group and be part of shaping the future across multiple industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3">
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              <Link to="/careers">Explore Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl">MrDGN Group</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                A modern holding company building the future across entertainment, construction, and real estate industries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Businesses</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>MrDGN Entertainment</li>
                <li>MrDGN Construction</li>
                <li>Mansa Realty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MrDGN Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
