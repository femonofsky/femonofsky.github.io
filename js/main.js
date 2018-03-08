// utilities
var get = function(selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelector(selector);
};

var getAll = function(selector, scope) {
  scope = scope ? scope : document;
  return scope.querySelectorAll(selector);
};

var request = new Request(
  "https://api.spotify.com/v1/me/player/recently-played?type=track&limit=1&after=1484811043508",
  {
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer BQA2q5-59GjdNVMfBT7wkgxqrbzv7_6CsXzM-mMZ0GYvMzO0gCM8tlPqYiZ0VKU_nWe27GTTpOaW5rEaLalBf0b3V-IDsqpZ448lVJQiy_QwHtHxCYcn6hAfBZMbvSNFWfQrMeHQgCK6rkRqyhOK9Dg" //env("Spotify_Auth")
    })
  }
);

const interests = get(".interests");

// setup typewriter effect
function typeWritterEffect(text) {
  if (get(".spotify-status")) {
    var i = 0;
    var txt = text;
    var speed = 60;

    // remove all current text
    get(".spotify-status").innerHTML = "";

    function typeItOut() {
      if (i < txt.length) {
        get(".spotify-status").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
      }
    }

    setTimeout(typeItOut, 1800);
  }
}

window.addEventListener("scroll", () => {
  interests.setAttribute(
    "style",
    `transform: translate3d(-${window.scrollY - 300}px, 0, 0)`
  );
});
