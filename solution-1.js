function FormatString(sentence) {
  let result = '';

  for (let i = 0; i < sentence.length; i++) {
    const charCode = sentence.charCodeAt(i);

    if (
      (charCode >= 65 && charCode <= 90) || // A-Z
      (charCode >= 97 && charCode <= 122) || // a-z
      (charCode >= 48 && charCode <= 57) || // 0-9
      charCode === 32 ||  // espacio
      charCode === 45 ||  // guion medio
      charCode === 95     // guion bajo
    ) {
      result += sentence[i];
    }
  }

  return result.length > 0 ? result : "ERROR";
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
  