
const foodItems =[
  {
    id: 0,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 1,
    img:'/Assets/Images/cuisines/egusi-2.jpg',
    title: 'Egusi Soup'
  },
  {
    id: 2,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 3,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 4,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 5,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 6,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 7,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 8,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  },
  {
    id: 9,
    img:'/Assets/Images/cuisines/egusi.png',
    title: 'Egusi Soup'
  }
]

export async function getStaticPaths() {
  const paths = foodItems.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id, 10);
  const selectedFoodItem = foodItems.find((item) => item.id === id);

  return {
    props: {
      selectedFoodItem,
    },
  };
}