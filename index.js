const { app } = require("./app");
const Product = require("./models/Product");
const sequelize = require("./database");

(async () => {
  await sequelize.sync();
})();

// (async () => {
//   const data = Product.create({
//     name: "Apple MacBook Pro 17",
//     price: 2999,
//     category: "Electronic",
//     image_url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6kEpLp_2nkd7h2AKTfhU-gVAUKiMdH-9fw8w1-xE&s",
//   });
//   console.log(data);
// })();

app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.post("/create/product", async (req, res) => {
  const { name, category, price } = req.body;
  console.log(req.body);
  let image_url = "./public/uploads/";
  try {
    if (req.files) {
      let image = req.files.photo;
      image.mv(image_url + image.name);
      image_url = '/uploads/'+ image.name;
    }
  } catch (err) {
    res.status(500).send(err);
  }

  const product = await Product.create({
    name: name,
    price: price,
    category: category,
    image_url: image_url,
  });
  if (!product) {
    res.send({ message: "sorry we were unable to create a product" });
  }
  res.json({ product, message: "product was successfully added" });
});

app.get("/product/all", async (req, res) => {
  console.log("get products");
  const products = await Product.findAll();
  if (products) {
    res.send(products);
  }
});

app.listen(5000);
console.log("Server is listening on port 5000");
