let temp_Data
async function getAPI(url){
    const response = await fetch(url)
    var temp_Dt = await response.json()
    console.log(temp_Dt)
    return temp_Dt
}
function isJap(ch){
    return (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf") || (ch >= "\u30a0" && ch <= "\u30ff") || (ch >= "\u3040" && ch <= "\u309f")
}
const usingAPI = 'https://kanjiapi.dev/v1/'
