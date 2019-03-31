<template>
  <router-view/>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
.full-width {
  width: 100% !important;
  min-width: 100%;
}
.full-height {
  height: 100% !important;
  min-height: 100%;
}
.container-fluid {
  display: flex;
}
.container {
  display: flex;
  padding: 0px 1rem;
}
.page {
  min-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
.wrapper {
  padding: 1rem 1.5rem;
}
.btn {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: white;
  width: 100%;
  border-radius: 25px;
}
.btn:focus {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: white;
  outline: none;
  width: 100%;
  border-radius: 25px;
}
.btn:active {
  background: transparent;
  color: white;
  border: solid;
  border-width: 1.2px;
  border-color: white;
  width: 100%;
  border-radius: 25px;
  background-color: teal;
}
@font-face {
  font-family: "IBMPlex"; /*a name to be used later*/
  src: url("/fonts/IBMPlexMono-BoldItalic.ttf"); /*URL to font*/
}
.menu-font {
  font-family: "IBMPlex";
  font-size: 1.1rem;
}
.row {
  display: flex;
}
.col {
  display: flex;
  flex-direction: column;
}
.self-center {
  align-self: center;
}
.flexwrap {
  flex-wrap: wrap !important;
}
.bg-blue {
  background-color: #165a6b !important;
}
</style>
