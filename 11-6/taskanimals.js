const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals"
        
        async function getData(){
            const response = await fetch(url);
            const jsonData = await response.json();
            console.log("getData" ,jsonData);
            
                 document.getElementById("op1").innerText = jsonData[0].name;
                 document.getElementById("op2").innerText = jsonData[1].name;
                 document.getElementById("op3").innerText = jsonData[2].name;
                 document.getElementById("op4").innerText = jsonData[3].name;
                 document.getElementById("op1").value = jsonData[0].image;
                 document.getElementById("op2").value = jsonData[1].image;
                 document.getElementById("op3").value = jsonData[2].image;
                 document.getElementById("op4").value = jsonData[3].image;
                 
        }
      getData();

       const x = document.querySelector(".gg")
     function catsndogs(value){
      x.src=value;
     }
