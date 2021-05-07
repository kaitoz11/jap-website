let temp_Data
async function getAPI(url){
    const response = await fetch(url)
    temp_Data = await response.json()
    console.log(temp_Data)
}
const usingAPI = 'https://kanjiapi.dev/v1/'
