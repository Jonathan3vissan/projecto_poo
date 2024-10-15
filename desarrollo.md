ideas de desarrollo


otra forma de manejar (distinta a la que implemnte ) en agenda podria ser cambiar el generar un id para cada reserva, sino en el guardado del usuraio ,agregar un id unico a cada usuario guardado en un txt creado cada vez que alguien nuevo quiera hacer una reserva , este id seriviria ara poder traer toda la informacion del cliente , ademas  tendria toda la historia de reservas echa y canceladas , como un archivo personal de cada cliente , y esto sacari el generador de id de agenda y solo se usaria una vez al crear un cliente nuevo , y este dato sera el guardado en la agenda y se podria acceder a toda la informacion del cleinte 
(lo veo como solucion a no tener una base de datos y sabiendo que no va haber un gran volumen de clientes )


reserva debe saber cuando ser cancelada y no agenda, reserva deberiar tenre un estado que diga cuando esta activa y no agenda, 
usuario no deber tener id reserva , podrias haber una clase cliente que tenga la info de idreserva y la info del persona(usuario),
resreva tiene que enviar estaoda ctivoa agenda y agenda ver is reserva esta activa o no , y determina si esta fue cancelada (no activa)  o esta activa
