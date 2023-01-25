const searchTxt = document.querySelector(".search-txt");
const btnSearch = document.querySelector(".btn-search");
const ul = document.querySelector(".list");
btnSearch.addEventListener("click", function () {
  const txt = searchTxt.value;
  const myFetch = fetch(`http://dapi.kakao.com/v2/search/image?query=${txt}`, {
    headers: {
      Authorization: "KakaoAK 6b2baf1cf6415f955c240557b86a01e2",
    },
  });
  myFetch
    .then(function (response) {
      //console.log("차마시러 가기");
      //console.log(response.json());
      const json = response.json();
      json.then(function (result) {
        //console.log(result.documents[0].display_sitename);
        const list = result.documents;
        for (let i = 0; i < list.length; i++) {
          ul.innerHTML += `<li><img src="${list[i].thumbnail_url}"></li>`;
        }
      });
    })
    .catch(function () {
      console.log("소개해주기로 한 새끼 죽이러 가기");
    });
});

// const myFetch = fetch("http://dapi.kakao.com/v2/search/image?query=전지현", {
//   headers: {
//     Authorization: "KakaoAK 6b2baf1cf6415f955c240557b86a01e2",
//   },
// });
// myFetch
//   .then(function (response) {
//     //console.log("차마시러 가기");
//     //console.log(response.json());
//     const json = response.json();
//     json.then(function (result) {
//       //console.log(result.documents[0].display_sitename);
//       const list = result.documents;
//       for (let i = 0; i < list.length; i++) {
//         ul.innerHTML += `<li><img src="${list[i].thumbnail_url}"></li>`;
//       }
//     });
//   })
//   .catch(function () {
//     console.log("소개해주기로 한 새끼 죽이러 가기");
//   });
// console.log("111");
