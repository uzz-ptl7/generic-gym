import { Dumbbell, Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), href: "#home" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.classes'), href: "#classes" },
    { label: t('nav.trainers'), href: "#trainers" },
    { label: t('nav.pricing'), href: "#pricing" },
    { label: t('nav.contact'), href: "#contact" }
  ];

  const programs = [
    { label: t('classes.hiitTitle'), href: "#" },
    { label: t('classes.yogaTitle'), href: "#" },
    { label: t('classes.strengthTitle'), href: "#" },
    { label: t('classes.crossfitTitle'), href: "#" },
    { label: "Personal Training", href: "#" },
    { label: "Group Classes", href: "#" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gym-black border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="font-hero text-2xl font-bold text-foreground">
                {t('nav.gymName')}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gym-gray flex items-center justify-center hover:bg-primary transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-hero text-lg font-bold text-foreground mb-6">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-hero text-lg font-bold text-foreground mb-6">
              {t('footer.programs')}
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {program.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-hero text-lg font-bold text-foreground mb-6">
              {t('footer.contactInfo')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">
                    {t('contact.address')}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href={`tel:${t('contact.phone')}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${t('contact.email')}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} {t('nav.gymName')}. {t('footer.copyright')}
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <p className="text-muted-foreground mx-2">
                Made with ❤️ in Rwanda by the{" "}
                <a 
                  href="https://www.sitecraftersz.co/" 
                  className="text-primary hover:text-primary/80 transition-colors underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Sitecrafters Team
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;