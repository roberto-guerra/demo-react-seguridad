This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demo en React del curso de código seguro

Componentes básicos para mostrar vulnerabilidades y formas de mitigación de XSS

### Ejemplo 1

Agregar texto postencialemnte peligroso:
<script>alert(0)</script>

React controla la salida

### Ejemplo 2
Permitir enriquecido nos genera vulnerabilidad.
<b>Hola!!!</b>

Si agregamos el siguiente texto debe mostrar el alert.
<img src=x onerror=alert(0) />

### Ejemplo 3
Al agregar urls a una lista no ordenada se genera una vulnerabilidad
Validar entradas siempre
http://google.com/

javascript:alert(0)

### Ejemplo 4
Validar entradas siempre
http://google.com/

Permitir solo urls y solo https
https://google.com/

