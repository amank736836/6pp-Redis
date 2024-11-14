import { client } from ".";

const set = async () => {
  // // Set Data Type
  // //   ------------------------------------------------------------------------------------
  // // sAdd - Add an element to the set
  // const res1 = await client.sAdd("cars", ["Audi", "BMW", "Mercedes"]);
  // console.log(res1 + " - Add an element to the set");
  // //   ------------------------------------------------------------------------------------
  // // sAdd - Add an element to the set that already exists
  // const res2 = await client.sAdd("cars", ["Audi"]);
  // console.log(res2 + " - Add an element to the set");
  // //   ------------------------------------------------------------------------------------
  // // sRem - Remove an element from the set
  // const res3 = await client.sRem("cars", "Audi");
  // console.log(res3 + " - Remove an element from the set");
  // //   ------------------------------------------------------------------------------------
  // // sIsMember - Check if an element exists in the set
  // const res4 = await client.sIsMember("cars", "BMW");
  // console.log(res4 + " - Check if an element exists in the set");
  // //   ------------------------------------------------------------------------------------
  // // sIsMember - Element does not exist in the set
  // const res5 = await client.sIsMember("cars", "Audi");
  // console.log(res5 + " - Check if an element exists in the set");
  // //   ------------------------------------------------------------------------------------
  // // sMembers - Get all elements from the set
  // const res6 = await client.sMembers("cars");
  // console.log(res6 + " - Get all elements from the set");
  // //   ------------------------------------------------------------------------------------
  // // sAdd - Add an element to the set
  // const res7 = await client.sAdd("Bikes", [
  //   "Yamaha",
  //   "Honda",
  //   "Suzuki",
  //   "KTM",
  //   "Royal Enfield",
  //   "BMW",
  // ]);
  // console.log(res7 + " - Add an element to the set");
  // //   ------------------------------------------------------------------------------------
  // // sInter - Get the intersection of two sets
  // const res8 = await client.sInter(["cars", "Bikes"]);
  // console.log(res8 + " - Get the intersection of two sets");
  // //   ------------------------------------------------------------------------------------
  // // sUnion - Get the union of two sets
  // const res9 = await client.sUnion(["cars", "Bikes"]);
  // console.log(res9 + " - Get the union of two sets");
  // //   ------------------------------------------------------------------------------------
  // // sDiff - Get the difference of two sets
  // const res10 = await client.sDiff(["cars", "Bikes"]);
  // console.log(res10 + " - Get the difference of two sets");
  // //   ------------------------------------------------------------------------------------
  // // sPop - Remove and return a random element from the set
  // const res11 = await client.sPop("Bikes");
  // console.log(res11 + " - Remove and return a random element from the set");
  // //   ------------------------------------------------------------------------------------
  // // sRandMember - Get a random element from the set
  // const res12 = await client.sRandMember("Bikes");
  // console.log(res12 + " - Get a random element from the set");
  // //   ------------------------------------------------------------------------------------
};

export default set;
