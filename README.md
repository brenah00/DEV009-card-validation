# Tarjeta de crédito válida

## Índice

* [1. Contexto](#1-Contexto)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Hito: Criterios de aceptación mínimos del proyecto](#4-hito-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Hito Opcional: Mostrar la franquicia de tarjeta](#5-hito-opcional-mostrar-la-franquicia-de-tarjeta)
* [6. Consideraciones técnicas](#6-consideraciones-técnicas)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para considerar Project Feedback](#9-para-considerar-project-feedback)

***

## 1. Contexto de la página

En México, el aumento de perros callejeros es un gran poblema, tratándose de alrededor de 25 millones de perros solo en la Ciudad de México.
La página web se basa en un albergue de perros, dedicado a rescatarlos y brindarles calidad de vida mediante alimento, vivienda y salud. Se encargan de la búsqueda de hogar para los perros mediante la adopción en la que los adoptantes sean responsables. Para solventar los gastos del albergue, este recibe donaciones del público en general.


## 2. Prototipo

Se generó el prototipo con Figma.

![Prototipo - parte 1](prototipo.png)
![Prototipo - Validación de tarjeta](prototipo1.png)

Inicialmente no se consideraron varios campos para la parte de la validación. A comparación del resultado final hubo una gran cantidad de cambios, como ejemplo, la paleta de colores y algunos elementos, así como sus posiciones.

## 3. Resumen del proyecto

En este proyecto se construyó una aplicación web que permite: 

* Validar un número de una tarjeta de crédito para realizar una donación.
* Ocultar todos los dígitos de una tarjeta menos los últimos cuatro.
* Mostrar a qué franquicia pertenece el número de tarjeta ingresado.

## 4. Validaciones implementadas

* Para el número de tarjeta se deben ingresar solo números en el campo de texto.
* Todos los campos deben estar llenos.

En caso de que no se cumplan los puntos anteriores, la validación del número de tarjeta no será ejecutada.

## 5. Producto final
![Producto final - sección nosotros](about-us.png)
![Producto final - sección de adoción](adoption.png)
![Producto final - sección donde se valida la tarjeta](donation.png)

Los mensajes se muestran con alert de JS, los cuales le indican al usuario si hacen falta campos por llenar, si la tarjeta es válida o no. 