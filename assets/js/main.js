const imgs = document.querySelectorAll(".img-select .img")

let imgId = 1;

// image click event
imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgId = img.dataset.id;
        moveImage();
        imgs.forEach((img) => {
            img.classList.remove("active")

        });
        img.classList.add("active")
    })

});

// image click event end


function moveImage() {

    const imgFrame = document.querySelector(".main-img img:first-child").clientWidth
    const width = (imgId - 1) * imgFrame
    const mainImg = document.querySelector(".main-img")
    mainImg.style.transform = `translateX(-${width}px)`

}

// button event


const minusBtn = document.querySelector(".minus")
const plusBtn = document.querySelector(".plus")
const qtyText = document.querySelector(".text");



minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let qty = parseInt(qtyText.value)
    if (qty > 0) {
        qty--;
        qtyText.value = qty
    }
})

plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let qty = parseInt(qtyText.value)
    if (qty >= 0 && qty < 5) {
        qty++;
        qtyText.value = qty;
    }
})