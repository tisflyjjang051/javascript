const thumbList = document.querySelector(".list");
const btnSearch = document.querySelector(".btn-search");
const searchTxt = document.querySelector(".search-txt");
const recentSearchWord = document.querySelector(".recent-search-word");
//let recentSearchWordArray = [];
/// Nullish coalescing
const recentSearchWordArray = JSON.parse(localStorage.getItem("recentSearchWord")) ?? [];
console.log("🚀 ~ file: search.js:8 ~ recentSearchWordArray", recentSearchWordArray);
if (recentSearchWordArray !== null) {
  recentSearchWordArray.forEach(function (item, idx) {
    recentSearchWord.innerHTML += `<li>${item}</li>`;
  });
}

searchTxt.addEventListener("keyup", function (e) {
  const txt = searchTxt.value;
  console.log(e);
  // if (e.keyCode === 13 && e.ctrlKey) {
  //   searchImg(txt);
  // }
  //searchImg(txt);
  if (e.keyCode === 13) {
    if (!recentSearchWordArray.includes(txt)) {
      recentSearchWordArray.push(txt);
      recentSearchWord.innerHTML += `<li>${txt}</li>`;

      localStorage.setItem("recentSearchWord", JSON.stringify(recentSearchWordArray));
    }
    searchImg(txt);
    console.log(recentSearchWordArray);
  }
});

function searchImg(searchTxt) {
  thumbList.innerHTML = "";
  const myFetch = fetch(`http://dapi.kakao.com/v2/search/image?query=${searchTxt}`, {
    headers: {
      Authorization: "KakaoAK 6b2baf1cf6415f955c240557b86a01e2",
    },
  });
  myFetch
    .then(function (response) {
      //console.log("그녀가 내게로 왔어,,,");
      //console.log(response.json());
      return response.json();
    })
    .then(function (result) {
      //console.log(result.documents);
      // 여기서 반복문 돌려서 화면에 뿌리기....
      result.documents.forEach(function (item, idx) {
        //console.log(item.thumbnail_url);
        thumbList.innerHTML += `<li><a href="${item.image_url}" data-fancybox="gallery"><img src="${item.thumbnail_url}"></a></li>`;
      });
    })
    .catch(function () {
      console.log("카톡 프로필에 사진을 올리는게 아니었는데...");
    })
    .finally(function () {
      console.log("주선자에게 연락하기...");
    });
}

//console.log(myFetch);
