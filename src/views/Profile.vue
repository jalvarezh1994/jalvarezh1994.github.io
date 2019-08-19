<template>
  <div class="page bg-blue">
    <SideMenu/>
    <div class="header-spacer"></div>
    <div class="wrapper animated fadeInRight">
      <span>ProfileId:</span>
      <span>{{profileId}}</span>
      <br>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profileId: function() {
      const returnValue = window.localStorage.getItem("userId");
      return returnValue;
    }
  }
};
</script>

<style>
</style>
