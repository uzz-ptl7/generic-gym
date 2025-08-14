import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      role: "Software Engineer",
      content: "Your Gym completely transformed my approach to fitness. The trainers are incredibly knowledgeable and the community is so supportive. I've never felt stronger!",
      rating: 5,
      achievement: "Lost 30 lbs in 6 months"
    },
    {
      id: 2,
      name: "David Thompson",
      role: "Marketing Manager",
      content: "The facilities are top-notch and the variety of classes keeps me motivated. I've been a member for 2 years and couldn't imagine working out anywhere else.",
      rating: 5,
      achievement: "Gained 15 lbs of muscle"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      role: "Teacher",
      content: "As a busy mom, I love the flexible class schedules and childcare options. The yoga classes have been life-changing for my stress levels and overall well-being.",
      rating: 5,
      achievement: "Reduced stress & improved flexibility"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Entrepreneur",
      content: "The personal trainers here really know their stuff. They helped me recover from an injury and get back to peak performance. Highly recommend!",
      rating: 5,
      achievement: "Fully recovered from injury"
    },
    {
      id: 5,
      name: "Lisa Chen",
      role: "Nurse",
      content: "Your Gym isn't just a gym, it's a community. The support I've received from both staff and fellow members has been incredible throughout my fitness journey.",
      rating: 5,
      achievement: "Completed first marathon"
    },
    {
      id: 6,
      name: "Robert Garcia",
      role: "Engineer",
      content: "The equipment is always well-maintained and the facility is spotless. The 24/7 access means I can work out whenever fits my schedule. Perfect for my lifestyle!",
      rating: 5,
      achievement: "Achieved personal best lifts"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-hero font-bold text-foreground mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                <blockquote className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <div className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                      {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-between lg:flex-row flex-col items-center space-y-2 space-x-4 bg-muted/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <div className="text-foreground font-semibold">
              4.9/5 {t('testimonials.rating')}
            </div>
            <div className="text-muted-foreground">
              {t('testimonials.reviews')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;