const thumbList = document.querySelector(".list");
const btnSearch = document.querySelector(".btn-search");
const searchTxt = document.querySelector(".search-txt");
const recentSearchWord = document.querySelector(".recent-search-word");

const recentSearchWordArray = JSON.parse(localStorage.getItem("recentSearchWord")) ?? [];
if (recentSearchWordArray !== null) {
  recentSearchWordArray.forEach(function (item, idx) {
    recentSearchWord.innerHTML += `<li>${item}</li>`;
  });
  const recentSearchWordItem = document.querySelectorAll("li");
  recentSearchWordItem.forEach(function (item, idx) {
    item.addEventListener("click", function () {
      //console.log(item);
      const txt = item.textContent;
      searchImg(txt);
    });
  });
}
searchTxt.addEventListener("keyup", function (e) {
  const txt = searchTxt.value;
  if (e.keyCode === 13) {
    if (!recentSearchWordArray.includes(txt)) {
      recentSearchWordArray.push(txt);
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
      return response.json();
    })
    .then(function (result) {
      result.documents.forEach(function (item, idx) {
        thumbList.innerHTML += `<li><a href="${item.image_url}" data-fancybox="gallery"><img src="${item.thumbnail_url}"></a></li>`;
      });
      // ul에 li가 추가된 상태
      gsap.from(".list li", { scale: 0, stagger: { each: 0.02, grid: "auto", from: "edge" } });
    })
    .catch(function () {
      console.log("카톡 프로필에 사진을 올리는게 아니었는데...");
    })
    .finally(function () {
      console.log("주선자에게 연락하기...");
    });
}

//console.log(myFetch);
