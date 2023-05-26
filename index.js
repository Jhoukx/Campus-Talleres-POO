class Figura {
    color 
    area
    constructor({color= "blanco", area= 0}){
        this.color = color;
        this.area = area;
    }
    get color (){
        return this.color;
    }
    get area (){
        return this.area;
    }
    calcularArea(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.textContent =`La figura de color ${this.color}, tiene un area de ${this.area}`;
    }
};


class Circulo extends Figura{
    radio
    constructor({ color, area, radio }){
        super({ color, area })
        this.radio = radio;
    }
    get radio (){
        return this.radio;
    }
    calcularArea(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.textContent += `El circulo de color ${this.color}, tiene ${Math.floor(Math.PI * this.radio **2)}  de area`
    }
}

class Rectangulo extends Figura{
    largo
    ancho
    constructor({color,area,largo, ancho}){
        super({color,area})
        this.largo = largo;
        this.ancho = ancho;
    }
    get largo (){
        return this.largo;
    }
    get ancho (){
        return this.ancho;
    }
    calcularArea(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        mensaje.textContent += `El area del rectangulo es de ${this.largo * this.ancho}`
    }
}

document.querySelector("#tipo").addEventListener("change",(e)=>{
    if(e.target.value === "Circulo" ){
        document.querySelector("#rectanguloArea").innerHTML = "";
        const cirArea = document.querySelector("#circuloArea");
        cirArea.innerHTML = `
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="radio" placeholder="radio">
            <label for="floatingPassword">Radio</label>
        </div>
        `  
    }else if (e.target.value === "Rectangulo"){
        document.querySelector("#circuloArea").innerHTML="";
        const rectArea = document.querySelector("#rectanguloArea");
        rectArea.innerHTML = `
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="largo" placeholder="largo">
            <label for="floatingPassword">Largo</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="ancho" placeholder="ancho">
            <label for="floatingPassword">Ancho</label>
        </div>
        `
    }else{
        document.querySelector("#circuloArea").innerHTML = "";
        document.querySelector("#rectanguloArea").innerHTML = "";
    }
});

document.querySelector(".btn-dark").addEventListener("click",()=>{
    const color = document.querySelector("#color").value;
    const area = document.querySelector("#area").value;
    const tipo = document.querySelector("#tipo").value;
    

    if(tipo === "Circulo"){
        const radio = Number(document.querySelector("#radio").value);
        let circulo1 = new Circulo({ color, area, radio });
        circulo1.calcularArea();
    }else if(tipo === "Rectangulo"){
        const largo = document.querySelector("#largo").value;
        const ancho = document.querySelector("#ancho").value;
        let rectangulo1 = new Rectangulo({color,area,largo,ancho})
        rectangulo1.calcularArea();
    }
    else{
        let figura1 = new Figura({ color, area });
        figura1.calcularArea();
    }
});