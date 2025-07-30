
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Clapperboard, Home, ArrowRight, Star, Users, TrendingUp, ExternalLink } from 'lucide-react';
const constructionLogo = '/lovable-uploads/1111f865-b4cf-408c-ab09-da8f7b8323f5.png';
const entertainmentLogo = '/lovable-uploads/247b0056-2438-4aa8-bbf3-b007a494534b.png';
const realtyLogo = '/lovable-uploads/7a230ae3-e77c-495a-88d3-8a8da0abca26.png';

const Businesses = () => {
  const businesses = [
    {
      name: 'MrDGN Entertainment',
      description: 'Leading the future of digital entertainment through innovative content creation, immersive experiences, and cutting-edge media production.',
      icon: Clapperboard,
      logo: '/lovable-uploads/5a1e9e6d-359c-4888-95d7-1840fc4884ef.png',
      website: 'https://entertainment.mrdgngroup.com/',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=400&fit=crop',
      services: ['Content Production', 'Digital Media', 'Event Management', 'Brand Partnerships'],
      stats: ['50+ Projects Completed', '1M+ Audience Reached', '25+ Brand Partners'],
    },
    {
      name: 'MrDGN Construction',
      description: 'Building tomorrow\'s infrastructure with sustainable practices, innovative construction technologies, and unwavering commitment to quality.',
      icon: Building2,
      logo: '/lovable-uploads/86d4e27b-f590-4639-9308-ccc5bdfeae48.png',
      website: 'https://construction.mrdgngroup.com/',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      services: ['Commercial Construction', 'Residential Development', 'Infrastructure Projects', 'Green Building Solutions'],
      stats: ['100+ Projects Delivered', '₦50M+ in Contracts', '15+ Years Experience'],
    },
    {
      name: 'Mansaluxe Realty',
      description: 'Connecting people with exceptional properties through personalized service, market expertise, and innovative real estate solutions.',
      icon: Home,
      logo: '/lovable-uploads/c0a9609c-c44e-4d32-9510-8ff760c58f7d.png',
      website: 'https://mansaluxerealty.mrdgngroup.com/',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      services: ['Property Sales', 'Investment Advisory', 'Property Management', 'Market Analysis'],
      stats: ['500+ Properties Sold', '₦100M+ Transaction Volume', '95% Client Satisfaction'],
    },
    {
      name: 'DueRent',
      description: 'Revolutionizing property management with cutting-edge rental platforms, automated solutions, and streamlined tenant experiences.',
      icon: Home,
      logo: null,
      website: 'https://duerent.com/',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      services: ['Property Management', 'Rental Platforms', 'Automated Solutions', 'Tenant Management'],
      stats: ['1000+ Properties Managed', '99% Uptime', '24/7 Support'],
    },
  ];

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Our Businesses
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover how our diverse portfolio of companies is shaping the future across entertainment, construction, and real estate industries.
          </p>
        </div>
      </section>

      {/* Businesses Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each of our subsidiaries operates with autonomy while benefiting from our shared resources, expertise, and strategic vision.
            </p>
          </div>

          <div className="space-y-16">
            {businesses.map((business, index) => {
              const IconComponent = business.icon;
              const isEven = index % 2 === 0;
              
              return (
                 <div 
                  key={business.name} 
                  className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? 'animate-fade-in-left' : 'animate-fade-in-right'} ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}>
                    <div className="flex items-center mb-4">
                      {business.logo ? (
                        <div className="w-48 h-16 flex items-center justify-start">
                          <img 
                            src={business.logo} 
                            alt={`${business.name} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ) : (
                        <h3 className="text-3xl font-bold text-foreground">
                          {business.name}
                        </h3>
                      )}
                    </div>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {business.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Services</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {business.services.map((service) => (
                          <div key={service} className="flex items-center text-muted-foreground">
                            <Star className="w-4 h-4 text-primary mr-2" />
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {business.stats.map((stat) => (
                          <div key={stat} className="flex items-center text-muted-foreground">
                            <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                            {stat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        className="button-hover hover-scale"
                        onClick={() => window.open(business.website, '_blank')}
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <Card className="overflow-hidden tile-glassy hover-slide">
                      <div className="relative">
                        <img 
                          src={business.image} 
                          alt={business.name}
                          className="w-full h-64 lg:h-80 object-cover image-hover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${business.color} opacity-20 transition-opacity duration-300 hover:opacity-30`}></div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Synergies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Creating Synergies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our businesses work together to create unique opportunities and deliver enhanced value to our clients and partners.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="tile-glassy text-center animate-bounce-in">
              <CardContent className="p-8">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary hover-scale" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Shared Expertise
                </h3>
                <p className="text-muted-foreground">
                  Cross-pollination of knowledge and skills across our portfolio companies drives innovation and efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="tile-glassy text-center animate-bounce-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <Building2 className="w-12 h-12 mx-auto mb-4 text-primary hover-scale" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Integrated Solutions
                </h3>
                <p className="text-muted-foreground">
                  Our companies collaborate to offer comprehensive solutions that span multiple industries and services.
                </p>
              </CardContent>
            </Card>

            <Card className="tile-glassy text-center animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary hover-scale" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Strategic Growth
                </h3>
                <p className="text-muted-foreground">
                  Coordinated growth strategies and shared resources amplify the success of each business unit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;
