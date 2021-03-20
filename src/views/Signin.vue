<template>
    <div class="container d-flex justify-content-center for-signin">
        <form class="form-signin">
            <img class="mb-4" src="@/assets/OJAN_free-file.png" alt="" style="margin-top:10px">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required autofocus>
            <br>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
            <br><br>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="signin">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
    </div>
</template>

<script>

export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signin', user)
    }
  }

}
</script>

<style>

.for-signin {
    background-color: #bdb2ff;
    opacity: 97%;
    width: 30%;
    margin-top: 5%;
    border-radius: 10px;
}

</style>
