const url = "https://66681676f53957909ff67af8.mockapi.io/users/Students"
async function getData () {
const response = await fetch (url);
console.log ("response", response)
const jsonData = await response.json();
console.log("jsonData" , jsonData);
const singleData = await jsonData[4];
console.log("singleData" , singleData);
document.getElementById("exampleInputEmail1").value =   singleData.name ; 
document.getElementById("exampleInputPassword1").value =   singleData.id ; 
};

getData();