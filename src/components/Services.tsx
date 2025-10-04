import { Heart, Dumbbell, Users, User, Activity, Bike } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Cardio Training',
      description: 'High-intensity cardio workouts to boost your endurance and burn calories effectively.',
    },
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle, increase strength, and sculpt your physique with our comprehensive strength programs.',
    },
    {
      icon: Activity,
      title: 'Yoga & Meditation',
      description: 'Find balance and flexibility through our expertly guided yoga and meditation sessions.',
    },
    {
      icon: Users,
      title: 'Zumba Classes',
      description: 'Dance your way to fitness with energetic Zumba classes that make working out fun and exciting.',
    },
    {
      icon: User,
      title: 'Personal Training',
      description: 'One-on-one personalized training sessions tailored to your specific goals and fitness level.',
    },
    {
      icon: Bike,
      title: 'Spin Classes',
      description: 'High-energy indoor cycling classes that challenge your limits and deliver amazing results.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Discover a wide range of fitness programs designed to help you achieve your goals,
            no matter your fitness level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-red-600"
              >
                <Icon className="w-14 h-14 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
