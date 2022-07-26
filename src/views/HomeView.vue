<template>
  <div class="home">
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">{{ content }}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <router-link to="/login" class="btn btn-primary btn-lg px-4 gap-3">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
          <router-link
            to="/register"
            class="btn btn-outline-secondary btn-lg px-4"
          >
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </div>
      </div>
    </div>

    <CardOverview />
  </div>
</template>

<script>
// @ is an alias to /src
import CardOverview from "../components/CardOverview.vue";
import UserService from "../services/user.service";

export default {
  name: "HomeView",
  components: {
    CardOverview,
  },
  data() {
    return {
      content: "Welcome future jedi's!",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
