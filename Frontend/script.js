function showMessage(){
    document.getElementById("message").textContent="Thank You visiting LocalBiz Connect";
}

function submitEnquiry(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const service=document.getElementById("service").value.trim();
    const message=document.getElementById("message").value.trim();
    const formmessage=document.getElementById("formmessage");

    if(name===""||email===""||service===""||message===""){
        formmessage.textContent="Please fill all the fields before submit.";
        formmessage.style.color="red";
        return;

   }
    formmessage.textContent = "Thank you, " + name + "! Your enquiry has been recorded for the Day 2 demo.";
    formmessage.style.color = "#123c69";
}