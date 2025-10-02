const cards = document.getElementById("cards");

fetch("https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state")
  .then((res) => {
    return res.json();
  })
  .then((value) => {
    console.log(value);
    value.forEach((element) => {
      cards.innerHTML += `<div class="flex flex-col gap-5 min-w-63 h-full">
              <img class="h-50 w-62" src=/img/${element.image} alt="" />
              <div class="flex gap-1">
                <p class="text-orange-500 font-bold text-[20px]">$</p>
                <span class="font-bold text-[20px] text-[#8c8b8b]">${element.price}</span>
              </div>
              <span class="text-[#1f3e72] font-bold text-[25px]"
                >${element.name}</span
              >
              <p class="text-[#8c8b8b] text-[13px]">${element.addres}
              </p>
            </div>`;
    });
  });
