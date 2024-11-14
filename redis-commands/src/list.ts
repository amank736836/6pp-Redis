import { client } from ".";

const list = async () => {
  // // List Data Type
  // //   ------------------------------------------------------------------------------------
  // // lPush - Insert an element at the beginning of the list
  // const res1 = await client.lPush("fruits", "apple");
  // console.log(res1 + " - Insert at the beginning of the list");
  // //   ------------------------------------------------------------------------------------
  // // rPush - Insert an element at the end of the list
  // const res2 = await client.rPush("fruits", "banana");
  // console.log(res2 + " - Insert at the end of the list");
  // //   ------------------------------------------------------------------------------------
  // // rPush - Insert multiple elements at the end of the list
  // const res3 = await client.rPush("fruits", ["mango", "orange"]);
  // console.log(res3 + " - Insert multiple elements at the end of the list");
  // //   ------------------------------------------------------------------------------------
  // // lLen - Get the length of the list
  // const res4 = await client.lLen("fruits");
  // console.log(res4 + " - Length of the list");
  // //   ------------------------------------------------------------------------------------
  // // lRange - Get elements from the list
  // const res5 = await client.lRange("fruits", 0, 4);
  // console.log(res5 + " - Get elements from the list");
  // //   ------------------------------------------------------------------------------------
  // // lRange - Get elements from the list with unknown length
  // const res6 = await client.lRange("fruits", 0, -1);
  // console.log(res6 + " - Get elements from the list");
  // //   ------------------------------------------------------------------------------------
  // // lPop - Remove an element from the beginning of the list
  // const res7 = await client.lPop("fruits");
  // console.log(res7 + " - Remove an element from the beginning of the list");
  // //   ------------------------------------------------------------------------------------
  // // rPop - Remove an element from the end of the list
  // const res8 = await client.rPop("fruits");
  // console.log(res8 + " - Remove an element from the end of the list");
  // //   ------------------------------------------------------------------------------------
  // // blPop - Remove an element from the beginning of the list
  // const res9 = await client.blPop("fruits", 100);
  // console.log(res9 + " - Remove an element from the beginning of the list");
  // const res10 = JSON.stringify(res9);
  // console.log(res10);
  // //   ------------------------------------------------------------------------------------
  // // brPop - Remove an element from the end of the list
  // const res11 = await client.brPop("fruits", 100);
  // console.log(res11 + " - Remove an element from the end of the list");
  // const res12 = JSON.stringify(res11);
  // console.log(res12);
  // //   ------------------------------------------------------------------------------------
  // // lIndex - Get an element from the list
  // const res13 = await client.lIndex("fruits", 0);
  // console.log(res13 + " - Get an element from the list");
  // //   ------------------------------------------------------------------------------------
  // // lSet - Set an element in the list
  // const res14 = await client.lSet("fruits", 1, "kiwi");
  // console.log(res14 + " - Set an element in the list");
  // //   ------------------------------------------------------------------------------------
  // // lRem - Remove an element from the list
  // const res15 = await client.lRem("fruits", 0, "kiwi");
  // console.log(res15 + " - Remove an element from the list");
  // //   ------------------------------------------------------------------------------------
  // // lTrim - Trim the list
  // const res16 = await client.lTrim("fruits", 0, 2);
  // console.log(res16 + " - Trim the list");
  // //   ------------------------------------------------------------------------------------
};

export default list;
