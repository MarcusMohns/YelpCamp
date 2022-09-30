mapboxgl.accessToken = mapToken;
let map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/light-v10", // style URL
  center: campground.geometry.coordinates || [12.550343, 55.665967], // starting position [lng, lat]
  zoom: 9, // starting zoom
  projection: "globe", // display the map as a 3D globe
});
map.on("style.load", () => {
  map.setFog({}); // Set the default atmosphere style
});

new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates || [12.550343, 55.665967])
  .setPopup(
    new mapboxgl.setPopup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3>`
    )
  )
  .addTo(map);
