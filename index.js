let date = document.querySelectorAll('td')
let attendance =document.getElementById('attendance')
let select =document.getElementById('select')
select.addEventListener('click',(e)=>{
    e.preventDefault()
    date.forEach(dates=>{
        let dayed = attendance.value.split('-',attendance.value.length)
        if(dayed.indexOf(dates.textContent)!=-1){
            dates.style.background = 'green'
        }else{
            dates.style.background = 'transparent'
        }
    })
})




// side bar

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function() {
  sidebar.classList.toggle("active");
  if(sidebar.classList.contains("active")){
  sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
}else
  sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}