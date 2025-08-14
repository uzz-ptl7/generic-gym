import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";

const TrainersSection = () => {
  const { t } = useLanguage();
  const trainers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      specialty: "Strength & Conditioning",
      image: trainer1,
      bio: "With 8+ years of experience, Alex specializes in strength training and helps members achieve their muscle-building goals.",
      certifications: ["ACSM Certified", "NASM-CPT"],
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Chen",
      specialty: "Yoga & Mindfulness",
      image: trainer2,
      bio: "Sarah brings zen and balance to your fitness journey with her expertise in yoga, meditation, and holistic wellness.",
      certifications: ["RYT-500", "Mindfulness Coach"],
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 3,
      name: "Marcus Johnson",
      specialty: "HIIT & Cardio",
      image: trainer1,
      bio: "High-energy trainer who'll push you to your limits. Marcus makes cardio fun and effective for maximum results.",
      certifications: ["HIIT Specialist", "Cardio Expert"],
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    },
    {
      id: 4,
      name: "Emma Williams",
      specialty: "CrossFit & Functional Training",
      image: trainer2,
      bio: "Former competitive athlete who brings Olympic-level training techniques to help you reach peak performance.",
      certifications: ["CrossFit Level 2", "FMS Certified"],
      socials: {
        instagram: "#",
        twitter: "#",
        facebook: "#"
      }
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-hero font-bold text-foreground mb-6">
            {t('trainers.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('trainers.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={trainer.id} className="card-gradient border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3 justify-center">
                    <a 
                      href={trainer.socials.instagram} 
                      className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors duration-200"
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={trainer.socials.twitter} 
                      className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors duration-200"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a>
                    <a 
                      href={trainer.socials.facebook} 
                      className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary/40 transition-colors duration-200"
                    >
                      <Facebook className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 text-center">
                <h3 className="font-hero text-xl font-bold text-foreground mb-1">
                  {trainer.name}
                </h3>
                <p className="text-primary font-semibold mb-3">
                  {trainer.specialty}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {trainer.bio}
                </p>
                
                <div className="space-y-1">
                  {trainer.certifications.map((cert, idx) => (
                    <div key={idx} className="inline-block bg-muted/50 rounded-full px-3 py-1 text-xs text-muted-foreground mr-1 mb-1">
                      {cert}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;