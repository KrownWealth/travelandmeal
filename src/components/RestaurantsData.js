"use client"

export const Restaurants  = 
  [
  {
    id:0,
    title: 'Anambra Kitchen',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF',
    imgSrc: '/Assets/Images/restaurants/Anambra kitchen.jpg',
    altText:'anambra kitchen fastfood',
    menu:[
      
    ]
  },
  {
    id:1,
    title: 'Anambra Kitchen',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF',
    imgSrc: '/Assets/Images/restaurants/Anambra kitchen.jpg',
    altText:'anambra kitchen fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Afang Soup',
        imgSrc: '/Assets/Images/menu/afang with semo.jpg',
        altText: 'Afang soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
   riceMenu: [
      {
        name: 'Jollof rice',
        imgSrc: '/Assets/Images/menu/jollof rice.jpg',
        altText: 'jollof rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'fried rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'White Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'White rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Salad',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Salad',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
    ],
   comboMenu: [
      {
        name: 'Vegetable soup with Eba',
        imgSrc: '/Assets/Images/menu/eba with vegetable.jpg',
        altText: 'eba with vegetable soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Yam Porridge',
         imgSrc: '/Assets/Images/menu/yam porridge.jpg',
        altText: 'Yam porridge',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Beef',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'fried pepper turkey',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'peppered chicken',
        price: Number(100.00).toFixed(2),
        description: 'protein'
      },
      {
        name: 'Samond Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'samond fish',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/meatpis.jpg',
        altText: 'meatpie',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Shawarma Roll',
         imgSrc: '/Assets/Images/menu/shawarma roll.jpg',
        altText: 'shawarma roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Spring Roll',
         imgSrc: '/Assets/Images/menu/spring roll.jpg',
        altText: 'spring roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
      {
        name: 'Burger',
         imgSrc: '/Assets/Images/menu/burger.jpg',
        altText: 'burger',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'water',
        price: Number(100.00).toFixed(2),
      },
      {
        name: 'Cocacola',
         imgSrc: '/Assets/Images/menu/coke.jpg',
        altText: 'cocacola',
        price: Number(100.00).toFixed(2),
      },
    ]
  },
  {
    id:2,
    title: 'Bottom Pot',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/Bottom pot.jpg',
    altText:'bottom pot fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Afang Soup',
        imgSrc: '/Assets/Images/menu/afang with semo.jpg',
        altText: 'Afang soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
   riceMenu: [
      {
        name: 'Jollof rice',
        imgSrc: '/Assets/Images/menu/jollof rice.jpg',
        altText: 'jollof rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'fried rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'White Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'White rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Salad',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Salad',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
    ],
   comboMenu: [
      {
        name: 'Vegetable soup with Eba',
        imgSrc: '/Assets/Images/menu/eba with vegetable.jpg',
        altText: 'eba with vegetable soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Yam Porridge',
         imgSrc: '/Assets/Images/menu/yam porridge.jpg',
        altText: 'Yam porridge',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Beef',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'fried pepper turkey',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'peppered chicken',
        price: Number(100.00).toFixed(2),
        description: 'protein'
      },
      {
        name: 'Samond Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'samond fish',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/meatpis.jpg',
        altText: 'meatpie',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Shawarma Roll',
         imgSrc: '/Assets/Images/menu/shawarma roll.jpg',
        altText: 'shawarma roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Spring Roll',
         imgSrc: '/Assets/Images/menu/spring roll.jpg',
        altText: 'spring roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
      {
        name: 'Burger',
         imgSrc: '/Assets/Images/menu/burger.jpg',
        altText: 'burger',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'water',
        price: Number(100.00).toFixed(2),
      },
      {
        name: 'Cocacola',
         imgSrc: '/Assets/Images/menu/coke.jpg',
        altText: 'cocacola',
        price: Number(100.00).toFixed(2),
      },
    ]
  },
  {
    id:3,
    title: 'Glofes Fastfood',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/Ken Republic.jpg',
    altText:'ken clinton fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Okro Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    comboMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Okro Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    riceMenu: [
      {
        name: 'White Rice',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Jollof Rice',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Turkey',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Chicken',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ice-Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Chicken Pie',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Egg-roll',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Doughnut',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Eva water small',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
    ]
  },
  {
    id:4,
    title: 'Continental Place',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/continentalplace.jpg',
    altText:'continental place fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Afang Soup',
        imgSrc: '/Assets/Images/menu/afang with semo.jpg',
        altText: 'Afang soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
   riceMenu: [
      {
        name: 'Jollof rice',
        imgSrc: '/Assets/Images/menu/jollof rice.jpg',
        altText: 'jollof rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'fried rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'White Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'White rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Salad',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Salad',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
    ],
   comboMenu: [
      {
        name: 'Vegetable soup with Eba',
        imgSrc: '/Assets/Images/menu/eba with vegetable.jpg',
        altText: 'eba with vegetable soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Yam Porridge',
         imgSrc: '/Assets/Images/menu/yam porridge.jpg',
        altText: 'Yam porridge',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Beef',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'fried pepper turkey',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'peppered chicken',
        price: Number(100.00).toFixed(2),
        description: 'protein'
      },
      {
        name: 'Samond Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'samond fish',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/meatpis.jpg',
        altText: 'meatpie',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Shawarma Roll',
         imgSrc: '/Assets/Images/menu/shawarma roll.jpg',
        altText: 'shawarma roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Spring Roll',
         imgSrc: '/Assets/Images/menu/spring roll.jpg',
        altText: 'spring roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
      {
        name: 'Burger',
         imgSrc: '/Assets/Images/menu/burger.jpg',
        altText: 'burger',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'water',
        price: Number(100.00).toFixed(2),
      },
      {
        name: 'Cocacola',
         imgSrc: '/Assets/Images/menu/coke.jpg',
        altText: 'cocacola',
        price: Number(100.00).toFixed(2),
      },
    ]
  },
  {
    id:5,
    title: 'Tongue Tells',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/tonguetells.jpg',
    altText:'tonguetells fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Okro Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Bitter-leaf Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ogbonor Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    comboMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Okro Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Bitter-leaf Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ogbonor Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    riceMenu: [
      {
        name: 'White Rice',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Jollof Rice',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ice-Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Chicken Pie',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Egg-roll',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Doughnut',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
      soupMenu: [
        {
          name: 'Egusi Soup',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Egusi Soup',
        },
        {
          name: 'Okro Soup',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Okro Soup',
        },
        {
          name: 'Bitter-leaf Soup',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Bitter-leaf Soup',
        },
        {
          name: 'Ogbonor Soup',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Ogbonor Soup',
        },
      ],
      comboMenu: [
        {
          name: 'Egusi Soup',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Egusi Soup',
        },
        {
          name: 'Okro Soup',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Okro Soup',
        },
        {
          name: 'Bitter-leaf Soup',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Bitter-leaf Soup',
        },
        {
          name: 'Ogbonor Soup',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Ogbonor Soup',
        },
      ],
      riceMenu: [
        {
          name: 'White Rice',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Egusi Soup',
        },
        {
          name: 'Jollof Rice',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Okro Soup',
        },
        {
          name: 'Fried Rice',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Bitter-leaf Soup',
        },
      ],
      proteinMenu: [
        {
          name: 'Cow Meat(Beef)',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Egusi Soup',
        },
        {
          name: 'Turkey',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Okro Soup',
        },
        {
          name: 'Chicken',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Bitter-leaf Soup',
        },
        {
          name: 'Ice-Fish',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Ogbonor Soup',
        },
      ],
      snackMenu: [
        {
          name: 'Meatpie',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Egusi Soup',
        },
        {
          name: 'Chicken Pie',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Okro Soup',
        },
        {
          name: 'Egg-roll',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Bitter-leaf Soup',
        },
        {
          name: 'Doughnut',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Ogbonor Soup',
        },
      ],
      water: [
        {
          name: 'Eva Water big',
          imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Egusi Soup',
        },
        {
          name: 'Eva water small',
           imgSrc: '/Assets/Images/menu/egusi.jpg',
          altText: 'Okro Soup',
        },
    ]
  },
  {
    id:6,
    title: 'Glofes Fastfood',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/Glofes Fastfood.jpg',
    altText:'S.O Glofes fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Okro Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    comboMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Okro Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Bitter-leaf Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ogbonor Soup',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    riceMenu: [
      {
        name: 'White Rice',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Jollof Rice',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Ice-Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Chicken Pie',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
      {
        name: 'Egg-roll',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
      },
      {
        name: 'Doughnut',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
      },
      {
        name: 'Eva water small',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Okro Soup',
      },
    ]
  },
  {
    id:7,
    title: 'FoodHouse',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/FoodHouse.jpg',
    altText:'foodhouse',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Afang Soup',
        imgSrc: '/Assets/Images/menu/afang with semo.jpg',
        altText: 'Afang soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
   riceMenu: [
      {
        name: 'Jollof rice',
        imgSrc: '/Assets/Images/menu/jollof rice.jpg',
        altText: 'jollof rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'fried rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'White Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'White rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Salad',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Salad',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
    ],
   comboMenu: [
      {
        name: 'Vegetable soup with Eba',
        imgSrc: '/Assets/Images/menu/eba with vegetable.jpg',
        altText: 'eba with vegetable soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Yam Porridge',
         imgSrc: '/Assets/Images/menu/yam porridge.jpg',
        altText: 'Yam porridge',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Beef',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'fried pepper turkey',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'peppered chicken',
        price: Number(100.00).toFixed(2),
        description: 'protein'
      },
      {
        name: 'Samond Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'samond fish',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/meatpis.jpg',
        altText: 'meatpie',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Shawarma Roll',
         imgSrc: '/Assets/Images/menu/shawarma roll.jpg',
        altText: 'shawarma roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Spring Roll',
         imgSrc: '/Assets/Images/menu/spring roll.jpg',
        altText: 'spring roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
      {
        name: 'Burger',
         imgSrc: '/Assets/Images/menu/burger.jpg',
        altText: 'burger',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'water',
        price: Number(100.00).toFixed(2),
      },
      {
        name: 'Cocacola',
         imgSrc: '/Assets/Images/menu/coke.jpg',
        altText: 'cocacola',
        price: Number(100.00).toFixed(2),
      },
    ]
  },
  {
    id:8,
    title: 'Smart Fastfood',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
    imgSrc: '/Assets/Images/restaurants/smart fastfood.jpg',
     altText:'smart foodhouse',
     soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Afang Soup',
        imgSrc: '/Assets/Images/menu/afang with semo.jpg',
        altText: 'Afang soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
   riceMenu: [
      {
        name: 'Jollof rice',
        imgSrc: '/Assets/Images/menu/jollof rice.jpg',
        altText: 'jollof rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'fried rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'White Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'White rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Salad',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Salad',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
    ],
   comboMenu: [
      {
        name: 'Vegetable soup with Eba',
        imgSrc: '/Assets/Images/menu/eba with vegetable.jpg',
        altText: 'eba with vegetable soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Yam Porridge',
         imgSrc: '/Assets/Images/menu/yam porridge.jpg',
        altText: 'Yam porridge',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Beef',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'fried pepper turkey',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'peppered chicken',
        price: Number(100.00).toFixed(2),
        description: 'protein'
      },
      {
        name: 'Samond Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'samond fish',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/meatpis.jpg',
        altText: 'meatpie',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Shawarma Roll',
         imgSrc: '/Assets/Images/menu/shawarma roll.jpg',
        altText: 'shawarma roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Spring Roll',
         imgSrc: '/Assets/Images/menu/spring roll.jpg',
        altText: 'spring roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
      {
        name: 'Burger',
         imgSrc: '/Assets/Images/menu/burger.jpg',
        altText: 'burger',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'water',
        price: Number(100.00).toFixed(2),
      },
      {
        name: 'Cocacola',
         imgSrc: '/Assets/Images/menu/coke.jpg',
        altText: 'cocacola',
        price: Number(100.00).toFixed(2),
      },
    ]
  },
  {
    id:9,
    title: 'Akanchawa Restaurant',
    dealings: 'Fast-food',
    location: 'Lagos-Benin Expressway,Ore',
    workDay: 'Mon-Fri',
    workHour: '7am - 5pm',
    rating: 5.0,
    minOrder: 'MIN ORDER OF #2000.00',
   imgSrc: '/Assets/Images/restaurants/Anambra kitchen.jpg',
    altText:'anambra kitchen fastfood',
    soupMenu: [
      {
        name: 'Egusi Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Egusi Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Afang Soup',
        imgSrc: '/Assets/Images/menu/afang with semo.jpg',
        altText: 'Afang soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Bitter-leaf Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Bitter-leaf Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Ogbonor Soup',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Ogbonor Soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
   riceMenu: [
      {
        name: 'Jollof rice',
        imgSrc: '/Assets/Images/menu/jollof rice.jpg',
        altText: 'jollof rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Fried Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'fried rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'White Rice',
         imgSrc: '/Assets/Images/menu/whiterice.jpg',
        altText: 'White rice',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
      {
        name: 'Salad',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Salad',
        price: Number(100.00).toFixed(2),
        description: 'Continental Dishes'
      },
    ],
   comboMenu: [
      {
        name: 'Vegetable soup with Eba',
        imgSrc: '/Assets/Images/menu/eba with vegetable.jpg',
        altText: 'eba with vegetable soup',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Egusi Soup with Semo',
         imgSrc: '/Assets/Images/menu/egusi with semo.jpg',
        altText: 'egusi soup with semo',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
      {
        name: 'Yam Porridge',
         imgSrc: '/Assets/Images/menu/yam porridge.jpg',
        altText: 'Yam porridge',
        price: Number(100.00).toFixed(2),
        description: 'African Delicacies of soup'
      },
    ],
    proteinMenu: [
      {
        name: 'Cow Meat(Beef)',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'Beef',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Turkey',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'fried pepper turkey',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
      {
        name: 'Peppered Chicken',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'peppered chicken',
        price: Number(100.00).toFixed(2),
        description: 'protein'
      },
      {
        name: 'Samond Fish',
         imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'samond fish',
        price: Number(100.00).toFixed(2),
        description: 'Proteins'
      },
    ],
    snackMenu: [
      {
        name: 'Meatpie',
        imgSrc: '/Assets/Images/menu/meatpis.jpg',
        altText: 'meatpie',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Shawarma Roll',
         imgSrc: '/Assets/Images/menu/shawarma roll.jpg',
        altText: 'shawarma roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack Menu'
      },
      {
        name: 'Spring Roll',
         imgSrc: '/Assets/Images/menu/spring roll.jpg',
        altText: 'spring roll',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
      {
        name: 'Burger',
         imgSrc: '/Assets/Images/menu/burger.jpg',
        altText: 'burger',
        price: Number(100.00).toFixed(2),
        description: 'Refreshing Snack'
      },
    ],
    water: [
      {
        name: 'Eva Water big',
        imgSrc: '/Assets/Images/menu/egusi.jpg',
        altText: 'water',
        price: Number(100.00).toFixed(2),
      },
      {
        name: 'Cocacola',
         imgSrc: '/Assets/Images/menu/coke.jpg',
        altText: 'cocacola',
        price: Number(100.00).toFixed(2),
      },
    ]
  },
];
 
export default Restaurants