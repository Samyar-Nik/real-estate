const cards = document.getElementById("cards");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
console.log(p1, "p1");
card1.addEventListener("click", () => {
  p1.classList.toggle("hidden");
});
card2.addEventListener("click", () => {
  p2.classList.toggle("hidden");
});
card3.addEventListener("click", () => {
  p3.classList.toggle("hidden");
});

fetch("https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state")
  .then((res) => {
    return res.json();
  })
  .then((value) => {
    value.forEach((element) => {
      cards.innerHTML += `<div
  class="flex flex-col gap-5 min-w-63 h-full hover:scale-110 transition-all duration-200"
>
  <img class="h-50 w-62" src=/img/${element.image} alt="" />
  <div class="flex gap-1">
    <p class="text-orange-500 font-bold text-[20px]">$</p>
    <span class="font-bold text-[20px] text-[#8c8b8b]">${element.price}</span>
  </div>
  <span class="text-[#1f3e72] font-bold text-[25px]">${element.name}</span>
  <p class="text-[#8c8b8b] text-[13px]">${element.adress}</p>
</div>`;
    });
  });
