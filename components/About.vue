<template>
  <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About me</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/me.png" />
      </div>
      <div class="quotes text-center mb-10" data-aos="fade-up">
        <q>
          When you're deeply immersed in a meaningful project that ignites your
          passion, motivation comes naturally. It's not about being pushed; it's
          about being drawn by the vision you believe in..
        </q>
        <br />
      </div>
      <div class="content" data-aos="fade-up">
        <p>
          Hi, I'm a motivated full stack software developer with over
          {{ experience }} years of experience in building web applications
          using various tools including Vue, React, Ruby on Rails, and Laravel.
          I'm highly skilled in developing and maintaining both front-end and
          back-end systems, optimizing performance, and working in agile
          environments. I'm seeking to leverage my technical skills and
          collaborative abilities to contribute to innovative projects and help
          a dynamic team succeed.
        </p>
        <p>
          I also love to photograph and watch a lot of movies. And believe
          FRIENDS is the greatest sitcom ever!.
        </p>
      </div>
      <div data-aos="fade-up">
        <Technologies />
      </div>
    </div>
  </v-container>
</template>
<script>
import Technologies from '@/components/Technologies'
export default {
  components: {
    Technologies
  },
  computed: {
    experience: () => {
      return new Date().getFullYear() - 2017
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  color: white;

  .content {
    padding: 0 3rem;
    p {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }

  .quotes {
    margin: 2rem auto 0;
    font-size: 2rem;
    max-width: 50rem;
  }

  .me-img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 2px solid rgb(54, 51, 51);
    object-fit: cover;
  }
}
@media screen and (max-width: 767px) {
  .content {
    padding: 0 !important;
  }
}
</style>
