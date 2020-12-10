<template>
  <div id="question" class="text-center">
    <h3>Soalan {{ questionNumber }}</h3>
    <v-row no-gutters>
      <v-col cols="6" sm="6" xl="6" lg="6">
        <v-card
          outlined
          tile
          class="pa-3 ma-2 teal lighten-4"
          min-height="200px"
        >
          <p style="font-size: 1em" class="hidden-md-and-up">{{ question.texta }}</p>
          <p style="font-size: 1.5em" class="hidden-sm-and-down">{{ question.texta }}</p>
          
        </v-card>
      </v-col>
      <v-col cols="6" sm="6" xl="6" lg="6">
        <v-card
          outlined
          tile
          class="pa-3 ma-2 amber lighten-4"
          min-height="200px"
        >
          <p style="font-size: 1em" class="hidden-md-and-up">{{ question.textb }}</p>
          <p style="font-size: 1.5em" class="hidden-sm-and-down">{{ question.textb }}</p>
        </v-card>
      </v-col>
      <!--p style="display:none">{{ question.qtype }}</p-->
    </v-row>

    <v-card>
      <v-card-text>
        <v-slider
          v-model="scalevalue"
          :color="svcolor"
          :thumb-color="svthumbcolor"
          :track-color="svtrackcolor"
          :tick-labels="svticksLabels"
          :max="4"
          step="1"
          ticks="always"
          tick-size="4"
          cancelable=false
        ></v-slider>
      </v-card-text>
    </v-card>

    <br />
    <v-btn @click="submitAnswer" class="red py-4 text-center white--text"
      >Hantar</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      answer: "",
      scalevalue: 2,
      //qtype:'',
      svcolor: 'blue',
      svthumbcolor: 'red',
      svtrackcolor: 'amber',
      svticksLabels: ["++", "+", "N", "+", "++"]
      }
  },
  props: ["question", "question-number"],
  methods: {
    submitAnswer: function () {
      this.processAnswer(this.scalevalue, this.question.qtype);
      //console.log(this.scalevalue + this.question.qtype);
      this.$emit("answer", { answer: this.scalevalue });
      this.scalevalue = 2;
    },
    processAnswer: function(sv, qt){
      if(qt == 'rev') {
        if(sv == 0) this.scalevalue = 4;
        else if(sv == 1) this.scalevalue = 3;
        else if(sv == 2) this.scalevalue = 2;
        else if(sv == 3) this.scalevalue = 1;
        else if(sv == 4) this.scalevalue = 0;
      }
    }
  },
};
</script>

<style scoped>

p {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-style: italic;
}

#question{
  width: 100%;
}
</style>