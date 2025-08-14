import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, Users, Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import hiitImage from "@/assets/hiit-class.jpg";
import yogaImage from "@/assets/yoga-class.jpg";
import weightliftingImage from "@/assets/weightlifting.jpg";

const ClassesSection = () => {
  const { t } = useLanguage();
  
  const classes = [
    {
      id: 1,
      name: t('classes.hiitTitle'),
      description: t('classes.hiitDesc'),
      image: hiitImage,
      duration: "45 min",
      capacity: "12 people",
      intensity: "High",
      benefits: ["Burns fat fast", "Improves cardio", "Builds endurance"]
    },
    {
      id: 2,
      name: t('classes.yogaTitle'),
      description: t('classes.yogaDesc'),
      image: yogaImage,
      duration: "60 min",
      capacity: "15 people",
      intensity: "Low",
      benefits: ["Increases flexibility", "Reduces stress", "Improves balance"]
    },
    {
      id: 3,
      name: t('classes.strengthTitle'),
      description: t('classes.strengthDesc'),
      image: weightliftingImage,
      duration: "50 min",
      capacity: "8 people",
      intensity: "High",
      benefits: ["Builds muscle", "Increases strength", "Boosts metabolism"]
    },
    {
      id: 4,
      name: t('classes.crossfitTitle'),
      description: t('classes.crossfitDesc'),
      image: hiitImage,
      duration: "60 min",
      capacity: "10 people",
      intensity: "Very High",
      benefits: ["Full body workout", "Builds community", "Improves athleticism"]
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case "Low": return "text-green-500";
      case "High": return "text-yellow-500";
      case "Very High": return "text-red-500";
      default: return "text-primary";
    }
  };

  return (
    <section id="classes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-hero font-bold text-foreground mb-6">
            {t('classes.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('classes.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {classes.map((classItem, index) => (
            <Card key={classItem.id} className="card-gradient border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={classItem.image} 
                  alt={classItem.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-hero text-xl font-bold text-white mb-1">
                    {classItem.name}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {classItem.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {classItem.duration}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {classItem.capacity}
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-4 w-4 mr-1 text-primary" />
                    <span className={getIntensityColor(classItem.intensity)}>
                      {classItem.intensity}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-semibold text-foreground">Benefits:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {classItem.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  {t('classes.learnMore')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="accent-gradient font-semibold hover:scale-105 transition-transform duration-200"
          >
            {t('classes.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;