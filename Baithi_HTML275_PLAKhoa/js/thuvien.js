function DongY(){
    var hople=true;
    document.getElementById("lblhoten").innerHTML="";
    var hoten=document.getElementById("hoten");
    if(hoten.value.trim()==""){
        document.getElementById("lblhoten").innerHTML="(*)";
        hople=false;
        hoten.focus()
    }

    document.getElementById("lblmail").innerHTML="";
    var mail=document.getElementById("mail");
    if(mail.value.trim()==""){
        document.getElementById("lblmail").innerHTML="(*)";
        hople=false;
        mail.focus()
    }

    document.getElementById("lblcall").innerHTML="";
    var call=document.getElementById("call");
    if(call.value.trim()==""){
        document.getElementById("lblcall").innerHTML="(*)";
        hople=false;
        call.focus()
    }

    document.getElementById("lbltitle").innerHTML="";
    var title=document.getElementById("title");
    if(title.value.trim()==""){
        document.getElementById("lbltitle").innerHTML="(*)";
        hople=false;
        title.focus()
    }
    document.getElementById("lblnoidung").innerHTML="";
    var noidung=document.getElementById("noidung");
    if(noidung.value.trim()==""){
        document.getElementById("lblnoidung").innerHTML="(*)";
        hople=false;
        noidung.focus()
    }

    document.getElementById("lbladdress").innerHTML="";
    var address=document.getElementById("address");
    if(address.value.trim()==""){
        document.getElementById("lbladdress").innerHTML="(*)";
        hople=false;
        address.focus()
    }
    document.getElementById("lbldatepicker").innerHTML="";
    var ngh=document.getElementById("datepicker");
    if(ngh.value.trim()==""){
        document.getElementById("lbldatepicker").innerHTML="(*)";
        hople=false;
        ngh.focus()
    }
    
}
