const myFetch = fetch(
  "http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&pageNo=1&numOfRows=100&apiType=JSON&std_day=2023-01-26"
);
myFetch
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result.items);
    const cities = [];
    const datas = [];
    result.items.forEach(function (item, idx) {
      cities.push(item.gubun);
      datas.push(item.incDec);
    });

    const ctx = document.querySelector("#myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: cities,
        datasets: [
          {
            label: "# of Votes",
            data: datas,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch(function () {
    console.log("안왔음");
  });
