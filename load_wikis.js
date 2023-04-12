function loadWikis(){

  let data;

  fetch("./wikis.json")
  .then(response => {
   return response.json();
})
.then(jsondata => data = jsondata);

console.log(data)

const wikis = JSON.parse(data);

let text = "";

for(let i = 0; i < wikis.length; i++){

  text = text + "<li class=\"wikis\"><a href=" + 
  concat("\"./wikis/",wikis[i].name)+"\">" + 
   wikis[i].name + "</a></li>\n<br>\n"

  console.log(wikis[i].name + " " + wikis[i].href)
   
}

   document.getElementById("list").innerHTML = text

}