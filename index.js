class Empleado {
    nombre
    edad
    sueldo
    static id =0
    constructor(nombre,edad,sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        ++Empleado.id
    }
    get nombre (){
        return this.color;
    }
    get edad (){
        return this.area;
    }
    get sueldo (){
        return this.sueldo;
    }
    calcularSalarioAnual(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        return mensaje.textContent =`El salario anual es de ${this.sueldo * 12}$`;
    }
    static generarIdEmpleado (){
        return console.log(Empleado.id);
    }
};


class Gerente extends Empleado{
    departamento
    constructor(nombre,edad,sueldo,departamento){
        super(nombre,edad,sueldo)
        this.departamento = departamento;
    }
    get departamento (){
        return this.departamento;
    }
    calcularSalarioAnual(){
        document.querySelector("#messages").textContent = "";
        const mensaje = document.querySelector("#messages");
        return mensaje.textContent += `El sueldo del  Gerente del departamento ${this.departamento} es de ${((this.sueldo*0.1)+this.sueldo)*12}$ `
    }
}

document.querySelector("#tipo").addEventListener("change",(e)=>{
    if(e.target.value === "Gerente" ){
        document.querySelector("#gerenteArea").innerHTML = "";
        const gerArea = document.querySelector("#gerenteArea");
        gerArea.innerHTML = `
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="departamento" placeholder="departamento">
            <label for="floatingInput">Departamento</label>
        </div>
        `  
    }else{
        document.querySelector("#gerenteArea").innerHTML = "";
    }
});

document.querySelector(".btn-dark").addEventListener("click",()=>{
    const nombre = document.querySelector("#nombre").value;
    const edad = document.querySelector("#edad").value;
    const sueldo = Number(document.querySelector("#sueldo").value);
    const tipo = document.querySelector("#tipo").value;

    if(tipo === "Gerente"){
        const departamento= document.querySelector("#departamento").value;
        const gerente1 = new Gerente(nombre,edad,sueldo,departamento);
        gerente1.calcularSalarioAnual();
    }else{
        let empleado1 = new Empleado(nombre,edad,sueldo);
        empleado1.calcularSalarioAnual();
        Empleado.generarIdEmpleado();
    }
});