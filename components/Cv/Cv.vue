<template>
  <div>
    <div class="d-flex justify-space-between">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/gideonkirimanjaro/"
        class="cta"
      >
        <span>CV</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </a>
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="gideonkirimanjaro"
        data-version="v1"
      >
        <a
          class="badge-base__link LI-simple-link"
          href="https://ke.linkedin.com/in/gideonkirimanjaro?trk=profile-badge"
          >Gideon Kirimanjaro</a
        >
      </div>
    </div>
  </div>
</template>
<script
  src="https://platform.linkedin.com/badges/js/profile.js"
  async
  defer
  type="text/javascript"
></script>

<script>
export default {
  name: 'Cv',
  components: {},
}
</script>

<style scoped>
body {
  height: 100%;
}

body {
  display: grid;
  font-family: Avenir, sans-serif;
  color: rgb(255, 255, 255);
}

a {
  text-decoration: none;
  color: inherit;
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}

.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgba(2, 243, 14, 0.5);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before {
  width: 100%;
  background: #e4af04;
}
.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}
</style>
