export const products = [
  {
    id: 1,
    name: 'Yogurt',
    imgUri:
      'https://www.pcrm.org/sites/default/files/berries-nondairy-yogurt.jpg',
    price: 16000,
  },
  {
    id: 2,
    name: 'Roti Kering',
    imgUri:
      'https://i.pinimg.com/originals/c2/19/fc/c219fc542be718191920bb248e81076d.jpg',
    price: 10000,
  },
  {
    id: 3,
    name: 'Soup',
    imgUri:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-4325965.jpg?quality=90&resize=500%2C454',
    price: 8000,
  },
  {
    id: 4,
    name: 'Sandwich',
    imgUri:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/egg-cress-club-sandwich_0-43a103c.jpg?quality=90&resize=768,574',
    price: 12000,
  },
  {
    id: 5,
    name: 'Salad',
    imgUri:
      'https://www.olivetomato.com/wp-content/uploads/2019/12/Green-salad-with-feta.jpeg',
    price: 12000,
  },
  {
    id: 6,
    name: 'Pizza',
    imgUri:
      'https://gimmedelicious.com/wp-content/uploads/2014/03/Cauliflower-Crust-Pizza-1-500x500.jpg',
    price: 36000,
  },
  {
    id: 7,
    name: 'Burger',
    imgUri:
      'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-5.jpg',
    price: 26000,
  },
  {
    id: 8,
    name: 'Jagung Bakar',
    imgUri:
      'https://cdn.idntimes.com/content-images/post/20191117/1-e3aed6c20939d8dd5aa25b14018117f9.jpg',
    price: 6000,
  },
  {
    id: 9,
    name: 'Sushi',
    imgUri:
      'https://www.justonecookbook.com/wp-content/uploads/2020/01/Sushi-Rolls-Maki-Sushi-%E2%80%93-Hosomaki-1117-I.jpg',
    price: 10000,
  },
  {
    id: 10,
    name: 'Mie Goreng',
    imgUri:
      'https://www.masakapahariini.com/wp-content/uploads/2018/04/cara-membuat-mie-goreng-telur.jpg',
    price: 8000,
  },
];

export const productAdded = products.filter((product) => {
  return product.id === products.id;
});
