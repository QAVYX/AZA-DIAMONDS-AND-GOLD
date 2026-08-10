import ringImg from '@/assets/images/product_solitaire_ring.png';
import necklaceImg from '@/assets/images/featured_earrings_exact.jpg';
import earringsImg from '@/assets/images/featured_necklace_exact.jpg';
import gold18kImg from '@/assets/images/collection_18k_exact.jpg';
import gold14kImg from '@/assets/images/collection_9k_exact.jpg';
import gold9kImg from '@/assets/images/collection_14k_exact.jpg';

export const featuredProductsData = [
  // 3 Diamond Products
  {
    id: 'diamond-solitaire-ring',
    name: 'Diamond Solitaire Ring',
    subTitle: 'A timeless masterpiece featuring a brilliant certified diamond, designed to symbolize elegance, love, and everlasting beauty.',
    description: 'A timeless masterpiece featuring a brilliant certified diamond, designed to symbolize elegance, love, and everlasting beauty.',
    image: ringImg,
    categoryKey: 'diamond',
    categoryTag: 'Solitaire Ring',
    goldPurity: '18K Yellow Gold',
    diamondGrade: 'VVS-EF Solitaire'
  },
  {
    id: 'diamond-necklace-collection',
    name: 'Diamond Necklace Collection',
    subTitle: 'Exquisite diamond necklaces crafted with exceptional brilliance, perfect for weddings, celebrations, and everyday luxury.',
    description: 'Exquisite diamond necklaces crafted with exceptional brilliance, perfect for weddings, celebrations, and everyday luxury.',
    image: necklaceImg,
    categoryKey: 'diamond',
    categoryTag: 'Diamond Necklace',
    goldPurity: '18K White Gold',
    diamondGrade: 'Certified VVS Diamonds'
  },
  {
    id: 'diamond-earrings-collection',
    name: 'Diamond Earrings Collection',
    subTitle: 'Sparkling diamond earrings crafted with precision and elegance, designed to add brilliance to every celebration and everyday style.',
    description: 'Sparkling diamond earrings crafted with precision and elegance, designed to add brilliance to every celebration and everyday style.',
    image: earringsImg,
    categoryKey: 'diamond',
    categoryTag: 'Diamond Earrings',
    goldPurity: '18K White & Yellow Gold',
    diamondGrade: 'Precision Set Solitaires'
  },
  // 3 Gold Products
  {
    id: '18k-gold-collection',
    name: '18K Gold Collection',
    subTitle: 'Premium 18K gold jewellery crafted with unmatched purity, radiance, and timeless craftsmanship.',
    description: 'Premium 18K gold jewellery crafted with unmatched purity, radiance, and timeless craftsmanship.',
    image: gold18kImg,
    categoryKey: 'gold',
    categoryTag: '18K Gold Jewellery',
    goldPurity: '18K BIS Hallmarked Gold',
    diamondGrade: 'Pure Gold Series'
  },
  {
    id: '14k-gold-collection',
    name: '14K Gold Collection',
    subTitle: 'The perfect balance of beauty, strength, and durability designed for everyday elegance.',
    description: 'The perfect balance of beauty, strength, and durability designed for everyday elegance.',
    image: gold14kImg,
    categoryKey: 'gold',
    categoryTag: '14K Gold Jewellery',
    goldPurity: '14K BIS Hallmarked Gold',
    diamondGrade: 'Lightweight Gold'
  },
  {
    id: '9k-gold-collection',
    name: '9K Gold Collection',
    subTitle: 'Affordable modern luxury ornaments with lasting shine, crafted for every celebration.',
    description: 'Affordable modern luxury ornaments with lasting shine, crafted for every celebration.',
    image: gold9kImg,
    categoryKey: 'gold',
    categoryTag: '9K Gold Jewellery',
    goldPurity: '9K BIS Hallmarked Gold',
    diamondGrade: 'Everyday Ornaments'
  }
];
