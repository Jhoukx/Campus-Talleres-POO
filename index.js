class Persona {
    nombre
    edad
    sexo
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    saludar(){
        let mensaje = document.querySelector("#messages");
        mensaje.textContent =`Hola mi nombre es ${this.nombre}, tengo ${this.edad} y mi sexo es ${this.sexo}`
    }
    static esMayorDeEdad(edad){
        if (edad >= 18){
            document.querySelector("#mayor").value = "Sí";
            return console.log(true); 
        }else{
            document.querySelector("#mayor").value = "No";
            return console.log(false);
        }

    }
}
// Cambiar formulario
document.querySelector("#tipo").addEventListener("change",(e)=>{
    const carrera = document.querySelector("#carreraArea")
    if(e.target.value === "Estudiante"){
        carrera.innerHTML =`
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="carrera" placeholder="carrera">
            <label for="floatingPassword">Carrera</label>
        </div>
        `
    }else{
        carrera.innerHTML ="";
    }
});


class Estudiante extends Persona{
    carrera
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo)
        this.carrera = carrera;
    }
    estudiar(){
        let mensaje = document.querySelector("#messages");
        mensaje.textContent += `Hola mi nombre es ${this.nombre}, tengo ${this.edad},mi sexo es ${this.sexo} y estoy estudiando ${this.carrera}`
    }
}

document.querySelector(".btn-dark").addEventListener("click",()=>{
    const nombre = document.querySelector("#nombre").value;
    const edad = Number(document.querySelector("#edad").value);
    const sexo = document.querySelector("#sexo").value;
    const tipo = document.querySelector("#tipo").value;
    

    if(tipo === "Estudiante"){
        const carrera = document.querySelector("#carrera").value;
        let estudiante1 = new Estudiante (nombre,edad,sexo,carrera);
        estudiante1.estudiar();
        Estudiante.esMayorDeEdad(edad);
    }else{
        let persona1 = new Persona (nombre,edad,sexo);
        persona1.saludar();
        Persona.esMayorDeEdad(edad);
    }
});