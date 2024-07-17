<template>
  <v-container id="contact" fluid class="contact portfolio-container">
    <div class="section-title">Contact</div>
    <v-row no-gutters class="social-media">
      <v-col
        v-for="item in socialLinks"
        :key="item.name"
        class="contact-item"
        cols="12"
        sm="6"
        md="4"
      >
        <a
          class="card-background"
          :href="item.link"
          target="_blank"
          data-aos="fade-up"
        >
          <div class="card">{{ item.name }}</div>
        </a>
      </v-col>
    </v-row>
    <div class="footer">
      <div class="copyright">{{ year }} - Junaid Rasheed</div>
    </div>
  </v-container>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      socialLinks: Constants.SOCIAL_LINKS
    }
  },
  computed: {
    year: () => {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  .copyright {
    color: grey;
  }

  .social-media {
    margin: 0 2rem;

    .card-background {
      height: 100%;
      width: 100%;
      display: flex;
      padding: 1rem;
      text-decoration: none;
      color: white;
    }

    .card {
      margin: auto;
      height: 100%;
      width: 100%;
      padding: 2rem;
      font-size: 18px;
      font-weight: 500;
      border-radius: 10px;
      border: 2px solid #ffffff;
    }

    .card:hover {
      border: 2px solid #02f3e6;
    }
  }

  .footer {
    margin: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    .card {
      padding: 1rem !important;
    }
  }
}
</style>
