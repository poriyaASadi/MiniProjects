<script setup>
 import { ref , computed } from 'vue'
 const quize = ref ([
  {
    question : 'waths is Vue ?',
    answar : 0,
    aoptions : [
      'A front end framework ...',
      'B this libres for backend ...',
      'C library',
      'D ice cream maker'
    ],
    selected : null
  },
  {
    question : 'waths is Vue ?',
    answar : 2,
    aoptions : [
      'A front end framework ...',
      'B this libres for backend ...',
      'C library',
      'D ice cream maker'
    ],
    selected : null
  },
  {
    question : 'waths is Vue ?',
    answar : 1,
    aoptions : [
      'A front end framework ...',
      'B this libres for backend ...',
      'C library',
      'D ice cream maker'
    ],
    selected : null
  },
 ]);
 console.log(quize);
 
 const quizeCompleted = ref(false);
 let currentQuestion = ref(0);
 const score = computed(() => {
  let value = 0
  quize.value.map(q => {
    if (q.selected == q.answar) {
      value++
    }
  })
  return value
 });
// window.score = score
const getCurrentQuestion = computed(() => {
  let question = quize.value[currentQuestion.value]
  question.index = currentQuestion.value
  console.log(currentQuestion.value);
  return question
})

const SetAnswer = event => {
  quize.value[currentQuestion.value].selected = event.target.value
  event.target.value = null
}
const NextQustion = () => {
  if (currentQuestion.value < quize.value.length - 1) {
    currentQuestion.value++
  }else {
    currentQuestion.value = true
  }
}

let fff = 'ffffffgffgff'
</script>

<template>
<main class="app">
  <h1>{{ fff }}</h1>
  <section class="quiz" v-if="!quizeCompleted">
    <div class="auiz-info">
      <span class="quizstion">{{ getCurrentQuestion.question }}</span>
      <span class="score">Score {{  score }}/{{ quize.length }}</span>
    </div>
    <div class="options">
      <label
       v-for="(option,index) in getCurrentQuestion.aoptions"
        :key="index"
        :class="`option ${
        getCurrentQuestion.selected == index ? index == getCurrentQuestion.answar ? 'correct' : 'worng' : ''
        } ${
        getCurrentQuestion.selected != null &&
        index != getCurrentQuestion.selected 
        ? 'disabled' 
        : ' '
        }
        `">
        <input 
        type="radio" 
        :name="getCurrentQuestion.index"
         :value="index" 
         v-model="getCurrentQuestion.selected"
          :disabled="getCurrentQuestion.selected"
          @change="SetAnswer">
          <span>{{ option }}</span>
      </label>
    </div>
    <button @click="NextQustion" :disabled="!getCurrentQuestion.selected">
      {{ getCurrentQuestion.index == quize.length - 1 ? 'Finish' : getCurrentQuestion.selected == null ? 'Select an options' : 'Next question' }}
    </button>
  </section>
  <section v-else>
    <h2>You have finish the quiz</h2>
    <p>your score is {{ score }}/{{ quize.length }}</p>
  </section>
</main>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
body {
  background-color: #333;
}
</style>
