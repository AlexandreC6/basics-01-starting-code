const app = Vue.createApp({
  data() {
    return {
      message: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    };
  }
});

// Selectionner le CSS selector ou Vue va work
app.mount('#user-goal');
