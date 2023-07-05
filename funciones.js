function operar()
{
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    operacion=document.getElementById("operaciones").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var resultado;

    if(isNaN(num1) || isNaN(num2))
    {
        alert("Debe colocar solo numeros");
    }
    if (operacion=="suma"){
        resultado= num1 + num2;
        
    } 
    if (operacion =="resta") {
        
        resultado= num1 - num2;
    }
   

    if (resultado < 0){
        document.getElementById("resultado").innerHTML = "Usted no tiene horas disponibles";
    }
    if (resultado >= 0){
        document.getElementById("resultado").innerHTML = "Usetd dispone de: "+resultado + " horas para su proyecto";
    }
}
function operar2()
{
    var num1 = document.getElementById("n1.1").value;
    if(isNaN(num1))
    {
        alert("Debe colocar solo numeros");
    }

    var num1 = document.getElementById("n1.1").value;
    operacion=document.getElementById("operaciones").value;
    num1 = parseInt(num1);
    var resultado;

        resultado= num1 * 5;
        
    
    
    document.getElementById("resultado2").innerHTML = "El costo es de : "+resultado+" dolares";
}
function borrar()
{
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("resultado").innerHTML = "";
}
function borrar3()
{
    document.getElementById("n1.1").value = "";
    document.getElementById("resultado2").innerHTML = "";
}
function elegirMayor(){
    var e1 = document.getElementById("e1.3").value;
    var e2 = document.getElementById("e2.3").value;
    var n1 = document.getElementById("n1.3").value;
    var n2 = document.getElementById("n2.3").value;

    e1 = parseInt(e1);
    e2 = parseInt(e2);
    
    e1 = e1 * 50;
    e2 = e2 * 100;
    mostrar = document.getElementById("mostrar").value;

    //n1 = toString(n1);
    //n2=  toString(n2);   

    if(!isNaN(n1) || !isNaN(n2) || isNaN(e1) || isNaN(e2))
    {
        alert("Faltan Datos - Datos mal ingresados");
    }
    if (e1 > e2){
        
    document.getElementById("mostrar").innerHTML = "Es mas caro el proyecto: " + n1 + " con " + e1 +"U$D de costo total.";
    }
    if (e1 < e2){
        
    document.getElementById("mostrar").innerHTML = "Es mas caro el proyecto: " + n2 + " con " + e2 +" U$D de costo total.";

    }
    if (e1 == e2){
        
    document.getElementById("mostrar").innerHTML = n1 + " tiene el mismo costo que  " + n2;
    }
}
function borrar2()
{
    document.getElementById("n1.3").value = "";
    document.getElementById("n2.3").value = "";
    document.getElementById("e1.3").value = "";
    document.getElementById("e2.3").value = "";
    document.getElementById("mostrar").innerHTML = "";
}

function enviar() {
    var nombre = document.getElementById("nombre").value;
    var contraseña = document.getElementById("contraseña").value;
    var email = document.getElementById("email").value;
  
    if (nombre.trim() === "" || contraseña.trim() === "" || email.trim() === "") {
      alert("Faltan campos por completar");
    } else {
      // All required fields are filled, you can proceed with the form submission or other actions.
      // For now, we'll display a success message as an example.
      alert("Formulario enviado con éxito!");
    }
  }
  
  
  
  
  