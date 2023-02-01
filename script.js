function showLocation() {
    navigator.geolocation.getCurrentPosition((success) => {
      let { latitude, longitude } = success.coords;
      document.getElementById("lat").innerHTML = latitude;
      document.getElementById("longi").innerHTML = longitude;
      latitude.innerHTML = latitude;
      longitude.innerHTML = longitude;
      let Api = "f3df1cdb0d6347218cec5d3d43a03ff3";
      fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${Api}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.results[0]);
          document.getElementById(
            "current"
          ).innerHTML = `${data.results[0].timezone.name}`;
          document.getElementById(
            "timezone"
          ).innerHTML = `${data.results[0].timezone.name}`;
          document.getElementById("lat").innerHTML = `${data.results[0].lat}`;
          document.getElementById("longi").innerHTML = `${data.results[0].lon}`;
          document.getElementById(
            "offstd"
          ).innerHTML = `${data.results[0].timezone.offset_STD}`;
          document.getElementById(
            "stdsec"
          ).innerHTML = `${data.results[0].timezone.offset_STD_seconds}`;
          document.getElementById(
            "dsto"
          ).innerHTML = `${data.results[0].timezone.offset_DST}`;
          document.getElementById(
            "dstsec"
          ).innerHTML = `${data.results[0].timezone.offset_DST_seconds}`;
          document.getElementById(
            "cont"
          ).innerHTML = `${data.results[0].country}`;
          document.getElementById(
            "pin"
          ).innerHTML = `${data.results[0].postcode}`;
          document.getElementById("cty").innerHTML = `${data.results[0].city}`;
        });
    });
  }
  
  showLocation();
  
  //handle the search locations
  
  function getLocation() {
    const inputLocation = document.getElementById("addinput");
    if (inputLocation.value !== "") {
      const loc = document.getElementById("addinput").value;
      const Apikey = "f3df1cdb0d6347218cec5d3d43a03ff3";
      const url = `https://api.geoapify.com/v1/geocode/search?text=${loc}&apiKey=${Apikey}`;
  
      async function getData(url) {
        const responce = await fetch(url);
        data = await responce.json();
  
        // console.log(data);
        document.getElementById(
          "time"
        ).innerHTML = `${data.features[0].properties.timezone.name}`;
        document.getElementById(
          "lati"
        ).innerHTML = `${data.features[0].properties.lat}`;
        document.getElementById(
          "lon"
        ).innerHTML = `${data.features[0].properties.lon}`;
        document.getElementById(
          "offst"
        ).innerHTML = `${data.features[0].properties.timezone.offset_STD}`;
        document.getElementById(
          "stdse"
        ).innerHTML = `${data.features[0].properties.timezone.offset_STD_seconds}`;
        document.getElementById(
          "dst"
        ).innerHTML = `${data.features[0].properties.timezone.offset_DST}`;
        document.getElementById(
          "dstse"
        ).innerHTML = `${data.features[0].properties.timezone.offset_DST_seconds}`;
        document.getElementById(
          "con"
        ).innerHTML = `${data.features[0].properties.country}`;
        document.getElementById(
          "pincod"
        ).innerHTML = `${data.features[0].properties.postcode}`;
        document.getElementById(
          "ct"
        ).innerHTML = `${data.features[0].properties.city}`;
      }
  
      getData(url);
    } else if (inputLocation.value == "") {
      document.getElementById("success").innerText = "Please enter an address!";
      document.getElementById("success").style.color = "red";
    } else if (inputLocation.value !== "") {
      document.getElementById("success").innerHTML="";
    }
  }
  
  // handel empty values
  async function locat() {
    const inputLocation = document.getElementById("addinput");
  
    await checkforerror(inputLocation);
  }
  async function checkforerror(locat) {
    if (locat !== "") {
      submitted(locat);
    }
  }
  function makingValuesEmpty() {
    document.getElementById("time").innerText = " ";
    document.getElementById("lati").innerText = " ";
    document.getElementById("lon").innerText = " ";
  
    document.getElementById("offst").innerText = " ";
    document.getElementById("stdse").innerText = " ";
    document.getElementById("dst").innerText = " ";
    document.getElementById("dstse").innerText = " ";
  
    document.getElementById("con").innerText = " ";
    document.getElementById("pincod").innerText = " ";
    document.getElementById("ct").innerText = " ";
  }