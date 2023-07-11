
document.querySelector("#myFileInput").addEventListener("change" , function () {
    const reader = new FileReader();
    reader.addEventListener("load" , () => {
        localStorage.setItem("recent-image" , reader.result);

    });
    reader.readAsDataURL(this.files[0]);
});
document.addEventListener("DOMContentLoaded" , () => {
    const recentImageDataurl = localStorage.getItem("recent-image");
    if (recentImageDataurl) {
        document.querySelector("#imgPreview").setAttribute("src" , recentImageDataurl);
    }
});   

function save1 () {
    var name=document.getElementById("first_name").value;
    localStorage.setItem("textvalue1" , name);
    return false;
    
}
function save2 () {
    var phone=document.getElementById("mobile").value;
    localStorage.setItem("textvalue2" , phone);
    return false;
    
}
function save3 () {
    var gmail=document.getElementById("email").value;
    localStorage.setItem("textvalue3" , gmail);
    return false;
}
function save4 () {
    var sex=document.getElementById("gender").value;
    localStorage.setItem("textvalue4" , sex);
    return false;
} 
function save5 () {
    var place=document.getElementById("Address").value;
    localStorage.setItem("textvalue5" , place);
    return false;
}
function save6 () {
    var town=document.getElementById("City").value;
    localStorage.setItem("textvalue6" , town);
    return false;
}
function save7 () {
    var pin=document.getElementById("Pincode").value;
    localStorage.setItem("textvalue7" , pin);
    return false;
}
function save8 () {
    var day=document.getElementById("date").value;
    localStorage.setItem("textvalue8" , day);
    return false;
}
function save9 () {
    var number=document.getElementById("aadhar").value;
    localStorage.setItem("textvalue9" , number);
    return false;
}
function save10 () {
    var number=document.getElementById("aadhar").value;
    localStorage.setItem("textvalue10" , number);
    return false;
}
function save () {
    save1 ();
    save2 ();
    save3 ();
    save4 ();
    save5 ();
    save6 ();
    save7 ();
    save8 ();
    save9 ();
    save10 ();
}
    document.getElementById("name_value").innerHTML=localStorage.getItem("textvalue1");
    document.getElementById("time").innerHTML=localStorage.getItem("textvalue8");
    document.getElementById("male").innerHTML=localStorage.getItem("textvalue4");
    document.getElementById("num").innerHTML=localStorage.getItem("textvalue9");
    document.getElementById("mobile").innerHTML=localStorage.getItem("textvalue2");
    document.getElementById("mail").innerHTML=localStorage.getItem("textvalue3");
    document.getElementById("add").innerHTML=localStorage.getItem("textvalue5");
    document.getElementById("panvel").innerHTML=localStorage.getItem("textvalue6");
    document.getElementById("code").innerHTML=localStorage.getItem("textvalue7");
    document.getElementById("num1").innerHTML=localStorage.getItem("textvalue10");
    
   


    
    
    

