
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
      title: "Address",
      details: ["3 Diana Close, Lost City, Tafelsig", "Mitchell's Plain, Cape Town, 7785"],
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info) => (
                  <Card key={info.key} className="card-hover h-full overflow-hidden">
                    <CardContent className="flex flex-col items-center text-center pt-6">
                      <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-medium mb-3">{info.title}</h3>
                      
                      <Button 
                        variant="outline"
                        size="sm"
                        className="mb-3"
                        onClick={() => toggleInfo(info.key)}
                      >
                        {info.visible ? (
                          <>
                            <EyeOff className="mr-2 h-4 w-4" />
                            Hide Details
                          </>
                        ) : (
                          <>
                            <Eye className="mr-2 h-4 w-4" />
                            Show Details
                          </>
                        )}
                      </Button>
                      
                      {info.visible && (
                        <div className="space-y-1 mt-2 animate-fade-in">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Located in Cape Town</h2>
            <p className="text-muted-foreground mt-2">Cape Town, South Africa</p>
          </div>
          
          <Map 
            center={{ lat: -33.9249, lng: 18.4241 }} 
            zoom={13} 
            className="h-96 rounded-lg shadow-sm" 
          />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
