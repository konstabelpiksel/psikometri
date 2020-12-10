<template>
  <v-container class="pa-2" outlined tile>
    <div id="mentalquiz">
      <div v-if="introStage" class="text-justify pa-5">
        <div class="text-center">
          <img src="@/assets/mentalage.png" style="width: 10em" alt="" />
        </div>
        <p>Ujian ini adalah terjemahan dan olahan ujian asal daripada Jepun yang dinamakan 精神年齢チェック. Sila jawab dengan 
          jujur. Maklumat jawapan anda tidak disimpan.
        </p>
        <p>
          Ujian ini tiada hubungan dengan IQ dan EQ seseorang. Umur Mental diukur sebagai kemampuan
          psikologi individu berbanding umur untuk seorang kanak-kanak mencapai tahap tersebut.
          Sebagai contoh, jika umur mental anda ialah 10, mental anda adalah sama seperti mental kanak-kanak 
          yang berusia 10 tahun.
        </p>
        <p>
          Sebelum menjawab, sila masukkan umur sebenar anda di bawah. Sila juga pastikan anda telah membaca
          <router-link to="/disclaimer">Penafian</router-link> di bahagian menu. Dengan menggunakan ujian ini, 
          anda telah bersetuju dengan terma yang terkandung dalam Penafian.
        </p>
        <div class="text-center">
          <v-row>
            <v-col cols="6 offset-3" sm="6 offset-3" xl="6 offset-3" lg="6 offset-3">
            <v-text-field v-model="currentage" :rules="rules" label="Umur" outlined suffix="tahun"></v-text-field>
            <v-btn @click="startQuiz" class="red py-4 text-center white--text">MULA</v-btn>
            </v-col>
          </v-row>
        </div>
      </div>

      <div v-if="questionStage">
        <MAQuestion
          :question="questions[currentQuestion]"
          :question-number="currentQuestion + 1"
          v-on:answer="handleAnswer"
        >
        </MAQuestion>
      </div>

      <div v-if="resultsStage" class="pa-2 text-center">
        <v-row no-gutters>
        <v-col cols="6" sm="6" xl="6" lg="6">
          <p>Umur sebenar anda</p>
          <v-chip class="ma-2" color="orange lighten-2" x-large>{{ currentage }}</v-chip>
        </v-col>
        <v-col cols="6" sm="6" xl="6" lg="6">
          <p>Umur mental anda</p>
          <v-chip class="ma-2" color="lime lighten-1" x-large>{{ mentalage }}</v-chip>
        </v-col>
        </v-row>
        <br />
        <img v-bind:src="require('@/assets/'+catimej)" style="width: 10em" alt="" />
        <p>{{ catteks }}</p>
        
         <br/>
          <router-link to="/" style="text-decoration: none">
            <v-btn class="teal lighten-2 ma-2"> Induk </v-btn>
          </router-link>

      </div>
    </div>
  </v-container>
</template>

<script>
//Importing json file containg quiz question
import dbmentalage from "@/assets/mentalage.json";
import MAQuestion from "@/components/mentalage/MAQuestion.vue";

export default {
  name: "Mentalage",
  components: {
    MAQuestion,
  },

  data: () => ({
    title: "",
    introStage: false,
    questionStage: false,
    resultsStage: false,
    currentage: 0,
    mentalage: 0,
    questions: [],
    currentQuestion: 0,
    answers: [],
    catimej: "",
    catteks: "",
    kategori: [
      {
        cat: 0,
        catimg: "mo0.jpg",
        catdesc:
          "Anda seorang yang berfikiran muda berbanding usia sebenar anda.",
      },
      {
        cat: 1,
        catimg: "mo1.jpg",
        catdesc:
          "Anda berfikiran sesuai dengan umur anda.",
      },
      {
        cat: 2,
        catimg: "mo2.jpg",
        catdesc:
          "Anda mempunyai mental yang lebih matang berbanding usia anda.",
      },
      {
        cat: 3,
        catimg: "mo3.jpg",
        catdesc:
          "Tidak dapat dipastikan umur mental berbanding umur sebenar anda.",
      }
    ],
    rules: [
        value => !!value || 'Diperlukan',
        value => (value || '').length <= 2 || 'Maks 2 angka',
        value => {
          //Untuk email - const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const pattern = /^[1-9]\d*$/;
          return pattern.test(value) || 'Umur tidak sah.'
        },
    ],
  }),

  created() {
    //Fetching question from JSON file
    fetch(dbmentalage).then((res) => {
      this.title = dbmentalage.title;
      this.questions = dbmentalage.questions;
      this.introStage = true;
    });
  },

  methods: {
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
      console.log(currentage);
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
      this.questions.forEach((a, index) => {
        this.mentalage += parseInt(this.answers[index]);
      });
      if (this.mentalage < this.currentage) this.pilihan = 0;
      else if (this.mentalage == this.currentage) this.pilihan = 1;
      else if (this.mentalage > this.currentage) this.pilihan = 2;
      else if (this.currentage == 0) this.pilihan = 3;
      this.catteks = this.kategori[this.pilihan].catdesc;
      this.catimej = this.kategori[this.pilihan].catimg;
    },


  }
};
</script>
