<template>
  <v-container class="pa-2" outlined tile>
    <div id="sexorient">
      <div v-if="introStage" class="text-justify pa-5">
        <div class="text-center">
          <img src="@/assets/shreks/logo.png" style="width: 10em" alt="" />
        </div>
        <p>Ujian ini adalah instrumen untuk memahami orientasi seksual anda. Terdapat 10 soalan dan anda diberi dua pilihan gambar <v-chip style="border-radius:6px" color="blue">A</v-chip> dan <v-chip style="border-radius:6px" color="red">B</v-chip> untuk setiap soalan. </p>
        
        <p>Anda perlu memilih gambar yang anda rasakan lebih tepat menggambarkan minat, pilihan dan kesukaan anda. Tiada jawapan yang betul atau salah. Untuk mengelakkan <em>visual bias</em> (berat sebelah) dalam pemilihan, kesemua gambar menggunakan watak animasi yang neutral.
        </p>
        <p>
          Sila pastikan anda telah membaca <router-link to="/disclaimer">Penafian</router-link> di bahagian menu. Dengan menggunakan ujian ini, 
          anda telah bersetuju dengan terma yang terkandung dalam Penafian.
        </p>
        <div class="text-center">
          <v-row>
            <v-col cols="6 offset-3" sm="6 offset-3" xl="6 offset-3" lg="6 offset-3">
            <v-btn @click="startQuiz" class="red py-4 text-center white--text">MULA</v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <div v-if="questionStage">
        <SOQuestion
          :question="questions[currentQuestion]"
          :question-number="currentQuestion + 1"
          v-on:answer="handleAnswer"
        >
        </SOQuestion>
      </div>

      <div v-if="resultsStage" class="pa-2 text-center">
        <v-row no-gutters>
        <v-col cols="12" sm="12" xl="12" lg="12">
          <p>Orientasi seksual anda ialah</p>
          <img src="@/assets/shreks/final.jpg" style="width: 10em" alt="" />
          <h2 style="color:#a1eb65">EROSHREKSUAL</h2>
          <p>Shrek adalah cinta. Shrek adalah kehidupan.</p>
          <br/>
          <p style="color:#d6d4d0">Instrumen ini adalah troll semata-mata. Korang pilih apa pun tetap inilah jawapannya kahkahkah</p>   
        </v-col>
        </v-row>
          <router-link to="/" style="text-decoration: none">
            <v-btn class="teal lighten-2 ma-2"> Induk </v-btn>
          </router-link>

      </div>
    </div>
  </v-container>
</template>

<script>
//Importing json file containg quiz question
import dbsexorient from "@/assets/sexorient.json";
import SOQuestion from "@/components/sexorient/SOQuestion.vue";

export default {
  name: "Sexorient",
  components: {
    SOQuestion,
  },

  data: () => ({
    title: "",
    introStage: false,
    questionStage: false,
    resultsStage: false,
    questions: [],
    currentQuestion: 0,
    answers: []
  }),

  created() {
    //Fetching question from JSON file
    fetch(dbsexorient).then((res) => {
      this.title = dbsexorient.title;
      this.questions = dbsexorient.questions;
      this.introStage = true;
    });
  },

  methods: {
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
    },
    
    //this method is triggered via v-on when child component question emit "answer" via its submitAnswer method
    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      //if there is no more question do the next method
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },
    //triggered once the questions are done
    handleResults() {

    },
  }
};
</script>
