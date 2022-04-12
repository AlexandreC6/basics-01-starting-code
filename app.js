const app = Vue.createApp({
  data() {
    return {
      message: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      // Math.randon = JS function qui prend un numéro random entre 0 et 1
      const randonNumber = Math.random();
      if (randonNumber < 0.5 ) {
        return "Learn Vue !";
      } else {
        return "Master Vue!";
      }
    }
  }
});

// Selectionner le CSS selector ou Vue va work
app.mount('#user-goal');
