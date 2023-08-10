import db from "../connection.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    username: "johnDoe",
    email: "johndoe@example.com",
    password_digest: await bcrypt.hash("hashedPassword1", 11),
  });
  await user1.save();

  const user2 = new User({
    username: "janeSmith",
    email: "janesmith@example.com",
    password_digest: await bcrypt.hash("hashedPassword2", 11),
  });
  await user2.save();

  const user3 = new User({
    username: "aliceJones",
    email: "alicejones@example.com",
    password_digest: await bcrypt.hash("hashedPassword3", 11),
  });
  await user3.save();

  const user4 = new User({
    username: "bobMiller",
    email: "bobmiller@example.com",
    password_digest: await bcrypt.hash("hashedPassword4", 11),
  });
  await user4.save();

  const user5 = new User({
    username: "charlieBrown",
    email: "charliebrown@example.com",
    password_digest: await bcrypt.hash("hashedPassword5", 11),
  });
  await user5.save();

  const cars = [
    {
      make: "Toyota",
      model: "Camry",
      type: "Sedan",
      year: 2020,
      color: "White",
      price: 20000,
      userId: "5f3a1291a123b54204c1a123",
      image:
        "https://di-uploads-pod5.dealerinspire.com/islandtoyota/uploads/2016/04/e321e4c2b26f7875d2a96f77b245fcea.png",
    },
    {
      make: "Honda",
      model: "Civic",
      type: "Sedan",
      year: 2019,
      color: "Black",
      price: 18500,
      userId: "5f3a1291a123b54204c1a124",
      image:
        "https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Honda-Civic-CRYSTAL_BLACK_PEARL.png",
    },
    {
      make: "Ford",
      model: "Mustang",
      type: "Coupe",
      year: 2021,
      color: "Red",
      price: 25000,
      userId: "5f3a1291a123b54204c1a125",
      image:
        "https://www.cjponyparts.com/media/images/resource-center/articles/body/2021-mustang-colors-race-red.jpg",
    },
    {
      make: "Chevrolet",
      model: "Impala",
      type: "Sedan",
      year: 2020,
      color: "Blue",
      price: 21000,
      userId: "5f3a1291a123b54204c1a126",
      image:
        "https://di-uploads-pod1.dealerinspire.com/mikeandersonchevymerrillvilleredesign/uploads/2019/11/2020-Chevy-Impala-Premier-in-dark-blue.png",
    },
    {
      make: "BMW",
      model: "X5",
      type: "SUV",
      year: 2018,
      color: "Silver",
      price: 30000,
      userId: "5f3a1291a123b54204c1a127",
      image:
        "https://file.kelleybluebookimages.com/kbb/base/evox/CP/10633/2018-BMW-X5-front_10633_032_2400x1800_300.png",
    },
    {
      make: "Toyota",
      model: "Corolla",
      type: "Sedan",
      year: 2019,
      color: "Grey",
      price: 19000,
      userId: "5f3a1291a123b54204c1a123",
      image:
        "https://www.motortrend.com/uploads/sites/10/2018/07/2019-toyota-corolla-l-sedan-angular-front.png",
    },
    {
      make: "Ford",
      model: "Focus",
      type: "Hatchback",
      year: 2017,
      color: "Black",
      price: 17000,
      userId: "5f3a1291a123b54204c1a124",
      image:
        "https://file.kelleybluebookimages.com/kbb/base/evox/CP/10849/2017-Ford-Focus-front_10849_032_2400x1800_G1_nologo.png",
    },
    {
      make: "Chevrolet",
      model: "Camaro",
      type: "Coupe",
      year: 2021,
      color: "Yellow",
      price: 28000,
      userId: "5f3a1291a123b54204c1a125",
      image:
        "https://www.motortrend.com/uploads/sites/10/2017/07/2018-chevrolet-camaro-2lt-coupe-angular-front.png",
    },
    {
      make: "BMW",
      model: "M3",
      type: "Sedan",
      year: 2020,
      color: "Blue",
      price: 55000,
      userId: "5f3a1291a123b54204c1a126",
      image:
        "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/BMW-M3.png",
    },
    {
      make: "Honda",
      model: "Accord",
      type: "Sedan",
      year: 2018,
      color: "Green",
      price: 21000,
      userId: "5f3a1291a123b54204c1a127",
      image:
        "https://img.favpng.com/18/12/19/honda-motor-company-car-dealership-2018-honda-accord-png-favpng-yKHZMm3fenDZKMssv75xPQ5XL.jpg",
    },
    {
      make: "Nissan",
      model: "Altima",
      type: "Sedan",
      year: 2019,
      color: "Charcoal",
      price: 19000,
      userId: "5f3a1291a123b54204c1a127",
      image:
        "https://oomdo.com/landingPageTool/Content/ADHN/2019/Nissan/Altima/2019-NISSAN-ALTIMA_PLATINUM-GREY.png",
    },
    {
      make: "Subaru",
      model: "Forester",
      type: "SUV",
      year: 2018,
      color: "Green",
      price: 23000,
      userId: "5f3a1291a123b54204c1a126",
      image:
        "https://cfx-vrf-main-imgs.imgix.net/5/d/c/ba742dc2764e0cf8ec779b4ea2fe432b5fecfcd5.png?auto=format&fit=clip&w=420",
    },
    {
      make: "Mazda",
      model: "3",
      type: "Hatchback",
      year: 2021,
      color: "Red",
      price: 21000,
      userId: "5f3a1291a123b54204c1a125",
      image: "https://cdn-ds.com/media/dfmodels/4777/AdditionalImage-95915.png",
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      type: "Sedan",
      year: 2020,
      color: "Silver",
      price: 40000,
      userId: "5f3a1291a123b54204c1a124",
      image:
        "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/19f560b6-2958-40d6-834b-755412ba70da/75296843-722a-4c61-9cd4-12f3438b0f86.png",
    },
    {
      make: "Audi",
      model: "A3",
      type: "Sedan",
      year: 2019,
      color: "Black",
      price: 34000,
      userId: "5f3a1291a123b54204c1a123",
      image:
        "https://pictures.dealer.com/s/santamonicaaudiaoa/0353/a151dea912d329ae97b99080f32325ebx.jpg?impolicy=downsize&w=568",
    },
    {
      make: "Kia",
      model: "Optima",
      type: "Sedan",
      year: 2020,
      color: "Blue",
      price: 20000,
      userId: "5f3a1291a123b54204c1a127",
      image:
        "https://www.tomkadleckia.com/static/dealer-12262/Top_Sellers_Template/Optima/colors/exterior/kia_optima_2020-gallery_exterior-horizon-blue.png",
    },
    {
      make: "Hyundai",
      model: "Tucson",
      type: "SUV",
      year: 2021,
      color: "Gray",
      price: 24000,
      userId: "5f3a1291a123b54204c1a126",
      image:
        "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/07119dd2-86ba-4672-9986-ab8d24df2028/f91403b0-2575-446f-81f9-7995d2967d48.png",
    },
    {
      make: "Volkswagen",
      model: "Golf",
      type: "Hatchback",
      year: 2018,
      color: "White",
      price: 22000,
      userId: "5f3a1291a123b54204c1a125",
      image:
        "https://www.cars.com/i/large/in/v2/stock_photos/202ad841-7456-4564-9874-9988a6e3da96/43801ed6-940a-4810-aef1-fc7a93783b72.png",
    },
    {
      make: "Jeep",
      model: "Cherokee",
      type: "SUV",
      year: 2019,
      color: "Black",
      price: 26000,
      userId: "5f3a1291a123b54204c1a124",
      image:
        "https://di-uploads-pod21.dealerinspire.com/ryancjd/uploads/2019/06/2019-Jeep-Grand-Cherokee-Laredo.png",
    },
    {
      make: "Dodge",
      model: "Charger",
      type: "Sedan",
      year: 2020,
      color: "Red",
      price: 28000,
      userId: "5f3a1291a123b54204c1a123",
      image:
        "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14278/2020-Dodge-Charger-front_14278_032_2400x1800_PR3.png",
    },
  ];

  await Car.insertMany(cars);
  console.log("Created cars!");

  db.close();
};

insertData();
