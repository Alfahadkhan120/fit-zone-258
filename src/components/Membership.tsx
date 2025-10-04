import { Check } from 'lucide-react';

export default function Membership() {
  const plans = [
    {
      name: 'Monthly',
      price: '49',
      duration: 'per month',
      features: [
        'Access to all gym equipment',
        'Group fitness classes',
        'Locker room facilities',
        'Free WiFi',
        'Fitness assessment',
      ],
      popular: false,
    },
    {
      name: 'Quarterly',
      price: '129',
      duration: 'for 3 months',
      features: [
        'All Monthly plan features',
        '1 personal training session',
        'Nutrition consultation',
        'Guest pass (2 per month)',
        'Priority class booking',
      ],
      popular: true,
    },
    {
      name: 'Annual',
      price: '449',
      duration: 'per year',
      features: [
        'All Quarterly plan features',
        '4 personal training sessions',
        'Free gym merchandise',
        'Unlimited guest passes',
        'Priority support',
        'Spa access',
      ],
      popular: false,
    },
  ];

  return (
    <section id="membership" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Membership <span className="text-red-600">Plans</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan that fits your lifestyle and fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'border-4 border-red-600 scale-105' : 'border border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-red-600">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2">{plan.duration}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold btn-animate">
                  Sign Up Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
