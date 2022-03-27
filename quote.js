const quotes = [
    {
    quote: "We'll find a way, we always have",
    from: "Intersetella",
},
{
    quote: "모든 면에서 닳아 없어지지 마십시오",
    from: "시선으로부터",
}, 
{
    quote: "어떤 이야기의 어떤 장면은 그렇게 빛도 소리도 없이 영원히 재생된다.",
    from: "지구인만큼 지구를 사랑할 수는 없어",
}, 

{
    quote: "My mum always said things we lose have a way of coming back to us in the end. If not always in the way we expect.",
    from: "luna lovegood",
}, 
{
    quote: "尽日寻春不见春，芒鞋踏遍陇头云”的全诗是：尽日寻春不见春，芒鞋踏遍陇头云。归来笑拈梅花嗅，春在枝头已十分。",
    from: "",
},
{
    quote: "Be kind, for everyone is fighting a hard battle.",
    from: "Wonder",
},
{
    quote: "Stop Trying To Make Everyone Happy, You're Not Tequila.",
    from: "",
},
{
    quote: "Most disasters aren't as bad as they feel in the moment that they happen.",
    from: "Ollie",
},
{
    quote: "Good girls go to heaven bad girls go everywhere.",
    from: ""
},


];

const quote = document.querySelector("#quote span:first-child");
const from = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
from.innerText = todaysQuote.from;
