for (let i = 1; i <= 3; i++) {
    // div要素を作成する
    const div = document.createElement('div');
    div.classList.add('col-lo-4', 'col-sm-6');

    // img要素を作成する
    const img = document.createElement('img');
    img.setAttribute('src', `images/4-16/short/image (${i}).webp`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('alt', 'アルバイト情報');

    // div要素の子要素としてimg要素を追加する
    div.appendChild(img);

    // long IDを持つ要素を取得する
    const longElement = document.getElementById('short');

    // long要素の子要素としてdiv要素を追加する
    longElement.appendChild(div);
}

for (let i = 1; i <= 2; i++) {
    // div要素を作成する
    const div = document.createElement('div');
    div.classList.add('col-lo-4', 'col-sm-6');

    // img要素を作成する
    const img = document.createElement('img');
    img.setAttribute('src', `images/4-9/short/image (${i}).webp`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('alt', 'アルバイト情報');

    // div要素の子要素としてimg要素を追加する
    div.appendChild(img);

    // long IDを持つ要素を取得する
    const longElement = document.getElementById('short');

    // long要素の子要素としてdiv要素を追加する
    longElement.appendChild(div);
}
