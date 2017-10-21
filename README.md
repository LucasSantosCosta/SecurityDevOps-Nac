# SecurityDevOps-Nac

O primeiro passo é realizar o download/git clone do projeto.

Logo em seguida acessar a pasta SecurityDevOps-Nac e usar o arquivo Dockerfile para criar a imagem.

$ docker build -t <minha-imagem> .

Para concluir a criação, deve-se rodar a imagem mapeando a porta 3000 do container para uma porta específica do host:

$ docker run --rm --name <meu-container> -p <porta_do_host>:3000 <minha-imagem>

Por fim, acessar a aplicação no host a partir do endereço http://localhost:<porta_do_host>
