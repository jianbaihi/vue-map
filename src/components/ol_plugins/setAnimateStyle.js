export default function setAnimateStyle({
    map,
    size = 40
}) {
    /* radius=10
    10~14
    <10  true radius++;
    >14  false radius--;
     */
    let canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    let radius = size / 4
    let increase = true;
    function frame() {

        /* 清空画布 */
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "#ff2d5180"
        ctx.fill();
        /* 累积蓝色的圆 */
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 4 - 1, 0, Math.PI * 2); //9
        ctx.closePath();
        ctx.fillStyle = "#1793fd"
        ctx.fill();
        if (radius < size / 4) {
            increase = true
        } else if (radius > (size / 4 + 4)) {
            increase = false;
        }
        if (increase) {
            radius++;
        } else {
            radius--;
        }
        setTimeout(frame, 150)
        map.render();
    }
    frame();
    let style = new ol.style.Style({
        image: new ol.style.Icon({
            img: canvas,
            imgSize: [canvas.width, canvas.height]
        })
    })
    return style;
}