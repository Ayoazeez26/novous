<template>
  <div class="parent flex justify-center items-center">
    <!-- <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->
    <img src="/svg/loader.svg" alt="loader" class="image-spin">
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.parent {
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.7);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid $blue-4;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $blue-4 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Apply the animation to the image */
.image-spin {
  animation: spin 2s linear infinite;
}
</style>
