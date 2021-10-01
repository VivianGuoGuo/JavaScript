
const data = [{"tab": "sport", "content": "sports news"}, {"tab": "local", "content": "local news"}, {"tab": "politics", "content": "politics news"}];
const parentDiv=document.getElementById('div');
const divs=document.createElement('div');


divs.classList.add('item');
var tabData=[];
data.forEach(function(item){
  divs.innerText(item.tab);
  //console.log (item.content);
 })
 console.log(tabData);


for(let i=0; i<=tabData.length-1;i++){


 divs.innerText(tabData[i]);
}
 parentDiv.appendChild(divs);

 



// local.addEventListener("click", (e)=>{
  
//     // const foucusDiv =local.focus();
//     // console.log(foucusDiv);
  
//     // if (e.key == 'Tab'){                                                   
//     //     e.preventDefault();
//     const tabData=data.forEach(function(item){
//       console.log (item.content);
//      })
//   const tag = document.createElement("p");
//    const text= document.createTextNode("tabData");
//    tag.appendChild(text);

//    document.body.appendChild(tag);

   
//   },{once:true});
 

// function checkForTab(event) {
// 	if (event.key == "Tab") {
// 		event.preventDefault();
      
//         const tag = document.createElement("p");
//            const text= document.createTextNode("Local News");
//            tag.appendChild(text);
        
//            document.body.appendChild(tag);}

// }
// document.getElementById('div2').onkeydown = checkForTab;
