const Cliente = require("./Cliente");
const DBUsuario = require("./DBUsuarios");

const usuario = new Cliente("juna", "mail@got", "12356");
const DB = new DBUsuario()


console.log("este muestras metodo db \n",DB.agregarResgistroDe(usuario));
console.log(usuario.getIDCliente(),"\n");
console.log(usuario.getNombre()); //hastqa funciona que moficque el idcliente y  se lo agrege al obejto a guardar en la txt










