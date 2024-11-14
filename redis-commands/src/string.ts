import { client } from ".";

const string = async () => {
  // //   String Data Type
  // //   ------------------------------------------------------------------------------------
  // // set - Set a key
  // const res1 = await client.set("name", "Aman Kumar");
  // console.log(res1 + " - Set");
  // //   ------------------------------------------------------------------------------------
  // // get - Get a key
  // const name = await client.get("name");
  // console.log(name);
  // //   ------------------------------------------------------------------------------------
  // // setNx - Set a key if it does not exist
  // const res2 = await client.setNX("name2", "Aman Kumar");
  // console.log(res2 + " - Set if not exist");
  // //   ------------------------------------------------------------------------------------
  // // Get a key if it does not exist
  // const name2 = await client.get("name2");
  // console.log(name2);
  // //   ------------------------------------------------------------------------------------
  // // mSet - Set multiple keys at once
  // const res3 = await client.mSet([
  //   "bike",
  //   "Yamaha",
  //   "car",
  //   "Audi",
  //   "cycle",
  //   "Atlas",
  // ]);
  // console.log(res3 + " - Set Multiple");
  // //   ------------------------------------------------------------------------------------
  // // mget - Get multiple keys at once
  // const [bike, car, cycle] = await client.mGet(["bike", "car", "cycle"]);
  // console.log(bike, car, cycle);
  // //   ------------------------------------------------------------------------------------
  // // Get multiple keys at once - does not exist
  // const [bike1, car1, cycle1] = await client.mGet(["bike1", "car1", "cycle1"]);
  // console.log(bike1, car1, cycle1);
  // //   ------------------------------------------------------------------------------------
  // // keys - Get all keys
  // const keys = await client.keys("*");
  // console.log(keys);
  // //   ------------------------------------------------------------------------------------
  // // type - Get the type of key
  // const type = await client.type("bike");
  // console.log(type);
  // //   ------------------------------------------------------------------------------------
  // // Type on not existing key
  // const type1 = await client.type("bike1");
  // console.log(type1);
  // //   ------------------------------------------------------------------------------------
  // // del - Delete a key
  // const res4 = await client.del("bike");
  // console.log(res4 + " - Deleted on existing key");
  // //   ------------------------------------------------------------------------------------
  // // Get a key after deleting on existing key
  // const bike2 = await client.get("bike");
  // console.log(bike2);
  // //   ------------------------------------------------------------------------------------
  // // Delete on not existing key
  // const res5 = await client.del("bike1");
  // console.log(res5 + " - Deleted on not existing key");
  // //   ------------------------------------------------------------------------------------
  // // Get a key after deleting on not existing key
  // const bike3 = await client.get("bike1");
  // console.log(bike3);
  // //   ------------------------------------------------------------------------------------
  // // Delete multiple keys
  // const res6 = await client.del(["car", "cycle"]);
  // console.log(res6 + " - Deleted multiple keys");
  // //   ------------------------------------------------------------------------------------
  // // mGet - Get multiple keys at once
  // const [car2, cycle2] = await client.mGet(["car", "cycle"]);
  // console.log(car1, cycle1);
  // //   ------------------------------------------------------------------------------------
  // // exists - Check if key exists
  // const res7 = await client.exists("name");
  // console.log(res7);
  // //   ------------------------------------------------------------------------------------
  // // Exists on not existing key
  // const res8 = await client.exists("name1");
  // console.log(res8);
  // //   ------------------------------------------------------------------------------------
  // // ttl - Time to live
  // const res9 = await client.setEx("name", 100, "Aman Kumar");
  // console.log(res9 + " - Set with expiry type 2");
  // const res10 = await client.ttl("name");
  // console.log(res10);
  // //   ------------------------------------------------------------------------------------
  // // expire - Set expiry on key
  // const res11 = await client.expire("name2", 10);
  // console.log(res11);
  // //   ------------------------------------------------------------------------------------
  // // Set a key with expiry
  // const res12 = await client.set("wow", "This is amazing", { EX: 10 });
  // console.log(res12 + " - Set with expiry type 1");
  // //   ------------------------------------------------------------------------------------
  // // Get a key with expiry - 1
  // const wow = await client.get("wow");
  // console.log(wow);
  // //   ------------------------------------------------------------------------------------
  // // setEx - Set a key with expiry
  // const res13 = await client.setEx("name1", 10, "Aman Kumar");
  // console.log(res13 + " - Set with expiry type 2");
  // //   ------------------------------------------------------------------------------------
  // // ttl - Time to live on not existing key
  // const res14 = await client.ttl("name1");
  // console.log(res14);
  // //   ------------------------------------------------------------------------------------
  // // ttl - Time to live on key with no expiry
  // const res15 = await client.ttl("cycle");
  // console.log(res15);
  // //   ------------------------------------------------------------------------------------
  // // Get a key with expiry - 2
  // const name1 = await client.get("name1");
  // console.log(name1);
  // //   ------------------------------------------------------------------------------------
  // // getRange - Get a range of characters from a key
  // const res16 = await client.set("name", "Aman");
  // console.log(res16 + " - Set");
  // const res17 = await client.get("name");
  // console.log(res17);
  // const res18 = await client.getRange("name", 0, 4);
  // console.log(res18);
  // //   ------------------------------------------------------------------------------------
  // // getRange - Get a range of characters from a key
  // const res19 = await client.getRange("name", 0, 2);
  // console.log(res19);
  // const res20 = await client.getRange("name", 2, 4);
  // console.log(res20);
  // const res21 = await client.getRange("name", 0, -1);
  // console.log(res21);
  // //   ------------------------------------------------------------------------------------
  // // setRange - Set a range of characters in a key
  // const res22 = await client.get("name");
  // console.log(res22);
  // const res23 = await client.setRange("name", 4, " Kumar");
  // console.log(res23);
  // const res24 = await client.get("name");
  // console.log(res24);
  // //   ------------------------------------------------------------------------------------
  // // setRange - Set a range of characters in a key
  // const res25 = await client.get("name");
  // console.log(res25);
  // const res26 = await client.setRange("name", 4, " Karguwal");
  // console.log(res26);
  // const res27 = await client.get("name");
  // console.log(res27);
  // //   ------------------------------------------------------------------------------------
  // //  length - Get the length of a key
  // const res28 = await client.strLen("name");
  // console.log(res28 + " - Length");
  // //   ------------------------------------------------------------------------------------
  // // incr - Increment a key
  // const res29 = await client.set("age", 25);
  // console.log(res29 + " - Set");
  // const res30 = await client.incr("age");
  // console.log(res30);
  // //   ------------------------------------------------------------------------------------
  // // incrBy - Increment a key by a value
  // const res31 = await client.incrBy("age", 5);
  // console.log(res31);
  // //   ------------------------------------------------------------------------------------
  // // incrByFloat - Increment a key by a float value
  // const res32 = await client.incrByFloat("age", 5.5);
  // console.log(res32);
  // //   ------------------------------------------------------------------------------------
  // // decr - Decrement a key
  // const res33 = await client.set("age", 25);
  // const res34 = await client.decr("age");
  // console.log(res34);
  // //   ------------------------------------------------------------------------------------
  // // decrBy - Decrement a key by a value
  // const res35 = await client.decrBy("age", 5);
  // console.log(res35);
  // //   ------------------------------------------------------------------------------------
  // // append - Append a value to a key
  // const res36 = await client.set("name", "Aman");
  // console.log(res36 + " - Set");
  // const res37 = await client.append("name", " Kumar");
  // console.log(res37);
  // const res38 = await client.get("name");
  // console.log(res38);
  // //   ------------------------------------------------------------------------------------
};

export default string;
