const tablinks=document.getElementsByClassName("tab-links");
const tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabName){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-content")
    }
    document.getElementById(tabName).classList.add("active-content")
}
const sidemenu = document.getElementById("sidemenu");
 function openmenu(){
    sidemenu.style.right = "0"
 }
 function closemenu(){
    sidemenu.style.right = "-200px"
 }
