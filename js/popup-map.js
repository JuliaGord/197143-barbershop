var link = document.querySelector(".btn-map");
var popup = document.querySelector(".popup-map");
var popupover = document.querySelector(".popup-overlay");
var linkclose = popup.querySelector(".popup-map-close");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("popup-map-show");
  popupover.classList.add("popup-overlay-show");
});
linkclose.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-map-show");
    popupover.classList.remove("popup-overlay-show");
})