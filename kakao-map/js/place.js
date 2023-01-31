const searchTxt = document.querySelector(".search-txt");
searchTxt.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    searchPlace(searchTxt.value);
  }
});
function searchPlace(searchTxt) {
  const container = document.querySelector("#map");
  const mapOption = {
    center: new kakao.maps.LatLng(37.66826, 126.9786567),
    level: 3,
  };
  const map = new kakao.maps.Map(container, mapOption);

  const place = new kakao.maps.services.Places();
  place.keywordSearch(searchTxt, function (result, status) {
    console.log(status);
    if (status === "OK") {
      console.log(result);
      const bounds = new kakao.maps.LatLngBounds();
      result.forEach(function (item, idx) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item.y, item.x),
        });
        bounds.extend(new kakao.maps.LatLng(item.y, item.x));
      });
      map.setBounds(bounds);
    } else {
      alert("검색 결과가 존재하지 않습니다.");
    }
  });
}
