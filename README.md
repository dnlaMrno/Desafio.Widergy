# Desafío Widergy - Detección de Errores


![Ejemplo ](EjercicioResuelto.gif)

Este desafío consiste en implementar una función JavaScript llamada `FormatString` que procesa cadenas de texto según reglas específicas.

### Objetivo
La función `FormatString` debe eliminar todos los caracteres especiales de una cadena de texto, permitiendo únicamente:
- Las 26 letras del alfabeto inglés (A-Z y a-z)
- Dígitos (0-9)
- Espacios ( )
- Guiones medios (-)
- Guiones bajos (_)

La función debe quitar los caracteres especiales y devolver la cadena resultante. Solo si no queda ningún carácter válido, debe retornar "ERROR".

### Ejemplos

```javascript
// Ejemplo 1
Entrada: "Lavese las manos, por favor!"
Salida: "Lavese las manos por favor"

// Ejemplo 2
Entrada: "Consultar al #0800-999-100."
Salida: "Consultar al 0800-999-100"
```

## 🔍 Función Original

```javascript
function FormatString(sentence) {
    let result = [];
    sentence = sentence.toUpperCase();
    let i = 0;
    let j = 0;
    while (i < sentence.length) {
        if (
            (sentence.charCodeAt(i) >= 65 && sentence.charCodeAt(i) <= 90) ||
            (sentence.charCodeAt(i) >= 48 && sentence.charCodeAt(j) <= 57) ||
            sentence.charCodeAt(i) == 32 ||
            sentence.charCodeAt(i) == 45
        ) {
            sentence[j] = result[i];
            j += 1;
        }
        i += 1;
    }
    return result.join('');
}
```

## 🎯 Desafío 

Encotrar los errores de la funcion dada y poder escribir un codigo completo sin errores que pueda realizar la tarea asignada.