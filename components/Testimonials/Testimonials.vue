<template>
  <div class="mt-3 mb-3 p-2 bg-warning">
    <h2 class="d-flex justify-content-center m-5"><u>TESTIMONIALS</u></h2>
    <div class="d-flex justify-content-center">
      <div class="container">
        <div class="row">
          <div v-for="item in testimonials" :key="item.key" class="col-md-4">
            <div class="card d-flex mx-auto">
              <div class="card-image">
                <img
                  class="img-fluid d-flex mx-auto"
                  src="@/static/images/pablo.jpg"
                />
              </div>
              <div class="card-text">
                <div class="card-title">{{ item.title }}</div>
                "{{ item.comments }}"
              </div>
              <div class="footer">
                <span id="name">{{ item.name }}<br /></span>
                <span id="position">{{ item.position }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          title: 'Open to learning new things!',
          name: 'Christopher "Good Life" Ndugo',
          comments:
            'Gideon is a down to earth, low-ego person who is open to learning new technologies at a rapid pace. He excels at going an extra mile to achieve set goals and he is the person that you want in your team.',
          position: 'Technical lead @UX Craft LTD',
        },
        {
          title: 'Hard working and a team player!',
          name: 'Gillian Ngugi',
          comments:
            'Highly professional, strategic and engaged. I highly recommend him as part of structuring an organization,product or project',
          position: 'Software Engineer @Safaricom PLC',
        },
        {
          title: 'A good communicator, critical-thinker & problem-solver',
          name: 'Lameck Ogutu',
          comments:
            'Gideon excels at communicating ideas & strategies to both technical and non-technical staff in a clear and precise way. He is very intuitive at solving problems.',
          position: 'Network Engineer @Next Technologies Ltd',
        },
      ],
    }
  },
  methods: {},
}
</script>
<style scoped>
* {
  font-family: montserrat;
  src: url('@/static/fonts/Montserrat-Black.ttf');
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(1, 8, 8);
  font-family: sans-serif;
}

.container {
  max-width: 950px;
}

.card {
  border-radius: 1rem;
  box-shadow: 0px -10px 0px rgb(6, 103, 248);
}

@media (max-width: 767px) {
  .card {
    margin: 1rem 0.7rem 1rem;
    max-width: 80vw;
  }
}

img {
  width: 6.2rem;
  border-radius: 5rem;
  margin: 1.3rem auto 1rem auto;
}

.col-md-4 {
  padding: 0 0.5rem;
}

.card-title {
  font-size: 20px;
  margin-bottom: 0;
  font-weight: bold;
  font-family: 'IM Fell French Canon SC';
}

.card-text {
  text-align: center;
  padding: 1rem 2rem;
  font-size: 16px;
  color: rgb(82, 81, 81);
  line-height: 1.4rem;
}

.footer {
  border-top: none;
  text-align: center;
  line-height: 1.2rem;
  padding: 2rem 0 1.4rem 0;
  font-family: 'Varela Round';
}

#name {
  font-size: 14px;
  font-weight: bold;
}

#position {
  font-size: 13px;
}

a {
  color: rgb(7, 7, 7);
  font-weight: bold;
}

a:hover {
  color: rgb(13, 14, 2);
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .carousel {
    padding: 10px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .carousel {
    width: 60%;
  }
}
</style>
