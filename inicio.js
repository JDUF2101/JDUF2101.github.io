function iniciar_sesion(){

    if (document.form.password.value=='190010' && document.form.user.value=='Urias'){ 
        window.location = "ExpresionRegular.html" 
        alert("Bienvenido "+document.form.password.value+" "+document.form.user.value);  
        //document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 