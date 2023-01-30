const container = document.querySelector("#map");
// navigator.geolocation.getCurrentPosition(function (position) {
//   console.log(position);
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
//   const { latitude, longitude } = position.coords;
//   const myCoords = new kakao.maps.LatLng(latitude, longitude);
//   const options = {
//     center: myCoords, //지도의 중심좌표.
//     level: 3,
//   };
//   const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
// });

mapOption = {
  center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
  level: 3, // 지도의 확대 레벨
};

// 지도를 생성합니다
const map = new kakao.maps.Map(container, mapOption);

// 주소-좌표 변환 객체를 생성합니다
const geocoder = new kakao.maps.services.Geocoder();

// 주소로 좌표를 검색합니다
geocoder.addressSearch("서울특별시 영등포구 선유로 130", function (result, status) {
  // 정상적으로 검색이 완료됐으면
  if (status === kakao.maps.services.Status.OK) {
    const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

    // 결과값으로 받은 위치를 마커로 표시합니다
    const marker = new kakao.maps.Marker({
      map: map,
      position: coords,
    });

    // 인포윈도우로 장소에 대한 설명을 표시합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: '<div style="width:150px;text-align:center;padding:6px 0;">TIS</div>',
    });
    infowindow.open(map, marker);

    // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    map.setCenter(coords);
  }
});
