class Animal {
    nombre 
    edad
    constructor(nombre,edad){
        this.nombre =nombre;
        this.edad = edad;
    }
    hacerSonido(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.textContent =`El animal llamado ${this.nombre}, con edad ${this.edad} está haciendo un sonido`;
    }
};


class Perro extends Animal{
    raza
    constructor(nombre,edad,raza){
        super(nombre,edad)
        this.raza = raza;
    }
    moverCola(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.textContent += `El perro ${this.nombre}, con edad ${this.edad} de raza ${this.raza} está moviendo la cola`
    }
}

document.querySelector("#tipo").addEventListener("change",(e)=>{
    const razaArea = document.querySelector("#razaArea");
    if(e.target.value === "Perro" ){
        razaArea.innerHTML = `
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="raza" placeholder="raza">
            <label for="floatingInput">Raza</label>
        </div>
        `  
    }else razaArea.innerHTML ="";
});

document.querySelector(".btn-dark").addEventListener("click",()=>{
    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    const tipo = document.querySelector("#tipo").value;
    

    if(tipo === "Perro"){
        const raza = document.querySelector("#raza").value;
        let perro1 = new Perro (nombre,edad,raza);
        perro1.moverCola();
    }else{
        let animal1 = new Animal (nombre,edad);
        animal1.hacerSonido();
    }
});