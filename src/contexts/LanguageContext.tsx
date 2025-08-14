import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'rw' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About', 
    'nav.classes': 'Classes',
    'nav.trainers': 'Trainers',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.joinNow': 'Join Now',
    'nav.gymName': 'Your Gym',
    
    // Hero Section
    'hero.title': 'Transform Your Body,',
    'hero.titleHighlight': 'Transform Your Life',
    'hero.subtitle': 'Join our state-of-the-art gym and achieve your fitness goals with expert trainers, cutting-edge equipment, and a community that supports your journey.',
    'hero.getStarted': 'Get Started',
    'hero.viewClasses': 'View Classes',
    'hero.activeMembers': 'Active Members',
    'hero.expertTrainers': 'Expert Trainers',
    'hero.access': 'Access',
    
    // About Section
    'about.title': 'About Your Gym',
    'about.subtitle': 'Empowering Communities Through Fitness',
    'about.mission': 'Our mission is to make fitness accessible to everyone. We believe that a healthy body leads to a healthy mind and a prosperous community.',
    'about.commitment': 'We are committed to providing world-class facilities, expert guidance, and a supportive environment where every member can achieve their fitness goals.',
    'about.community': 'Join our growing community of fitness enthusiasts and be part of the fitness revolution.',
    
    // Classes Section  
    'classes.title': 'Our Fitness Programs',
    'classes.subtitle': 'Choose from our diverse range of classes designed for all fitness levels',
    'classes.yoga.title': 'Yoga & Meditation',
    'classes.yoga.description': 'Find inner peace and flexibility with our yoga sessions led by certified instructors.',
    'classes.hiit.title': 'HIIT Training',
    'classes.hiit.description': 'High-intensity interval training to burn calories and build endurance quickly.',
    'classes.weightlifting.title': 'Strength Training',
    'classes.weightlifting.description': 'Build muscle and increase strength with our comprehensive weightlifting programs.',
    'classes.learnMore': 'Learn More',
    
    // About Section features
    'about.features.personalizedTraining': 'Personalized Training',
    'about.features.personalizedTrainingDesc': 'Customized workout plans tailored to your specific goals and fitness level.',
    'about.features.expertTrainers': 'Expert Trainers',
    'about.features.expertTrainersDesc': 'Certified professionals with years of experience to guide your journey.',
    'about.features.provenResults': 'Proven Results',
    'about.features.provenResultsDesc': 'Thousands of success stories from members who achieved their goals.',
    'about.features.access247': '24/7 Access',
    'about.features.access247Desc': 'Train on your schedule with round-the-clock gym access.',
    'about.missionTitle': 'Our Mission',
    'about.missionDesc1': 'At FitRwanda, we believe fitness is a journey, not a destination. Our mission is to provide a supportive, motivating environment where every member can achieve their personal best.',
    'about.missionDesc2': 'With state-of-the-art equipment, expert trainers, and a community that celebrates every victory, we\'re here to help you transform not just your body, but your entire lifestyle.',
    'about.startJourney': 'Start Your Journey',

    // Classes Section
    'classes.hiitTitle': 'HIIT Training',
    'classes.hiitDesc': 'High-intensity interval training for maximum calorie burn and fitness improvement.',
    'classes.yogaTitle': 'Yoga & Mindfulness',
    'classes.yogaDesc': 'Flow through poses while building strength, flexibility, and inner peace.',
    'classes.strengthTitle': 'Strength Training',
    'classes.strengthDesc': 'Build muscle and strength with our comprehensive weightlifting programs.',
    'classes.crossfitTitle': 'CrossFit',
    'classes.crossfitDesc': 'Varied functional movements performed at high intensity to improve overall fitness.',
    'classes.duration': 'Duration',
    'classes.capacity': 'Capacity',
    'classes.intensity': 'Intensity',
    'classes.benefits': 'Benefits',
    'classes.viewAll': 'View All Classes',

    // Trainers Section
    'trainers.title': 'Meet Our Expert Trainers',
    'trainers.subtitle': 'Our certified trainers are passionate about helping you achieve your fitness goals with personalized guidance and motivation.',

    // Pricing Section
    'pricing.title': 'Choose Your Membership',
    'pricing.subtitle': 'Flexible membership plans designed to fit your lifestyle and budget. No hidden fees, cancel anytime.',
    'pricing.basic': 'Basic',
    'pricing.standard': 'Standard',
    'pricing.premium': 'Premium',
    'pricing.basicDesc': 'Perfect for getting started with your fitness journey',
    'pricing.standardDesc': 'Most popular choice for serious fitness enthusiasts',
    'pricing.premiumDesc': 'Ultimate fitness experience with premium perks',
    'pricing.getStarted': 'Get Started',
    'pricing.mostPopular': 'Most Popular',
    'pricing.goPremium': 'Go Premium',
    'pricing.month': '/month',

    // Testimonials Section
    'testimonials.title': 'What Our Members Say',
    'testimonials.subtitle': 'Don\'t just take our word for it. Hear from real members who\'ve transformed their lives at FitRwanda.',
    'testimonials.rating': 'Average Rating',
    'testimonials.reviews': 'Based on 500+ reviews',

    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your fitness journey? Contact us today!',
    'contact.phone': '+250 788 123 456',
    'contact.email': 'info@fitrwanda.rw',
    'contact.address': 'KN 15 Ave, Kigali City Center, Rwanda',
    'contact.hours': 'Mon-Sun: 5:00 AM - 11:00 PM',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.sendMessage': 'Send us a Message',
    'contact.visitUs': 'Visit Us',
    'contact.callUs': 'Call Us',
    'contact.emailUs': 'Email Us',
    'contact.followUs': 'Follow Us',
    'contact.socialDesc': 'Stay updated with our latest news, events, and fitness tips!',
    'contact.mapComing': 'Interactive Map Coming Soon',

    // Footer Section
    'footer.description': 'Transform your body and mind with our state-of-the-art facilities, expert trainers, and supportive community. Your fitness journey starts here.',
    'footer.quickLinks': 'Quick Links',
    'footer.programs': 'Programs',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': 'All rights reserved.',
  },
  rw: {
    // Navigation
    'nav.home': 'Ahabanza',
    'nav.about': 'Ibyerekeye',
    'nav.classes': 'Amasomo',
    'nav.trainers': 'Abatoza',
    'nav.pricing': 'Ibiciro',
    'nav.contact': 'Kuvugana',
    'nav.joinNow': 'Injira Ubu',
    'nav.gymName': 'Your Gym',
    
    // Hero Section
    'hero.title': 'Ubwiza bw\'Umubiri,',
    'hero.titleHighlight': 'Ubwiza bw\'Ubuzima',
    'hero.subtitle': 'Injira muri gym yacu igezweho kandi ugere ku ntego zawe z\'imyitozo hamwe n\'abatoza beza, ibikoresho bigezweho, n\'umuryango ugufasha mu rugendo rwawe.',
    'hero.getStarted': 'Tangira',
    'hero.viewClasses': 'Reba Amasomo',
    'hero.activeMembers': 'Abanyamuryango',
    'hero.expertTrainers': 'Abatoza',
    'hero.access': 'Ubushobozi',
    
    // About Section
    'about.title': 'Ibyerekeye Your Gym',
    'about.subtitle': 'Gushimangira Imitwe binyuze mu myitozo',
    'about.mission': 'Intego yacu ni ugushaka imyitozo ishobora kuboneka ku bose. Tuzera ko umubiri mwiza uganisha ku bwenge bwiza no ku muryango utera imbere.',
    'about.commitment': 'Twiyemeje gutanga ibikoresho byiza cyane, ubuyobozi bw\'impuguke, n\'ibidukikije bifasha aho buri munyamuryango ashobora kugera ku ntego ze z\'imyitozo.',
    'about.community': 'Injira mu muryango wacu ukura w\'abakunda imyitozo kandi ube umwe mu mpinduramatwara z\'imyitozo.',
    
    // Classes Section
    'classes.title': 'Gahunda Zacu z\'Imyitozo',
    'classes.subtitle': 'Hitamo mu masomo yacu atandukanye yashyizweho kuri bose',
    'classes.yoga.title': 'Yoga na Gutekereza',
    'classes.yoga.description': 'Shakisha amahoro y\'imbere n\'ubunyangamugayo n\'amasomo yacu ya yoga ayobowe n\'abayobozi bemewe.',
    'classes.hiit.title': 'Imyitozo Ikaze',
    'classes.hiit.description': 'Imyitozo ikaze y\'ibihe bike yo gutwika calories no kubaka ubushobozi vuba.',
    'classes.weightlifting.title': 'Imyitozo y\'Imitsi',
    'classes.weightlifting.description': 'Kubaka imitsi no kongera imbaraga n\'gahunda zacu zuzuye z\'imyitozo y\'imitsi.',
    'classes.learnMore': 'Menya Byinshi',
    
    // About Section features
    'about.features.personalizedTraining': 'Imyitozo Yihariye',
    'about.features.personalizedTrainingDesc': 'Gahunda z\'imyitozo zihariye ku ntego zawe n\'urwego rwawe rw\'ubuzima.',
    'about.features.expertTrainers': 'Abatoza Beza',
    'about.features.expertTrainersDesc': 'Abashinzwe bemewe n\'ubunararibonye bw\'imyaka myinshi bo kugufasha mu rugendo rwawe.',
    'about.features.provenResults': 'Ibisubizo Byemejwe',
    'about.features.provenResultsDesc': 'Ibihumbi by\'inkuru z\'intsinzi z\'abanyamuryango bageze ku ntego zabo.',
    'about.features.access247': 'Ubushobozi 24/7',
    'about.features.access247Desc': 'Witoza ku gahunda yawe hamwe no kwinjira mu gym igihe cyose.',
    'about.missionTitle': 'Intego Yacu',
    'about.missionDesc1': 'Muri Your Gym, tuzera ko imyitozo ari urugendo, ntabwo ari aho tugeze. Intego yacu ni gutanga ibidukikije bifasha, bitera imbere aho buri munyamuryango ashobora kugera ku cyiza cye.',
    'about.missionDesc2': 'Hamwe n\'ibikoresho bigezweho, abatoza beza, n\'umuryango wishimira buri ntsinzi, turi hano kugufasha guhindura ntabwo umubiri gusa, ahubwo n\'ubuzima bwawe bwose.',
    'about.startJourney': 'Tangira Urugendo Rwawe',

    // Classes Section
    'classes.hiitTitle': 'Imyitozo Ikaze',
    'classes.hiitDesc': 'Imyitozo ikaze y\'ibihe bike yo gutwika calories no gutezimbere ubuzima.',
    'classes.yogaTitle': 'Yoga na Gutekereza',
    'classes.yogaDesc': 'Koresha imiterere mu kubaka imbaraga, ubunyangamugayo, n\'amahoro y\'imbere.',
    'classes.strengthTitle': 'Imyitozo y\'Imitsi',
    'classes.strengthDesc': 'Kubaka imitsi n\'imbaraga n\'gahunda zacu zuzuye z\'imyitozo y\'imitsi.',
    'classes.crossfitTitle': 'CrossFit',
    'classes.crossfitDesc': 'Imyitozo itandukanye ikoreshwa mu bunyangamugayo bwinshi kugira ngo habeho iterambere rusange.',
    'classes.duration': 'Igihe',
    'classes.capacity': 'Ubushobozi',
    'classes.intensity': 'Ubukaze',
    'classes.benefits': 'Inyungu',
    'classes.viewAll': 'Reba Amasomo Yose',

    // Trainers Section
    'trainers.title': 'Menyane n\'Abatoza Bacu Beza',
    'trainers.subtitle': 'Abatoza bacu bemewe bashishikajwe no kugufasha kugera ku ntego zawe z\'imyitozo hamwe n\'ubuyobozi n\'gushishikariza.',

    // Pricing Section
    'pricing.title': 'Hitamo Ubwiyunge Bwawe',
    'pricing.subtitle': 'Gahunda z\'ubwiyunge zinoze zagenewe kubana n\'ubuzima bwawe n\'amafaranga yawe. Ntago hari ibiciro bihishe, hagarika igihe cyose.',
    'pricing.basic': 'Ibanze',
    'pricing.standard': 'Bisanzwe',
    'pricing.premium': 'Byiza cyane',
    'pricing.basicDesc': 'Byiza kuri batangiye urugendo rwabo rw\'imyitozo',
    'pricing.standardDesc': 'Ihitamo rikunzwe cyane ku bakunda imyitozo',
    'pricing.premiumDesc': 'Uburambe bukomeye bw\'imyitozo hamwe n\'ibintu byiza',
    'pricing.getStarted': 'Tangira',
    'pricing.mostPopular': 'Byakunzwe Cyane',
    'pricing.goPremium': 'Genda Premium',
    'pricing.month': '/ukwezi',

    // Testimonials Section
    'testimonials.title': 'Ibyo Abanyamuryango Bacu Bavuga',
    'testimonials.subtitle': 'Ntutafate ijambo ryacu gusa. Umve ku banyamuryango nyakuri bahinduye ubuzima bwabo muri Your Gym.',
    'testimonials.rating': 'Amanota Rusange',
    'testimonials.reviews': 'Hashingiwe ku masuzuma 500+',

    // Contact Section
    'contact.title': 'Duhere',
    'contact.subtitle': 'Witeguye gutangira urugendo rwawe rw\'imyitozo? Duhamagare uyu munsi!',
    'contact.phone': '+250 788 123 456',
    'contact.email': 'info@fitrwanda.rw',
    'contact.address': 'KN 15 Ave, Hagati ya Kigali, Rwanda',
    'contact.hours': 'Kuwa-Muri: 5:00 AM - 11:00 PM',
    'contact.form.name': 'Amazina Yose',
    'contact.form.email': 'Imeri',
    'contact.form.message': 'Ubutumwa Bwawe',
    'contact.form.send': 'Ohereza Ubutumwa',
    'contact.sendMessage': 'Duoherezeho Ubutumwa',
    'contact.visitUs': 'Dusurane',
    'contact.callUs': 'Duhamagare',
    'contact.emailUs': 'Dutumireho Imeri',
    'contact.followUs': 'Dukuriken',
    'contact.socialDesc': 'Komeza uhagarariye amakuru yacu mashya, ibyabaye, n\'amabwiriza y\'imyitozo!',
    'contact.mapComing': 'Ikarita Ikora Vuba',

    // Footer Section
    'footer.description': 'Hindura umubiri wawe n\'ubwenge bwawe hamwe n\'ibikoresho byacu bigezweho, abatoza beza, n\'umuryango ugufasha. Urugendo rwawe rw\'imyitozo rutangira hano.',
    'footer.quickLinks': 'Ihuza Byihuse',
    'footer.programs': 'Gahunda',
    'footer.contactInfo': 'Amakuru yo Kuvugana',
    'footer.copyright': 'Uburenganzira bwose burahawe.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.classes': 'Cours',
    'nav.trainers': 'Entraîneurs',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.joinNow': 'Rejoignez-nous',
    'nav.gymName': 'Your Gym',
    
    // Hero Section
    'hero.title': 'Transformez Votre Corps,',
    'hero.titleHighlight': 'Transformez Votre Vie',
    'hero.subtitle': 'Rejoignez notre salle de sport moderne et atteignez vos objectifs de fitness avec des entraîneurs experts, des équipements de pointe et une communauté qui soutient votre parcours.',
    'hero.getStarted': 'Commencer',
    'hero.viewClasses': 'Voir les Cours',
    'hero.activeMembers': 'Membres Actifs',
    'hero.expertTrainers': 'Entraîneurs',
    'hero.access': 'Accès',
    
    // About Section
    'about.title': 'À Propos de Your Gym',
    'about.subtitle': 'Autonomiser les Communautés par le Fitness',
    'about.mission': 'Notre mission est de rendre le fitness accessible à tous. Nous croyons qu\'un corps sain mène à un esprit sain et à une communauté prospère.',
    'about.commitment': 'Nous nous engageons à fournir des installations de classe mondiale, des conseils d\'experts et un environnement de soutien où chaque membre peut atteindre ses objectifs de fitness.',
    'about.community': 'Rejoignez notre communauté croissante d\'enthousiastes du fitness et faites partie de la révolution du fitness.',
    
    // Classes Section
    'classes.title': 'Nos Programmes de Fitness',
    'classes.subtitle': 'Choisissez parmi notre gamme diversifiée de cours conçus pour tous les niveaux',
    'classes.yoga.title': 'Yoga et Méditation',
    'classes.yoga.description': 'Trouvez la paix intérieure et la flexibilité avec nos séances de yoga dirigées par des instructeurs certifiés.',
    'classes.hiit.title': 'Entraînement HIIT',
    'classes.hiit.description': 'Entraînement par intervalles à haute intensité pour brûler des calories et développer l\'endurance rapidement.',
    'classes.weightlifting.title': 'Musculation',
    'classes.weightlifting.description': 'Développez vos muscles et augmentez votre force avec nos programmes complets de musculation.',
    'classes.learnMore': 'En Savoir Plus',
    
    // About Section features
    'about.features.personalizedTraining': 'Entraînement Personnalisé',
    'about.features.personalizedTrainingDesc': 'Plans d\'entraînement personnalisés adaptés à vos objectifs et niveau de forme physique.',
    'about.features.expertTrainers': 'Entraîneurs Experts',
    'about.features.expertTrainersDesc': 'Professionnels certifiés avec des années d\'expérience pour guider votre parcours.',
    'about.features.provenResults': 'Résultats Prouvés',
    'about.features.provenResultsDesc': 'Milliers d\'histoires de succès de membres qui ont atteint leurs objectifs.',
    'about.features.access247': 'Accès 24/7',
    'about.features.access247Desc': 'Entraînez-vous selon votre horaire avec un accès 24h/24 à la salle de sport.',
    'about.missionTitle': 'Notre Mission',
    'about.missionDesc1': 'Chez Your Gym, nous croyons que le fitness est un voyage, pas une destination. Notre mission est de fournir un environnement de soutien et motivant où chaque membre peut atteindre son meilleur niveau.',
    'about.missionDesc2': 'Avec des équipements de pointe, des entraîneurs experts et une communauté qui célèbre chaque victoire, nous sommes là pour vous aider à transformer non seulement votre corps, mais tout votre mode de vie.',
    'about.startJourney': 'Commencez Votre Parcours',

    // Classes Section
    'classes.hiitTitle': 'Entraînement HIIT',
    'classes.hiitDesc': 'Entraînement par intervalles à haute intensité pour une combustion maximale des calories et une amélioration de la forme physique.',
    'classes.yogaTitle': 'Yoga et Pleine Conscience',
    'classes.yogaDesc': 'Enchaînez les poses tout en développant force, flexibilité et paix intérieure.',
    'classes.strengthTitle': 'Musculation',
    'classes.strengthDesc': 'Développez vos muscles et votre force avec nos programmes complets de musculation.',
    'classes.crossfitTitle': 'CrossFit',
    'classes.crossfitDesc': 'Mouvements fonctionnels variés exécutés à haute intensité pour améliorer la forme physique globale.',
    'classes.duration': 'Durée',
    'classes.capacity': 'Capacité',
    'classes.intensity': 'Intensité',
    'classes.benefits': 'Avantages',
    'classes.viewAll': 'Voir Tous les Cours',

    // Trainers Section
    'trainers.title': 'Rencontrez Nos Entraîneurs Experts',
    'trainers.subtitle': 'Nos entraîneurs certifiés sont passionnés par vous aider à atteindre vos objectifs de fitness avec des conseils personnalisés et de la motivation.',

    // Pricing Section
    'pricing.title': 'Choisissez Votre Adhésion',
    'pricing.subtitle': 'Plans d\'adhésion flexibles conçus pour s\'adapter à votre style de vie et votre budget. Pas de frais cachés, résiliez à tout moment.',
    'pricing.basic': 'Basique',
    'pricing.standard': 'Standard',
    'pricing.premium': 'Premium',
    'pricing.basicDesc': 'Parfait pour commencer votre parcours fitness',
    'pricing.standardDesc': 'Choix le plus populaire pour les passionnés de fitness sérieux',
    'pricing.premiumDesc': 'Expérience fitness ultime avec des avantages premium',
    'pricing.getStarted': 'Commencer',
    'pricing.mostPopular': 'Le Plus Populaire',
    'pricing.goPremium': 'Aller Premium',
    'pricing.month': '/mois',

    // Testimonials Section
    'testimonials.title': 'Ce Que Disent Nos Membres',
    'testimonials.subtitle': 'Ne nous croyez pas sur parole. Écoutez de vrais membres qui ont transformé leur vie chez Your Gym.',
    'testimonials.rating': 'Note Moyenne',
    'testimonials.reviews': 'Basé sur plus de 500 avis',

    // Contact Section
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à commencer votre parcours fitness? Contactez-nous aujourd\'hui!',
    'contact.phone': '+250 788 123 456',
    'contact.email': 'info@fitrwanda.rw',
    'contact.address': 'KN 15 Ave, Centre-ville de Kigali, Rwanda',
    'contact.hours': 'Lun-Dim: 5h00 - 23h00',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.message': 'Votre Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.sendMessage': 'Envoyez-nous un Message',
    'contact.visitUs': 'Visitez-nous',
    'contact.callUs': 'Appelez-nous',
    'contact.emailUs': 'Écrivez-nous',
    'contact.followUs': 'Suivez-nous',
    'contact.socialDesc': 'Restez informé de nos dernières nouvelles, événements et conseils fitness!',
    'contact.mapComing': 'Carte Interactive Bientôt Disponible',

    // Footer Section
    'footer.description': 'Transformez votre corps et votre esprit avec nos installations de pointe, nos entraîneurs experts et notre communauté de soutien. Votre parcours fitness commence ici.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.programs': 'Programmes',
    'footer.contactInfo': 'Informations de Contact',
    'footer.copyright': 'Tous droits réservés.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};