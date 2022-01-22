const express = require("express");
const productController = require("./controller/productController");
const cors = require("cors");
const methodOverride = require("method-override");
const connectDB = require("./dbConnect");

const app = express();
const PORT = process.env.PORT || 5000;
////////////////////////////////////
// Templating Engine
////////////////////////////////////
app.set("view engine", "ejs");
////////////////////////////////////
// Middleware
////////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use((req, res, next) => {
  switch (req.query._method) {
    case "POST":
      req.method = "POST";
      break;
    case "PUT":
      req.method = "PUT";
      break;
    case "DELETE":
      req.method = "DELETE";
      break;

    default:
      break;
  }
  req.url = req.path;
  next();
});
////////////////////////////////////
// Connect Database
////////////////////////////////////
// Configuration
const mongoURI = "mongodb://localhost:27017/product";
connectDB(mongoURI);

////////////////////////////////
// SEED
////////////////////////////////
app.get("/api/seed", productController.seedData);
////////////////////////////////
// Index Routes
////////////////////////////////
app.get("/", productController.indexPageHandler);
////////////////////////////////////
// New Routes
////////////////////////////////////
app.get("/product/new", productController.newPageHandler);
////////////////////////////////////
// Show Routes
////////////////////////////////////
app.get("/product/:id", productController.showPageHandler);
////////////////////////////////////
// Edit Routes
////////////////////////////////////
app.get("/product/:id/edit", productController.editPageHandler);
////////////////////////////////////
// Create Routes
////////////////////////////////////
app.post("/product", productController.createNewProductHandler);
////////////////////////////////////
// Update Routes
////////////////////////////////////
app.put("/product/:id", productController.updateProductHandler);
////////////////////////////////////
// Destroy Routes
////////////////////////////////////
app.delete("/product/:id", productController.deleteProductHandler);
////////////////////////////////////
// Buy Routes
////////////////////////////////////
app.post("/buy/:id", productController.productBuyHandler);

app.listen(PORT, () => {
  console.log(`
  🚀  Server is running
  🔉  Listening on port ${PORT}
`);
});
