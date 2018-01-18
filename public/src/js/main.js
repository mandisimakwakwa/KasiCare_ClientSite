/*
* JS Goes here please
* */

var appSet={
    url:"https://localhost/mvc/api",
    arr:{
        practice_speciality:"services",
        practice_services:"service",
        office_hours:"",
        email:"email",
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
    var inputs =  $("form#register").serializeArray();
    //if (inputs["passwordCheck"].value === inputs["password"].value){
        appSend.formInput(inputs,"add_user");
    //}else{

    //}
    console.log(appSet.post);
});
$("#register_admin").submit(function(e){
    e.preventDefault();
    var inputs =  $("form#register").serializeArray();
    //if (inputs["passwordCheck"].value === inputs["password"].value){
        appSend.formInput(inputs,"add_user");
    //}else{

    //}
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
    pos:null,
    formInput:function(inputs,action){
        $.each(inputs,function(data,key){
            appSet.post[appSet.arr[inputs[data].name]] = inputs[data].value;
        });

        appSet.post["submit"] = action;
        var serv = appSet.post["service"].split(',');
       serv.push(appSet.post["services"]);
       appSet.post["services"] =JSON.stringify(serv.reverse());
        console.log(appSet.post["services"]);
        // $.post(appSet.url,appSet.post,function(resp){
        //     try{
        //         var j_resp = JSON.parse(resp);
        //         console.log(j_resp);
        //         appSend.switchActions(j_resp);
        //         appSet.post = {};//reset posted variables
        //     }catch(exc){
        //         console.log(exc);
        //     }
        // });
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