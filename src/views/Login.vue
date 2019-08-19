<template>
  <div class="page blue-green-gradient-bg">
    <div class="wrapper align-text-center right-triangle-bg">
      <img src="/svg/vincet-logo.svg" class="vincet-logo">
      <br>
      <div class="greeting text">
        Bienvenido a
        <span class="vincet-text">VINCET</span>
      </div>
      <br>
      <form @submit="login">
        <div class="input-wrapper rounded-border margin-centered">
          <div class="input-content">
            <img class="input-logo" src="/svg/user.svg">
            <input class="input input-text text" type="text" placeholder="E-Mail">
          </div>
        </div>
        <br>
        <div class="input-wrapper rounded-border margin-centered">
          <div class="input-content">
            <img class="input-logo" src="/svg/lock.svg">
            <input class="input input-text text" type="password" placeholder="Password">
          </div>
        </div>
        <br>
        <div class="sign-in-btn rounded-border margin-centered hover-pressed" type="submit">
          <span class="text btn-text">INGRESAR</span>
        </div>
      </form>
      <br>
      <div class="text">
        O
        <br>
        <br>
        <span class="register">REGISTRARSE</span>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import axios from "axios";
import querystring from "querystring";
export default {
  name: "Login",
  beforeCreate: function() {
    const isLogged = window.localStorage.getItem("userId");
    if (isLogged) {
    }
  },
  methods: {
    login() {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("pass").value;
      axios
        .post(
          "http://172.16.28.180:3000/login/app/movil",
          querystring.stringify({
            email: email,
            password: password
          })
        )
        .then(res => {
          if (res.data.error) {
            console.log(res.data.error);
          } else {
            window.localStorage.setItem("userId", res.data.user._id);
            console.log(res.data);
            this.$router.push("/mainMenu");
          }
        })
        .then(err => {
          if (err) {
            alert("Hubo un error de autenticación.");
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
.rounded-border {
  border-radius: 50px;
}
.margin-centered {
  margin-left: auto;
  margin-right: auto;
}
.input {
  background: transparent !important;
  border: none !important;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
}
.input:focus {
  outline: none;
}
.input-text {
  color: white;
  font-size: 1.5rem;
}
.input-wrapper {
  width: 80%;
  border: 3px solid white;
  height: 3rem;
}
.input-content {
  display: flex;
  height: 100%;
  padding-left: 5%;
  align-items: center;
}
.input-logo {
  height: 60%;
}
.input::placeholder {
  color: rgb(233, 233, 233);
}
.sign-in-btn {
  width: 80%;
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  border: 3px solid rgba(255, 255, 255, 0);
  height: 3rem;
  border-left: #262262 solid;
  border-right: #662d91 solid;
  cursor: pointer;
}
.sign-in-btn span {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  font-size: 1.5rem;
}
.btn-text {
  display: flex;
  width: 100%;
  height: 100% !important;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
}
.vincet-logo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 80%;
}
.login-text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
.greeting {
  font-size: 1.75rem;
  color: #3d2b57;
  font-weight: bold;
  .vincet-text {
    font-family: "Zian";
    font-size: 1.75rem;
    font-weight: normal;
  }
}
.text {
  font-family: "Lato-Regular";
  user-select: none;
}
.register {
  color: #3d2b57;
  font-weight: bold;
  font-size: 1.25rem;
}
.align-text-center {
  text-align: center;
}
</style>
