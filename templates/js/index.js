

function prueba (numero){
    let sum = 0;
    for (let index = 0; index <= 10; index++) {
        const element = index * index;
        sum = sum = element;
     
    if ([].length==0) {
        console.log( 'Es un arreglo vacio' );
    }}
    
    let count = 0;{
        while (count < 100) {
            console.log( 'count' );
            count++;
            
        }
    }
    switch (numero) {
        case 1:
            console.log( 'soy otro caso1' );
            
            break;
        case 2:
            console.log( 'soy otro caso2' );
            
            break;
        default:
        console.log( 'soy otro caso3' );
            
            break;
    }
    
    return sum;
}
prueba(1);

/*Inisializar un objeto, pueden haber objetos con varios atributos*/
let objeto = {
    nombre: 'objeto1', 
    calzado: 9,
    datos:{
        perro:'Firulais',
        edad:8
    },
    metodo: function (params){
        return params;
    },

    mascotas: [{
        nombre: 'Firulais',
        edad: 8,       
    },
    {
        nombre: 'Alex',
        edad: 21,
   }
]   
}
let funcion = function(params){
    return  params * 2;
}
console.log( '[Object]:',objeto.nombre);
console.log( objeto.datos.perro );
console.log( objeto.metodo('Hola ese objeto.metodo'));
console.log(funcion(6));

(function() {
    console.log('Que pex')
})
console.log(
    (function(){
        return 'Que onda que pex';
    })
);
console.log(objeto.mascotas[0].nombre);

(function(obj){
    for (let mascota of obj ) {
        console.log(mascota);
    }
})(Objeto.mascota);

for(let key in objeto){
    console.log(key);
    console.log(Objeto[Key]);
}
www.3school;
Node.express.
Fernando Gaitan desarrollador webki Node.js
tutorialspoint 

array de objetos personas y persona deve de tener nombre edad direcciones (varios) y ya cons eso

(fº)

let objeto2 = {

    persona 

}




let objeto = {
    nombre: 'objeto1', 
    calzado: 9,
    datos:{
        perro:'Firulais',
        edad:8
    },
    metodo: function (params){
        return params;
    },

    mascotas: [{
        nombre: 'Firulais',
        edad: 8,       
    },
    {
        nombre: 'Alex',
        edad: 21,
   }
]