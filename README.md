# Repositorio de linkagem para modulo em NodeJS.


> Aviso: Este é um modulo não possui dependências para que funcione em seu projeto, caso seja feito com o foco em NojdeJS.

### Para que serve?
Este modulo tem o intuito de importar um código externo através de uma url para seu projeto em NodeJS, alem de ficar mais fácil a compilação através de pkg e até mesmo electron.

### Como usar?
- Primeiro, crie sua index.js com o código que deseja rodar através de uma url.
- Transforme seu código em base64.
- Insira a tag **[script]** no início do código e **[/script]** no final.
- Resultado: [exemplo.js](/exemplo/script.js).


### Uso do modulo:


Para rodar um script no console, basta usar:
```js
const modulink = require('./modulink.js')
modulink('https://raw.githubusercontent.com/FabioSmuu/modulink/master/exemplo/script.js')
```


Ou então manipule uma promise:
```js
const modulink = require('./modulink.js')
modulink('https://pastebin.com/raw/RGe3D7HW').then(ok => {
	console.log(ok)
}).catch(err => {
	console.log(err)
})
```


**Obrigado pela sua atenção!**
	
