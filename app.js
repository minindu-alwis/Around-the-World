console.log("minidu");

loadItems();

async function loadItems() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
            <div class="col">
          <div class="card shadow-sm">
            <center><img src=${element.flags.png} width="420px" height="300px"></center>
            <div class="card-body">
            <h3>${element.name.common}</h3>
              <p class="card-text">Population : ${element.population}</p>
              
              <p class="card-text">Capital : ${element.capital}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 <a href='${element.maps.googleMaps}' target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Go Now 🛫🛬🌍</button></a><br>

                 
                 <a href='${element.maps.openStreetMaps}' target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Street View 🌍🚌🚙🛺</button></a>
                 
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
          </div>
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}


function search(){
    console.log("Search!!");
    let txtSearch = document.getElementById("userinput").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
          <div class="col">
          <div class="card shadow-sm">
            <center><img src=${element.flags.png} width="420px" height="300px"></center>
            <div class="card-body">
            <h3>${element.name.common}</h3>
              <p class="card-text">Population : ${element.population}</p>
              
              <p class="card-text">Capital : ${element.capital}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                 <a href='${element.maps.googleMaps}' target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Go Now 🛫🛬🌍</button></a><br>

                 
                 <a href='${element.maps.openStreetMaps}' target="_blank"> <button type="button" class="btn btn-sm btn-outline-secondary">Street View 🌍🚌🚙🛺</button></a>
                 
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
          </div>
        `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}