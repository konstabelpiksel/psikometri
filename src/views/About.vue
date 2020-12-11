<template>
  <v-container>
    <div id="tentang" class="text-justify pa-2">
      <h2>Tentang / <em>About</em></h2>
      <div class="text-center">
          <img src="@/assets/logosmall.png" style="width: 7em" alt="" />
        </div>
      <p>
        Aplikasi ini dibangunkan untuk menerokai penggunaan framework VueJs dan Vuetify. InshaAllah saya mempunyai minat (dan kemahiran) untuk
        membangunkan mini aplikasi web untuk kegunaan (dan diharapkan kebaikan) khalayak. Sebarang komen/kritikan adalah amat dialu-alukan.
        </p>
        <p>Sekiranya anda berminat membangunkan aplikasi sebegini dalam bidang psikometrik mahupun bidang lain, 
        boleh hubungi saya untuk pembangunan mahupun latihan (sebab saya tengah takde kerja hehe).
      </p>
      
      <div class="text-center">
      
        <a href="https://web.facebook.com/konstabel.piksel.3/"><v-icon x-large color="indigo" class="ma-3">
          mdi-facebook
        </v-icon></a>

        <a href="#"><v-icon x-large color="orange" class="ma-3">
          mdi-web
        </v-icon></a>

        <a href="#"><v-icon x-large color="green" class="ma-3">
          mdi-whatsapp
        </v-icon></a>

      </div>
      <br/>
      <div class="text-center">
        <router-link to="/" style="text-decoration: none">
          <v-btn class="teal lighten-2 ma-2"> Induk </v-btn>
        </router-link>
      </div>
    </div>
  </v-container>
</template>
