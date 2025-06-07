function FormatString(sentence) {
    const allowed = /[A-Za-z0-9 _-]/;
  
    const result = sentence
      .split('')
      .filter(char => allowed.test(char))
      .join('');
  
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
    