//You can edit ALL of the code here
const rootElem = document.getElementById("root");

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
 // const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;

 episodeList.forEach(createCard);
 // console.log(x);
// rootElem.append(episodeList.forEach(createCard));
}

function createCredits()
{
  let divcard = document.createElement("div");
  divcard.setAttribute("id", "idfooter");

}
function createCard(episode) {



  let divcard = document.createElement("div");
  divcard.setAttribute("class", "card");


  let divMovieName = document.createElement("h3");
  divMovieName.setAttribute("class", "moviename");
  divMovieName.innerHTML= episode.name + " - " +  (episode.season<10 ? "S0" + episode.season : "S" + episode.season ) + (episode.number<10 ? "E0" + episode.number : "E" + episode.number);


  let divMovieDescription= document.createElement("div");
  divMovieDescription.setAttribute("class", "movieDescription");
  divMovieDescription.innerHTML= episode.summary;

  let divMovieImage= document.createElement("img");
  divMovieImage.setAttribute("class", "movieImage");
  divMovieImage.src= episode.image.medium;



  divcard.appendChild(divMovieName);
  divcard.appendChild(divMovieImage);
  divcard.appendChild(divMovieDescription);

rootElem.appendChild(divcard);
//return divContainer;
  //console.log(divContainer);
}

window.onload = setup;
