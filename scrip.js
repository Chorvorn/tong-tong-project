const txt = [
  {
    img: "img/2025-08-04-6890ad5e7f13a.png",
    input: [
      "img/2025-08-04-6890abe614459.png",
      "img/2025-08-04-6890ad5e7f13a.png",
      "img/2025-08-04-6890ae14a0504.png",
      "img/2025-08-04-6890b05faed78.png",
    ],
  },
];

let data = "";

for (let i in txt) {
  let inputImg = "";

  // loop រូបតូចៗ
  for (let j in txt[i].input) {
    inputImg += `
      <input 
        class="button-img" 
        type="image" 
        src="${txt[i].input[j]}"
        onclick="test1('${txt[i].input[j]}')">
    `;
  }

  data += `
    <div class="card-img">
      <img id="img1" src="${txt[i].img}" alt="">
    </div>

    <div class"class-group-item-img">
      ${inputImg}
     </div>
  `;
}

document.querySelector(".card-scrip").innerHTML = data;

function test1(src) {
  document.getElementById("img1").src = src;
}
