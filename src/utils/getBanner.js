const banner = [
  {
    id: 1,
    attributes: {
      title: "jammu and kashmir",
      slug: "jammu-kashmir",
      description:
        "Jammu and Kashmir is a popular tourist destination located in the northernmost part of India. It is known for its stunning natural beauty, including the majestic Himalayan Mountains, serene lakes, and lush green forests. The state is also rich in cultural heritage, with many temples, shrines, and palaces reflecting its diverse history. Adventure enthusiasts can indulge in activities like trekking, skiing, and rafting, while nature lovers can enjoy the scenic beauty of the Dal Lake and Amarnath Cave.",
    },
  },
  {
    id: 2,
    attributes: {
      title: "goa",
      slug: "goa",
      description:
        "Goa is a state on the southwestern coast of India within the Konkan region, geographically separated from the Deccan highlands by the Western Ghats.It is located between the Indian states of Maharashtra to the north and Karnataka to the east and south, with the Arabian Sea forming its western coast.One of the biggest tourist attractions in Goa is water sports. Beaches like Baga and Calangute offer jet-skiing, parasailing, banana boat rides, water scooter rides, and more.",
    },
  },
  {
    id: 3,
    attributes: {
      title: "uttarakhand",
      slug: "uttarakhand",
      description:
        "Uttarakhand, located in the northern part of India, is a hidden gem for tourists seeking breathtaking natural beauty and rich cultural heritage. The state boasts rolling hills, serene lakes, and majestic Himalayan Mountains, making it a perfect destination for adventure and scenic beauty. Tourists can enjoy a range of activities in Uttarakhand, including trekking, skiing, and rafting in the mountains, or simply taking in the scenic beauty of the region.",
    },
  },
  {
    id: 4,
    attributes: {
      title: "rajasthan",
      slug: "rajasthan",
      description:
        "Rajasthan ('Land of Kings') is a state in northern India.It is bordered by five other Indian states: Punjab to the north; Haryana and Uttar Pradesh to the northeast; Madhya Pradesh to the southeast; and Gujarat to the southwest.Its major features include the ruins of the Indus Valley civilisation at Kalibangan and Balathal, the Dilwara Temples, a Jain pilgrimage site at Rajasthan's only hill station, Mount Abu, in the ancient Aravalli mountain range and eastern Rajasthan, the Keoladeo National Park of Bharatpur, a World Heritage Site known for its bird life.",
    },
  },
  {
    id: 5,
    attributes: {
      title: "himachal pradesh",
      slug: "himachal-pradesh",
      description:
        "Himachal Pradesh is a state in the northern part of India. Situated in the Western Himalayas, it is one of the thirteen mountain states and is characterized by an extreme landscape featuring several peaks and extensive river systems. Himachal Pradesh is the northernmost state of India and shares borders with the union territories of Jammu and Kashmir and Ladakh to the north, and the states of Punjab to the west, Haryana to the southwest, Uttarakhand to the southeast and a very narrow border with Uttar Pradesh to the south. The Himalayas attracts tourists from all over the world. Experience the romance and adventure of the mountains with our trip and tour package for couples.",
    },
  },
  {
    id: 6,
    attributes: {
      title: "Adventure and Trekking",
      slug: "adventure-and-trekking",
      description:
        "Get ready for thrilling adventures in the great outdoors! Our adventure and trekking tours will take you to amazing places where you can challenge yourself and enjoy the beauty of nature. It's time to explore the wild side of the world.",
    },
  },
  {
    id: 7,
    attributes: {
      title: "Safari and Natural Parks",
      slug: "safari-and-natural-parks",
      description:
        "Come and see incredible wildlife up close in their own homes. Our safari and natural parks tours give you a chance to watch lions, elephants, and beautiful birds in their natural habitats. Get ready to be amazed by the wonders of nature.",
    },
  },
  {
    id: 8,
    attributes: {
      title: "Sea and Beaches",
      slug: "sea-and-beaches",
      description:
        "Relax on beautiful beaches and soak up the sun. Our sea and beach tours are all about enjoying the beach life, whether you want to swim, surf, or just chill in the sand. Let the sea set you free.",
    },
  },
  {
    id: 9,
    attributes: {
      title: "Mountains, Lakes and Rivers",
      slug: "mountains-and-lakes-and-rivers",
      description:
        "Escape to peaceful places where you can be surrounded by mountains, lakes, and rivers. Our tours to these breath-taking locations let you enjoy the beauty of nature and experience local cultures that call these places home.",
    },
  },
  {
    id: 10,
    attributes: {
      title: "Art, History and Cultural Trips",
      slug: "art-and-history-and-cultural-trips",
      description:
        "Travel back in time and discover the richness of human history and culture. Our art, history, and cultural trips take you to ancient ruins, beautiful art, and unique traditions from around the world. It's a journey through time and culture.",
    },
  },
  {
    id: 11,
    attributes: {
      title: "Romance and Honeymoon",
      slug: "romance-and-honeymoon",
      description:
        "Experience pure enchantment with our Romance and Honeymoon getaways. Imagine strolling hand in hand along secluded beaches, savouring candlelit dinners under starry skies, and creating timeless memories with your beloved. Whether it's your honeymoon or a romantic escape, our destinations set the stage for your love story.",
    },
  },
  {
    id: 12,
    attributes: {
      title: "Weekend Escapes",
      slug: "weekend-escapes",
      description:
        "Short on time, big on adventure! Our Weekend Escapes offer quick, rejuvenating journeys. From charming countryside retreats to vibrant city breaks, these getaways balance relaxation and exploration. Pack your bags, leave your worries behind, and make the most of your precious weekends.",
    },
  },
];

export const getBanner = (params) => {
  const bannerData = banner.filter(
    (item) => item.attributes.slug === params.subcategory
  );
  return bannerData;
};
