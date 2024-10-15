const Cliente = require("./Cliente");
const DBUsuario = require("./DBUsuarios");
const GestorArchivoTexto = require("./GestorArchivoTexto");

const usuario = new Cliente("juan", "mail@got", "12356");
const DB = new DBUsuario()
const GESTION_ARCH = new GestorArchivoTexto();


console.log("este muestras metodo db \n", DB.completarInfoCliente(usuario));
console.log(usuario.getIDCliente(), "\n");
console.log("hasta era loq ue funciono peola ",usuario.getNombre()); //hastqa funciona que moficque el idcliente y  se lo agrege al obejto a guardar en la txt

console.log("esto se refiere a agregar el archivo y hacer el mostra el registro de get",DB.getNuevoRegistro());

console.log(DB.enviarDatosClienteA(GESTION_ARCH));












