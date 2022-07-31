function verificarPalindromo(numero) {

    for (let i = 0; i < numero.length / 2; i++) {

        if (numero[i] !== numero[numero.length - 1 - i]) {
            return alert('El número ' + numero + ' no es un palíndromo.');
        }
    }
    return alert('El número ' + numero + ' es un palíndromo.');
}

const number = prompt('Coloca tu número: ');
const value = verificarPalindromo(number);
console.log(value);

function verificarString(string){

var cantidad = {};

var ch, i, len, cantidad;

for (i = 0, len = string.length; i < len; ++i) {
    ch = strin.charAt(i); 
    cantidad = cantidad[ch];
    cantidad[ch] = cantidad ? cantidad + 1 : 1;       
}
    for (ch in cantidad) {
        alert(ch + ": " + cantidad[ch]);
    }
}

const cadena = prompt('Coloque su cadena: ');
const ValorCadena = verificarString(cadena);
console.log(ValorCadena);

function yearIsBisiesto() {
    var year= document.getElementById("year").value;
      
    document.getElementById("verify").innerHTML 
        = (year % 100 === 0) ? (year % 400 === 0)
                             : (year % 4 === 0);
}


function numeroPrimo(value){

    for(var i=2; i < value; i++){
      if(value % i === 0){
        return false;
      }
    }
    return true;
  }

  function SumatoriaPrimos(numero) {
    var ans = 0;

    for(var i=2; i <= numero; i++){   
  
      if(numeroPrimo(i)){
        ans += i;
      }
      var anst = ans + 1;
    }
    return alert('Dado el número ' + numero + ', el total es: ' + anst);
  }

const nump = prompt('Coloque su número a verificar: ');
const valXY = SumatoriaPrimos(nump);
console.log(valXY);