for (let i = 1; i <= 4; i++) {
    // div要素を作成する
    const div = document.createElement('div');
    div.classList.add('col-lo-4', 'col-sm-6');

    // img要素を作成する
    const img = document.createElement('img');
    img.setAttribute('src', `images/volunteer/image (${i}).webp`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('alt', 'ボランティア情報');

    // div要素の子要素としてimg要素を追加する
    div.appendChild(img);

    // long IDを持つ要素を取得する
    const longElement = document.getElementById('volunteer');

    // long要素の子要素としてdiv要素を追加する
    longElement.appendChild(div);
}
