import { Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-red-600">FitZone</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
              alt="Gym facility"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Welcome to FitZone
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At FitZone, we believe fitness is not just a destination, but a journey.
              Since our founding, we've been dedicated to helping individuals transform
              their lives through comprehensive fitness programs, state-of-the-art equipment,
              and personalized training.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our mission is to create a welcoming, supportive environment where everyone
              can achieve their fitness goals, regardless of their starting point. With
              certified trainers, diverse classes, and a vibrant community, FitZone is
              more than a gym – it's your fitness family.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <Target className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              To empower individuals to achieve their fitness goals through expert guidance,
              cutting-edge facilities, and unwavering support.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <Award className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Certified Trainers
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Our team of certified professionals brings years of experience and
              personalized attention to help you reach your peak performance.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
            <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Community First
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Join a supportive community of like-minded individuals who motivate,
              inspire, and celebrate every milestone together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
