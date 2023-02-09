<template>
  <div>
    <h3 class="d-flex justify-content-center"><u>Leave me a message</u></h3>
    <div class="container">
      <form @submit.prevent="sendEmail">
        <label>Name</label>
        <input v-model="name" type="text" name="name" placeholder="Your Name" />
        <label>Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <label>Message</label>
        <textarea
          v-model="message"
          name="message"
          cols="30"
          rows="5"
          placeholder="Message"
        >
        </textarea>

        <input type="submit" value="Send" />
      </form>
      <h4 v-if="toggleMessage">{{ confirm }}</h4>
      <h5 v-else-if="toggleError" class="text-danger pt-2">
        Hey buddy, make sure you fill all the form details
      </h5>
    </div>
    <footer class="d-flex justify-content-center mt-3 mb-3">
      &copy;2022 Designed & coded by ()=>
      <a target="_blank" href="https://ke.linkedin.com/in/gideonkirimanjaro">
        {Gideon Kirimanjaro
        <img
          width="30"
          height="30"
          src="@/static/socials/strength.png"
          alt=""
        />}</a
      >
    </footer>
    <div class="d-flex justify-content-center">
      <a href="https://github.com/Gideon-kirimanjaro" target="_blank"
        ><img height="40" width="40" src="@/static/socials/github.png" alt=""
      /></a>
      <a href="https://www.linkedin.com/in/gideonkirimanjaro/" target="_blank"
        ><img height="40" width="40" src="@/static/socials/linkedin.png" alt=""
      /></a>
      <a href="https://kirimanjarodev.wordpress.com/" target="_blank"
        ><img height="40" width="40" src="@/static/socials/kirima.png" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser'
// import emailjs from '@emailjs/browser'
export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      confirm: 'Thank you for your message',
      toggleMessage: false,
      toggleError: false,
    }
  },
  methods: {
    sendEmail(e) {
      if (this.name && this.email && this.message !== '') {
        try {
          // eslint-disable-next-line import/no-named-as-default-member
          emailjs
            .sendForm(
              'service_guzt63o',
              'template_l3hba4w',
              e.target,
              'user_EAymTOqhWdwvtf5iqeCQL',
              {
                name: this.name,
                email: this.email,
                message: this.message,
              }
            )
            .then((this.toggleMessage = true))
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log({ error })
        }

        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
      } else {
        return (this.toggleError = true)
      }
    },
  },
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

.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #fcc206;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type='text'],
[type='email'],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type='submit'] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #45a049;
}
</style>
