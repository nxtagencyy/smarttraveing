export const blogsArray = [
  {
    id: 1,
    attributes: {
      title:
        "Exploring Royal Rajasthan: A Tapestry of Culture, Heritage, and Natural Splendor",
      thumbnail_url: "https://ik.imagekit.io/1ytcrgn74/adventure.webp",
      image_url:
        "https://res.cloudinary.com/dmhxdpc8o/image/upload/v1695312107/rajasthan_slide_cb19c0f900.webp",
      destinations: "Rajasthan",
      description:
        "### Exploring Royal Rajasthan: A Tapestry of Culture, Heritage, and Natural Splendor\n" +
        "Traveling to Rajasthan is like stepping into a fairytale. It's a land where history, culture, and nature converge to create a truly regal experience. Known for its opulent palaces, magnificent forts, and vibrant traditions, Rajasthan is the jewel of India's crown. Let's embark on a journey through the royal state of Rajasthan and discover its treasures.\n" +
        "\n" +
        "### Wildlife in Rajasthan: A Safari through the Desert\n" +
        "Rajasthan is not just about arid landscapes; it boasts a diverse wildlife that thrives in its deserts and forests. One of the best places to explore Rajasthan's wildlife is Ranthambhore National Park, famous for its tiger population. You can also visit Sariska Tiger Reserve and Keoladeo National Park, a UNESCO World Heritage site for bird watching.\n" +
        "\n" +
        "### Cultural Extravaganza: Dance, Music, and Cuisine\n" +
        "Rajasthan's culture is as colourful as its landscapes. The state is renowned for its folk dances like Ghoomar and Kalbeliya, soul-stirring music, and delectable cuisine. Savor dishes like Dal Baati Churma and Laal Maas, and witness the lively folk performances during your stay.\n" +
        "\n" +
        "### Heritage and History: Palaces and Forts\n" +
        "Every corner of Rajasthan has a story to tell through its palaces and forts. Explore the grandeur of Jaipur's Amber Fort, the romanticism of Udaipur's City Palace, and the history of Jodhpur's Mehrangarh Fort. Don't miss the unique stepwell architecture at Chand Baori in Abhaneri.\n" +
        "\n" +
        "### Festivals: Celebrations in Every Season\n" +
        "Rajasthan is a land of celebrations with vibrant festivals throughout the year. The Pushkar Camel Fair, the Desert Festival in Jaisalmer, and the colourful Teej festival are some of the best cultural experiences Rajasthan has to offer.\n" +
        "\n" +
        "### Art and Craftsmanship: Treasures of Rajasthan\n" +
        "Rajasthan's artistry is showcased through its intricate handicrafts, including block-printed textiles, gemstone jewellery, and exquisite miniature paintings. Don't forget to shop for souvenirs in the local markets.\n" +
        "\n" +
        "### Best Time to Visit Rajasthan\n" +
        "The best time to visit Rajasthan is during the winter months, from October to March. The weather is pleasant, making it ideal for sightseeing and outdoor activities.\n" +
        "\n" +
        "### Top Places to Visit:\n" +
        "- Jaipur: The Pink City with its iconic Hawa Mahal and Amer Fort.\n" +
        "- Udaipur: The City of Lakes, known for its romantic ambiance.\n" +
        "- Jaisalmer: The Golden City, famous for its desert safaris.\n" +
        "- Jodhpur: The Blue City, home to Mehrangarh Fort.\n" +
        "- Pushkar: A sacred town with the Pushkar Lake and Camel Fair.\n" +
        "\n" +
        "### Offbeat and Unexplored Destinations\n" +
        "While Rajasthan's popular destinations are a must-visit, consider exploring offbeat gems like Bundi, Alwar, and Bikaner for a more serene and authentic experience.\n" +
        "\n" +
        "### Honeymoon in Rajasthan: A Royal Romance\n" +
        "Rajasthan's palatial hotels, candlelit dinners in the desert, and romantic boat rides on Udaipur's lakes make it an enchanting honeymoon destination. The royal treatment and stunning backdrops create memories that last a lifetime.\n" +
        "\n" +
        "Rajasthan is a land where the past meets the present, and every corner exudes a sense of regal charm. From wildlife adventures to cultural immersion and romantic getaways, Rajasthan offers a diverse range of experiences that make it a truly royal destination.\n" +
        "\n" +
        "So, plan your trip to Rajasthan and immerse yourself in the richness of its culture, heritage, and natural beauty. It's a journey you won't soon forget.\n" +
        "\n" +
        "\n",
      slug: "exploring-royal-rajasthan-a-tapestry-of-culture-heritage-and-natural-splendor",
      createdAt: "2023-09-23T12:26:23.916Z",
    },
  },
];

export const getBlogs = (params) => {
  const blogsData = blogsArray.filter(
    (item) => item.attributes.slug === params.slug
  );
  return blogsData;
};
