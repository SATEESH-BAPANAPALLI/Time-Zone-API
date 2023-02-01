function showPosition(position) {
    window.document.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

showPosition;

let fetchBtn = document.getElementById("Btn");
fetchBtn.addEventListener("click", fetchData);
 
async function fetchData() {
    let res = await fetch("https://api.geoapify.com/v1/geocode/reverse?lat=46.73917926727481&lon=2.3276588684885837&format=json&apiKey=https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=59026df5f79649c3be08057eb975e474");
    let data = await res.json();
    if (data) {
        let weatherRes = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data.latitude},${data.longitude}?unitGroup=us&key=VKB9DM35UV78DW2ELUQEC3FN9`)
        let weatherData = await weatherRes.json();
        document.getElementById("primary").style.display = "none";
        document.getElementById("secondary").style.display = "block";
        let pos = document.getElementById("pos");
        pos.innerHTML = `<span>Lat: ${data.latitude}</span>
        <span>Long: ${data.longitude}</span>`
        let map = document.getElementById("map");
        map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${data.latitude},${data.longitude}&output=embed"width="100%"
        height="500" frameborder="0" style="border:0"></iframe>`
        let displayData = document.getElementById("displayData");
        displayData.innerHTML = `<p>Location: ${data.city}</p>
        <div id="position">
            <p>Lat: ${data.latitude}</p>
            <p>Long: ${data.longitude}</p>
        </div>
        <p>Time Zone: ${data.time_zone.name}</p>
        <p>Wind Speed: ${weatherData.currentConditions.windspeed}</p>
        <p>Pressure: ${weatherData.currentConditions.pressure}</p>
        <p>Humidity: ${weatherData.currentConditions.humidity}</p>
        <p>Wind Direction: ${weatherData.currentConditions.winddir}</p>
        <p>UV Index: ${weatherData.currentConditions.uvindex}</p>
        <p>Feels Like: ${weatherData.currentConditions.feelslike}</p>`
    }
}