<script setup lang="ts">
const { $gsap, $ScrollTrigger, $TweenMax } = useNuxtApp();

const mm = $gsap.matchMedia();

const ctx = $gsap.context(() => {});
onUnmounted(() => {
  ctx.revert();
});

// Slider(all Slides in a contain)
// const slider = document.querySelector(".slider");
let trail;
let tl;
onMounted(() => {
  //   slides = Array.from(document.querySelectorAll(".slide"));
  touchSlide();
  trail = document.querySelectorAll(".trail div");
  // Add function to all trails
  trail.forEach((cur) => cur.addEventListener("click", (ev) => clickCheck(ev)));
  tl = $gsap.timeline({
    defaults: {
      duration: 0.6,
      ease: "power2.inOut",
    },
  });
  tl.from(".bg", {
    x: "-100%",
    opacity: 0,
  });
});
const slider = ref(null);
// All trails
// const trail = document.querySelectorAll(".trail div");

// Transform value
let value = 0;
// trail index number
let trailValue = 0;
// interval (Duration)
let interval = 4000;

// Function to slide forward
const slide = (condition) => {
  // CLear interval
  clearInterval(start);
  // update value and trailValue
  condition === "increase" ? initiateINC() : initiateDEC();
  // move slide
  move(value, trailValue);
  // Restart Animation
  animate();
  // start interal for slides back
  start = setInterval(() => slide("increase"), interval);
};

// function for increase(forward, next) configuration
const initiateINC = () => {
  // Remove active from all trails
  trail.forEach((cur) => cur.classList.remove("active"));
  // increase transform value
  value === 66.68 ? (value = 0) : (value += 33.34);
  // update trailValue based on value
  trailUpdate();
};

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
  // Remove active from all trails
  trail.forEach((cur) => cur.classList.remove("active"));
  // decrease transform value
  value === 0 ? (value = 66.68) : (value -= 33.34);
  // update trailValue based on value
  trailUpdate();
};

// function to transform slide
const move = (S, T) => {
  // transform slider
  slider.value.style.transform = `translateX(-${S}%)`;
  //add active class to the current trail
  trail[T].classList.add("active");
};

// function to restart animation
const animate = () => tl.restart();

// function to update trailValue based on slide value
const trailUpdate = () => {
  if (value === 0) {
    trailValue = 0;
  } else if (value === 33.34) {
    trailValue = 1;
  } else if (value === 66.68) {
    trailValue = 2;
  }
};

// Start interval for slides
let start = setInterval(() => slide("increase"), interval);

// function to slide when trail is clicked
const clickCheck = (e) => {
  // CLear interval
  clearInterval(start);
  // remove active class from all trails
  trail.forEach((cur) => cur.classList.remove("active"));
  // Get selected trail
  const check = e.target;
  // add active class
  check.classList.add("active");

  // Update slide value based on the selected trail
  if (check.classList.contains("box1")) {
    value = 0;
  } else if (check.classList.contains("box2")) {
    value = 33.34;
  } else {
    value = 66.68;
  }
  // update trail based on value
  trailUpdate();
  // transfrom slide
  move(value, trailValue);
  // start animation
  animate();
  // start interval
  start = setInterval(() => slide("increase"), interval);
};

// Mobile touch Slide Section
const touchSlide = () => {
  let start, move, change, sliderWidth;

  // Do this on initial touch on screen
  slider.value.addEventListener("touchstart", (e) => {
    // get the touche position of X on the screen
    start = e.touches[0].clientX;
    // (each slide with) the width of the slider contain divided by the number of slides
    sliderWidth = slider.value.clientWidth / trail.length;
  });

  // Do this on touchDrag on screen
  slider.value.addEventListener("touchmove", (e) => {
    // prevent default function
    e.preventDefault();
    // get the touche position of X on the screen when dragging stops
    move = e.touches[0].clientX;
    // Subtract initial position from end position and save to change variabla
    change = start - move;
  });

  const mobile = (e) => {
    // if change is greater than a quarter of sliderWidth, next else Do NOTHING
    change > sliderWidth / 2 ? slide("increase") : null;
    // if change * -1 is greater than a quarter of sliderWidth, prev else Do NOTHING
    change * -1 > sliderWidth / 2 ? slide("decrease") : null;
    // reset all variable to 0
    [start, move, change, sliderWidth] = [0, 0, 0, 0];
  };
  // call mobile on touch end
  slider.value.addEventListener("touchend", mobile);
};
</script>
<template>
  <div class="bg-blue-7 pt-8 w-full">
    <div
      class="w-full max-w-[1240px] flex lg:flex-row gap-8 lg:gap-0 flex-col justify-center h-full items-center pt-[140px] px-4 md:px-6 xl:px-0 mx-auto"
    >
      <div
        class="bg-blue-8/20 px-[38px] pt-[99px] pb-[94px] relative text-whiter md:w-[410px] w-full h-[507px]"
      >
        <img class="absolute top-0 right-0" src="/svg/fold.svg" alt="folded" />
        <p class="text-xl">
          Sale up to
          <span
            class="bg-blue-9 text-base text-blue-10 rounded-md px-[17px] py-[5.76px] ml-3"
            >50% off</span
          >
        </p>
        <h1 class="leading-[45px] mt-6 mb-[33px] text-4xl text-white">
          Explore Our Latest Books on Social Care Excellence!
        </h1>
        <nuxt-link
          to=""
          class="bg-whiter text-blue-4 text-xl font-bold rounded w-full flex h-[76px] items-center justify-center"
        >
          Shop Now
          <Icon class="ml-1" name="mdi:arrow-right" size="24" />
        </nuxt-link>
      </div>
      <div
        class="w-[90vw] flex items-center justify-center relative lg:w-[890px]"
      >
        <div class="contain w-[800px]">
          <div ref="slider" class="slider">
            <div class="box1 box">
              <img
                class="w-[800px]"
                src="/img/bridging.png"
                alt="bridging the gap"
              />
            </div>

            <div class="box2 box">
              <img
                class="w-[800px]"
                src="/img/tender-slide.png"
                alt="bridging the gap"
              />
            </div>

            <div class="box3 box">
              <img
                class="w-[800px]"
                src="/img/care-slide.png"
                alt="bridging the gap"
              />
            </div>
          </div>
          <div class="trail flex justify-center">
            <div class="box1 active"></div>
            <div class="box2"></div>
            <div class="box3"></div>
          </div>
        </div>
        <img
          @click="slide('decrease')"
          class="prev"
          src="/img/left-arrow.png"
          alt="left arrow"
        />
        <img
          @click="slide('increase')"
          class="next"
          src="/img/right-arrow.png"
          alt="right arrow"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contain {
  position: relative;
  overflow: hidden;
  // border-radius: 5rem;

  @media only screen and (max-width: 1000px) {
    border-radius: 0;
  }
}

.slider {
  display: flex;
  width: 300%;
  transition: all 0.25s ease-in;
  transform: translateX(0);

  .box {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
}

.prev,
.next,
.trail {
  z-index: 2;
  position: absolute;
}

.prev,
.next {
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s ease;

  @media only screen and (max-width: 650px) {
    display: none;
  }

  &:hover {
    opacity: 1;
  }
}

.prev {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}

.next {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}

.trail {
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  display: flex;
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;

  // @media only screen and (max-width: 650px) {
  //   width: 90%;
  //   bottom: 13%;
  // }

  div {
    // padding: 2rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid $blue-7;
    cursor: pointer;
    opacity: 0.3;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    @media only screen and (max-width: 650px) {
      padding: 1rem;
    }
  }
}

.active {
  opacity: 1 !important;
  background-color: $blue-7;
}
</style>
