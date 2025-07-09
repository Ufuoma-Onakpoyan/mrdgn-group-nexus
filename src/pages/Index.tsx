
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Building2, Clapperboard, Home, Target, Eye, Users, Award, Calendar, FileText, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const businesses = [
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
    {
      name: 'Duerent',
      description: 'Revolutionary tech company focused on modernizing real estate rentals and property management solutions.',
      icon: Laptop,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const previewSnippets = [
    {
      title: 'About Us',
      icon: Target,
      description: 'Building tomorrow\'s industries through strategic investments, innovative leadership, and unwavering commitment to excellence.',
      link: '/about',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Our Businesses',
      icon: Building2,
      description: 'Discover how our diverse portfolio of companies is shaping the future across entertainment, construction, and real estate.',
      link: '/businesses',
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'Media',
      icon: FileText,
      description: 'Stay updated with the latest news, press releases, and media coverage about MrDGN Group and our subsidiaries.',
      link: '/media',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const portfolioItems = [
    {
      title: 'Digital Entertainment Leadership',
      description: 'MrDGN Entertainment has produced over 50 innovative projects, reaching more than 1 million viewers worldwide.',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop',
      category: 'Entertainment'
    },
    {
      title: 'Sustainable Construction Excellence',
      description: 'MrDGN Construction has delivered 100+ projects worth over $50M, pioneering green building solutions.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      category: 'Construction'
    },
    {
      title: 'Premium Real Estate Success',
      description: 'Mansa Realty has facilitated $100M+ in transactions with 95% client satisfaction across 500+ properties.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      category: 'Real Estate'
    },
    {
      title: 'Technology Innovation',
      description: 'Duerent is revolutionizing property management with cutting-edge rental platforms and automated solutions.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      category: 'Technology'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        
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
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-8 animate-fade-in leading-tight">
              Building the
              <span className="block bg-gradient-to-r from-primary via-black to-destructive bg-clip-text text-transparent animate-pulse-slow text-glow">
                Future
              </span>
            </h1>
            
            {/* Decorative Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-destructive mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-black/95 mb-12 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.5s' }}>
            MrDGN Group is a <span className="text-primary font-semibold">modern holding company</span> driving innovation across entertainment, construction, and real estate industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-destructive text-white hover:scale-105 transform transition-all duration-300 px-10 py-4 text-lg shadow-glow hover:shadow-glow-intense group">
              <Link to="/about" className="flex items-center gap-3">
                Discover Our Story
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 text-lg backdrop-blur-sm hover:scale-105 transform transition-all duration-300 group">
              <Link to="/businesses" className="flex items-center gap-3">
                Explore Our Businesses
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Preview Snippets Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover MrDGN Group
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our story, businesses, and latest updates through these quick previews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {previewSnippets.map((snippet, index) => {
              const IconComponent = snippet.icon;
              return (
                <Card 
                  key={snippet.title} 
                  className="tile-glassy cursor-pointer group animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${snippet.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {snippet.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {snippet.description}
                    </p>
                    <Button variant="outline" className="w-full">
                      <Link to={snippet.link} className="flex items-center gap-2 justify-center">
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Businesses Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Businesses
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              We operate diverse businesses united by a commitment to excellence, innovation, and sustainable growth.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {businesses.map((business, index) => {
                const IconComponent = business.icon;
                return (
                  <CarouselItem key={business.name} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="bg-white border-2 border-gray-200 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                      <CardContent className="p-8 text-center">
                        <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${business.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-primary transition-colors">
                          {business.name}
                        </h3>
                        <p className="text-black/70 leading-relaxed">
                          {business.description}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8 py-3 bg-black text-white hover:bg-black/90">
              <Link to="/businesses" className="flex items-center gap-2">
                Learn More About Our Businesses
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing the remarkable achievements and innovative work of our subsidiary companies across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.title} 
                className="tile-glassy cursor-pointer group animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
                <li>Duerent</li>
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
