creo clase cliente con nombre mail telefono.
esto se lo envio a DBCliente con ENVIARINFOCLIENTE().
----este lo recibe la informacion del cliente:
----solicita a generador de id un hash.
---generador ID crea un hash y lo envia a DB.
--- DB recibe hash lo agrega a info de cliente,
--- despues solicita a gestor de archivos que lo guarde con el IDcliente en registroCliente.txt

--------------- funicionamienteo ----------
s
--1 guarda cliente---
*Cliente solo toma datos y los envia DBCliente
*DBCliente toma los datos y le pide GeneradorID que ke de un hash y se lo asigna a cliente y se lo agrega a datos cliente
*luego DBClient le pide a GestorARchivoTXT que guarde los datos del cliente y este lo guarda en txt


--2 inicia la reserva---
*Reserva pide la informacion de DBCliente,este, la envia a Reserva para que pueda agregar fecha y hora de la reserva 
*Reserva recibe la imformacion y la guarda  y le agega la fecha y hora , y ahora le envia la info del client agenda


-agenda recibe la info de reserva y este lo agrega a su array llamado agendados
*ahora debe crear un txt con las reservas realizadas : y guardar ahi los datos del cliente 



