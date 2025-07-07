
import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Video, ExternalLink } from 'lucide-react';

const Media = () => {
  const newsItems = [
    {
      type: 'Press Release',
      title: 'MrDGN Group Announces Strategic Expansion into New Markets',
      date: '2024-01-15',
      excerpt: 'The holding company reveals plans for significant growth across all three subsidiary companies in the coming year.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
    },
    {
      type: 'News Article',
      title: 'Innovation in Construction: MrDGN Construction Leads Sustainable Building Practices',
      date: '2024-01-10',
      excerpt: 'Recognition for pioneering green construction technologies and sustainable development practices.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=250&fit=crop',
    },
    {
      type: 'Media Coverage',
      title: 'MrDGN Entertainment Partners with Major Streaming Platform',
      date: '2024-01-05',
      excerpt: 'Strategic partnership announcement marks significant milestone in digital content distribution.',
      image: 'https://images.unsplash.com/photo-1478720568477-b2709d01a0fc?w=400&h=250&fit=crop',
    },
    {
      type: 'Industry Report',
      title: 'Mansa Realty Reports Record Growth in Premium Property Sector',
      date: '2023-12-20',
      excerpt: 'Year-end analysis shows exceptional performance in luxury real estate transactions and client satisfaction.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop',
    },
  ];

  const resources = [
    {
      title: 'Company Fact Sheet',
      description: 'Comprehensive overview of MrDGN Group and its subsidiaries',
      type: 'PDF',
      icon: FileText,
    },
    {
      title: 'Executive Biographies',
      description: 'Leadership profiles and background information',
      type: 'PDF',
      icon: FileText,
    },
    {
      title: 'Company Overview Video',
      description: 'Visual introduction to MrDGN Group and our businesses',
      type: 'Video',
      icon: Video,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Media Center
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stay updated with the latest news, announcements, and insights from MrDGN Group and our portfolio companies.
          </p>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recent updates and announcements from across our organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card 
                key={item.title} 
                className="hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3">
              View All News & Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Media Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Media Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download comprehensive information about our company, leadership, and business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card 
                  key={resource.title} 
                  className="hover-lift text-center cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button className="w-full">
                      Download {resource.type}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Press Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Press Inquiries
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            For media inquiries, interview requests, or additional information, please contact our press team.
          </p>
          
          <Card className="shadow-xl animate-fade-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Media Relations
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <strong>Email:</strong> press@mrdgngroup.com
                    </p>
                    <p className="text-gray-600">
                      <strong>Phone:</strong> +1 (555) 123-4567 ext. 200
                    </p>
                    <p className="text-gray-600">
                      <strong>Hours:</strong> Monday - Friday, 9AM - 6PM EST
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Response
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We aim to respond to all media inquiries within 24 hours during business days.
                  </p>
                  <Button>
                    Send Press Inquiry
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Media;
