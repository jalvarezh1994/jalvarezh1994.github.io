<template>
  <div class="page bg-blue">
    <div class="wrapper">
      <span >ProfileId: </span>
      <span>{{profileId}}</span>
      <br>
    </div>
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
