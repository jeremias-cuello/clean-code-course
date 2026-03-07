# The Listkov Subtitution Principle

Las instancias padres de una herencia deberian ser intercambiables por instacias de sus clases hijas.
Ayuda a evitar que un pingüino sea un pajaro pero un pajaro que no puede volar (debe implementar método `fly`) entonces deberia heredar de otro tipo de pajaro, tal vez en un pajaro normal mientras que un aguila puede heredar de un pajaro volador (`FlyingBird` que si tiene un metodo `fly`).
