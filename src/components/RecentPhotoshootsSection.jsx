import React from 'react';
import { motion } from 'framer-motion';

const RecentPhotoshootsSection = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/Bride-Shining-in-Her-Wedding-Party-Look-scaled-e1771302690887.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/Bride-Shining-in-Her-Wedding-Party-Look-768x1151.webp",
      alt: "Bride Shining in Her Wedding Party Look",
      width: 768,
      height: 1151
    },
    {
      id: 2,
      url: "https://weddingpur.com/wp-content/uploads/2023/12/DSC01599-scaled-e1771479911823.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2023/12/DSC01599-768x512.webp",
      alt: "Best wedding photography studio in Patna - weddingpur",
      width: 768,
      height: 512
    },
    {
      id: 3,
      url: "https://weddingpur.com/wp-content/uploads/2023/12/Indian-bride-with-gramophone-weddingpur-scaled-e1771480369598.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2023/12/Indian-bride-with-gramophone-weddingpur-768x511.webp",
      alt: "Indian bride with gramophone - weddingpur",
      width: 768,
      height: 511
    },
    {
      id: 4,
      url: "https://weddingpur.com/wp-content/uploads/2022/11/Deepika-singh-in-bridal-look-scaled-e1771563719931.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/11/Deepika-singh-in-bridal-look-scaled-e1668245378786-768x512.webp",
      alt: "Deepika-singh-in-bridal-look",
      width: 768,
      height: 512
    },
    {
      id: 5,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/Joyful-Haldi-Smile-Moment-During-Pre-Wedding-Celebration-scaled-e1771221388120.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/Joyful-Haldi-Smile-Moment-During-Pre-Wedding-Celebration-768x512.webp",
      alt: "Golden Haldi Moments of Togetherness",
      width: 768,
      height: 512
    },
    {
      id: 6,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/bride-and-groom-laughing-moment-scaled-e1771304076216.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/bride-and-groom-laughing-moment-768x1152.webp",
      alt: "Where Love Feels Like Home",
      width: 768,
      height: 1152
    },
    {
      id: 7,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/happy-groom-at-wedding-weddingpur-patna-scaled-e1666893682689.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/happy-groom-at-wedding-weddingpur-patna-scaled-e1666893682689-768x1152.webp",
      alt: "Happy groom at wedding",
      width: 768,
      height: 1152
    },
    {
      id: 8,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/indian-bridal-portraits-weddingpur-scaled-e1666892473798.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/indian-bridal-portraits-weddingpur-scaled-e1666892473798-768x1152.webp",
      alt: "Indian bridal portraits",
      width: 768,
      height: 1152
    },
    {
      id: 9,
      url: "https://weddingpur.com/wp-content/uploads/2026/03/Traditional-Bride-Wedding-Outfit-scaled-e1773078623932.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/03/Traditional-Bride-Wedding-Outfit-768x1152.webp",
      alt: "Traditional Bride Wedding Outfit",
      width: 768,
      height: 1152
    },
    {
      id: 10,
      url: "https://weddingpur.com/wp-content/uploads/2023/12/trending-bride-poses-weddingpur-scaled-e1771480244525.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2023/12/trending-bride-poses-weddingpur-768x512.webp",
      alt: "Trending bride poses - weddingpur",
      width: 768,
      height: 512
    },
    {
      id: 11,
      url: "https://weddingpur.com/wp-content/uploads/2022/11/wedding-photography-poses-weddingpur-scaled-e1771562698469.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/11/wedding-photography-poses-weddingpur-scaled-e1668261141688-768x512.webp",
      alt: "Wedding photography poses - weddingpur",
      width: 768,
      height: 512
    },
    {
      id: 12,
      url: "https://weddingpur.com/wp-content/uploads/2023/12/Engagement-Photoshoot-by-weddingpur-scaled-e1703870896153.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2023/12/Engagement-Photoshoot-by-weddingpur-768x1152.webp",
      alt: "Engagement Photoshoot by weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 13,
      url: "https://weddingpur.com/wp-content/uploads/2026/03/wedding-photography-in-Bihar-weddingpur-scaled-e1773261475301.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/03/wedding-photography-in-Bihar-weddingpur-768x1152.webp",
      alt: "Wedding photography in Bihar - weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 14,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/Bride-Dancing-with-Joy-at-Her-Wedding-scaled-e1771303329818.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/Bride-Dancing-with-Joy-at-Her-Wedding-768x512.webp",
      alt: "Girls Just Wanna Dance at the Wedding",
      width: 768,
      height: 512
    },
    {
      id: 15,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/bride-kissing-groom-after-reception-weddingpur-scaled-e1667218643129.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/bride-kissing-groom-after-reception-weddingpur-scaled-e1667218643129-768x1152.webp",
      alt: "Bride kissing groom after reception - weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 16,
      url: "https://weddingpur.com/wp-content/uploads/2022/11/Bride-with-her-sister-in-haldi-function-weddingpur-scaled-e1668322603458.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/11/Bride-with-her-sister-in-haldi-function-weddingpur-scaled-e1668322603458-768x1152.webp",
      alt: "Bride with her sister in haldi function - weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 17,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/bridal-portraits-ideas-for-wedding-scaled-e1666892962276.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/bridal-portraits-ideas-for-wedding-scaled-e1666892962276-768x1152.webp",
      alt: "Bridal portraits ideas for wedding",
      width: 768,
      height: 1152
    },
    {
      id: 18,
      url: "https://weddingpur.com/wp-content/uploads/2023/12/DSC01530-scaled-e1703749041964.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2023/12/DSC01530-768x1152.webp",
      alt: "Best wedding photography studio in Patna - weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 19,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/indian-wedding-couple-weddingpur-scaled-e1771609571501.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/indian-wedding-couple-weddingpur-scaled-e1666893595127-768x512.webp",
      alt: "Indian wedding couple",
      width: 768,
      height: 512
    },
    {
      id: 20,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/bride-and-groom-happy-wedding-night-scaled-e1771304185352.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/bride-and-groom-happy-wedding-night-768x1151.webp",
      alt: "Bride and groom happy wedding night",
      width: 768,
      height: 1151
    },
    {
      id: 21,
      url: "https://weddingpur.com/wp-content/uploads/2026/03/couple-shoot-for-wedding-weddingpur-scaled-e1773261994127.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/03/couple-shoot-for-wedding-weddingpur-768x512.webp",
      alt: "Couple shoot for wedding - weddingpur",
      width: 768,
      height: 512
    },
    {
      id: 22,
      url: "https://weddingpur.com/wp-content/uploads/2022/03/Trending-Bridal-Poses-WEDDINGPUR-scaled-e1647539198859.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/03/Trending-Bridal-Poses-WEDDINGPUR-768x1152.webp",
      alt: "Trending Bridal Poses",
      width: 768,
      height: 1152
    },
    {
      id: 23,
      url: "https://weddingpur.com/wp-content/uploads/2022/03/Trending-Bridal-Poses-of-2022-scaled-e1647539051165.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/03/Trending-Bridal-Poses-of-2022-768x1152.webp",
      alt: "Trending Bridal Poses of 2022",
      width: 768,
      height: 1152
    },
    {
      id: 24,
      url: "https://weddingpur.com/wp-content/uploads/2023/12/Beautiful-bride-weddingpur-1-scaled-e1771480822284.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2023/12/Beautiful-bride-weddingpur-1-768x511.webp",
      alt: "Beautiful bride - weddingpur",
      width: 768,
      height: 511
    },
    {
      id: 25,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/bride-beautifull-wedding-pose-scaled-e1771303518696.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/bride-beautifull-wedding-pose-768x1151.webp",
      alt: "Bride beautiful wedding pose",
      width: 768,
      height: 1151
    },
    {
      id: 26,
      url: "https://weddingpur.com/wp-content/uploads/2026/03/wedding-editorial-shoot-weddingpur-scaled-e1773261531589.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/03/wedding-editorial-shoot-weddingpur-768x1152.webp",
      alt: "Wedding editorial shoot - weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 27,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/wedding-reception-pictures-weddingpur-scaled-e1667219109825.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/wedding-reception-pictures-weddingpur-scaled-e1667219109825-768x1152.webp",
      alt: "Wedding reception pictures - weddingpur",
      width: 768,
      height: 1152
    },
    {
      id: 28,
      url: "https://weddingpur.com/wp-content/uploads/2026/03/Indian-Bridal-Outfit-Ready-for-Wedding-Ceremony-scaled-e1773079449305.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/03/Indian-Bridal-Outfit-Ready-for-Wedding-Ceremony-768x512.webp",
      alt: "Indian Bridal Outfit Ready for Wedding Ceremony",
      width: 768,
      height: 512
    },
    {
      id: 29,
      url: "https://weddingpur.com/wp-content/uploads/2022/03/Marraige-purpose-photography-in-Patna-scaled-e1647539357933.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/03/Marraige-purpose-photography-in-Patna-768x1152.webp",
      alt: "Marriage purpose photography in Patna",
      width: 768,
      height: 1152
    },
    {
      id: 30,
      url: "https://weddingpur.com/wp-content/uploads/2022/10/Grooms-assesories-weddingpur-scaled-e1771609684394.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2022/10/Grooms-assesories-weddingpur-scaled-e1666893727805-768x512.webp",
      alt: "Grooms accessories - weddingpur",
      width: 768,
      height: 512
    },
    {
      id: 31,
      url: "https://weddingpur.com/wp-content/uploads/2026/02/Bride-and-Groom-Ring-Exchange-Moment-scaled-e1771304049713.webp",
      thumbnail: "https://weddingpur.com/wp-content/uploads/2026/02/Bride-and-Groom-Ring-Exchange-Moment-768x512.webp",
      alt: "Bride and Groom Ring Exchange Moment",
      width: 768,
      height: 512
    }
  ];

  // Masonry/Justified layout - Group images into rows with different widths
  const getRowLayout = () => {
    const rows = [];
    let i = 0;
    
    while (i < galleryImages.length) {
      // Create rows with varying number of items and widths
      if (i % 5 === 0 && i + 2 <= galleryImages.length) {
        // Row with 2 items: 30% + 70%
        rows.push({
          items: [galleryImages[i], galleryImages[i + 1]],
          widths: ['w-2/5', 'w-3/5']
        });
        i += 2;
      } 
      else if (i % 7 === 0 && i + 3 <= galleryImages.length) {
        // Row with 3 items: 25% + 25% + 50%
        rows.push({
          items: [galleryImages[i], galleryImages[i + 1], galleryImages[i + 2]],
          widths: ['w-1/4', 'w-1/4', 'w-1/2']
        });
        i += 3;
      }
      else if (i % 3 === 0 && i + 3 <= galleryImages.length) {
        // Row with 3 equal items
        rows.push({
          items: [galleryImages[i], galleryImages[i + 1], galleryImages[i + 2]],
          widths: ['w-1/3', 'w-1/3', 'w-1/3']
        });
        i += 3;
      }
      else if (i % 2 === 0 && i + 2 <= galleryImages.length) {
        // Row with 2 equal items
        rows.push({
          items: [galleryImages[i], galleryImages[i + 1]],
          widths: ['w-1/2', 'w-1/2']
        });
        i += 2;
      }
      else if (i + 4 <= galleryImages.length) {
        // Row with 4 items
        rows.push({
          items: [galleryImages[i], galleryImages[i + 1], galleryImages[i + 2], galleryImages[i + 3]],
          widths: ['w-1/4', 'w-1/4', 'w-1/4', 'w-1/4']
        });
        i += 4;
      }
      else {
        // Single item row
        rows.push({
          items: [galleryImages[i]],
          widths: ['w-full']
        });
        i += 1;
      }
    }
    
    return rows;
  };

  const rows = getRowLayout();

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gray-900">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Recent Photoshoots
          </h2>
        </motion.div>

        {/* Justified Gallery Layout */}
        <div className="w-full">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex flex-wrap gap-[2px] mb-[2px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: rowIndex * 0.05 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {row.items.map((image, imgIndex) => (
                <motion.a
                  key={image.id}
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${row.widths[imgIndex]} overflow-hidden group cursor-pointer`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[auto] overflow-hidden">
                    <img
                      src={image.thumbnail}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <svg className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                        <span className="text-xs md:text-sm font-medium">View Photo</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RecentPhotoshootsSection;