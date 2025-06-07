function FormatString(sentence) {
    const result = sentence.replace(/[^A-Za-z0-9 _-]/g, '');
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
    