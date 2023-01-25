//   promise  이행을 하거나 거절을 하거나
const ul = document.querySelector(".list");
const myFetch = fetch("http://dapi.kakao.com/v2/search/image?query=글로리", {
  headers: { Authorization: "KakaoAK 6b2baf1cf6415f955c240557b86a01e2" },
});
myFetch
  .then(function (response) {
    //console.log(response);
    const json = response.json();
    json.then(function (result) {
      console.log(result);
      const list = result.documents;
      for (let i = 0; i < list.length; i++) {
        ul.innerHTML += `<li><img src="${list[i].thumbnail_url}"></li>`;
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });
//console.log("🚀 ~ file: search.js:2 ~ fetch", myFetch);
