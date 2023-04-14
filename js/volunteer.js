// for (let i = 1; i <= 4; i++) {
//     document.write('<div class="col-lo-4 col-sm-6">')
//     document.write(`<img src="./images/volunteer/image (${i}).jpg" alt="ボランティア情報">`)
//     document.write('</div>')
// }

// for (let i = 1; i <= 2; i++) {
//     document.write('<div class="col-lo-4 col-sm-6">')
//     document.write(`<img src="./images/4-2/short/image (${i}).jpg" alt="ボランティア情報">`)
//     document.write('</div>')
// }

for (let i = 1; i <= 4; i++) {
    // 要素の作成
const div = document.createElement('div');
div.classList.add('col-lo-4', 'col-sm-6');

const picture = document.createElement('picture');

const source1 = document.createElement('source');
source1.setAttribute('srcset', `./images/volunteer/image (${i}).webp`);
source1.setAttribute('media', '(max-width:500px)');
source1.setAttribute('type', 'image/webp');
picture.appendChild(source1);

const source2 = document.createElement('source');
source2.setAttribute('srcset', `./images/volunteer/image (${i}).jpg`);
source2.setAttribute('media', '(max-width:500px)');
picture.appendChild(source2);

const source3 = document.createElement('source');
source3.setAttribute('srcset', `./images/volunteer/image (${i}).webp`);
source3.setAttribute('type', 'image/webp');
picture.appendChild(source3);

const img = document.createElement('img');
img.setAttribute('src', `./images/volunteer/image (${i}).jpg`);
img.setAttribute('alt', 'ボランティア情報');
picture.appendChild(img);

div.appendChild(picture);

// DOMに要素を追加
const target = document.getElementById('volunteer'); // HTMLにある要素のIDを指定
target.appendChild(div);

}
