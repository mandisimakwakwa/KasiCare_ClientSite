/*
* JS Goes here please
* */

var appSet={
    url:"http://localhost/mvc/api",
    arr:{
        practice_speciality:"services",
        practice_services:"service",
        office_hours:"",
        email:"email",
        geolocation:"address",
        password:"user_passcode",
        practiceName:"name",
        username:"name",
        lastname:"surname",
        cell:"phone"
    },
    prac:{
        
        n:""
    },
    post:{submit:"add_user",gender:"d"},
}
$("#register").submit(function(e){
    e.preventDefault();
    console.log(appSet.post);
    var inputs =  $("form#register").serializeArray();
    //if (inputs["passwordCheck"].value === inputs["password"].value){
        appSend.formInput(inputs,"add_institution");
    //}else{

    //}
    //console.log(appSet.post);
});
$("#register_admin").submit(function(e){
    e.preventDefault();
    var inputs =  $("form#register_admin").serializeArray();
    console.log(inputs);
    if (inputs[3].value === inputs[3].value){
    appSend.formInput(inputs,"add_user");
    }else{

    }
    console.log(appSet.post);
});
$("#login").submit(function(e){
    e.preventDefault();
    var inputs =  $("form#login").serializeArray();
    if (inputs[1].value !== ""){
        appSend.formInput(inputs,"login");
    }else{
        
    }
   // console.log(appSet.post);
});
var appSend = {
    pos:null,
    formInput:function(inputs,action){
        $.each(inputs,function(data,key){
            appSet.post[appSet.arr[inputs[data].name]] = inputs[data].value;
        });
        appSet.post["submit"] = action;
        if (action==="add_institute"){
            
            serv.push(appSet.post["services"]);
            var serv = appSet.post["service"].split(',');
            appSet.post["services"] =JSON.stringify(serv.reverse());
        }
        if (action==="add_user"){
            appSet.post["gender"] = 'd';
        }
        //console.log(appSet.post["services"]);
        $.post(appSet.url,appSet.post,function(resp){
            try{
                //var j_resp = resp;
                //console.log(j_resp);
                appSend.switchActions(resp);
                appSet.post = {};//reset posted variables
            }catch(exc){
                console.log(exc);
            }
        },"JSON");
    },
    switchActions:function(resp){
        switch(resp){
            case "worked":
            break;
            default:
            //console.log(resp);
            break;
        }
        if (resp.error!==undefined){
            if (resp.error === 0){
                window.location = "./signIn.php";
            }
        }
            console.log(resp[0].gender);
            if (resp[0].gender===' '){
                window.location = "./dashboard.php";
            }
    },
    onSs:function(pos){
        console.log(pos);
        document.getElementById("geolocation").value = pos.coords.longitude + ',' 
        + pos.coords.latitude;
         appSend.pos = pos.coords;
        var geocoder = new google.maps.Geocoder;
        var infowindow = new google.maps.InfoWindow;
        geocodeLatLng(geocoder, infowindow,pos.coords );
    },
    onEr:function(error){
        console.log(error);
    },
    getGeo:function(){
        navigator.geolocation.getCurrentPosition(appSend.onSs,appSend.onEr);
        
    }
}