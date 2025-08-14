import { Target, Users, Trophy, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import aboutImage from "@/assets/about-gym.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Target,
      title: t('about.features.personalizedTraining'),
      description: t('about.features.personalizedTrainingDesc')
    },
    {
      icon: Users,
      title: t('about.features.expertTrainers'),
      description: t('about.features.expertTrainersDesc')
    },
    {
      icon: Trophy,
      title: t('about.features.provenResults'),
      description: t('about.features.provenResultsDesc')
    },
    {
      icon: Clock,
      title: t('about.features.access247'),
      description: t('about.features.access247Desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-hero font-bold text-foreground mb-6">
            {t('about.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-hero font-bold text-foreground">
              {t('about.missionTitle')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.missionDesc1')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.missionDesc2')}
            </p>
            <Button 
              size="lg"
              className="accent-gradient font-semibold hover:scale-105 transition-transform duration-200"
            >
              {t('about.startJourney')}
            </Button>
          </div>

          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Modern gym interior" 
              className="rounded-2xl card-shadow w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-hero font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;