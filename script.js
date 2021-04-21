    function finalAnswer() {
        const inputNumber = document.getElementById("binaryVal").value;
        const numberSelected = document.getElementById("switchConvert");
        const switchvalue =
          switchConvert.options[numberSelected.selectedIndex].value;
        let output = document.getElementById("finalResult");
        function binToDec(binNum) {
          if(binNum==''){
            alert("PLEASE ENTER THE VALID VALUE");
            output.style.display="none";
          }
          else{
          let binAnswer = parseInt(binNum, 2);
          return binAnswer;
        }
        }
        function DecToBin(decNum) {
          if(decNum==''){
            alert("PLEASE ENTER THE VALID VALUE");
              output.style.display="none";
          }
          else {
            let temp=parseInt(decNum);
            const decAnswer=temp.toString(2);
            return decAnswer;
          }
        }
        let Result;
        if (switchvalue == "bin") {
          Result = binToDec(inputNumber);
        output.innerHTML = `Binary : ${inputNumber} Decimal : ${Result}`;
        }
         else {
          Result = DecToBin(inputNumber);
        output.innerHTML = `Decimal : ${ inputNumber} Binary : ${Result}`;
        }
      }