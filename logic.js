


const search = async () => {
    const cityName = cname.value.trim();
    console.log(cityName);

    if (cityName) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5fe36b192ffd1c36dffb6752bc1722b2&units=metric`);
            const data = await response.json();
            console.log(data);

            // Extracting the required data
            const city = data.name;
            const description = data.weather[0].description;
            const country = data.sys.country;
            const temperature = data.main.temp;
            const main = data.weather[0].main;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const wind = data.wind.speed;

            // Determine image path based on weather description
            let imagePath = '';
            if (description.includes('rain')) {
                imagePath = './Images/Rain.svg';
            } else if (description.includes('thunderstorm')) {
                imagePath = './Images/thunder.png';
            } else if (description.includes('cloud')) {
                imagePath = './Images/Clouds.svg';
            } else if (description.includes('mist')) {
                imagePath = './Images/Mist.svg';
            } else if (description.includes('haze')) {
                imagePath = './Images/Haze.svg';
            } else if ( description.includes('light intensity drizzle')) {
                imagePath = './Images/light intensity drizzle.png';
            } else if ( description.includes('clear')) {
                imagePath = './Images/Clear.svg';
              
            } else {
                imagePath = './Images/Sunny.svg'; // default image
            }

            //

             view.innerHTML = `
<body style="background-image: url('path-to-your-image.jpg'); background-size: cover; background-repeat: no-repeat;">

               <div class="row mt-5 mb-5">
                   <div class="col-md-5 p-3">
                       <div class="row mt-5">
                           <form action="" class="text-center ">
                               <input type="text" placeholder="Search City..." class="input-with-button" id="cname">
                               <button type="button" class="search-button" onclick="search()">Search</button>
                           </form>
                       </div>
                       <div class="boxbor text-center p-3 w-70 mt-3 rounded h-40">                        
                                <div class="frow">
                                    <h3 class="mt-3">${city}<br><br> </h3>
                                   <p> ${description}  </p>
                                    <img id="image1" src="${imagePath}" alt="Weather Image" width="30%">

                                </div>
                       </div>
                   </div>
                   <div class="col-md-7" >

                    <div class="row">
    <div class="col-md-4">
        <div class="boxbor text-center p-5 w-100 rounded mt-3">
            <p class="fs-4">Country:</p>
            <p id="country">${country}</p>
            <hr style="opacity: 0.4;">
        </div>
    </div>
    <div class="col-md-4">
        <div class="boxbor text-center p-5 w-100 rounded mt-3">
            <p class="fs-4">Humidity:</p>
            <p id="humidity">${humidity}%</p>
            <hr style="opacity: 0.4;">
        </div>
    </div>
    <div class="col-md-4">
        <div class="boxbor text-center p-5 w-100 rounded mt-3">
            <p class="fs-4">Weather:</p>
            <p id="windspeed">${main}</p>
            <hr style="opacity: 0.4;">
        </div>
    </div>
    <div class="col-md-4">
        <div class="boxbor text-center p-5 w-100 rounded mt-3">
            <p class="fs-4">Wind:</p>
            <p id="pressure">${wind}km/h</p>
            <hr style="opacity: 0.4;">
        </div>
    </div>
        <div class="col-md-4">
        <div class="boxbor text-center p-5 w-100 rounded mt-3">
            <p class="fs-4">Pressure:</p>
            <p id="pressure">${pressure}hPa</p>
            <hr style="opacity: 0.4;">
        </div>
    </div>
        <div class="col-md-4">
        <div class="boxbor text-center p-5 w-100 rounded mt-3">
            <p class="fs-4">Temp:</p>
            <p id="pressure">${temperature}°C</p>
            <hr style="opacity: 0.4;">
        </div>
    </div>
</div>
















                   </div>
               </div>
               </body>
           `;
        } catch (error) {
            console.error("Error fetching the weather data:", error);
        }
    } else {
        alert('Enter a valid city name');
    }
};

function reset() {
    city.value = "";
}

