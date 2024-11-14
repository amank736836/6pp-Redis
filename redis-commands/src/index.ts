import "dotenv/config";
import { createClient } from "redis";
import hashes from "./hashes";
import list from "./list";
import set from "./set";
import sortedSet from "./sortedSet";
import string from "./string";

export const client = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

client.on("error", (err) => console.log("Redis Client Error", err));

const runRedis = async () => {
  await client.connect();
  console.log("Connected to Redis");
  console.log("=====================================");

  /////////////////////////////////////////////

  // Working area //

  await string();
  await list();
  await set();
  await sortedSet();
  await hashes();

  // // Delete everything
  //  const res = await client.flushAll();
  //  console.log(res);

  /////////////////////////////////////////////

  return client.quit();
};

runRedis()
  .then(() => {
    console.log("=====================================");
    console.log("Disconnected from Redis");
  })
  .catch((err) => {
    console.error("Error", err);
    client.quit();
  });
