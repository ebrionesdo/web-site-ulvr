document.getElementById('btn-sig').addEventListener('click', function (evento){
    evento.preventDefault();
    const stepbuttom = document.getElementById('btn-sig');
    const nombreRegex = /^[A-Z][a-z\s]{1,20}/;
    const celularRegex = /^[0-9]{10}$/;
    const correoRegex = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
  

    var cedula = document.getElementById('cedula').value;
    if(!validarDocumento(cedula)) {
        return;
    }
    
    var nombres = document.getElementById('nombres').value;
    if(!nombres.match(nombreRegex)) {
        swal({
            title: "Mensaje de error",
            text: "Ingresa tus nombres. Ej: Francisco Andres",
            icon: "error",
            button: "Aceptar",
        });
        return;
    }
    var apellidos = document.getElementById('apellidos').value;
    if (!apellidos.match(nombreRegex)) {
        swal({
            title: "Mensaje de error",
            text: "Ingresa tus apellidos. Ej: Asencio Velez",
            icon: "error",
            button: "Aceptar",
        });
        return;
    }
    var correo = document.getElementById('correo').value;
    if(!correo.match(correoRegex)) {
        swal({
            title: "Mensaje de error",
            text: "Ingresa un correo válido. Ej: e@gmail.com",
            icon: "error",
            button: "Aceptar",
        });
        return;
    }
    var telefono = document.getElementById('telefono').value;
    if (!telefono.match(celularRegex) ) {
        swal({
            title: "Mensaje de error",
            text: "El numero celular solo debe tener 10 digitos. Ej: 0999999999",
            icon: "error",
            button: "Aceptar",
        });
        return;
    }
    stepbuttom.dataset.bsTarget = "#collapseTwo";

    stepbuttom.click();
    stepbuttom.dataset.bsTarget = "";
});

validarDocumento  = function(cedula) {          

    numero = cedula;

    var suma = 0;      
    var residuo = 0;      
    var pri = false;      
    var pub = false;            
    var nat = false;      
    var numeroProvincias = 22;                  
    var modulo = 11;
                               
    var ok=1;
    for (i=0; i<numero.length && ok==1 ; i++){
        var n = parseInt(numero.charAt(i));
        if (isNaN(n)) ok=0;
    }
    if (ok==0){
        swal({
            title: "Mensaje de error",
            text: "No puede ingresar caracteres en el campo cédula. Ej: 0999999999",
            icon: "error",
            button: "Aceptar",
        });

        return false;
    }
                
    if (numero.length < 10 ){
        swal({
            title: "Mensaje de error",
            text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
            icon: "error",
            button: "Aceptar",
        });              
        
        return false;
    }

    provincia = numero.substr(0,2);      
    if (provincia < 1 || provincia > numeroProvincias){ 
        swal({
            title: "Mensaje de error",
            text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
            icon: "error",
            button: "Aceptar",
        });          

    return false;       
    }


    d1  = numero.substr(0,1);         
    d2  = numero.substr(1,1);         
    d3  = numero.substr(2,1);         
    d4  = numero.substr(3,1);         
    d5  = numero.substr(4,1);         
    d6  = numero.substr(5,1);         
    d7  = numero.substr(6,1);         
    d8  = numero.substr(7,1);         
    d9  = numero.substr(8,1);         
    d10 = numero.substr(9,1);                

    if (d3==7 || d3==8){  
        swal({
            title: "Mensaje de error",
            text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
            icon: "error",
            button: "Aceptar",
        });          
           
        return false;
    }         

    if (d3 < 6){           
        nat = true;            
        p1 = d1 * 2;  if (p1 >= 10) p1 -= 9;
        p2 = d2 * 1;  if (p2 >= 10) p2 -= 9;
        p3 = d3 * 2;  if (p3 >= 10) p3 -= 9;
        p4 = d4 * 1;  if (p4 >= 10) p4 -= 9;
        p5 = d5 * 2;  if (p5 >= 10) p5 -= 9;
        p6 = d6 * 1;  if (p6 >= 10) p6 -= 9; 
        p7 = d7 * 2;  if (p7 >= 10) p7 -= 9;
        p8 = d8 * 1;  if (p8 >= 10) p8 -= 9;
        p9 = d9 * 2;  if (p9 >= 10) p9 -= 9;             
        modulo = 10;
    }         

    else if(d3 == 6){           
        pub = true;             
        p1 = d1 * 3;
        p2 = d2 * 2;
        p3 = d3 * 7;
        p4 = d4 * 6;
        p5 = d5 * 5;
        p6 = d6 * 4;
        p7 = d7 * 3;
        p8 = d8 * 2;            
        p9 = 0;            
    }         
               
    else if(d3 == 9) {           
        pri = true;                                   
        p1 = d1 * 4;
        p2 = d2 * 3;
        p3 = d3 * 2;
        p4 = d4 * 7;
        p5 = d5 * 6;
        p6 = d6 * 5;
        p7 = d7 * 4;
        p8 = d8 * 3;
        p9 = d9 * 2;            
    }
                
    suma = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9;                
    residuo = suma % modulo;                                         

    digitoVerificador = residuo==0 ? 0: modulo - residuo;                
               
    if (pub==true){           
        if (digitoVerificador != d9){
            swal({
                title: "Mensaje de error",
                text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
                icon: "error",
                button: "Aceptar",
            });          
            return false;
        }                          
        if ( numero.substr(9,4) != '0001' ){ 
            swal({
                title: "Mensaje de error",
                text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
                icon: "error",
                button: "Aceptar",
            });
            return false;
        }
    }         
    else if(pri == true){         
        if (digitoVerificador != d10){
            swal({
                title: "Mensaje de error",
                text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
                icon: "error",
                button: "Aceptar",
            });
            return false;
        }         
        if ( numero.substr(10,3) != '001' ){ 
        
            swal({
                title: "Mensaje de error",
                text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
                icon: "error",
                button: "Aceptar",
            });
            return false;
        }
    }      

    else if(nat == true){         
        if (digitoVerificador != d10){ 
            swal({
                title: "Mensaje de error",
                text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
                icon: "error",
                button: "Aceptar",
            });
            return false;
        }         
        if (numero.length >10 && numero.substr(10,3) != '001' ){
            swal({
                title: "Mensaje de error",
                text: "El número de identificaciòn ingresado no es válido. Ej: 0999999999",
                icon: "error",
                button: "Aceptar",
            });                            
            return false;
        }
    }      
    return true;   
}