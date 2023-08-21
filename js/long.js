for (let i = 1; i <= 13; i++) {
  // div要素を作成する
  const div = document.createElement("div");
  div.classList.add("col-lo-4", "col-sm-6");

  // img要素を作成する
  const img = document.createElement("img");
  img.setAttribute("src", `images/8-21/long/image (${i}).webp`);
  img.setAttribute("loading", "lazy");
  img.setAttribute("alt", "アルバイト情報");

  // div要素の子要素としてimg要素を追加する
  div.appendChild(img);

  // long IDを持つ要素を取得する
  const longElement = document.getElementById("long");

  // long要素の子要素としてdiv要素を追加する
  longElement.appendChild(div);
}

for (let i = 1; i <= 12; i++) {
  // div要素を作成する
  const div = document.createElement("div");
  div.classList.add("col-lo-4", "col-sm-6");

  // img要素を作成する
  const img = document.createElement("img");
  img.setAttribute("src", `images/8-14/long/image (${i}).webp`);
  img.setAttribute("loading", "lazy");
  img.setAttribute("alt", "アルバイト情報");

  // div要素の子要素としてimg要素を追加する
  div.appendChild(img);

  // long IDを持つ要素を取得する
  const longElement = document.getElementById("long");

  // long要素の子要素としてdiv要素を追加する
  longElement.appendChild(div);
}

for (let i = 1; i <= 17; i++) {
  // div要素を作成する
  const div = document.createElement("div");
  div.classList.add("col-lo-4", "col-sm-6");

  // img要素を作成する
  const img = document.createElement("img");
  img.setAttribute("src", `images/8-7/long/image (${i}).webp`);
  img.setAttribute("loading", "lazy");
  img.setAttribute("alt", "アルバイト情報");

  // div要素の子要素としてimg要素を追加する
  div.appendChild(img);

  // long IDを持つ要素を取得する
  const longElement = document.getElementById("long");

  // long要素の子要素としてdiv要素を追加する
  longElement.appendChild(div);
}
