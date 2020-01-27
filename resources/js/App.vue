<template>
  <div id="app">
     
    <p>ok</p>
    <SurveyPage />
  </div>
</template>

<script>
import SurveyPage from "./components/Surveys/SurveyPage";
// import json_data from "./json_data2.json";

export default {
  name: "App",
  components: {
    SurveyPage
  },
  app() {
    jsonData: null;
  }
};
</script>

