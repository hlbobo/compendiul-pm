const toggleSidebar1=document.getElementById('open-sidebar');
const toggleSidebar2=document.getElementById('close-sidebar');

function togglesubmenu(button){
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');
}
function togglesidenav(){
  toggleSidebar1.classList.toggle('rotate');
  toggleSidebar2.classList.toggle('rotate');
}