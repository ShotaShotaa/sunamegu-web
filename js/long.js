for (let i = 1; i <= 33; i++) {
    // 要素の作成
const div = document.createElement('div');
div.classList.add('col-lo-4', 'col-sm-6');

const picture = document.createElement('picture');

const source1 = document.createElement('source');
source1.setAttribute('srcset', `./images/4-9/long/image (${i}).webp`);
source1.setAttribute('media', '(max-width:500px)');
source1.setAttribute('type', 'image/webp');
picture.appendChild(source1);

const source2 = document.createElement('source');
source2.setAttribute('srcset', `./images/4-9/long/image (${i}).jpg`);
source2.setAttribute('media', '(max-width:500px)');
picture.appendChild(source2);

const source3 = document.createElement('source');
source3.setAttribute('srcset', `./images/4-9/long/image (${i}).webp`);
source3.setAttribute('type', 'image/webp');
picture.appendChild(source3);

const img = document.createElement('img');
img.setAttribute('src', `./images/4-9/long/image (${i}).jpg`);
    img.setAttribute('alt', 'アルバイト情報');
    img.setAttribute('loading', 'lazy');
picture.appendChild(img);

div.appendChild(picture);

// DOMに要素を追加
const target = document.getElementById('long'); // HTMLにある要素のIDを指定
target.appendChild(div);
}

for (let i = 1; i <= 12; i++) {    // 要素の作成
const div = document.createElement('div');
div.classList.add('col-lo-4', 'col-sm-6');

const picture = document.createElement('picture');

const source1 = document.createElement('source');
source1.setAttribute('srcset', `./images/4-2/long/image (${i}).webp`);
source1.setAttribute('media', '(max-width:500px)');
source1.setAttribute('type', 'image/webp');
picture.appendChild(source1);

const source2 = document.createElement('source');
source2.setAttribute('srcset', `./images/4-2/long/image (${i}).jpg`);
source2.setAttribute('media', '(max-width:500px)');
picture.appendChild(source2);

const source3 = document.createElement('source');
source3.setAttribute('srcset', `./images/4-2/long/image (${i}).webp`);
source3.setAttribute('type', 'image/webp');
picture.appendChild(source3);

const img = document.createElement('img');
img.setAttribute('src', `./images/4-2/long/image (${i}).jpg`);
img.setAttribute('alt', 'アルバイト情報');
    img.setAttribute('loading', 'lazy');
picture.appendChild(img);

div.appendChild(picture);

// DOMに要素を追加
const target = document.getElementById('long'); // HTMLにある要素のIDを指定
target.appendChild(div);
}
