// geolocation, getCurrentPosition() for onload? or queryselector?

function getLocation() {
  const response = document.getElementById("buttonResponse");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    response.innerHTML =
      "Geolocation is not supported and we will be unable to locate beer near here!";
  }
}

getLocation();

function showPosition(position) {
  const response = document.getElementById("buttonResponse");
  response.innerHTML =
    "Working on your location..." +
    "Location: " +
    position.coords.latitude +
    " , " +
    position.coords.longitude;
}

// getelementbyid username

const wishlistItems = async function getUserWishlist(wishlist) {
  const untappdUser = document.getElementById(userName);
  const fetchURL = `http://untappd.com/v4/user/wishlist/${untappdUser}`;

  const userWishlist = await fetch(fetchURL);
  // set to display wishlist
};
// error? handle w promise and prompt for valid username if necessary

// parse json of user's wishlist? (display 1-5?)
// if wishlist is empty, fetch the day's highest rated beer and use that for calcs?
// otherwise, display 1-5 wishlist items
// if only one item, generate the list of venues

// user picks item, distance range, then list of venues is generated via:
// calculate using user's location and venues via lat-long
// for fun can show distance from the brewery:
// "That beer was born 523 miles away!" brewery.location

// if beer is found nearby, then show the available locations (5 closest?)
// Haversine formula?
// populate venue name, address, phone, perhaps Google mapping
