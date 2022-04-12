const app = Vue.createApp({
  data() {
    return {
      firstMessage: "Just here !",
      message: 'Finish the course and learn Vue!',
      messageB: "<h3>It's the messge B</h3>",
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
      // Math.randon = JS function qui prend un numéro random entre 0 et 1
      const randonNumber = Math.random();
      if (randonNumber < 0.5 ) {
        return this.message;
      } else {
        return this.messageB;
      }
    }
  }
});

// Selectionner le CSS selector ou Vue va work
app.mount('#user-goal');
