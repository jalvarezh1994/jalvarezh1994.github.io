<template>
  <div>
    <div class="container-fluid mb-2 right-align">
      <button class="btn no-border header-profile-logo no-padding">
        <img class="menu-logo-account" src="/logos/user-logo.svg" alt>
      </button>
    </div>
    <br>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.right-align {
  display: flex !important;
  flex-direction: row-reverse !important;
}
.header-profile-logo {
  width: 3rem;
  height: 3rem;
}
.bg-blue {
  background-color: #165a6b !important;
}
.col-45 {
  width: 45% !important;
  min-width: 45%;
  display: flex;
  flex-direction: column;
}
.col-10 {
  width: 10% !important;
  min-width: 10%;
  display: flex;
  flex-direction: column;
}
.mb-1 {
  margin-bottom: 1rem;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
}
.half-height {
  height: 50%;
}
.width-80 {
  width: 80%;
}
.rounded-white-border {
  border-radius: 100%;
  border: solid white 0.2rem;
}
.menu-logo-account {
  height: 100%;
  width: 100%;
}
.menu-logo-center {
  width: 3rem;
  align-self: center;
}
.menu-logo-left {
  width: 3rem;
}
.menu-logo-lessons {
  width: 4.5rem;
  align-self: center;
}
.no-border {
  border: 0px;
}
.h-4 {
  height: 5.5rem;
  line-height: 4.5rem;
}
.h-4-3 {
  height: 4.5rem;
  line-height: 4.3rem;
}
.center-xy {
  justify-content: center;
  align-items: center;
}
.mr-1 {
  margin-right: 1rem;
}
.p-1 {
  padding: 1rem;
}
.font-small {
  font-size: 0.9rem;
}
.menu-logo-stats {
  height: 1.8rem;
}
.center-xy {
  overflow-y: hidden;
}
.menu-logo-games {
  width: auto;
  height: 2.5rem;
}
.mb-2 {
  margin-bottom: 1rem;
}
@media (min-height: 600px) {
  .mb-2 {
    margin-bottom: 2rem;
  }
}
.no-padding {
  padding: 0;
}
</style>

