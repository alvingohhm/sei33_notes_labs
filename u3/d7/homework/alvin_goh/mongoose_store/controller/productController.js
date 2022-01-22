const Product = require("../models/product.js");
const productSeed = require("../models/seed.js");

const productController = {
  seedData: async (req, res) => {
    await Product.collection.drop();
    await Product.create(productSeed, (err, data) => {
      if (err) console.log(err.message);
      console.log("added product data");
    });

    res.json({ status: "ok", msg: "Seed Data Saved!" });
  },
  indexPageHandler: async (req, res) => {
    const productList = await Product.find(
      {},
      {
        description: 0,
        qty: 0,
        createdAt: 0,
        updatedAt: 0,
      }
    ).exec();
    res.render("index.ejs", {
      PageTitle: "Mongoose Store Homepage",
      productList,
    });
  },
  newPageHandler: (req, res) => {
    const product = {
      name: "",
      description: "",
      img: "",
      price: 0,
      qty: 0,
    };
    res.render("new.ejs", {
      PageTitle: "Add Product",
      title: "Add a Product",
      product,
    });
  },
  showPageHandler: async (req, res) => {
    const product = await Product.findById(req.params.id).exec();

    res.render("show.ejs", {
      PageTitle: `Product - ${product.name} `,
      product,
    });
  },
  productBuyHandler: async (req, res) => {
    await Product.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { qty: -1 } },
      { returnNewDocument: true }
    );
    res.redirect("/product/" + req.params.id);
  },
  createNewProductHandler: async (req, res) => {
    await Product.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
        return res.send("failed");
      }
      res.redirect("/");
    });
  },
  editPageHandler: async (req, res) => {
    const product = await Product.findById(req.params.id).exec();
    res.render("edit.ejs", {
      PageTitle: "Edit Product",
      product,
    });
  },
  updateProductHandler: async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body).exec();
    res.redirect("/product/" + req.params.id);
  },
  deleteProductHandler: async (req, res) => {
    Product.findByIdAndDelete(req.params.id)
      .exec()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => console.error(err));
  },
};

module.exports = productController;
