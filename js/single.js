// for (let i = 1; i <= 1; i++) {
//     document.write('<div class="col-lo-4 col-sm-6">')
//     document.write(`<img src="./images/single/image (${i}).jpg" alt="アルバイト情報">`)
//     document.write('</div>')
// }

// for (let i = 1; i <= 2; i++) {
//     document.write('<div class="col-lo-4 col-sm-6">')
//     document.write(`<img src="./images/4-2/short/image (${i}).jpg" alt="アルバイト情報">`)
//     document.write('</div>')
// }

for (let i = 1; i <= 1; i++) {
    document.write(`<div class="col-lo-4 col-sm-6">
    <picture>
    <source srcset="./images/single/image (${i}).webp" media="(max-width:500px)" type="image/webp">
    <source srcset="./images/single/image (${i}).jpg" media="(max-width:500px)">
    <source srcset="./images/single/image (${i}).webp" type="image/webp">
    <img src="./images/single/image (${i}).jpg" alt="アルバイト情報">
    </picture>
    </div>`)
}
