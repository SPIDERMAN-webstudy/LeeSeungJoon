const quotes = [
{
    sentence: "나의 시간과 몸으로 돈을 벌지 않는다. 설사 그렇다 해도 그것은 나의 시스템을 구축하기 위한 초기자본을 얻기 위함이다.",
    author: "이승준"
},
{
    sentence: "부채를 사지 말라. 나에게 돈을 벌어다 줄 자산을 사라. 대부분의 소비는 투자의 형태여야 한다.",
    author:"이승준"
},
{
    sentence: "자본주의에서 내가 제공한 가치가 돈이다. 최대 효울로 많은 가치를 제공 방법을 고민하라.",
    author:"이승준"
},
{
    sentence: "돈은 가치, 기회, 그리고 시간의 저장이다. 돈을 이것들을 재창출할 방향을 지불하라.",
    author:"이승준"
},
{
    sentence: "많은 관계는 많은 기회다. 사람들은 네가 적극적으로 다가온다고 싫어하지 않는다.",
    author:"이승준"
},
{
    sentence: "근면하고 계획하여 체계적으로 목표에 접근해라. 게으름에 대한 합리화는 마약이고 독이다.",
    author:"이승준"
},
{
    sentence: "냉철하되 냉소적인 사람이 되지 않는다. 따듯한 마음, 그게 너의 본성이다.",
    author:"이승준"
},
{
    sentence: "시간이 없어? 정말 그럴까? 불평하지 말고 왜 시간이 없을지, 어디서 시간과 돈을 낭비하고 있는지 널 돌이켜봐라.",
    author: "이승준"
},
{
    sentence: "거절과 실패에 의연해지고 너의 잘못과 실수를 인정해라. 그래야 성장한다.",
    author: "이승준"
},
{
    sentence: "시기와 질투는 너를 가난하게 만들 뿐이다. 그 대상에게 배워라, 받아들여라, 그리고 나누어라.",
    author: "이승준"
},
{
    sentence: "마음과 몸을 신경써라. 건강하지 않으면 아무것도 소용없다. 성공의 목적이 무엇인지 생각하라.",
    author: "이승준"
},
// {
//     sentence: "",
//     author: ""
// },
]

const sentence=document.querySelector("#quotes span:first-child");
const author=document.querySelector("#quotes span:last-child");

const len = quotes.length;
const index = Math.floor(Math.random()*len);

randomQuote = quotes[index];
sentence.innerText =randomQuote.sentence;
author.innerText = randomQuote.author;