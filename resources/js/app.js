  
import Vue from "vue"; 
import App from "./App.vue";

import SurveyPage from './components/Surveys/SurveyPage.vue';

new Vue({
   
    render: h => h(App)
}).$mount("#app");

Vue.config.devtools = true;