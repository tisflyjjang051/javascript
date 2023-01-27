// 클라이언트  front
const list = document.querySelector(".list");
const btnMore = document.querySelector(".btn-more");
const movieDetail = document.querySelector(".movie-detail");
console.log("🚀 ~ file: search.js:4 ~ btnMore", btnMore);
let pageNum = 1;
btnMore.addEventListener("click", function () {
  pageNum++;
  loadMovie(pageNum);
});
loadMovie(pageNum);
function loadMovie(pageNum = 1) {
  const myFetch = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c3531c0fd9611d97111b750a606e8fdb&language=ko-KR&page=${pageNum}`);
  myFetch
    .then(function (response) {
      //console.log("약속 잘 이행되었음");
      console.log(response);
      return response.json();
    })
    .then(function (result) {
      console.log("json으로 변환 완료 되었음");
      //여기에 내가 필요한 코드 넣는 곳
      console.log(result.results);
      result.results.forEach(function (item, idx) {
        list.innerHTML =
          list.innerHTML +
          `<li data-id="${item.id}">
        <div class="img-box"><img src="https://image.tmdb.org/t/p/original${item.poster_path}"></div>
        <div class="contents-box">
          <h2>${item.title}</h2>
          <p>${item.original_title}</p>
          <p>${item.release_date}</p>
          <p class="overview">${item.overview}</p>
        </div>
      </li>`;
      });
      //li추가된후 코드.....
      gsap.from(".list li", { opacity: 0, stagger: 0.02 });
      const movieItems = document.querySelectorAll(".list li");
      movieItems.forEach(function (item, idx) {
        item.addEventListener("click", function () {
          //console.log(item.dataset.id);
          const movieID = item.dataset.id;
          const movieFetch = fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=c3531c0fd9611d97111b750a606e8fdb&language=ko-KR`);
          movieFetch
            .then(function (response) {
              console.log("디테일한 영화정보 받았음");
              return response.json();
            })
            .then(function (result) {
              console.log(result);
              movieDetail.classList.add("on");
              movieDetail.innerHTML = `
              <div class="img-box"><img src="https://image.tmdb.org/t/p/original${result.backdrop_path}" alt="" /></div>
              <div class="contents-box">
                <h2 class="title">${result.title}</h2>
                <p>${result.original_title}</p>
                <p>genres</p>
                <p><a href="${result.homepage}" target="_blank">${result.homepage}</a></p>
                <p>${result.release_date}</p>
                <p>${result.popularity}</p>
                <p>${result.runtime}</p>
                <p>${result.overview}</p>
              </div>
              <button>닫기</button>
              `;
            })
            .catch(function () {
              console.log("디테일한 영화정보 못받았음");
            });
          // https://api.themoviedb.org/3/movie/{movie_id}?api_key=c3531c0fd9611d97111b750a606e8fdb&language=ko-KR
        });
      });
    })
    .catch(function () {
      console.log("약속이 거절되었음");
    });
}
