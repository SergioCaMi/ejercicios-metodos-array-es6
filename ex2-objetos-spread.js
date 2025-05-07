// https://www.w3schools.com/react/react_es6_spread.asp

const perro = {
    nombre: "Toby",
    edadCanina: 5
};



// Tu tarea:
// 1. Calcula la edad humana del perro (edadCanina * 7).
console.log("1. Calcula la edad humana del perro (edadCanina * 7).");
console.log({...perro, edadHumana: perro.edadCanina*7});

// 2. Usa el operador spread para copiar el objeto `perro`.
console.log("\n2. Usa el operador spread para copiar el objeto `perro`.");
perro2 = {...perro};
console.log(perro);
console.log(perro2);

// 3. Añade un nuevo campo `edadHumana` al nuevo objeto.
console.log("\n3. Añade un nuevo campo `edadHumana` al nuevo objeto.");
perro2 = {...perro, edadHumana: perro.edadCanina*7};
console.log(perro2);

// 4. Guarda el resultado en una constante llamada `perroConEdadHumana` y muéstralo por consola
console.log("\n4. Guarda el resultado en una constante llamada `perroConEdadHumana` y muéstralo por consola");
perroConEdadHumana = {...perro2}
console.log(perroConEdadHumana);

// Esperado:
// {
//   nombre: "Toby",
//   edadCanina: 5,
//   edadHumana: 35
// }


