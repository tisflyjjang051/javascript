const loading = document.querySelector(".loading");
const picker = new easepick.create({
  element: document.querySelector("#picked-date"),
  css: ["./css/easepick.css"],
  setup(picker) {
    picker.on("select", (e) => {
      const { view, date, target } = e.detail;
      console.log("이벤트 발생");
    });
  },
});

const myFetch = fetch(
  "http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&pageNo=1&numOfRows=100&apiType=JSON&std_day=2023-01-26"
);
myFetch
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    loading.classList.add("off");
    const cities = [];
    const datas = [];
    result.items.sort(function (a, b) {
      if (parseInt(a.incDec) > parseInt(b.incDec)) return 1;
      if (parseInt(a.incDec) < parseInt(b.incDec)) return -1;
      if (parseInt(a.incDec) === parseInt(b.incDec)) return 0;
    });
    // result.items.sort(function (a, b) {
    //   if (a.gubun > b.gubun) return 1;
    //   if (a.gubun < b.gubun) return -1;
    //   if (a.gubun === b.gubun) return 0;
    // });

    console.log(result.items);
    result.items.forEach(function (item, idx) {
      cities.push(item.gubun);
      datas.push(item.incDec);
    });
    Chart.defaults.font.size = 20;
    const ctx = document.querySelector("#myChart");
    new Chart(ctx, {
      type: "bar", // line,도넛,
      data: {
        labels: cities,
        datasets: [
          {
            label: "# of Votes",
            data: datas,
            borderWidth: 1,
            //backgroundColor: "rgba(255, 0, 0, 1)",
            //prettier-ignore
            /*
            backgroundColor: [
              "#ff0000","#00ff00","#0000ff","#ff0000","#00ff00","#0000ff","#ff0000","#00ff00","#0000ff",
              "#ff0000","#00ff00","#0000ff","#ff0000","#00ff00","#0000ff","#ff0000","#00ff00","#0000ff","#ff0000",
            ],
            */
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
