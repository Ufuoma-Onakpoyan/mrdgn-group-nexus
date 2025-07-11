
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to stay ahead of industry trends.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We see opportunities where others see challenges, building sustainable businesses for the future.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Our success comes from fostering partnerships and building strong relationships across all sectors.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, delivering exceptional results consistently.',
    },
  ];

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            About MrDGN Group
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building tomorrow's industries through strategic investments, innovative leadership, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to create lasting impact across multiple industries, MrDGN Group has grown from a single entrepreneurial vision into a diversified holding company that shapes the future of entertainment, construction, and real estate.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with the understanding that true success comes from building businesses that not only generate returns but also contribute meaningfully to society. Today, we continue to identify and nurture opportunities that align with our core values of innovation, sustainability, and excellence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we look to the future, MrDGN Group remains committed to expanding our portfolio with businesses that share our vision of creating positive change while delivering exceptional value to our stakeholders.
              </p>
            </div>
            <div className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="relative card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                  alt="Modern office building"
                  className="rounded-lg shadow-2xl image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg transition-opacity duration-300 hover:opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="tile-glassy text-center animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Leadership Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience across diverse industries, driving strategic growth and operational excellence.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl animate-slide-up tile-glassy border border-border">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Experienced Leadership, Visionary Direction
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our executive team combines deep industry expertise with innovative thinking, ensuring that each of our subsidiaries operates at the highest level while contributing to our overall strategic objectives. We believe in empowering our leaders to make bold decisions that drive sustainable growth.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Years of Combined Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground">Industry Sectors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Commitment to Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
