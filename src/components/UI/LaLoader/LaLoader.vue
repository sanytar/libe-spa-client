<template>
  <div class="la-loader">
    <div class="la-loader__roller">
      <div v-for="item in 8" :key="item"></div>
    </div>
    <p>загрузка. пожалуйста подождите</p>
  </div>
</template>

<style scoped>
.la-loader {
  @apply absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center gap-4;
}

.la-loader p {
  @apply text-white text-xl animate-pulse;
}
.la-loader__roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.la-loader__roller div {
  animation: la-loader__roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.la-loader__roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  margin: -4px 0 0 -4px;
}
.la-loader__roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.la-loader__roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.la-loader__roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.la-loader__roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.la-loader__roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.la-loader__roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.la-loader__roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.la-loader__roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.la-loader__roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.la-loader__roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.la-loader__roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.la-loader__roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.la-loader__roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.la-loader__roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.la-loader__roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.la-loader__roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes la-loader__roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
