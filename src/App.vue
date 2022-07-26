<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <font-awesome-icon icon="home" /> Home
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/shop" class="nav-link">
                  <font-awesome-icon icon="cart-shopping" /> Shop
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link">
                  <font-awesome-icon icon="jedi" /> About
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li v-if="showAdminBoard" class="nav-item">
                <router-link to="/admin" class="nav-link">
                  Admin Board
                </router-link>
              </li>
              <li v-if="showModeratorBoard" class="nav-item">
                <router-link to="/mod" class="nav-link">
                  Moderator Board
                </router-link>
              </li>
              <li class="nav-item">
                <router-link v-if="currentUser" to="/user" class="nav-link">
                  User
                </router-link>
              </li>
            </ul>
          </div>
          <div v-if="!currentUser">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" /> Sign Up
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="sign-in-alt" /> Login
                </router-link>
              </li>
            </ul>
          </div>
          <div v-else>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click.prevent="logOut">
                  <font-awesome-icon icon="sign-out-alt" /> LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
