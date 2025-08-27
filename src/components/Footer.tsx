import { Link } from "react-router-dom";

const Footer = () => {
  const businesses = [
    {
      name: "MrDGN Entertainment",
      logo: "/lovable-uploads/5a1e9e6d-359c-4888-95d7-1840fc4884ef.png"
    },
    {
      name: "MrDGN Construction", 
      logo: "/lovable-uploads/86d4e27b-f590-4639-9308-ccc5bdfeae48.png"
    },
    {
      name: "Mansa Luxury Realty",
      logo: "/lovable-uploads/c0a9609c-c44e-4d32-9510-8ff760c58f7d.png"
    },
    {
      name: "DueRent",
      logo: "/lovable-uploads/duerent-logo.png"
    }
  ];

  return (
    <footer className="bg-muted text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/1111f865-b4cf-408c-ab09-da8f7b8323f5.png" 
                alt="MrDGN Group Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A modern holding company building the future across entertainment, construction, and real estate industries.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Businesses</h4>
            <ul className="space-y-3">
              {businesses.map((business) => (
                <li key={business.name} className="flex items-center space-x-3">
                  <img 
                    src={business.logo} 
                    alt={`${business.name} Logo`}
                    className="h-6 w-6 object-contain"
                  />
                  <span className="text-muted-foreground hover:text-foreground transition-colors">
                    {business.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-foreground transition-colors" 
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/businesses" 
                  className="hover:text-foreground transition-colors" 
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Our Businesses
                </Link>
              </li>
              <li>
                <Link 
                  to="/media" 
                  className="hover:text-foreground transition-colors" 
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Media
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers" 
                  className="hover:text-foreground transition-colors" 
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-foreground transition-colors" 
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 MrDGN Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;