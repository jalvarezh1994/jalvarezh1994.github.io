<template>
  <router-view/>
</template>

<style lang="less">
@vincet-cian: #19b7cb;
@vincet-green: #89dc65;
@vincet-blue: #5f8db5;
@vincet-gray: #c8c8c8;
html,
body {
  height: 100%;
  margin: 0;
  font-family: "Lato-Regular";
  user-select: none;
}
a {
  text-decoration: none;
}
.hover-pressed:hover {
  animation: pressed;
  animation-duration: 200ms;
  animation-timing-function: ease-out;
}
@keyframes pressed {
  from {
    filter: brightness(60%);
    backdrop-filter: brightness(60%);
  }
  to {
    filter: brightness(100%);
    backdrop-filter: brightness(60%);
  }
}
.header-spacer {
  height: 3.5rem;
}
.bg-white {
  background: white;
}
.full-height {
  height: 100% !important;
  min-height: 100%;
}
.full-width {
  width: 100% !important;
  min-width: 100%;
}
.page {
  min-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
.wrapper {
  padding: 1rem 1.5rem;
}
.row {
  display: flex;
}
.col {
  display: flex;
  flex-direction: column;
}
.row-center {
  justify-content: center;
}
.row-start-align {
  align-items: flex-start !important;
}
.row-center-align {
  align-items: center;
}
.flexwrap {
  flex-wrap: wrap !important;
}
.header {
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  position: absolute;
  top: 0;
  width: 100%;
  height: 3.5rem;
}
.footer {
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  height: 1rem;
  width: 100%;
  bottom: 0px;
  position: fixed;
}
.right-triangle-bg {
  background-image: url("/svg/right-triangle.svg");
  background-repeat: no-repeat;
  background-position: right;
}
.blue-green-gradient-bg {
  background: linear-gradient(to right, #19b7cb 15%, #39a935 54%);
}
.blue-purple-gradient-bg {
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
}
.circle {
  border-radius: 100%;
}
@font-face {
  font-family: "Lato-Regular";
  src: url("/fonts/lato/Lato-Regular.ttf");
}
@font-face {
  font-family: "Zian";
  src: url("/fonts/zian/Zian.ttf");
}
</style>
