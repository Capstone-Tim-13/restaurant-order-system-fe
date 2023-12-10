// Format Kategori
const categoriMap = {
  1: 'Apprtizer',
  2: 'Dessert',
  3: 'Ala Carte',
  4: 'Paket Hemat',
  5: 'Minum',
};
const formatCategory = (category) => {
  return categoriMap[category];
};

export default formatCategory;
