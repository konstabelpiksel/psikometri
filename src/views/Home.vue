<template>
  <v-container>
    <v-row dense>
      
      <v-col cols="12">
        <v-card color="blue-grey darken-1" dark
          ><div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Personaliti A/B dan Stres
              </v-card-title>
              <v-card-subtitle>Olahan Ujian Glazer</v-card-subtitle>
              <v-card-actions>
                <router-link  to="/abstress" style="text-decoration: none;">
                  <v-btn> Akses </v-btn>
                </router-link>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img src="@/assets/stres.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="red darken-3" dark
          ><div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Berapa Umur Mental Anda?
              </v-card-title>
              <v-card-subtitle>Terjemahan Ujian Asal</v-card-subtitle>

              <v-card-actions>
                <router-link to="/mentalage" style="text-decoration: none;">
                  <v-btn> Akses </v-btn>
                </router-link>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img src="@/assets/mentalage.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="lime darken-2" dark
          ><div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Orientasi Seksual Anda
              </v-card-title>
              <v-card-subtitle>Berdasarkan Model LLORT</v-card-subtitle>

              <v-card-actions>
                <router-link to="/sexorient" style="text-decoration: none;">
                  <v-btn> Akses </v-btn>
                </router-link>
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img src="@/assets/shreks/logo.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card color="orange darken-1" dark
          ><div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">
                Dalam Pembinaan
              </v-card-title>
              <v-card-subtitle>Dalam Pembinaan</v-card-subtitle>

              <v-card-actions>
                <!--router-link to="/abstress" style="text-decoration: none;"-->
                  <v-btn> Akses </v-btn>
                <!--/router-link-->
              </v-card-actions>
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img src="@/assets/wip.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},

  data: () => ({}),
};
</script>

<style scoped>
.headline{
  font-size: 0.8em;
  word-break: keep-all;
}

</style>
