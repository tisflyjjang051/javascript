const questions = [
  {
    id: 1,
    title: "새로운 고양이를 데려왔다! 나의 반응은?",
    answera: "머해? 이름은 뭐로 해줄까? 자꾸 말을 걸고 싶다.",
    answerb: "혼자만의 시간이 필요하지? 적응할 시간을 준다.",
    type: "EI",
  },
  {
    id: 2,
    title: "고양이에 대한 모든 것이 궁금해졌다. 나의 행동은?",
    answera: "고양이 관련 커뮤니티에 들어 다른 집사님들과 소통을 하며 고양이에 대한 지식을 쌓는다.",
    answerb: "커뮤니티에 가입은 하지만 눈으로 참고만 하고 혼자 찾아보는게 편하다.",
    type: "EI",
  },
  {
    id: 3,
    title: "아무리봐도 우리 고양이가 정말 이쁜 것 같다. 나의 행동은?",
    answera: "'너구리 너무 이쁜 것 같아.. 사람들한테 자랑해야지..!!' 하며 인스타를 만들어서 사진도 공유하고 소통도 한다.",
    answerb: "우리 고양이 너무 이쁘다.. 사진찍어서 사진첩에 간직한다.",
    type: "EI",
  },
  {
    id: 4,
    title: "고양이 유튜브를 시작하려고 한다. 나는 어떤 유튜브를 만들고 싶은가?",
    answera: "다른 유튜버들을 가이드 라인 삼아 비슷하게 만든다.",
    answerb: "새롭거나 자유로운 방식으로 만들기 위해 생각한다.",
    type: "SN",
  },
  {
    id: 5,
    title: "고양이에 대해서 모르는 부분들을 검색을 하고 있다. 내가 글을 읽는 방법은?",
    answera: "꼼꼼하게 정확하게 읽는다.",
    answerb: "전체적인 의미를 파악하며 읽는다.",
    type: "SN",
  },
  {
    id: 6,
    title: "고양이 밥을 주려고 한다 나의 방법은?",
    answera: "손,눈대중으로 대충 이정도면 되겠지 하고 급여한다.",
    answerb: "칼로리를 정확히 맞춰 저울이나 스푼으로 계랑해서 급여한다.",
    type: "SN",
  },
  {
    id: 7,
    title: "같은 집사 친구가 고양이가 아픈 것 같아 슬퍼하고있다. 나의 반응은?",
    answera: "'이건 이렇게 하면 어떨까?' 해결책을 함께 생각하며 정보들은 같이 찾아본다.",
    answerb: "'아이고,, 어쩌면 좋아..' 일단 먼저 위로를 해준다.",
    type: "TF",
  },
  {
    id: 8,
    title: "고양이를 키우는데 가족과의 마찰이 생겼다. 이럴땐?",
    answera: "나의 생각과 논리가 맞다는 걸 증명하기 위해 가족들에게 먼저 설명한다.",
    answerb: "나의 의견이 상대방을 기분 나쁘게 하지 않도록 잘 전달하려고 먼저 생각한다.",
    type: "TF",
  },
  {
    id: 9,
    title: "고양이가 아파서 병원을 고르려고 리뷰를 보았다. 내가 갈 병원은?",
    answera: "성과가 중요하지!! 좋은 성과를 낸 병원",
    answerb: "사람이 중요하지!! 원장님의 성격이 좋다고 되어있는 병원",
    type: "TF",
  },
  {
    id: 10,
    title: "고양이 사료를 급여하는 방법은?",
    answera: "'우리 고양이 몸무게는 5키로니까 하루세번 몇시에 이만큼 씩 주고, 간식은 이때 챙겨줘야겠다!' 계획을 세운다. ",
    answerb: "사료주면 알아서 먹겠지! 일단 자율급식으로 한꺼번에 줘본다.",
    type: "JP",
  },
  {
    id: 11,
    title: "고양이 사료가 우연히 여러 종류가 생겼다. 급여방법은?",
    answera: "사료를 조금씩 급여해서 고양이의 기호를 테스트 해보고 다 잘먹는다면 날짜에 맞춰서 질리지 않도록 바꿔가며  급여한다.",
    answerb: " 끌리는 걸로 그때그때 급여한다.",
    type: "JP",
  },
  {
    id: 12,
    title: "자기전 나는?",
    answera: "내일 할 일을 미리미리 정해놓고 잔다.",
    answerb: "누우면 장땡! 일단 눕고 생각한다.",
    type: "JP",
  },
];

const ResultData = [
  {
    id: 1,
    name: "러시안 블루",
    best: "ESTJ",
    desc: "겁이 많아요.워낙 온순한 성격에 조용한 고양이라 소심하게 느껴집니다! 낯을 심하게 가리는 편이구요.혼자 놔두면 호기심이 많아서 이것저것 치고 건드리고 즐겁게 보내는 고양이입니다.초보 애묘가가 키우기 좋은 묘종입니다.",
    image: `Russianblue.jpg`,
  },
  {
    id: 2,
    name: "샴",
    best: "ESFP",
    desc: "대체적으로 온순하고 느긋한 성격이에요.외로움을 잘타며 질투심이 강해요.수다스러운 성격입니다.독립심이 강한 편에 속하지만 특이하게도 사람 손 타는 걸 좋아하는 고양이 입니다.",
    image: `Siamese.jpg`,
  },
  {
    id: 3,
    name: "페르시안",
    best: "ENTJ",
    desc: "조용하고 성격도 순한편이서 개냥이가 되는 경우가 많습니다. 장모종이어서 털이 굉장히 부드러워요.아이와 함께 키워도 좋을 만큼 굉장히 순하고 독립심이 강한 고양이 입니다.",
    image: `Persian.jpg`,
  },
  {
    id: 4,
    name: "뱅갈",
    best: "INTP",
    desc: "활동력이 어마어마한 고양이에요! 그렇기 때문에 살이 잘 안찌는 고양이 중에 하나입니다!집사분이 놀아주다가 탈진할 수도!",
    image: `Bengal.jpg`,
  },
  {
    id: 5,
    name: "터키쉬 앙고라",
    best: "INTJ",
    desc: "우아한 장모종 고양이! 그러다보니 까칠하고 성질이 조금 급해요! 잔머리가 많고 복수심도 많은 고양이! 하지만 고양이마다 성격은 다 다르니 참고하세요!",
    image: `Turkishangora.jpg`,
  },
  {
    id: 6,
    name: "아비시니안",
    best: "ISTJ",
    desc: "민첩하고 호기심 많고 똑똑한 고양이입니다! 굉장히 수다쟁이여서 집사가 부르면 야옹하고 대답도 잘하는 고양이에요! 물을 굉장히 좋아해서 목욕을 시킬 때, 굉장히 편한 고양이 중 하나! 다만 호기심이 많아서 이것저것 잘 떨구는 고양이!",
    image: `Abyssinian.jpg`,
  },
  {
    id: 7,
    name: "노르웨이 숲",
    best: "ESTP",
    desc: "조용하고 사람을 매우 좋아하는 고양이 중 하나! 숲에서 살던 고양이라 본능적으로 사냥 놀이를 굉장히 좋아해요. 대형종 고양이라 식욕이 많아요",
    image: `Norwegianforest.jpg`,
  },
  {
    id: 8,
    name: "아메리칸 숏헤어",
    best: "INFP",
    desc: "주인에 대한 호기심이 높고 애교가 굉장히 많아요!다만! 집사 내꺼야! 독점욕도 굉장히 강합니다. 이미 여러마리의 고양이를 키우는 집사라면 다른 고양이들에게 하악질을 볼 수도..",
    image: `Ameshort.png`,
  },
  {
    id: 9,
    name: "코리안 숏헤어",
    best: "ISFP",
    desc: "많은 고양이의 혈통이 섞여있는 고양이에요! 대부분 활발하고 쾌할한 성격을 가지고 있고, 친밀하고 영리합니다! 사냥본능이 매우 뛰어나서 사냥놀이를 굉장히 좋아해요",
    image: `Korshort.jpg`,
  },
  {
    id: 10,
    name: "엑죠틱",
    best: "ISFJ",
    desc: "낯을 가리지 않고, 주인 옆에서 느긋하게 일상을 즐기는 고양이에요! 다만 운동량이 그렇게 많지 않아 뚱뚱 고양이가 될 수 있으니 조심하기!",
    image: `Exotic.jpg`,
  },
  {
    id: 11,
    name: "스코티쉬 폴드",
    best: "ENFP",
    desc: "접힌 귀가 굉장히 귀여운 고양이! 착하고 느긋하며 울음소리가 작은 고양이! 고양이 치고는 애교가 매우 많은 편이며 귀찮을 정도로 집사를 졸졸졸 따라다니는 경우가 있습니다!",
    image: `Scottishfold.jpg`,
  },
  {
    id: 12,
    name: "먼치킨",
    best: "INFJ",
    desc: "짧은 다리와 귀염한 외모를 가지고 있는 고양이에요! 호기심이 매우 많아서 짧은 다리로 이곳저곳을 돌아다니는 에너지가 넘치는 고양이! 영리하고 애교가 많은 편에 속하는 고양이에요",
    image: `Munchkin.png`,
  },
  {
    id: 13,
    name: "렉돌",
    best: "ESFJ",
    desc: "긴 털과 아주 예쁜 예모로 많이 사랑받는 고양이! 봉제인형이라는 이름처럼 집사가 안으면 인형처럼 안겨있는 고양이입니다! 너무나도 순하고 집사와의 교감을 매우 좋아하는 고양이 중에 하나입니다!",
    image: `Ragdoll.jpg`,
  },
  {
    id: 14,
    name: "브리티쉬 숏헤어",
    best: "ENTP",
    desc: "이름과 같이 영국 신사와 같은 고양이! 배려심이 깊고 매우 조용하고 인내심이 강한 고양이에요. 덩치가 큰 편이어서 집사 무릎보다는 옆구리에 앉아서 시간을 보내는 것을 좋아하는 고양이입니다!",
    image: `British.jpg`,
  },
  {
    id: 15,
    name: "스핑크스",
    best: "ISTP",
    desc: "유일하게 털이 없는 고양이입니다! 외모와는 다르게 고양이 중에서 가장 성격이 좋다고 하는 고양이계의 골든리트리버! 다만 피부병이 잘 걸릴 수 있으니 조심조심!",
    image: `Sphinx.jpg`,
  },
  {
    id: 16,
    name: "메인쿤",
    best: "ENFJ",
    desc: "거인 신사라는 별명을 가진 고양이에요! 조용하고 온화한 성격을 가지고 있으며 매우 똑똑하고 크기와 생김새가 사자나 호랑이처럼 생긴 고양이 입니다!",
    image: `Mainecoon.jpg`,
  },
];

// for (let i = 0; i < 100; i++) {
//   const First = parseInt(Math.random() * 12);
//   const Second = parseInt(Math.random() * 12);
//   const num = QuestionData[First];
//   QuestionData[First] = QuestionData[Second];
//   QuestionData[Second] = num;
// }
const QuestionData = _.shuffle(questions);
console.log("🚀 ~ file: mbti.js:211 ~ QuestionData", QuestionData);
//QuestionData
const btnStart = document.querySelector(".start .btn");
const start = document.querySelector(".start");
const question = document.querySelector(".question");
const result = document.querySelector(".result");
const bar = document.querySelector(".question .progress .bar");
const questionBox = document.querySelector(".question .question-box");
const type01 = document.querySelector(".question .type01");
const type02 = document.querySelector(".question .type02");

const catType = document.querySelector(".result .cat-type");
const cat = document.querySelector(".result .cat");
const desc = document.querySelector(".result .desc");
const btnKakao = document.querySelector(".result .btn-kakao");

Kakao.init("5d738bd87720c302b72dc8d2b8fc03d4");

const url = "https://polite-syrniki-e15a44.netlify.app";

btnStart.addEventListener("click", function () {
  start.classList.remove("on");
  question.classList.add("on");
});

btnKakao.addEventListener("click", function () {
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: "나만없어 고양이~~~",
      description: `${selectedData.best}인 당신을 집사로 선택한 고양이는 ${selectedData.name}`,
      imageUrl: `${url}/images/cat/${selectedData.image}`,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: "나도 고양이 집사가 되고 싶다면 클릭!!",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
});

let count = 1;
questionBox.textContent = QuestionData[0].title;
type01.textContent = QuestionData[0].answera;
type02.textContent = QuestionData[0].answerb;

let score = [
  { id: "EI", num: 0 },
  { id: "SN", num: 0 },
  { id: "TF", num: 0 },
  { id: "JP", num: 0 },
];

let selectedData = null;
function clickFunc(point) {
  if (count < 12) {
    questionBox.textContent = QuestionData[count].title;
    type01.textContent = QuestionData[count].answera;
    type02.textContent = QuestionData[count].answerb;
    bar.style.width = ((count + 1) / 12) * 100 + "%";
    const newScore = score.map(function (item, idx) {
      if (item.id === QuestionData[count].type) {
        return { id: item.id, num: item.num + point };
      } else {
        return item;
      }
    });
    score = newScore;
    console.log(score);
  } else {
    question.classList.remove("on");
    result.classList.add("on");
    const mbti = score.reduce(function (acc, current) {
      if (current.num >= 2) {
        return acc + current.id.charAt(0);
      } else {
        return acc + current.id.charAt(1);
      }
    }, "");
    console.log(mbti);
    selectedData = ResultData.find(function (item) {
      if (item.best === mbti) {
        return item;
      }
    });
    console.log(selectedData);
    catType.textContent = selectedData.name;
    cat.src = `./images/cat/${selectedData.image}`;
    desc.textContent = selectedData.desc;
  }
  // map,forEach,find,filter
  count++;
}

type01.addEventListener("click", function () {
  clickFunc(1);
});
type02.addEventListener("click", function () {
  clickFunc(0);
});

//reduce,map,forEach,find,filter
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 순회 (iteration)
const objs = [
  { name: "장성호", id: 1 },
  { name: "남진", id: 2 },
]; // 순회 (iteration)
//const newArr02 = [...arr];
const newArr = objs.map(function (item, idx) {
  return item.name + "님";
});
console.log("🚀 ~ file: mbti.js:290 ~ newArr ~ newArr", newArr);
console.log(arr === newArr);
// accumulate
const sum = arr.reduce(function (acc, current, idx) {
  //console.log("acc===", acc, "current===", current);
  if (current % 2 == 1) {
    acc++;
  }
  return acc;
}, 0);

// array
const newArr02 = arr.filter(function (item, idx) {
  if (idx < 3) {
    return item;
  }
});

// value
const newArr03 = arr.find(function (item, idx) {
  if (item % 2 === 0) {
    return item;
  }
});
console.log("🚀 ~ file: mbti.js:306 ~ newArr02 ~ newArr02", newArr03);
*/
