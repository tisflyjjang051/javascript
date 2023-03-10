// const obj = { name: "장성호", age: 20, weight: 80 };
// const { name, age } = obj;
// console.log(name);
// console.log(age === obj.age);
// const animals = ["lion", "tiger", "rabiit"];
const pickedDate = document.querySelector("#picked-date");
const loading = document.querySelector(".loading");
const picker = new easepick.create({
  element: document.querySelector("#picked-date"),
  css: ["./css/easepick.css"],
  setup(picker) {
    picker.on("select", (e) => {
      // 구조분해
      const { date } = e.detail;
      console.log(pickedDate.value);
      loadCoronaData(pickedDate.value);
    });
  },
});

let chart = null;
const now = dayjs().format("YYYY-MM-DD");
pickedDate.value = now;
loadCoronaData(now);
function loadCoronaData(pickedDate) {
  loading.classList.remove("off");
  if (chart !== null) {
    chart.destroy();
  }
  const myFetch = fetch(
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=Wnus4QpirWGI56CfvzMWDIDHMRL%2FmEF%2FqTl9gwVNbRggLYTGPFIdwBy0L51B%2B27d5QRbLanNmIAxPwNvl7dKPA%3D%3D&pageNo=1&numOfRows=100&apiType=JSON&std_day=${pickedDate}`
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
      //Chart.defaults.font.size = 20;
      const ctx = document.querySelector("#myChart");
      chart = new Chart(ctx, {
        plugins: [ChartDataLabels],
        type: "bar", // line,도넛,
        data: {
          labels: cities,
          datasets: [
            {
              label: "시도별 코로나 발생 현황",
              data: datas,
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              // 범례 사용 안 함
              display: false,
            },
            datalabels: {
              color: "#ffffff",
              anchor: "end", // 어디에 표시할건지
              align: "end", // anchor 기준 offset
              offset: 4,
              font: {
                size: 18,
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              grid: {
                display: true,
                color: "rgba(255,255,255,0.1)",
              },
              grace: "1%",
            },
            y: {
              beginAtZero: true,
              grid: {
                display: true,
                color: "rgba(255,255,255,0.1)",
              },
              grace: "1%",
            },
          },
        },
      });
    })
    .catch(function () {
      console.log("안왔음");
    });
}
