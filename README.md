Estudos sobre Typescript

- Características:
tipagem estática, completação de código, refatoração, notações shorthand.

Typescript é essencialmente javascript com checagem de tipos, um código feito em typescript é compilado para javascript, o nome desse processo é transpilação.

- Configurações de ambiente:
Typescript é um superset de javascript, ele tem tudo que existe no javascript e um adicional de features. Qualquer código javascrip é um código typescrip válido.

É necessário ter o node instalado, e a partir do node podemos utilizar o npm para instalar o typescript de forma global no sistema.
$npm i -g typescrip

Para verificar se a instalação foi feita corretamente basta utilizar
$tsc -v

Também é necessário ter um editor de código instalado, recomendo fortemente a utilização do vs code.

Por padrão typescript transpila para ES5, ou seja, ao declarar-mos uma let ela será transpirada para var, porém podemos configurar para que seja transpiloado para ES6.

Podemos criar um arquivo de configuração para o compilador typescript com o seguinte código:
$tsc --init

O resultado deve ser um arquivo chamado tsconfig.json e o terminal exibirá mensaguem parecida com esta:
"target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true"

"target" é o responsável por alterar a versão alvo em que javascript será transpilado. apagando es2016, segurando ctrl+spaço podemos verificar quais versões podem ser utilizadas.

"module" assim como em package.json também é possível alterar a forma como será importado/exportado as bibliotecas.

"rootDir" é a configuração que determinará a raíz do projeto. Por convensão utiliza-se o diretório ./src

"outDir" é responsável por determinal em qual pasta o conteúdo javascript será gerado, Por convensão utiliza-se o diretório ./dist

"removeComments" se ativado remove todos os comentários feitos no arquivo ts quando transpilado para js

"noEmitOnError" é uma configuração interessante para ser utilizada, pois impede que o javascript seja gerado em caso de erros

Feita toda a configuração, basta digitar
$tsc

toda a transpilação deve ocorrer corretamente e no final um diretório ./dist deve aparecer com o arquivo javascript dentro dele.

