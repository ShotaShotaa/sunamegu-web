for (let i = 1; i <= 33; i++) {
    document.write(`<div class="col-lo-4 col-sm-6">
    <picture>
    <source srcset="./images/4-9/long/image (${i}).webp" media="(max-width:500px)" type="image/webp">
    <source srcset="./images/4-9/long/image (${i}).jpg" media="(max-width:500px)">
    <source srcset="./images/4-9/long/image (${i}).webp" type="image/webp">
    <img src="./images/4-9/long/image (${i}).jpg" alt="アルバイト情報"> </div>`)
}

for (let i = 1; i <= 12; i++) {
    document.write(`<div class="col-lo-4 col-sm-6">
    <picture>
    <source srcset="./images/4-2/long/image (${i}).webp" media="(max-width:500px)" type="image/webp">
    <source srcset="./images/4-2/long/image (${i}).jpg" media="(max-width:500px)">
    <source srcset="./images/4-2/long/image (${i}).webp" type="image/webp">
    <img src="./images/4-2/long/image (${i}).jpg" alt="アルバイト情報"> </div>`)
}
