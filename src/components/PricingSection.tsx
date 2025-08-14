import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t('pricing.basic'),
      price: "15,000",
      period: t('pricing.month'),
      description: t('pricing.basicDesc'),
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      cta: t('pricing.getStarted')
    },
    {
      name: t('pricing.standard'),
      price: "25,000",
      period: t('pricing.month'),
      description: t('pricing.standardDesc'),
      features: [
        "Everything in Basic",
        "Access to all group classes",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)"
      ],
      popular: true,
      cta: t('pricing.mostPopular')
    },
    {
      name: t('pricing.premium'),
      price: "40,000",
      period: t('pricing.month'),
      description: t('pricing.premiumDesc'),
      features: [
        "Everything in Standard",
        "Unlimited personal training",
        "Massage therapy (2 sessions/month)",
        "Premium locker",
        "Meal planning service",
        "24/7 gym access",
        "Unlimited guest passes"
      ],
      popular: false,
      cta: t('pricing.goPremium')
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-hero font-bold text-foreground mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`card-gradient border-border transition-all duration-300 relative overflow-hidden ${
                plan.popular 
                  ? 'border-primary scale-105 intense-shadow' 
                  : 'hover:border-primary/50 hover:scale-102'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 accent-gradient text-white text-center py-2 font-semibold text-sm">
                  <Star className="inline h-4 w-4 mr-1" />
                  {t('pricing.mostPopular')}
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <h3 className="font-hero text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-hero font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">
                    RWF{plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="px-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-6">
                <Button 
                  className={`w-full font-semibold text-lg py-6 transition-all duration-200 ${
                    plan.popular 
                      ? 'accent-gradient hover:scale-105 glow-red' 
                      : 'bg-secondary hover:bg-primary hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All memberships include access to our mobile app and basic support
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom plan? <span className="text-primary cursor-pointer hover:underline">Contact us</span> for enterprise solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;