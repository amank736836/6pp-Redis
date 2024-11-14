import { client } from ".";

const sortedSet = async () => {
  // //  Sorted Set Data Type
  // //   ------------------------------------------------------------------------------------
  // // zAdd - Add an element to the sorted set
  // const res1 = await client.zAdd("bikes", { score: 1, value: "Yamaha" });
  // console.log(res1 + " - Add an element to the sorted set");
  // //   ------------------------------------------------------------------------------------
  // const res2 = await client.zAdd("bikes", { score: 0, value: "Atlas" });
  // console.log(res2 + " - Add an element to the sorted set");
  // //   ------------------------------------------------------------------------------------
  // const res3 = await client.zAdd("bikes", { score: 2, value: "Audi" });
  // console.log(res3 + " - Add an element to the sorted set");
  // //   ------------------------------------------------------------------------------------
  // // zRange - Get elements from the sorted set
  // const res4 = await client.zRange("bikes", 0, 2);
  // console.log(res4 + " - Get elements from the sorted set");
  // //   ------------------------------------------------------------------------------------
  // //   zRank - Get the rank of an element from the sorted set
  // const res5 = await client.zRank("bikes", "Atlas");
  // console.log(res5 + " - Get the rank of an element from the sorted set");
  // //   ------------------------------------------------------------------------------------
  // const res6 = await client.zRank("bikes", "Yamaha");
  // console.log(res6 + " - Get the rank of an element from the sorted set");
  // //   ------------------------------------------------------------------------------------
  // //   zRevRank - Get the reverse rank of an element from the sorted set
  // const res7 = await client.zRevRank("bikes", "Atlas");
  // console.log(
  //   res7 + " - Get the reverse rank of an element from the sorted set"
  // );
  // //   ------------------------------------------------------------------------------------
  // //   zScore - Get the score of an element from the sorted set
  // const res8 = await client.zScore("bikes", "Audi");
  // console.log(res8 + " - Get the score of an element from the sorted set");
  // //   ------------------------------------------------------------------------------------
  // //   zRem - Remove an element from the sorted set
  // const res9 = await client.zRem("bikes", "Audi");
  // console.log(res9 + " - Remove an element from the sorted set");
  // //   ------------------------------------------------------------------------------------
};

export default sortedSet;
