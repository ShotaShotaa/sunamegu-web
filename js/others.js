// for (let i = 1; i <= 3; i++) {
//     document.write('<div class="col-lo-4 col-sm-6">')
//     document.write(`<img src="./images/others/image (${i}).jpg" alt="その他のイベント">`)
//     document.write('</div>')
// }

// for (let i = 1; i <= 2; i++) {
//     document.write('<div class="col-lo-4 col-sm-6">')
//     document.write(`<img src="./images/4-2/short/image (${i}).jpg" alt="その他のイベント">`)
//     document.write('</div>')
// }
for (let i = 1; i <= 3; i++) {
    document.write(`<div class="col-lo-4 col-sm-6">
    <picture>
    <source srcset="./images/others/image (${i}).webp" media="(max-width:500px)" type="image/webp">
    <source srcset="./images/others/image (${i}).jpg" media="(max-width:500px)">
    <source srcset="./images/others/image (${i}).webp" type="image/webp">
    <img src="./images/others/image (${i}).jpg" alt="その他のイベント"> </div>`)
}

// for (let i = 1; i <= 3; i++) {
//     document.write(`<div class="col-lo-4 col-sm-6">
//     <picture>
//     <source srcset="./images/others/image (${i}).webp" media="(max-width:500px)" type="image/webp">
//     <source srcset="./images/others/image (${i}).jpg" media="(max-width:500px)">
//     <source srcset="./images/others/image (${i}).webp" type="image/webp">
//     <img src="./images/others/image (${i}).jpg" alt="その他のイベント"> </div>`)
// }
