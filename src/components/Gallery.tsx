export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      alt: 'Modern gym equipment',
    },
    {
      url: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg',
      alt: 'Group fitness class',
    },
    {
      url: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg',
      alt: 'Personal training session',
    },
    {
      url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      alt: 'Cardio area',
    },
    {
      url: 'https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg',
      alt: 'Yoga class',
    },
    {
      url: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg',
      alt: 'Weight training area',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-red-600">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Take a visual tour of our state-of-the-art facilities, passionate trainers,
            and vibrant community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
