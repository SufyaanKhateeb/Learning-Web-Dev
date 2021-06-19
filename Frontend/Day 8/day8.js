var box = document.querySelector(".gridbox");
const toPaint = [128, 129, 132, 133, 147, 150, 151, 154, 166, 175, 186, 195, 206, 215, 227, 234, 248, 253, 269, 272, 290, 291];

for(let i = 0; i < 400; i++) {
		box.innerHTML += '<div class="box" onclick="changecolor(this)" id="'+(i+1)+'" ></div>';
}

const changecolor=(item)=> item.classList.toggle("changecolor");

const pixels = document.querySelectorAll('.box');
pixels.forEach((p, i) => {
	if (toPaint.includes(i + 1)) {
		p.classList.toggle("changecolor");
	}
});