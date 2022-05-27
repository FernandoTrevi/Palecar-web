// ARRAY DE OBJETOS PRODUCTOS
let listaProductos =[];
//CONTRUCTOR DE CLASE PRODUCTO
class Producto {
    constructor (nombre, tipo, precio){
        this.nombre= nombre
        this.tipo = tipo
        this.precio = precio
    }
    cargarLista(){
        listaProductos.push(this);
    }
}
//INSTANCIA LOS OBJETOS Y CARGA EL ARRAY
const cuadril = new Producto ('Cuadril', 'ternera', 1050);
cuadril.cargarLista();
const bola = new Producto ('Bola de lomo', 'ternera', 1050);
bola.cargarLista();
const peceto = new Producto ('Peceto', 'ternera', 1100);
peceto.cargarLista();
const cuadrada = new Producto ('Cuadrada', 'ternera', 1050);
cuadrada.cargarLista();
const nalga = new Producto ('Nalga', 'ternera', 1100);
nalga.cargarLista();
const tapaNalga = new Producto ('Tapa de nalga', 'ternera', 990);
tapaNalga.cargarLista();
const paleta = new Producto ('Paleta', 'ternera', 880);
paleta.cargarLista();
const lomo = new Producto ('Lomo', 'ternera', 1300);
lomo.cargarLista();
const puchero = new Producto ('Puchero', 'ternera', 500);
puchero.cargarLista();
const marucha = new Producto ('Marucha', 'ternera', 750);
marucha.cargarLista();
const bocado = new Producto ('Bocado', 'ternera', 750);
bocado.cargarLista();
const tortuguita = new Producto ('Tortuguita', 'ternera', 650);
tortuguita.cargarLista();
const falda = new Producto ('Falda', 'ternera', 750);
falda.cargarLista();
const costilla = new Producto ('Costilla', 'ternera', 950);
costilla.cargarLista();
const vacio = new Producto ('Vacío', 'ternera', 950);
vacio.cargarLista();
const matambre = new Producto ('Matambre', 'ternera', 1200);
matambre.cargarLista();
const colita = new Producto ('Colita de cuadril', 'ternera', 1050);
colita.cargarLista();

const costCerdo = new Producto ('Costeleta de cerdo', 'cerdo', 600);
costCerdo.cargarLista();
const costillaCerdo = new Producto ('Costilla de cerdo', 'cerdo', 660);
costillaCerdo.cargarLista();
const matCerdo = new Producto ('Matambre de cerdo', 'cerdo', 800);
matCerdo.cargarLista();
const vacioCerdo = new Producto ('Vacío de cerdo', 'cerdo', 650);
vacioCerdo.cargarLista();
const lomito = new Producto ('Lomito de cerdo', 'cerdo', 800);
lomito.cargarLista();
const churrasco = new Producto ('Churrasco', 'cerdo', 600);
churrasco.cargarLista();
const bondiola = new Producto ('bondiola', 'cerdo', 800);
bondiola.cargarLista();


const chorizo = new Producto ('Chorizo Parrillero', 'embutido', 650);
chorizo.cargarLista();
const criollo = new Producto ('Chorizo Criollo', 'embutido', 600);
criollo.cargarLista();
const morcilla = new Producto ('Morcilla', 'embutido', 600);
morcilla.cargarLista();
const queso = new Producto ('Queso de cerdo', 'embutido', 500);
queso.cargarLista();
const salchicha = new Producto ('Salchicha parrillera', 'embutido', 650);
salchicha.cargarLista();

const semanal = new Producto ('Bolson Semanal', 'bolson', 3150);
semanal.cargarLista();
const parrillero = new Producto ('Bolsón parrillero', 'bolson', 3450);
parrillero.cargarLista();

//GUARDA EN CONSTANTE EL ACCESO A ELEMENTOS POR ID
const ternera = document.getElementById('select-tern');
const cerdo = document.getElementById('select-cerd');
const embutido = document.getElementById('select-emb');
const bolsones = document.getElementById('select-bol');

const okTern = document.getElementById('ok-tern');
const okBol = document.getElementById('ok-bol');
const okCer = document.getElementById('ok-cer');
const okEmb = document.getElementById('ok-emb');

const cantidadcer = document.getElementById('cantidad-cer');
const cantidademb = document.getElementById('cantidad-emb');
const cantidadtern = document.getElementById('cantidad-tern');
const cantidadbol = document.getElementById('cantidad-bol');





//CARGA LOS COMBO BOS DE PRODUCTOS
const tipobolson = listaProductos.filter(x => x.tipo == 'bolson');
 for (const bol of tipobolson) {
     const item = document.createElement ('option');
     item.textContent = bol.nombre;
     bolsones.appendChild(item)

 }

 const tipotern = listaProductos.filter(x => x.tipo == 'ternera');
 for (const ter of tipotern) {
     const item = document.createElement ('option');
     item.textContent = ter.nombre;
     ternera.appendChild(item)

 }

 const tipocer = listaProductos.filter(x => x.tipo == 'cerdo');
 for (const cer of tipocer) {
     const item = document.createElement ('option');
     item.textContent = cer.nombre;
     cerdo.appendChild(item)

 }

 const tipoemb = listaProductos.filter(x => x.tipo == 'embutido');
 for (const em of tipoemb) {
     const item = document.createElement ('option');
     item.textContent = em.nombre;
     embutido.appendChild(item)

 }
 // PARA QUE NO SE RECARGUE LA PAGINA CUANDO SE DISPARA EL EVENTO SUBMIT
 document.addEventListener ('submit', (e)=>{
     e.preventDefault();    
 })
 //INSERTA FILA EN TABLA
const InsetarFila = (can,pro,pre)=>{
    let tbldetalle = document.getElementById('detalle').insertRow(-1);
    let col1 = tbldetalle.insertCell(0);
    let col2 = tbldetalle.insertCell(1);
    let col3 = tbldetalle.insertCell(2);
    let col4 = tbldetalle.insertCell(3);
    let col5 = tbldetalle.insertCell(4);
    col1.innerHTML = 'X';
    col2.innerHTML = can;
    col3.innerHTML = pro;
    col4.innerHTML = 'Precio';
    col5.innerHTML = pre;
    let total = parseInt(  document.getElementById('total').textContent);
    total = total + pre;
    const span = document.getElementById('total');
    span.textContent = total;


}
 //BOTON OK BOLSONES
 okBol.addEventListener('click', ()=>{
     let elementoSeleccionado = bolsones.value;
     let cantidad = cantidadbol.value;    
     let preciofinal;
     for (const bol of tipobolson) {
        let precioUnitario = bol.precio;
         if (bol.nombre == elementoSeleccionado){
             preciofinal = bol.precio * cantidad
        
         }
         //console.log(preciofinal)
     
     }
     
     InsetarFila(cantidad,elementoSeleccionado,preciofinal)

 })
 //BOTON OK BOLSONES
 okTern.addEventListener('click', ()=>{
    let elementoSeleccionadoT = ternera.value;
    let cantidadT = cantidadTern.value;    
    let preciofinalT;
    for (const te of tipotern) {
       let precioUnitario = te.precio;
        if (te.nombre == elementoSeleccionadoT){
            preciofinalT = te.precio * cantidadT
       
        }
        //console.log(preciofinal)
    
    }
    
    InsetarFila(cantidadT,elementoSeleccionadoT,preciofinalT)

})
//BOTON OK CERDO
okCer.addEventListener('click', ()=>{
    let elementoSeleccionadoC = cerdo.value;
    let cantidadC = cantidadcer.value;    
    let preciofinalC;
    for (const ce of tipocer) {
       let precioUnitario = ce.precio;
        if (ce.nombre == elementoSeleccionadoC){
            preciofinalC = ce.precio * cantidadC
       
        }
        //console.log(preciofinal)
    
    }
    
    InsetarFila(cantidadC,elementoSeleccionadoC,preciofinalC)

})
//BOTON OK BOLSONES
okEmb.addEventListener('click', ()=>{
    let elementoSeleccionadoE = embutido.value;
    let cantidadE = cantidademb.value;    
    let preciofinalE;
    for (const em of tipoemb) {
       let precioUnitario = em.precio;
        if (em.nombre == elementoSeleccionadoE){
            preciofinalE = em.precio * cantidadE
       
        }
        //console.log(preciofinal)
    
    }
    
    InsetarFila(cantidadE,elementoSeleccionadoE,preciofinalE)

})































