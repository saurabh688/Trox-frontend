import greenHouse from "assets2/images/green-house.png";
import tools from "assets2/images/tools.png";
import videoConsole from "assets2/images/video-console.png";
import device from "assets2/images/device.png";
import electronics from "assets2/images/electronics.png";
import gaming from "assets2/images/gaming.png";
import kitchen from "assets2/images/kitchen.png";
import sunglasses from "assets2/images/sunglasses.png";
import toys from "assets2/images/toys.png";
import jewelery from "assets2/images/jewelery.png";
import cap from "assets2/images/cap.png";
import AnimalsAndPetSupplies from "assets2/images/Animals_and_Pet_Supplies.png";
import ArtAndEntertainment from "assets2/images/Art_and_Entertainment.png";
import babyToddler from "assets2/images/Baby_and_toddler.png";
import businessAndIndustrial from "assets2/images/Bussiness_and_Industrial.png";
import hardware from "assets2/images/Hardware.png";
import furniture from "assets2/images/furnitures.png";
import foodBeverages from "assets2/images/Food_Beverages.png";
import eBookReaderCases from "assets2/images/Ebook_Reader_Cases.png";
import ereader from "assets2/images/ereader.png";
import mobilePrepaidCards from "assets2/images/Mobile_Prepaid_Cards.png";
import apparelAndAccessories from "assets2/images/Apparel_and_Accessories.png";
import healthAndBeauty from "assets2/images/Health_and_Beauty.png";
import antiPerspirant from "assets2/images/Anti_Perspirant.png";
import bags from "assets2/images/Luggage_and_Bags.png"
import mature from "assets2/images/Mature.png";
import officeSupplies from "assets2/images/office_supplies.png";
import software from "assets2/images/Software.png";
import sportingGoods from "assets2/images/Sporting_Goods.png";
import vehicleAndParts from "assets2/images/Vehicles_and_Parts.png";
import ceremonial from "assets2/images/Ceremonial.png";

const productCategories = [
  {
    id: 0,
    category: 'Home & Kitchen',
    categoryImage: greenHouse
  },
  {
    id: 1,
    category: 'Hardware',
    categoryImage: tools
  },
  {
    id: 2,
    category: 'Video Games',
    categoryImage: videoConsole
  },
  {
    id: 3,
    category: 'Mobile & Tablets',
    categoryImage: device
  },
  {
    id: 4,
    category: 'Electronics',
    categoryImage: electronics
  },
  {
    id: 5,
    category: 'Computers',
    categoryImage: gaming
  },
  {
    id: 6,
    category: 'Kitchen',
    categoryImage: kitchen
  },
  {
    id: 7,
    category: 'Sun Glasses',
    categoryImage: sunglasses
  },
  {
    id: 8,
    category: 'Toys',
    categoryImage: toys
  },
  {
    id: 9,
    category: 'Jewelery',
    categoryImage: jewelery
  },
  {
    id: 10,
    category: 'Hats',
    categoryImage: cap
  },
  {
    id: 11,
    category: 'HOME & KITCHEN',
    categoryImage: greenHouse
  },
  {
    id: 12,
    category: 'HARDWARE',
    categoryImage: tools
  },
  {
    id: 13,
    category: 'VIDEO GAMES',
    categoryImage: videoConsole
  },
  {
    id: 14,
    category: 'Mobile & Tablets',
    categoryImage: device
  },
  {
    id: 15,
    category: 'Electronics',
    categoryImage: electronics
  },
  {
    id: 16,
    category: 'Computers',
    categoryImage: gaming
  },
  {
    id: 17,
    category: 'Kitchen',
    categoryImage: kitchen
  },
  {
    id: 18,
    category: 'Sun Glasses',
    categoryImage: sunglasses
  },
  {
    id: 19,
    category: 'Toys',
    categoryImage: toys
  },
  {
    id: 20,
    category: 'Jewelery',
    categoryImage: jewelery
  },
  {
    id: 21,
    category: 'Hats',
    categoryImage: cap
  }
]


export default function makeCategories(categories: any) {
  let _categories = [];
  let images = [];

  for (let i = 0; i < categories.length; i++) {
    switch (categories[i].categoryName) {
      case ' Animals & Pet Supplies': _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: AnimalsAndPetSupplies
      });
        break;

      case ' Arts & Entertainment': _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: ArtAndEntertainment
      });
        break;

      case ' Apparel & Accessories': _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: apparelAndAccessories
      });
        break;

      case ' Baby & Toddler': _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: babyToddler
      });
        break;

      case " Business & Industrial": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: businessAndIndustrial
      });
        break;

      case " Electronics": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: electronics
      });
        break;

      case "Mobile Phone Pre-Paid Cards": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: mobilePrepaidCards
      });
        break;
      case "E-Book Reader Cases": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: eBookReaderCases
      });
        break;

      case "E-Book Reader Screens & Screen Digitizers": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: ereader
      });
        break;

      case " Food, Beverages & Tobacco": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: foodBeverages
      });
        break;

      case " Furniture": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: furniture
      });
        break;

      case " Hardware": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: hardware
      });
        break;

      case " Health & Beauty": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: healthAndBeauty
      });
        break;
      case "Anti-Perspirant": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: antiPerspirant
      });
        break;
      case " Home & Garden": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: greenHouse
      });
        break;

      case " Luggage & Bags": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: bags
      });
        break;
      case " Mature": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: ArtAndEntertainment
      });
        break;
      case " Media": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: mature
      });
        break;

      case " Office Supplies": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: officeSupplies
      });
        break;
      case " Religious & Ceremonial": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: ceremonial
      });
        break;
      case " Software": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: software
      });
        break;
      case " Sporting Goods": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: sportingGoods
      });
        break;
      case " Toys & Games": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: toys
      });
        break;
      case " Vehicles & Parts": _categories.push({
        id: categories[i].categoryId,
        categoryName: categories[i].categoryName,
        categoryImage: vehicleAndParts
      });
        break;


      default: ;
        break;
    }
  }
  return _categories;
}

export {
  productCategories
};
