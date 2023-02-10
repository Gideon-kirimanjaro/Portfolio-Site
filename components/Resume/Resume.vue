<template>
  <div id="resume" class="pb-3">
    <div>
      <h2 id="header" class="d-flex justify-content-center">EXPERIENCE</h2>
      <div
        id="section-div"
        class="d-flex justify-content-center px-md-5 mx-md-5"
      >
        <p id="section" class="d-flex justify-content-center">
          I am a top Performing and result-oriented professional with a history
          and experience in different areas of information technology. I have
          over 2 years of fruitful experience, working in different positions
          and as a Freelance web Developer at Kai Creatives Ltd. I have
          demonstrated the ability to handle product research and development
          for different business needs. I have the ability to learn and
          collaborate in rapidly changing environments. I am excited to pursue
          new companies to grow my skills while facilitating the empowerment and
          vocalization of marginalized communities by building innovative
          products.
        </p>
      </div>
    </div>
    <div
      v-for="item of history"
      id="sub-section"
      :key="item.key"
      class="d-md-flex justify-content-center m-3"
    >
      <div id="exp" class="d-flex justify-content-center">
        <p>{{ item.dates }}</p>
      </div>
      <div id="exp" class="px-2">
        <h5 class="d-flex justify-content-center my-2">
          {{ item.role }} ~~ {{ item.company }}
        </h5>
        <p class="d-flex justify-content-center">
          {{ item.responsibilities }}
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <b-button variant="success" class="m-2"
        ><a class="links" href="/01 Gideon Kirimanjaro CV.pdf" download
          >Download Cv</a
        ></b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  data() {
    return {
      history: [
        {
          key: 1,
          dates: 'August, 2022-Present',
          role: 'Web Developer',
          company: 'Kai Creatives',
          responsibilities:
            ' I am the founder of Kai Creatives and I have successfully designed and built websites that have positively impacted bespoke businesses. My aim was to bring substantial impact to small businesses throgh affordable software development• Actively engaged in web design and development for different clients using React.js, Next.js, CSS3, Bootstrap, Node/Express, Redux, styled-components, React hooks, Git and GitHub.• Carried out product Deveopment and enhancement to boost product engagement.• Created and deployed mobile-first applications while learning new languages and frameworks.• Developed innovative techniques for clients using headless CMS with technologies such as Ghost CMS and Contentful for content management. ',
        },
        {
          key: 2,
          dates: 'October ,2021-August ,2022',
          role: 'ICT Officer',
          company: 'Ministry of Education',
          responsibilities:
            ' Successfully offered ICT Training to more than 1,000 children and more than 100 teachers spanning over 40 schools. • Carried out data analysis for the Limuru Sub-county data in line with the set ministry of education guidelines using modern data science technology.• Managed the National Education Management System for the sub-county.• Offered technology consultancy services for all the schools in Limuru Subcounty ranging from web services to computer hardware',
        },
        {
          key: 3,
          dates: 'June, 2021-October, 2021',
          role: 'ICT Officer',
          company: 'Office of the Director of Public Prosecutions',
          responsibilities:
            ' • I participated in data analysis and system management in 5 critical departments which are: international crimes, conventional crimes, county affairs, Prosecution Training Institute (PTI), and corporate services • Offered training and support to prosecutors on using the Uadilifu Case Management system to process all prosecution matters in Kenya.• Mitigated illegal access to sensitive prosecution and case data through integrated cyber security in the Anti-Corruption, Anti-money laundering, International Crimes, and Counter-Terrorism divisions.• Installed and configured all ICT equipment not limited to; computers, networks, laptops, routers, printers, etc. in all ODPP offices in the country.',
        },
        {
          key: 4,
          dates: 'Jan 2021- April 2021',
          role: 'Web Developer',
          company: 'UX Craft Ltd',
          responsibilities:
            ' ▪ I Was part of a team that developed a progressive web application for the Kothbiro grassroots tournament and CEMA website. ▪ Developing structure and design of web pages.▪ Developing and optimizing pages using the Vue JS framework.▪ Building reusable code for future use.',
        },
        {
          key: 5,
          dates: '2018 & 2019',
          role: 'ICT Intern',
          company: 'Next Technologies Ltd',
          responsibilities:
            ' • I was part of a team that installed full building networks and data centers at Kenya Power and Lightning Company (KPLC), National Intelligence Service (NIS), Stanbic Bank, Kenya Tea Development Agency (KTDA), Nairobi Hospital, Communications Authority of Kenya (CAK) and British American Tobacco (BAT). • Installation of full building networks with proper and organized documentation.• Installation and configuration of computer hardware, operating systems, and applications.• Monitored performance and parameters to provide fast responses to front-end users.• Identified security gaps and provided relevant solutions in consultation with the Operations.',
        },
      ],
    }
  },
}
</script>

<style scoped>
/* * {
  font-family: Poppins;
} */
p {
  font-weight: bold;
}
h5 {
  font-weight: bolder;
}
#resume {
  background-color: #ffffff;
  border-radius: 1%;
}
#header {
  font-size: 3.5rem;
  text-transform: none;
  font-weight: 700;
  margin: 30px auto 0;
  font-family: Poppins;
}

#section {
  font-size: 1rem;
  font-family: Poppins;
  font-weight: 700;
  /* width: 800px; */
  /* margin: 34px auto 0; */
}
#sub-section {
  padding: 30px 0 0;
  border-top: 2px solid rgb(0, 0, 0);
}
#exp {
  width: 50%;
  font-family: Poppins;
}
.links {
  text-decoration: none;
  color: white;
}
@media only screen and (max-width: 600px) {
  #exp {
    width: 100%;
  }
  #section {
    width: 450px;
  }
}
/* @media only screen and (min-width: 768px) {
  #section {
    width: 650px;
  }
} */
</style>
