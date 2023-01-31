const container = document.querySelector("#map");
const mapOption = {
  center: new kakao.maps.LatLng(37.66826, 126.9786567),
  level: 3,
};
const map = new kakao.maps.Map(container, mapOption);
const clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});
const customOverlay = new kakao.maps.CustomOverlay({
  map: map,
});
container.addEventListener("click", function (e) {
  //console.log(e.currentTarget);
  if (e.target.closest("button")) {
    customOverlay.setMap(null);
  }
});
fetch(
  "https://apis.data.go.kr/B551011/GoCamping/basedList?MobileOS=ETC&MobileApp=TIS&serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&_type=json&numOfRows=300"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    //console.log(result.response.body.items.item);
    const markerList = [];
    const campingList = result.response.body.items.item;
    const bounds = new kakao.maps.LatLngBounds();
    campingList.forEach(function (item, idx) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(item.mapY, item.mapX),
      });
      kakao.maps.event.addListener(marker, "click", function () {
        customOverlay.setContent(
          `<div class="contents-box">
            <div class="title">${item.facltNm}</div>
            <div class="address">${item.addr1}</div>
            <div class="phone">${item.tel}</div>
            <div class="homepage"><a href="${item.homepage}" target="_blank">${item.homepage}</a></div>
            <div class="reservation"><a href="${item.resveUrl}" target="_blank">예약</a></div>
            
            <button class="close" ><span class="material-icons">close</span></button>
          </div>`
        );
        customOverlay.setMap(map);
        customOverlay.setPosition(marker.getPosition());
      });
      markerList.push(marker);
      bounds.extend(new kakao.maps.LatLng(item.mapY, item.mapX));
    });
    clusterer.addMarkers(markerList);
    map.setBounds(bounds);
  });
