// This file is not used anymore, products are created in Stripe and synced to Firestore.
// I am leaving this just in case I need it in the future as a referrence

const products = [
  {
    name: "Acacia honey with dried fruits",
    size: "550g",
    price: 18,
    description:
      "Indulge in the captivating combination of Acacia honey infused with luscious dried fruits, delivering a tantalizing burst of flavors that will transport your taste buds on a delectable journey.",
    src: require("../Assets/acacia-driedfruits.png"),
    type: "honey",
  },
  {
    name: "Acacia honey - pure",
    size: "750g",
    price: 16.5,
    description:
      "Experience the pure essence of Acacia honey, sourced from pristine forests, where each spoonful unveils a delicate and velvety sweetness that lingers on your tongue.",
    src: require("../Assets/acacia.png"),
    type: "honey",
  },
  {
    name: "Meadow honey",
    size: "750g",
    price: 12.5,
    description: "Immerse yourself in the enchanting flavors of our Honey from Meadow Flowers, a vibrant blend of nature's finest blossoms, resulting in a bouquet of floral notes and sweet nectar.",
    src: require("../Assets/meadow.png"),
    type: "honey",
  },
  {
    name: "Sunflower honey",
    size: "750g",
    price: 12,
    description: "Savor the golden richness of our Sunflower honey, harvested from sun-kissed fields, offering a delicate sweetness that dances on your palate.",
    src: require("../Assets/sunflower.png"),
    type: "honey",
  },
  {
    name: "Tilia honey with peaches and nuts",
    size: "550g",
    price: 17,
    description: "Indulge in the delightful fusion of Tilia honey, succulent peaches, and crunchy nuts, creating a harmonious blend of natural sweetness and satisfying texture.",
    src: require("../Assets/tilia-peachesandnuts.png"),
    type: "honey",
  },
  {
    name: "Tilia honey - pure",
    size: "750g",
    price: 16.5,
    description: "Experience the pure essence of Tilia honey, carefully handcrafted with love and tradition, delivering a truly authentic and exquisite flavor.",
    src: require("../Assets/tilia.png"),
    type: "honey",
  },
  {
    name: "Kingston Black Cider",
    size: "Individual bottle",
    price: 3.2,
    description: "Treat your senses to the regal taste of Kingston Black Apple Cider, crafted from handpicked apples, resulting in a perfectly balanced elixir with a touch of royal elegance.",
    src: require("../Assets/kingstonblackcider.png"),
    type: "cider",
  },
  {
    name: "Kingston Black Cider",
    size: "Box of 12",
    price: 34,
    description: "Treat your senses to the regal taste of Kingston Black Apple Cider, crafted from handpicked apples, resulting in a perfectly balanced elixir with a touch of royal elegance.",
    src: require("../Assets/kingstonblackcider.png"),
    type: "cider",
  },
  {
    name: "Roxbury Russet Cider",
    size: "Individual bottle",
    price: 2.8,
    description: "Immerse yourself in the rich heritage of Roxbury Russet Apple Cider, handcrafted with heirloom apples, offering a crisp and tangy delight that embodies the essence of tradition.",
    src: require("../Assets/roxburyrussetcider.png"),
    type: "cider",
  },
  {
    name: "Roxbury Russet Cider",
    size: "Box of 12",
    price: 28,
    description: "Immerse yourself in the rich heritage of Roxbury Russet Apple Cider, handcrafted with heirloom apples, offering a crisp and tangy delight that embodies the essence of tradition.",
    src: require("../Assets/roxburyrussetcider.png"),
    type: "cider",
  },
];

export default products;
