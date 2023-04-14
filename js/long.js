for (let i = 1; i <= 33; i++) {
    const text = document.getElementById('long');
    text.insertAdjacentHTML('afterbegin', `<div class="col-lo-4 col-sm-6">
    <picture><source srcset="./images/4-9/long/image (${i}).webp" media="(max-width:500px)" type="image/webp">
    <source srcset="./images/4-9/long/image (${i}).jpg" media="(max-width:500px)">
    <source srcset="./images/4-9/long/image (${i}).webp" type="image/webp">
    <img src="./images/4-9/long/image (${i}).jpg" alt="アルバイト情報">
    </picture>
    </div>`);
}

for (let i = 1; i <= 12; i++) {
    const text = document.getElementById('long');
    text.insertAdjacentHTML('afterbegin', `<div class="col-lo-4 col-sm-6">
    <picture>
    <source srcset="./images/4-2/long/image (${i}).webp" media="(max-width:500px)" type="image/webp">
    <source srcset="./images/4-2/long/image (${i}).jpg" media="(max-width:500px)">
    <source srcset="./images/4-2/long/image (${i}).webp" type="image/webp">
    <img src="./images/4-2/long/image (${i}).jpg" alt="アルバイト情報">
    </picture>
    </div>`);
}
