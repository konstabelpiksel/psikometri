<template>
  <v-container class="pa-2" outlined tile>
    <div id="abquiz">
      <div v-if="introStage" class="text-justify pa-5">
        <div class="text-center">
          <img src="@/assets/stres.png" alt="" />
        </div>
        <p>
          Ujian ini adalah terjemahan dan olahan soal selidik Glazer (1978). Ia
          dihasilkan berdasarkan kajian personaliti Jenis A dan B oleh Friedman
          dan Rosenman pada 1950an. Individu jenis A mempunyai personaliti yang
          menyebabkan mereka berisiko tinggi untuk terdedah kepada stres dan
          kebiasaannya penyakit kardiak. Kebanyakan orang mempunyai beberapa
          ciri Jenis A, tetapi pada kadar yang tinggi adalah tidak baik.
        </p>
        <p>
          Untuk setiap soalan, heret slider ke arah kiri atau kanan untuk
          memilih pernyataan yang dipaparkan berdasarkan personaliti anda.
          Kedudukan di tengah adalah untuk neutral.
        </p>
        <p>
          Sebelum menjawab, sila pastikan anda telah membaca
          <router-link to="/disclaimer">Penafian</router-link>
          di bahagian menu. Dengan menggunakan ujian ini, anda telah bersetuju
          dengan terma yang terkandung dalam Penafian.
        </p>
        <div class="text-center">
          <v-btn @click="startQuiz" class="red py-4 text-center white--text"
            >MULA</v-btn
          >
        </div>
      </div>

      <div v-if="questionStage">
        <Question
          :question="questions[currentQuestion]"
          :question-number="currentQuestion + 1"
          v-on:answer="handleAnswer"
        >
        </Question>
      </div>

      <div v-if="resultsStage" class="pa-2">
        <h3 class="text-center">Markah anda ialah {{ marks }}.</h3>
        <br />

        <v-simple-table dense>
          <thead>
            <tr>
              <th width="25%">Markah</th>
              <th width="10%">Personaliti</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="kat in kategori"
              v-bind:key="kat.cat"
              v-bind:class="{ 'brown lighten-4': kat.cat == pilihan }"
            >
              <td>{{ kat.rge }}</td>
              <td>{{ kat.abcat }}</td>
              <td v-if="kat.cat == 0" rowspan="5" class="brown lighten-4">
                {{ descpilihan }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <br/>
        <p class="text-justify">Ujian ini memberikan gambaran kasar hubungkait personaliti anda dengan personaliti Jenis A. Markah yang tinggi menandakan 
          anda mungkin berisiko menghadapi stres dan penyakit berkait. Individu personaliti Jenis B juga mungkin akan menjadi 
          Jenis A apabila mereka membuat/menghadapi perubahan dalam kehidupuan seharian, mahupun sebaliknya.</p>
        <div class="text-center">
          <router-link to="/" style="text-decoration: none">
            <v-btn class="teal lighten-2 ma-2"> Induk </v-btn>
          </router-link>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
//import databank from "../assets/databank.json";
import dbsmall from "../../assets/dbsmall.json";
import Question from "../../components/abstress/Question.vue";

export default {
  name: "ABQuiz",
  components: {
    Question,
  },

  data: () => ({
    disclaimerlink: "/disclaimer",
    title: "",
    introStage: false,
    questionStage: false,
    resultsStage: false,
    questions: [],
    currentQuestion: 0,
    answers: [],
    marks: 0,
    pilihan: 0,
    descpilihan: "",
    kategori: [
      {
        cat: 0,
        rge: "78-100",
        abcat: "A1",
        catdesc:
          "Perilaku anda adalah Jenis A1. Perilaku sebegini mendedahkan anda kepada risiko serangan jantung. Adalah amat disarankan untuk mengubah aspek perilaku anda kepada jenis yang lain.",
      },
      {
        cat: 1,
        rge: "57-77",
        abcat: "A2",
        catdesc:
          "Anda dalam kategori A2 tetapi semakin mendekati golongan berisiko diserang sakit jantung. Adalah baik anda melihat aspek perilaku yang boleh diperbaiki.",
      },
      {
        cat: 2,
        rge: "43-56",
        abcat: "AB",
        catdesc:
          "Anda dalam kategori campuran A & B. Ini adalah lebih baik berbanding A1 dan A2 tetapi wujud potensi anda memasuki kategori tersebut. Sila ambil perhatian risiko sekiranya perilaku anda mengikut kategori tersebut.",
      },
      {
        cat: 3,
        rge: "22-42",
        abcat: "B2",
        catdesc:
          "Perilaku anda ialah B1 dan kurang berisiko serangan kardiak. Anda adalah seorang yang tenang dan rileks, dan mengawal stres anda dengan cukup.",
      },
      {
        cat: 4,
        rge: "0-21",
        abcat: "B1",
        catdesc:
          "Perilaku anda ialah B2 dan sangat kurang berisiko serangan kardiak.",
      },
    ],
  }),

  created() {
    fetch(dbsmall).then((res) => {
      this.title = dbsmall.title;
      this.questions = dbsmall.questions;
      this.introStage = true;
    });
  },

  methods: {
    startQuiz() {
      this.introStage = false;
      this.questionStage = true;
    },

    handleAnswer(e) {
      this.answers[this.currentQuestion] = e.answer;
      //kalau soalan dah abis
      if (this.currentQuestion + 1 === this.questions.length) {
        this.handleResults();
        this.questionStage = false;
        this.resultsStage = true;
      } else {
        this.currentQuestion++;
      }
    },

    handleResults() {
      this.questions.forEach((a, index) => {

        this.marks += this.answers[index];
      });
      this.marks += 20;
      if (this.marks <= 21) this.pilihan = 4;
      else if (this.marks >= 22 && this.marks <= 42) this.pilihan = 3;
      else if (this.marks >= 43 && this.marks <= 56) this.pilihan = 2;
      else if (this.marks >= 57 && this.marks <= 77) this.pilihan = 1;
      else if (this.marks >= 78) this.pilihan = 0;
      this.descpilihan = this.kategori[this.pilihan].catdesc;
    },
  },
};
</script>
