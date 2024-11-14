import "dotenv/config";
import express from "express";
import Redis from "ioredis";
import morgan from "morgan";
import { getProductDetail, getProducts } from "./api/products.js";
import { getCachedData, rateLimiter } from "./middleware/redis.js";
const app = express();
app.use(morgan("dev"));

export const redis = new Redis({
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  port: 14966,
});

redis.on("connect", () => {
  console.log("Connected to Redis");
});
app.get(
  "/",
  rateLimiter({
    key: "home",
  }),
  async (req, res) => {
    // print IP address of client
    // console.log(req.ip);

    res.send(`Hello World!`);
  }
);

app.get(
  "/products",
  rateLimiter({
    key: "products",
    limit: 2,
    timer: 5,
  }),
  getCachedData("products"),
  async (req, res) => {
    // if (await redis.exists("products")) {
    // const exists = await redis.exists("products");
    // if (exists) {
    // let products = await redis.get("products");
    // if (products) {
    //   console.log("Fetching products from Redis");
    //   // const products = await redis.get("products");
    //   return res.json({
    //     products: JSON.parse(products),
    //   });
    // }

    console.log("Fetching products from API");
    let products = await getProducts();
    // await redis.set("products", JSON.stringify(products));
    await redis.set("products", JSON.stringify(products));
    res.json({ products });
  }
);

app.get(
  "/products/:id",
  rateLimiter({
    key: "product",
    limit: 2,
    timer: 5,
  }),
  getCachedData(`product`),
  async (req, res) => {
    const { id } = req.params;
    // let product = await redis.get(`product:${id}`);
    // if (product) {
    //   console.log("Fetching product from Redis");
    //   return res.json(JSON.parse(product));
    // }

    console.log("Fetching product from API");
    let product = await getProductDetail(id);
    await redis.set(`product:${id}`, JSON.stringify(product));
    res.json({
      product,
    });
  }
);

app.put(
  "/order/:id",
  rateLimiter({
    key: "order",
    limit: 1,
    timer: 10,
  }),
  async (req, res) => {
    const { id } = req.params;
    // Any mutation to database here
    // like creating new order in database
    // reducing quantity of product in database

    await redis.del(`product:${id}`);
    await redis.del("products");

    res.json({
      message: `Order placed successfully, productId - ${id} is ordered.`,
    });
  }
);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
