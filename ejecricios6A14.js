let frase = "Es una cadena"
        console.log(frase);
        let number = 10;
        
        console.log(number);
        let boolean = true;
        console.log(boolean);
        let num3;
        console.log(num3);
        let nada = null;
        
        let num = 5+5;
        console.log(num);

        let textA = "hola, ";
        let textB = "que tal?"
        console.log(textA + textB);

        let num2 = 5;
        
      
       console.log(num2);
        let string = num2.toString();
        console.log(string);

        let decimal =0.333333;
        let decimal2 = String(decimal.toFixed(3));
        console.log(decimal2);
        // ejercio 11 suma de dos caracteres de las variables
        let suma = "Hoy es Jueves";
        let suma2 = "Casi hemos terminado";
        console.log(`${suma} ${suma2}` .length); // string interpolation

        let resultado = 34;
        console.log(`${suma} ${suma2}; la suma de los caracteres de este texto es ${resultado}`);

        let coerciona = 10 + "1";
        console.log(coerciona); //string, resultado 101

        let coercionb = 10 - "1";
        console.log(typeof(coercionb)); // resultado 9,  number

        let string14 = "Hey Tu, cómo te llamas? Hey, estoy hablando contigo!"
        console.log(string14.replace('contigo', 'yo'));
        