La cohesion es la medida en cuantas referencias a variables tiene cada metodo de tu clase.  
si una clase tiene demasiada cohesion supone que todos los metodos de una clase hace referencia a todos las variables de una clase  
si un clase tiene muy poca cohesion supone que todos los metodos de una clase hace pocas referencias a las variables de una clase  
En clean code no hay que hacer ni una ni la otra, si no más bien, tener un equilibrio entre estas siempre y cuando tengamos las clases separadas por responsabilidad y sean lo suficientemente medianas de tamaño, ni muy grandes, ni muy pequeñas haciendo un metodo por clase

No existe una regla general para determinar si una clase tiene una buena o mala cohesion es segun el caso

Por ejemplo:

Podemos tener una clase con variables publicas y metodos que acceden a todas las variables publicas, en este caso la cohesion es alta.

Como las variables ya son publicas ya se pueden tener referencias a ellas desde afuera de la clase ya no hace falta tener la necesidad de referenciar a los metodos para que accedan a las variables porque podemos hacerlo directamente

En este escenario una posibilidad de mejora puede ser crear una estructura de dato de esas variables y tener una clase para acceder a esas variables a traves de un tipo

Tambien puede ser por herencia con un encapsulamiento protegido y de esa forma hacer que solo las referencias a las variables sean por los metodos de la clase heredera

Y demas formas...

 