const wrapper = document.getElementById("wrapper");
const gif = document.getElementById("gif");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Chúc em học giỏi, thành công trong sự nghiệp nha";
  gif.src = "https://i.pinimg.com/originals/ce/63/c2/ce63c26f8747e2181594d2db8787c026.gif";
  noBtn.hidden = true;
  yesBtn.hidden = true;
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "";
  gif.src = "https://i.pinimg.com/originals/03/a4/28/03a428ee705240475480c7722c6c2b3b.gif";
  noBtn.hidden = true;
  // yesBtn.hidden = true;
});