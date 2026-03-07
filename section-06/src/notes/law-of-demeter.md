#Principie of Least Knowledge

El código de un método solo puede acceder a las funciones internas directas (propiedades y métodos) de:

```TypeScript
❌ this.customer.lastPurchase.date
// NOTE: No haras referencias profundas. No tendrás objetos anidados a otros objetos haciendo referencias demasiadas largas.
```

- el objeto al que pertenece (`customer`)
- objetos que se almacenan en las propiedades de ese objeto (`lastPurchase`)
- objetos que se reciben como parámetros del método
- objetos que se crean en el método

Si podemos crear un objeto en el metodo, la idea es poder usar su api.
