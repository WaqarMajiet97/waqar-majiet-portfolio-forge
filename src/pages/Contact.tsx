
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 69 497 9617", "+27 72 689 1205"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["majietwaqar97@gmail.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["3 Diana Close, Lost City, Tafelsig", "Mitchell's Plain, Cape Town, 7785"],
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Have a question or want to work together? Feel free to get in touch.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="bg-primary/10 p-3 rounded-full inline-flex mb-4">
                  <info.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Send Me a Message</h2>
          <ContactForm />
        </div>
      </section>
      
      {/* Map or Visual Element */}
      <section className="mt-16 bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Located in Cape Town</h2>
            <p className="text-gray-600 mt-2">Mitchell's Plain, Cape Town, South Africa</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto text-primary/60 mb-4" />
              <p className="text-gray-600">
                Map visualization placeholder - Cape Town, South Africa
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
