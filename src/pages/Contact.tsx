
import { useState } from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Eye, EyeOff } from 'lucide-react';

const Contact = () => {
  const [visibleInfo, setVisibleInfo] = useState({
    phone: false,
    email: false,
    address: false
  });
  
  const toggleInfo = (key: 'phone' | 'email' | 'address') => {
    setVisibleInfo(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const contactInfo = [
    {
      key: 'phone' as const,
      icon: Phone,
      title: "Phone",
      details: ["+27 69 497 9617", "+27 72 689 1205"],
      visible: visibleInfo.phone
    },
    {
      key: 'email' as const,
      icon: Mail,
      title: "Email",
      details: ["majietwaqar97@gmail.com"],
      visible: visibleInfo.email
    },
    {
      key: 'address' as const,
      icon: MapPin,
      title: "Location",
      details: ["Cape town, South Africa"],
      visible: visibleInfo.address
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16" style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-6 text-white">Contact Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-white leading-relaxed">
              Have a question or want to work together? Feel free to get in touch.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Information */}
      <section className="section-container py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {/* Contact Information - Now first as requested */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.key} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-3 rounded-full inline-flex mr-4">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        
                        <div className="flex-grow">
                          <h4 className="font-medium">{info.title}</h4>
                          
                          <div className="flex items-center mt-1">
                            <Button 
                              variant="outline"
                              size="sm"
                              className="text-xs mr-4"
                              onClick={() => toggleInfo(info.key)}
                            >
                              {info.visible ? (
                                <>
                                  <EyeOff className="mr-1 h-3 w-3" />
                                  Hide
                                </>
                              ) : (
                                <>
                                  <Eye className="mr-1 h-3 w-3" />
                                  Show
                                </>
                              )}
                            </Button>
                            
                            {info.visible && (
                              <div className="text-sm text-muted-foreground animate-fade-in">
                                {info.details.map((detail, i) => (
                                  <p key={i}>{detail}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Contact Form - Now second as requested */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
            
            {/* Map - Now third/last as requested */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Located in Cape Town</h2>
              <Map 
                center={{ lat: -33.9249, lng: 18.4241 }} 
                zoom={13} 
                className="h-[500px] rounded-lg shadow-sm" 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
