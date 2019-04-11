<template>
  <router-view/>
</template>

<style lang="scss">
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
.full-height {
  height: 100% !important;
  min-height: 100%;
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
