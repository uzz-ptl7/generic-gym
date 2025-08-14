import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.visitUs'),
      content: t('contact.address'),
      link: "#"
    },
    {
      icon: Phone,
      title: t('contact.callUs'),
      content: t('contact.phone'),
      link: `tel:${t('contact.phone')}`
    },
    {
      icon: Mail,
      title: t('contact.emailUs'),
      content: t('contact.email'),
      link: `mailto:${t('contact.email')}`
    },
    {
      icon: Clock,
      title: "Hours",
      content: t('contact.hours'),
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-hero font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-hero text-foreground">
                {t('contact.sendMessage')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background border-border focus:border-primary"
                    placeholder={t('contact.form.email')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                    placeholder={t('contact.form.message')}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full accent-gradient font-semibold hover:scale-105 transition-transform duration-200"
                  size="lg"
                >
                  {t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.link.startsWith('#') ? (
                      <p className="text-muted-foreground">
                        {info.content}
                      </p>
                    ) : (
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="card-gradient border-border">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">
                      {t('contact.mapComing')}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t('contact.address')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="card-gradient border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-hero text-xl font-bold text-foreground mb-4">
                  {t('contact.followUs')}
                </h3>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  {t('contact.socialDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;