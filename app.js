var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("<html><body>NAC SecDevOps RM78785</body></html>");
});

app.get('/tec', function(req, res){
  res.send("<html><body>Pagina Tecnologia</body></html>");
});

app.get('/musica', function(req, res){
  res.send("<html><body>Pagina Musica</body></html>");
});

app.listen(3000, function(){
  console.log('Servidor ativo e rodando com Express!');
});
