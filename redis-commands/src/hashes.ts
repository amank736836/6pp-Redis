import { client } from ".";

const hashes = async () => {
  // // Hashes Data Type
  // //   ------------------------------------------------------------------------------------
  // // hSet - Set a field in the hash stored at key
  // const res1 = await client.hSet("user:1000", [
  //   "name",
  //   "Aman Kumar",
  //   "email",
  //   "hashes@gmail.com",
  //   "age",
  //   "22",
  // ]);
  // console.log(res1 + " - Set a field in the hash stored at key");
  // //   ------------------------------------------------------------------------------------
  // // hGet - Get the value of a field in the hash stored at key
  // const res2 = await client.hGet("user:1000", "name");
  // console.log(res2 + " - Get the value of a field in the hash stored at key");
  // //   ------------------------------------------------------------------------------------
  // // hmGet - Get the values of all the given fields in the hash stored at key
  // const res3 = await client.hmGet("user:1000", ["name", "email", "age"]);
  // console.log(
  //   res3 + " - Get the values of all the given fields in the hash stored at key"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hIncrBy - Increment the integer value of a field by the given number
  // const res4 = await client.hIncrBy("user:1000", "age", 2);
  // console.log(
  //   res4 + " - Increment the integer value of a field by the given number"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hIncrBy - Increment on non integer value
  // const res5 = await client.hIncrBy("user:1000", "name", 2);
  // console.log(res5 + " - Increment on non integer value");
  //   //   ------------------------------------------------------------------------------------
  // // hIncrBy - Increment on non existing field
  // const res6 = await client.hIncrBy("user:1000", "salary", 2000);
  // console.log(res6 + " - Increment on non existing field");
  // //   ------------------------------------------------------------------------------------
  // // hKeys - Get all the fields in the hash stored at key
  // const res7 = await client.hKeys("user:1000");
  // console.log(res7 + " - Get all the fields in the hash stored at key");
  // //   ------------------------------------------------------------------------------------
  // // hGetAll - Get all the fields and values in the hash stored at key
  // const res8 = JSON.stringify(await client.hGetAll("user:1000"));
  // console.log(
  //   res8 + " - Get all the fields and values in the hash stored at key"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hDel - Delete one or more fields from the hash stored at key
  // const res9 = await client.hDel("user:1000", "age");
  // console.log(
  //   res9 + " - Delete one or more fields from the hash stored at key"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hDel - Delete non existing field from the hash stored at key
  // const res10 = await client.hDel("user:1000", " Department");
  // console.log(
  //   res10 + " - Delete non existing field from the hash stored at key"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hExists - Determine if a field exists in the hash stored at key
  // const res11 = await client.hExists("user:1000", "name");
  // console.log(
  //   res11 + " - Determine if a field exists in the hash stored at key"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hExists - Determine if a non existing field exists in the hash stored at key
  // const res12 = await client.hExists("user:1000", "Department");
  // console.log(
  //   res12 +
  //     " - Determine if a non existing field exists in the hash stored at key"
  // );
  // //   ------------------------------------------------------------------------------------
  // // hLen - Get the number of fields in the hash stored at key
  // const res13 = await client.hLen("user:1000");
  // console.log(res13 + " - Get the number of fields in the hash stored at key");
  // //   ------------------------------------------------------------------------------------
};

export default hashes;
