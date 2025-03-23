import { MongoClient, ServerApiVersion } from "mongodb";

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

export const client = new MongoClient(MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const cars = [
  {
    car_info: {
      make: "Ferrari",
      model: "488",
      category: "Supercar",
      fuel: "Gasoline",
      doors: "2",
      year: "2018",
      price: "388000",
      seats: "2",
      odometer: "68507",
      cc: "4800",
      exterior_color: "Black with yellow",
      interior_color: "Black leather",
      features: [],
      transmission: "Auto",
      description: "This is a great Pista",
    },
    pictures: [
      "https://img.jamesedition.com/listing_images/2023/01/23/14/51/01/8fd83e24-0bfc-4562-8285-f62a0bd74097/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/01/23/14/51/05/e9511ae2-93a1-45ea-9f3e-b21b730c47ca/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/01/23/14/51/00/1111f0ea-3896-45ad-8f97-0c7648cf401c/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/01/23/14/51/01/86bb8b79-c137-4783-88d2-654e16760564/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/01/23/14/51/01/24954460-1e6e-4575-82a5-1e47d2c2f980/je/1100xxs.jpg",
    ],
  },
  {
    car_info: {
      make: "Porsche",
      model: "Carrera GT",
      category: "Supercar",
      fuel: "Gasoline",
      doors: "2",
      year: "2006",
      price: "1,579,127",
      seats: "2",
      odometer: "14.315",
      cc: "5700",
      exterior_color: "Silver",
      interior_color: "Brown",
      features: [],
      transmission: "Manual",
      description:
        "One of not a lot Porsche. They have been going up in value as it is said to be the last analog supercar",
    },
    pictures: [
      "https://img.jamesedition.com/listing_images/2023/07/14/13/35/03/1c1203ec-7712-41d4-9d03-0d21f3efd564/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/07/14/23/18/18/372b82f8-7bfe-4443-8712-bdc25a6b98b8/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/07/14/13/35/03/9fc939f8-82ab-4ff4-bcaa-36c0117025e0/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/07/14/23/18/18/884842cf-cba8-4c8c-af76-03957ae0e626/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/07/14/23/18/18/58a52d28-5bff-443f-8e8b-23a9150569ee/je/1100xxs.jpg",
    ],
  },
  {
    car_info: {
      make: "Lamborguini",
      model: "Aventador SVJ",
      category: "Supercar",
      fuel: "Gasoline",
      doors: "2",
      year: "2019",
      price: "514,509",
      seats: "2",
      odometer: "6365",
      cc: "6500",
      exterior_color: "Blue",
      interior_color: "Black",
      features: [],
      transmission: "Automated single clutch manual gearbox",
      description:
        "The SVJ will be remembered as one of the greatest modern supercars. With its 6.5 V12 engine that revs up to 9500 RPM, Yes, 9.5K rpm.",
    },
    pictures: [
      "https://img.jamesedition.com/listing_images/2023/06/12/08/46/36/eebf0cc7-17df-49bb-8e18-4f8122bd05cd/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/06/12/08/46/37/e3d96d66-7177-4be1-a8bc-6b4848e619af/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/06/12/08/46/36/bcb02ba0-324d-48f4-a459-d6bc2f586a35/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/06/12/08/46/37/91db44de-96e6-4a9b-ae37-8ad9cefafd60/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2023/06/12/08/46/37/4b30c996-7a1c-40b4-9ce0-3e889c231fe5/je/1100xxs.jpg",
    ],
  },
  {
    car_info: {
      make: "Koenigsegg",
      model: "CCX",
      category: "Hypercar",
      fuel: "Gas",
      doors: "2",
      year: "2006",
      price: "2,350,500",
      seats: "2",
      odometer: "20009",
      cc: "5000",
      exterior_color: "Black",
      interior_color: "Black",
      features: [],
      transmission: "6-speed manual",
      description:
        "Discover the third generation Koenigsegg CCX that was designed with the latest available technology and aimed for breaking new records. Learn more here.",
    },
    pictures: [
      "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/9ef1d1b2-d22e-45d5-ba63-e24b91689e16/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/e39a3131-439c-4edc-bcff-f5f821caac1f/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/0c5ada4c-f72b-4e04-8f05-71fc9d053263/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/a67bf2e0-f713-475e-974f-1e1651bc0bf1/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/12/14/13/12/08/07efd21f-6118-4170-91a1-0d5a75930aa1/je/1100xxs.jpg",
    ],
  },
  {
    car_info: {
      make: "Pagani",
      model: "Huayra",
      category: "Hypercar",
      fuel: "Gas",
      doors: "2",
      year: "2013",
      price: "2,994,896",
      seats: "2",
      odometer: "1645",
      cc: "6000",
      exterior_color: "Black",
      interior_color: "Black",
      features: [],
      transmission: "Auto",
      description: "The best Pagani that has touched the streets. ",
    },
    pictures: [
      "https://img.jamesedition.com/listing_images/2022/05/26/15/55/03/60efacb8-77b1-4f72-bf8f-5182b73eaee4/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/05/26/15/55/03/cc9ce9e1-0094-4ccf-bd89-ac5c3dc61cb0/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/05/26/15/55/03/dc999636-ca76-4b95-b956-c23bad140d52/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/05/26/15/54/57/63e97715-c350-4cce-b03c-882cdb9cb398/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/05/26/15/54/57/50197c20-8ac4-48a6-a52e-af1d2ee3ba63/je/1100xxs.jpg",
    ],
  },
  {
    car_info: {
      make: "Bugatti",
      model: "Chiron",
      category: "Hypercar",
      fuel: "Gas",
      doors: "2",
      year: "2018",
      price: "3,005,987",
      seats: "2",
      odometer: "1000",
      cc: "8000",
      exterior_color: "Blue",
      interior_color: "Orange",
      features: [],
      transmission: "Auto",
      description:
        "The Chiron has showned to the world it came to shine breaking speed records",
    },
    pictures: [
      "https://img.jamesedition.com/listing_images/2022/03/11/15/04/39/4a65c28b-ee35-459b-ab17-ee5fc8071e70/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/03/11/15/04/39/4330560e-7291-4c15-994d-9c4d74f407a2/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/03/11/15/04/39/6b326b77-4878-4d9e-8bbf-5df14a7a364d/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/09/23/14/26/24/d9597097-b44b-488d-8c87-2a4501ab624b/je/1100xxs.jpg",
      "https://img.jamesedition.com/listing_images/2022/03/11/15/04/39/c0fdfc24-7421-46c2-8886-52000b071fa3/je/1100xxs.jpg",
    ],
  },
];

export async function connectDB() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
    console.log("Connected to MongoDB");
  }
  return client.db("main");
}

export async function getCars() {
  const db = await connectDB();
  const collection = db.collection("cars");
  return collection.find().toArray();
}

// JIC I delete all data
// await insertCarsOnce(collection)
// export async function insertCarsOnce(collection) {
//   try {
//     const count = await collection.countDocuments();
//     if (count > 0) {
//       console.log("Cars already exist in the database. Skipping insertion.");
//       return;
//     }

//     await collection.insertMany(cars);
//     console.log("Cars inserted successfully.");
//   } catch (e) {
//     console.error("Error inserting cars:", e);
//   }
// }
