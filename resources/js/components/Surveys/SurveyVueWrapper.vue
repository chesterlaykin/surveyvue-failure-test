<template>
    <div>
        <survey v-if="surveyVue" :survey="surveyVue"></survey>
    </div>
</template>

<script>

import * as SurveyVue from 'survey-vue' 
import json_data from '../../../../storage/json_data2.json';


var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";
 

  
export default {
   

    components: {
        Survey
    },
    props: {
        // initialSurvey: {
        //     type: Object,
        //     required: true
        // },
        // json_data: {
        //     type: Object,
        //     required: true
        // },
        mode: {
            type: String,
            required: false
        },
        submission: {
            type: Object,
            required: false
        }
    },
    data() {
        console.log('surveyJSData',surveyJSData);
        var model = new SurveyVue.Model(surveyJSData) 

        return {
            jsonData: null,
            surveyVue: model,
            // doAnimation: true, 
            finished: false,
            completed: false
        }
    },
    created(){
        console.log('surveyJSData',surveyJSData);
       
        return;
  
        var vm = this;

        this.surveyVue.onValueChanged.add(function (sender, options) {
                 
            console.log('values', sender.getAllValues());

            var questionName = options.name;
            var newValue = options.value;
        });

         
    },
    methods: {
            loadSurvey(survey){
            
                console.log('to load',survey);
                
                var model = new SurveyVue.Model(surveyJSData) 
           
                this.surveyVue = model; 
   return
                console.log('this.survey is now',this.surveyVue);  
                window.SurveyVue = this.surveyVue;
 
        }

    }
}
</script>

<style lang="scss" scoped>

</style>