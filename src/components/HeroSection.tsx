import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [counts, setCounts] = useState({ members: 0, trainers: 0 });
  const { t } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const animateCount = (target: number, key: 'members' | 'trainers') => {
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 30);
    };

    const timer = setTimeout(() => {
      animateCount(1200, 'members');
      animateCount(25, 'trainers');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center py-8 md:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}{" "}
            <span className="text-primary">{t('hero.titleHighlight')}</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="accent-gradient font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform duration-200 glow-red"
              onClick={() => scrollToSection("#about")}
            >
              {t('hero.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-background font-semibold text-lg px-8 py-4 backdrop-blur-sm bg-white/10"
              onClick={() => scrollToSection("#classes")}
            >
              <Play className="mr-2 h-5 w-5" />
              {t('hero.viewClasses')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in-right">
              <div className="text-3xl md:text-4xl font-hero font-bold text-primary mb-2">{counts.members}+</div>
              <div className="text-gray-200 font-medium">{t('hero.activeMembers')}</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-hero font-bold text-primary mb-2">{counts.trainers}+</div>
              <div className="text-gray-200 font-medium">{t('hero.expertTrainers')}</div>
            </div>
            <div className="text-center animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-hero font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-200 font-medium">{t('hero.access')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;