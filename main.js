// Selects all slides and create an Array of nodes
const slides = document.querySelectorAll(".ani-slide");
// next-previous  buttons
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-previous");

// Multiply slide index to 100% for the translateX
slides.forEach((aniSlides, index) => {
   aniSlides.style.transform = `translateX(${index * 100}%)`;
});

// slider counter
let sliderCounter = 0;
console.log(sliderCounter);

// access the next btn
nextSlide.addEventListener("click", function () {
   // as the index increase so is the counter where the two
   // is  substracted and multiplied to 100%
   // <- 0 , 1, 2 ->
   if (sliderCounter < slides.length - 1) {
      sliderCounter++;
      slides.forEach((aniSlides, index) => {
         aniSlides.style.transform = `translateX(${
            (index - sliderCounter) * 100
         }%)`;
         console.log("Index: ", index);
         console.log("Counter: ", sliderCounter);
         console.log("Placement: ", index - sliderCounter);
      });
   }
});

// access the previous btn
prevSlide.addEventListener("click", function () {
   // same with next button but the sliderCounter--
   if (sliderCounter > 0) {
      // sliderCounter is inside as we don't want the counter to
      // less than 0
      sliderCounter--;
      console.log("Inside");
      slides.forEach((aniSlides, index) => {
         aniSlides.style.transform = `translateX(${
            (index - sliderCounter) * 100
         }%)`;
         console.log("Index: ", index);
         console.log("Counter: ", sliderCounter);
         console.log("Placement: ", index - sliderCounter);
      });
   }
});
