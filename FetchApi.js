const URL ="https://cat-fact.herokuapp.com/facts";
const facts1 = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getCat = async()=>{
    console.log("Fetching the data from the database.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    facts1.innerText = data[2].text;
};

btn.addEventListener("click", getCat);

// understanding some terms, which are helpfull for printing the actual response from the api
// AJAX: is asynchronus js and xml: so basically the data in before times it would be coming in the form of xml but in the current it comes in the form of json();
// here json would be responsed as the second promise and to print the actual data you may need to make the data global.