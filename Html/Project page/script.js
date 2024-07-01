function add() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmpassword= document.getElementById("cpass").value;
    let GENDER = document.getElementById("male").value;
    let gender = document.getElementById("female").value;
    validate(name,email,phone,password,confirmpassword);

    localStorage.setItem("Name",name);
    localStorage.setItem("Email",email);
    localStorage.setItem("Phone",phone);
    localStorage.setItem("Password",password);
    localStorage.setItem("Confirm-password",cpass);
    localStorage.setItem("Gender",male);
    localStorage.setItem("Gender",female);
    BindTable();
}

function BindTable(){
   let name=localStorage.getItem("Name");
   let email=localStorage.getItem("Email");
   let phone=localStorage.getItem("Phone");
   let password=localStorage.getItem("Password");
   let confirmpassword=localStorage.getItem("cpass");
   let gender=localStorage.getItem("Gender");
   let GENDER=localStorage.getItem("Gender");
}
function validate(name,email,phone,password,confirmpassword){

    if (name == "") {
        alert("Please Enter Name");
        document.getElementById("name").focus();
        return false;
}else if(email==""){
    alert("Please Enter Email");
    document.getElementById("email").focus();
    return false;
}else if(phone==""){
    alert("Please Enter Phone");
    document.getElementById("phone").focus();
    return false;

}else if(password==""){
    alert("Please Enter Password");
    document.getElementById("password").focus();
    return false;
}
else if(confirmpassword==""){
    alert("Please Enter confirm-password");
    document.getElementById("cpass").focus();
    return false;

}

}