function FormatString(sentence) {
    const result = sentence.replace(/[^A-Za-z0-9 _-]/g, '');
    return result.length > 0 ? result : "ERROR";
  }
  
  
  function validateText() {
    const input = document.getElementById('textInput');
    const resultSpan = document.getElementById('operation');
    const text = input.value;
    
    const result = FormatString(text);
    
    if (result === "ERROR") {
      resultSpan.textContent = "ERROR Caracteres no permitidos";
      resultSpan.className = "error";
    } else {
      resultSpan.textContent = result;
      resultSpan.className = "success";
    }
  }
    