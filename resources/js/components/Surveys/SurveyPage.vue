<template>
 
    <div class="container">
           
        <div v-if="surveyVue">
            <survey :survey="surveyVue"></survey>
        </div>
    </div>
</template>

<script>
import * as SurveyVue from 'survey-vue' 
// import json_data from '../../../../storage/json_data2.json';
 
var Survey = SurveyVue.Survey
Survey.cssType = "bootstrap";

//Here is example survey json data: (more example data in storage/json_data1.json and storage/json_data2.json)
 var surveyJSData = {
	"locale": "sv",
	"title": "Hobbies",
	
	"pages": [
		{
			"name": "page1",
			"elements": [
				{
          "type": "matrix",
          "name": "question3",
          "title": {
            "sv": "How about these cities?"
          },
          "description": {
            "sv": "Rate cities"
          },
          "columns": [
            {
              "value": "Column 1",
              "text": {
                "sv": "not fun"
              }
            },
            {
              "value": "Column 2",
              "text": {
                "sv": "Ok"
              }
            },
            {
              "value": "Column 3",
              "text": {
                "sv": "good"
              }
            },
            {
              "value": "Column 4",
              "text": {
                "sv": "very good"
              }
            }
          ],
          "rows": [
            {
              "value": "Row 1",
              "text": {
                "sv": "Tokyo"
              }
            },
            {
              "value": "Row 2",
              "text": {
                "sv": "Manila"
              }
            },
            {
              "value": "Row 3",
              "text": {
                "sv": "San Francisco"
              }
            },
            {
              "value": "Row 4",
              "text": {
                "sv": "Bonn"
              }
            }
          ]
        }
			]
		}
	]
}
 
// import json_data from '@/../../../storage/json_data1.json';

    export default {
        components: {
            Survey 
        },
        data() {
            var model = new SurveyVue.Model(surveyJSData) 

            return {
                surveyVue: model,
                jsonData:null
            }
        },
        created(){
          
        },
      
    }
</script>

<style lang="scss" scoped>
 
</style>