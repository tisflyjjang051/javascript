//쇼핑몰   AWS  ()
const searchTxt = document.querySelector(".search-txt");
searchTxt.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    loadMap(searchTxt.value);
  }
});
const container = document.querySelector("#map");
const mapOption = {
  center: new kakao.maps.LatLng(37.66826, 126.9786557),
  level: 12,
};

const map = new kakao.maps.Map(container, mapOption);

const clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});

const customOverlay = new kakao.maps.CustomOverlay({
  map: map,
  //content: `<h1>나는 커스텀 오버레이 info window 대신에 쓸 수 있다.</h1>`,
  position: new kakao.maps.LatLng(37.66826, 126.9786557),
  zIndex: 99,
});
//customOverlay.setMap(map);
// 이벤트 위임...
document.body.addEventListener("click", function (e) {
  //console.log(e.target);
  if (e.target.closest("button")) {
    customOverlay.setMap(null);
  }
});
function loadMap(address) {
  fetch(`https://api.odcloud.kr/api/EvInfoServiceV2/v1/getEvSearchList?page=1&perPage=5000&cond[addr::LIKE]=${address}&serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D
`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      const chargeList = result.data;
      const markers = [];
      chargeList.forEach(function (item, idx) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(item.lat, item.longi),
        });
        kakao.maps.event.addListener(marker, "click", function () {
          customOverlay.setMap(map);
          customOverlay.setPosition(marker.getPosition());
          customOverlay.setContent(`
          <div class="contents-box">
            <h2 class="title">${item.csNm}</h2>
            <p class="addr">${item.addr}</p>
            <p class="type">충전타입:${item.cpNm}cpNm</p>
            <button class="close"><span class="material-icons"> close </span></button>
          </div>`);
        });
        markers.push(marker);
      });
      clusterer.addMarkers(markers);
    });
}
