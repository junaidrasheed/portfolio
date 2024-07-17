<template>
  <v-container id="skills" fluid class="skills portfolio-container">
    <div>
      <div class="section-title">What I do</div>
      <v-row no-gutters class="px-5">
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="frontend"
            class="skill-img"
            src="@/assets/images/frontend.png"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">Frontend</div>
          <div class="skill-description" data-aos="fade-up">
            Build responsive and cross browser efficient websites by providing
            seamless transition from design to development
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="backend"
            class="skill-img"
            src="@/assets/images/backend.png"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">Backend</div>
          <div class="skill-description" data-aos="fade-up">
            Maintaining servers including database administration as well as
            scaling applications to handle load changes.
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="codedesign"
            class="skill-img"
            src="@/assets/images/architecture.svg"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">Architecture</div>
          <div class="skill-description" data-aos="fade-up">
            Expert in designing robust and scalable software architecture,
            ensuring optimal performance and maintainability for complex
            applications.
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.skills {
  color: white;
  margin-top: 6rem;
  .skill-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .skill-description {
    margin-bottom: 3.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #f5f5f7;
  }
  .skill-img {
    height: 7rem;
  }
}
</style>
