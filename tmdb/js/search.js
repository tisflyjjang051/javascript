// 클라이언트  front
const list = document.querySelector(".list");
const btnMore = document.querySelector(".btn-more");
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
          `<li>
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
      gsap.from(".list li", { scale: 0, stagger: 0.02 });
    })
    .catch(function () {
      console.log("약속이 거절되었음");
    });
}
