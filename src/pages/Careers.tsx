
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, Users, TrendingUp, Award } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Project Manager',
      department: 'MrDGN Construction',
      location: 'Downtown Office',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      description: 'Lead construction projects from conception to completion, managing teams and ensuring quality delivery.',
    },
    {
      title: 'Content Producer',
      department: 'MrDGN Entertainment',
      location: 'Creative Studio',
      type: 'Full-time',
      salary: '$60,000 - $85,000',
      description: 'Create engaging digital content across multiple platforms, working with creative teams on innovative projects.',
    },
    {
      title: 'Real Estate Advisor',
      department: 'Mansa Realty',
      location: 'Sales Office',
      type: 'Full-time',
      salary: '$50,000 + Commission',
      description: 'Guide clients through property transactions, providing expert advice and exceptional service.',
    },
    {
      title: 'Business Development Manager',
      department: 'MrDGN Group',
      location: 'Headquarters',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Identify and develop new business opportunities across our portfolio of companies.',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work alongside talented professionals in a supportive, team-oriented environment.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear advancement paths and opportunities to grow across multiple business units.',
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health coverage, retirement plans, and performance-based bonuses.',
    },
  ];

  return (
    <div className="min-h-screen page-transition">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Join Our Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Build your career with MrDGN Group and help shape the future across entertainment, construction, and real estate industries.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a dynamic organization that values innovation, growth, and making a positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card 
                  key={benefit.title} 
                  className="card-hover text-center animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities across our portfolio of companies.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card 
                key={position.title} 
                className="card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1 mb-6 lg:mb-0">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {position.title}
                        </h3>
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {position.salary}
                        </div>
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <Button size="lg" className="w-full lg:w-auto px-8">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Hiring Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application and resume through our online portal.' },
              { step: '2', title: 'Initial Screening', description: 'Our HR team will review your application and conduct a phone interview.' },
              { step: '3', title: 'Team Interview', description: 'Meet with department managers and potential team members.' },
              { step: '4', title: 'Final Decision', description: 'Receive feedback and, if selected, a competitive offer package.' },
            ].map((item, index) => (
              <Card 
                key={item.step} 
                className="text-center card-hover animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
