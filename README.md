# Repositorio de linkagem para modulo em NodeJS.

[![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397007170568313/paypal.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=fabinhoec2210@gmail.com&item_name=F%C3%A1bio&currency_code=BRL)  [![N|Solid](https://cdn.discordapp.com/attachments/631607183301148672/724397005543178270/picpay.png)](https://app.picpay.com/user/Snooh)


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
modulink('https://github.com/FabioSmuu/modulink/blob/master/exemplo/script.js')
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
	
