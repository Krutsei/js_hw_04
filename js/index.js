const pText = document.querySelector(".ptext");
const buttonText = document.querySelector(".text");
// buttonText.textContent = "This is NOT a text";
// buttonText.textContent = pText.textContent;
buttonText.addEventListener("click", ()=> {buttonText.textContent = pText.textContent})

const pictureNumberOne = document.querySelector(".picture");
pictureNumberOne.src = "https://www.google.com/search?sxsrf=APwXEdc3Lxz6G5IWBZzptjGuD2w6rPQgYA:1687963615104&q=img&tbm=isch&sa=X&ved=2ahUKEwiz8q-9mub_AhWP6CoKHV4VCLYQ0pQJegQIDBAB&biw=1280&bih=577&dpr=1.5#imgrc=BD1Mn-7CrhkJeM";

const link = document.querySelector(".link");
link.href = "https://uk.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%BE";
link.textContent = "Дерево";

const wardrobe = document.querySelector(".wardrobe");
cats.alt = "wardrobe";

const firstItem = document.querySelector(".item");
firstItem.textContent = "HTML";