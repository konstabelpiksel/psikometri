<template>
  <div id="maquestion" class="text-center">

    <h3>Soalan {{ questionNumber }}</h3>
    <v-row no-gutters>

        <v-col cols="12" sm="12" xl="12" lg="12">
        <div style="min-height:6em; padding-top:1em;">  
        <p style="font-size: 1.2em" class="hidden-md-and-up">{{ question.soalan }}</p>
        <p style="font-size: 2em" class="hidden-sm-and-down">{{ question.soalan }}</p>  
        </div>
        <div 
          v-for="j in question.jawapan"
          :key="j.id"
          >
        <v-btn
          large
          block
          class="mt-2 text-none"
          :color="color[j.id]"
          @click="submitAnswer"
          :nilai="j.nilai"
        >
          {{ j.pilihan }}
        </v-btn>
        </div>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "MAQuestion",
  data() {
    return {
      answer: "",
      color: ["", "red lighten-4", "blue lighten-4", "amber lighten-3", "deep-orange lighten-4", "lime lighten-2", "cyan lighten-3", "orange lighten-2", "pink lighten-4"]
      }
  },
  props: ["question", "question-number"],
  methods: {
    submitAnswer: function(e){
      var ans = e.currentTarget.getAttribute('nilai');
      //console.log(ans);
      this.$emit("answer", { answer: ans });
      }
  }
};
</script>

<style scoped>

</style>