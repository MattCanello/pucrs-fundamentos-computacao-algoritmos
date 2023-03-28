// TDD - Test Driven Development
var novoMapa = new Map();

class HistoryMap {

}

// 11/11/2011 as 11 da noite;
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título da página', url: 'URL' });
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Título da página', url: 'URL' });
novoMapa.set('11/11/2011 - 23:31 - URL', { title: 'Título da página', url: 'URL' });

var resultado = novoMapa.get('11/11/2011 - 23:31 - URL');
console.log(resultado);