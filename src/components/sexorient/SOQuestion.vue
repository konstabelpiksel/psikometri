<template>
  <div id="soquestion" class="text-center">

    <h3>Soalan {{ questionNumber }}</h3>
    <v-row>
            <v-col cols="6" sm="6" xl="6" lg="6">
              <img v-bind:src="require('@/assets/shreks/'+question.imeja)" style="width:100%" alt="" />
              <v-btn
              x-large
              dark
              color="blue"
              class="text-none"
              @click="submitAnswer"
              >
                A
              </v-btn>
            </v-col>
            <v-col cols="6" sm="6" xl="6" lg="6">
              <img v-bind:src="require('@/assets/shreks/'+question.imejb)" style="width:100%" alt="" />
              <v-btn
              x-large
              dark
              color="red"
              class="text-none"
              @click="submitAnswer"
              >
                B
              </v-btn>
            </v-col>


    </v-row>

  </div>
</template>

<script>
export default {
  name: "SOQuestion",
  data() {
    return {
      answer: "",
      imejA:"",
      imejB:""
      }
  },
  props: ["question", "question-number"],
  methods: {
    submitAnswer: function(e){
      var ans = e.currentTarget.getAttribute('id');
      this.$emit("answer", { answer: ans });
      }
  }
};
</script>

<style scoped>

</style>