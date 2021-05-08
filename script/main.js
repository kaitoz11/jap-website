let temp_Data;
async function getAPI(url){
    const response = await fetch(url)
    let temp_Dt = await response.json()
    console.log(temp_Dt)
    return temp_Dt
}
function isJap(ch){
    return (ch >= "\u4e00" && ch <= "\u9faf") || (ch >= "\u3400" && ch <= "\u4dbf") || (ch >= "\u30a0" && ch <= "\u30ff") || (ch >= "\u3040" && ch <= "\u309f")
}
let loop=function(arr){
    let re='';
    for(let i=0;i<arr.length;i++){
        re+='<div class="naka jap">'+arr[i]+'</div>'
    }
    return re
}
const usingAPI = 'https://kanjiapi.dev/v1/';
function load_Words(data){
    let HTML = '<h1>words - '+ data.length +' search results found</h1>';
    for(let i=0;i<data.length;i++){
        HTML+=`
        <div class="item ngang">
        <div class="name">
            `+data[i].variants[0].written+`
        </div>
        <div class="info">
            <div class="tag">Pronounced</div>
            <div class="naka jap">`+data[i].variants[0].pronounced+`</div>
            <div class="tag">Meanings</div>
            `+loop(data[i].meanings[0].glosses)+`
        </div>
        </div>
        `
    }
    document.getElementById("left").innerHTML = HTML;
}
function load_Kanji(data){
    let str = `<h1>kanji</h1>
                <div class="ngang">
                    <div class="kanji">
                        `+data.kanji+`
                    </div>
                    <div class="info">
                        <div class="tag">`+data.stroke_count+` strokes</div>
                        <div class="tag">kun reading:</div>
                        `+loop(data.kun_readings)+`
                        <div class="tag">on reading:</div>
                        `+loop(data.on_readings)+`
                        <div class="tag">meanings</div>
                        `+loop(data.meanings)+`
                    </div>
                </div>`
    document.getElementById("right").innerHTML= str;
}