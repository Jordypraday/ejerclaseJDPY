var array;

function arraymulti(){
    array    = [
    {user: "Daniel",cod: "192099", doc: "1091355246", tipouser: "Estudiante"},
    {user: "Jordy",cod: "192098", doc: "1091355245", tipouser: "profesor"},
    {user: "Prada",cod: "192097", doc: "1091355244", tipouser: "admin"}
]
console.log(array);
}

function compara(){
    console.log(array);

    var nombre = $("#nombre").val();

    for(let i=0;i<array.length;i++){
        if(nombre==array[i].username){
            console.log("El nombre si existe")
        }
        else{
            console.log("El nombre no existe")
        }
    }
}
//libreria "moment.js" get es para calcular
//swit alert