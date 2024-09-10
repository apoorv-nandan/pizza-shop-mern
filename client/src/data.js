const pizzas = [
    {
      name: "Margherita",
      sizes: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      bestseller:false,
      category: "veg",
      image: "https://th.bing.com/th/id/OIP.j86g4V_1moaGJwfqg9hUMgAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
      description: "Classic delight with 100% real mozzarella cheese",
    },
    {
      name: "Farmhouse",
      sizes: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      bestseller:true,
      category: "veg",
      image: "https://th.bing.com/th/id/OIP.j86g4V_1moaGJwfqg9hUMgAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
      description:
        "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    },
    {
      name: "Veggie Paradise",
      sizes: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      bestseller:true,
      category: "veg",
      description:
        "The awesome foursome! Golden corn, black olives, capsicum, red paprika",
      image: "https://th.bing.com/th/id/OIP.j86g4V_1moaGJwfqg9hUMgAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
    },
    {
      name: "Chicken Golden Delight",
      sizes: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      bestseller:false,
      category: "nonveg",
      image: "https://th.bing.com/th/id/OIP.j86g4V_1moaGJwfqg9hUMgAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
      description:
        "Double pepper barbecue chicken, golden corn and extra cheese, true delight",
    },
    {
      name: "Chicken Pepperoni",
      sizes: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      bestseller:true,
      category: "nonveg",
      image: "https://th.bing.com/th/id/OIP.j86g4V_1moaGJwfqg9hUMgAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
      description:
        "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
    },
    {
      name: "Indi Chicken Tikka",
      sizes: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      bestseller:false,
      category: "nonveg",
      image: "https://th.bing.com/th/id/OIP.j86g4V_1moaGJwfqg9hUMgAAAA?w=360&h=360&rs=1&pid=ImgDetMain",
      description:
        "The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
  ];
  export default pizzas;