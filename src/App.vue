<template>
  <div id="app" class="full-height">
    <router-view/>
  </div>
</template>

<style>
.full-widt {
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
  max-width: 100%;
  padding: 1rem 1.5rem;
  overflow-x: hidden;
}
</style>
