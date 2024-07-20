var multiplicar = require('../multiplicacao.js');


//criando o primeiro teste

test('multiplicar 4 * 4 para resultar em 16', function(){

    var resultado = multiplicar(4,4);

    expect(resultado).toBe(16)
}) 

test('multiplicar 5 * 5 para resultar em 25', function(){

    var resultado = multiplicar(5,5);

    expect(resultado).toBe(25)
})