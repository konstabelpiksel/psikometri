<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Menu </v-list-item-title>
          <v-list-item-subtitle> v0.1.0 </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          color="teal darken-2"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="teal darken-2" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Koleksi Ujian Psikometrik</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>

    <v-footer color="teal darken-2" padless>
      <v-row justify="center" no-gutters>
        <v-col class="py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — Konstabel Piksel
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: false,
    items: [
      { title: "Induk", icon: "mdi-home-circle", to: "/" },
      { title: "Personaliti A/B & Stres", icon: "mdi-head-snowflake-outline", to: "/abstress" },
      { title: "Umur Mental Anda", icon: "mdi-brain", to: "/mentalage" },
      { title: "Orientasi Seksual", icon: "mdi-heart-multiple", to: "/sexorient" },
      { title: "Penafian", icon: "mdi-gavel", to: "/disclaimer" },
      { title: "Tentang", icon: "mdi-information", to: "/about" }
    ],
  }),
};
</script>