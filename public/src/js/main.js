/*
* JS Goes here please
* */

var appSet={
    url:"https://localhost/mvc/api",
    arr:{
        singIn:"email",
        password:"user_passcode",
        practiceName:"name",
        lastname:"surname",
        cell:"phone"
    },
    post:{submit:"add_user",gender:"d"},
}
$("#register").submit(function(e){
    e.preventDefault();
    var inputs =  $("form#register").serializeArray();
    if (inputs["cpassword"].value === inputs["password"].value){
        appSend.formInput(inputs,"add_user");
    }else{

    }
    console.log(appSet.post);
});
$("#login").submit(function(e){
    e.preventDefault();
    var inputs =  $("form#login").serializeArray();
    if (inputs["password"].value !== ""){
        appSend.formInput(inputs,"login");
    }else{
        
    }
    console.log(appSet.post);
});
var appSend = {
    formInput:function(inputs,action){
        $.each(inputs,function(data,key){
            appSet.post[appSet.arr[inputs[data].name]] = inputs[data].value;
        });

        appSet.post["submit"] = action;
        
        $.post(appSet.url,appSet.post,function(resp){
            try{
                var j_resp = JSON.parse(resp);
                console.log(j_resp);
                appSend.switchActions(j_resp);
                appSet.post = {};//reset posted variables
            }catch(exc){
                console.log(exc);
            }
        });
    },
    switchActions:function(resp){
        switch(resp){
            case "worked":
            break;
            default:
            console.log(resp);
            break;
        }
    },
    onSs:function(pos){
        document.getElementById("geolocation").value = pos.coords.Longitude.toString() + '-' 
        + pos.coords.Latitude.toString();
    },
    onEr:function(error){
        console.log(error);
    },
    getGeo:function(){
        navigator.geolocation.getCurrentPosition(appSend.onSs,appSend.onEr);
    }
}