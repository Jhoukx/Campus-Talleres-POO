class Vehiculo {
    marca 
    modelo
    velocidad
    constructor(marca,modelo,velocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    get marca (){
        return this.marca
    }
    get modelo (){
        return this.modelo
    }
    get velocidad (){
        return this.velocidad
    }
    acelerar(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.innerHTML = `Ahora la velocidad del vehiculo es de ${this.velocidad + 10} Km `
    }
    static convertirKmHEnMph(){

    }
};


class Coche extends Vehiculo{
    combustible
    constructor(marca,modelo,velocidad,combustible){
        super(marca,modelo,velocidad)
        this.combustible = combustible;
    }
    acelerar(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.innerHTML = `Ahora la velocidad del vehiculo es de ${this.velocidad + 20} Km `
    }
}

document.querySelector("#tipo").addEventListener("change",(e)=>{
    if(e.target.value === "Coche" ){
        document.querySelector("#cocheArea").innerHTML = "";
        const coche = document.querySelector("#cocheArea");
        coche.innerHTML = `
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="combustible" placeholder="Combustible">
            <label for="floatingPassword">Combustible</label>
        </div>
        `  
    }else{
        document.querySelector("#cocheArea").innerHTML = "";
    }
});

document.querySelector(".btn-dark").addEventListener("click",()=>{
    const marca = document.querySelector("#marca").value;
    const modelo = document.querySelector("#modelo").value;
    const velocidad = Number(document.querySelector("#velocidad").value);
    const tipo = document.querySelector("#tipo").value;
    

    if(tipo === "Coche"){
        const combustible = Number(document.querySelector("#combustible").value);
        let Coche1 = new Coche(marca,modelo,velocidad,combustible);
        Coche1.acelerar();
    }else{
        let vehiculo1 = new Vehiculo(marca,modelo,velocidad);
        vehiculo1.acelerar();
    }
});