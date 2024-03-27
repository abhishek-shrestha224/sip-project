// import { useState } from "react";

// export default function MyComponent() {
//   const [responseMessage, setResponseMessage] = useState("");
//   const baseUrl =
//     "https://getpantry.cloud/apiv1/pantry/32f2a016-adf7-421f-b523-8fcf480e0c93/";

//   async function basketExists(basket) {
//     const url = `${baseUrl}basket/${basket}`;

//     const response = await fetch(url);
//     if (response.status !== 200) {
//       return false;
//     }
//     return true;
//   }

//   const addUser = async () => {
//     const basket = "users";
//     if (await basketExists(basket)) {
//       const requestData = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "John",
//           age: 30,
//           email: "john@example.com",
//         }),
//       };
//       try {
//         const response = await fetch(`${baseUrl}basket/${basket}`, requestData);
//         // Handle response as needed
//       } catch (err) {
//         console.log(err);
//       }
//     } else {
//       const requestData = {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: "John",
//           age: 30,
//           email: "john@example.com",
//         }),
//       };
//       try {
//         const response = await fetch(`${baseUrl}basket/${basket}`, requestData);
//         // Handle response as needed
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   // You need to call addUser somewhere in your component for this logic to be executed.
//   // For example:
//   // useEffect(() => {
//   //   addUser();
//   // }, []);

//   return null; // or your JSX here
// }
