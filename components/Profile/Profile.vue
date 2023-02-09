<template>
  <div>
    <b-container class="d-md-flex">
      <div class="profile">
        <div class="ml-5 pl-5">
          <img
            alt="Responsive image"
            height="270"
            width="210"
            src="@/static/images/PP.jpg"
          />
        </div>
      </div>

      <div class="ml-md-4 pl-md-4">
        <h4 id="name" class="px-3 pb-2">Who is Gideon?</h4>
        <h5 class="px-3">
          Hello, <br />
          I'm happiest when I'm creating, learning, exploring and thinking about
          how to make things better. I consider my self a self-taught programmer
          who is committed to life-long learning. My job consists of helping
          companies and researchers analyse their datasets and build their
          front-end solutions.. I am skilled for most data-science steps: data
          pre-processing, application of statistical methods, data visualization
          and results communication.I use
          <div class="skills">
            <u
              >Ms Excel, Power Bi, Python, Pandas, NumPy,
              Matplotlib,SciKit-Learn, Seaborn and Power Bi</u
            >
          </div>
          . For Web development I am skilled in
          <div class="skills">
            <u
              >HTML5, CSS3, JavaScript, VUE JS, NUXT JS, REACT JS , NEXT JS,
              NODE JS, Express JS, Mongo DB , Firebase, Adobe Illustrator</u
            >
          </div>
          .
        </h5>
        <Cv />
      </div>
    </b-container>
    <skills />
    <Tools />
  </div>
</template>

<script>
import Tools from '../Profile/Tools'
import Skills from '../Cv/Skills'
export default {
  name: 'Profile',
  components: {
    Tools,
    Skills,
  },
  data: () => {
    return {
      pics: [
        {
          src: '@/static/images/pp.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
  background-color: #ffffff;
}
h5 {
  font-family: Montserrat;
  src: url(./static/fonts/Montserrat-Regular.ttf);
}
.skills {
  color: blueviolet;
  font-size: 1.2rem;
  font-weight: bold;
}
#name {
  color: blueviolet;
  font-weight: bolder;
}
img {
  border-radius: 50%;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .profile {
    margin-left: 0px;
  }
}
</style>
