function FormatString(sentence) {
    let result = [];
    for (let i = 0; i < sentence.length; i++) {
        const code = sentence.charCodeAt(i);
        if (
            (code >= 65 && code <= 90) ||  // A-Z
            (code >= 97 && code <= 122) || // a-z
            (code >= 48 && code <= 57) ||  // 0-9
            code === 32 ||  // espacio
            code === 45 || // guion
            code === 95   // guion bajo
        ) {
            result.push(sentence[i]);
        }
    }
    return result.length ? result.join('') : "ERROR";
}


function validateText() {
  const inputText = document.getElementById('textInput');
  const outputText = document.getElementById('operation');
  const text = inputText.value;
  
  const result = FormatString(text);
  
  if (result === "ERROR") {
    outputText.textContent = "ERROR Caracteres no permitidos";
    outputText.className = "error";
  } else {
    outputText.textContent = result;
    outputText.className = "success";
  }
}
  