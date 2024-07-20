var nome = require('./mostrarNome.js');

//criando o primeiro teste

test('mostrar o nome', function(){

    var resultado = nome('Douglas');

    expect(resultado).toBe('Douglas')
})

test('mostrar o nome', function(){
    var resultado = nome ();
    expect(resultado).toBe('sem nome')

})

