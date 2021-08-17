const data = [{  
    name: 'Ayaan',  
    age: 26  
    },{  
     name: 'Ahana',  
     age: 22  
     },{  
     name: 'Peter',  
     age: 40      
     },{  
     name: 'Virat',  
     age: 30  
     },{  
     name: 'Rohit',  
     age: 32  
     },{  
     name: 'Dhoni',  
     age: 37  
     }]  
const columns = [{  
   Header: 'Name',  
   accessor: 'name'  
   },{  
   Header: 'Age',  
   accessor: 'age'  
   }]

const loadData = function() {
    return {entries: data, count: 12, columns: columns}
}
/*
const data = {"count":901,"entries":[{"API":"Axolotl","Description":"Collection of axolotl pictures and facts","Auth":"","HTTPS":true,"Cors":"unknown","Link":"https://theaxolotlapi.netlify.app/","Category":"Animals"},
                                    {"API":"Cat Facts","Description":"Daily cat facts","Auth":"","HTTPS":true,"Cors":"no","Link":"https://alexwohlbruck.github.io/cat-facts/","Category":"Animals"},
                                    {"API":"Cataas","Description":"Cat as a service (cats pictures and gifs)","Auth":"","HTTPS":true,"Cors":"unknown","Link":"https://cataas.com/","Category":"Animals"},
                                    {"API":"catAPI","Description":"Random pictures of cats","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://github.com/ThatCopy/catAPI/wiki/Usage","Category":"Animals"},
                                    {"API":"Cats","Description":"Pictures of cats from Tumblr","Auth":"apiKey","HTTPS":true,"Cors":"unknown","Link":"https://docs.thecatapi.com/","Category":"Animals"},
                                    {"API":"Dog Facts","Description":"Random dog facts","Auth":"","HTTPS":true,"Cors":"unknown","Link":"https://dukengn.github.io/Dog-facts-API/","Category":"Animals"},
                                    {"API":"Dogs","Description":"Based on the Stanford Dogs Dataset","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://dog.ceo/dog-api/","Category":"Animals"},
                                    {"API":"HTTPCat","Description":"Cat for every HTTP Status","Auth":"","HTTPS":true,"Cors":"unknown","Link":"https://http.cat/","Category":"Animals"},
                                    {"API":"IUCN","Description":"IUCN Red List of Threatened Species","Auth":"apiKey","HTTPS":false,"Cors":"unknown","Link":"http://apiv3.iucnredlist.org/api/v3/docs","Category":"Animals"},
                                    {"API":"Movebank","Description":"Movement and Migration data of animals","Auth":"","HTTPS":true,"Cors":"unknown","Link":"https://github.com/movebank/movebank-api-doc","Category":"Animals"},
                                    {"API":"PlaceBear","Description":"Placeholder bear pictures","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://placebear.com/","Category":"Animals"},
                                    {"API":"PlaceDog","Description":"Placeholder Dog pictures","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://place.dog","Category":"Animals"},
                                    {"API":"RandomCat","Description":"Random pictures of cats","Auth":"","HTTPS":true,"Cors":"yes","Link":"https://aws.random.cat/meow","Category":"Animals"}]};


const loadData = function() {
    let responseJson = data;
    let columns = [];
    let entry = responseJson.entries[0];
    for (let key of Object.keys(entry)) {
        columns.push({'Header': key, 'accessor': key})
    }

    responseJson['columns'] = columns; 

    console.log(responseJson)

    return responseJson;
}
/*const loadData = function() {
    return fetch('https://api.publicapis.org/entries')
    .then((response) => response.json())
    .then((responseJson) => {

        let columns = [];
        let entry = responseJson.entries[0];
        for (let key in Object.keys(entry)) {
            columns.append({'Header': key, 'accessor': key.toLowerCase()})
        }

        responseJson['columns'] = columns; 
        return responseJson;
    })
}*/

export default loadData;