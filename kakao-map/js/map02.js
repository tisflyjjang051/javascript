// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다

const searchTxt = document.querySelector(".search-txt");
searchTxt.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    loadMap(e.currentTarget.value);
  }
});

function loadMap(txt) {
  const mapContainer = document.querySelector("#map");
  const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  const mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

  const map = new kakao.maps.Map(mapContainer, mapOption);

  // 장소 검색 객체를 생성합니다
  const ps = new kakao.maps.services.Places();

  // 키워드로 장소를 검색합니다
  ps.keywordSearch(txt, placesSearchCB);

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB(data, status, pagination) {
    console.log(data);
    if (status === kakao.maps.services.Status.OK) {
      const bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
      map.setBounds(bounds);
    }
  }

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place) {
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.setContent(`<div class="marker">${place.place_name}</div>`);
      infowindow.open(map, marker);
    });
  }
}
