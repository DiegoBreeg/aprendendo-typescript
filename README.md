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

- "target" é o responsável por alterar a versão alvo em que javascript será transpilado. Apagando es2016 do value, segurando ctrl+spaço podemos verificar quais versões podem ser utilizadas.

- "module" assim como em package.json também é possível alterar a forma como será importada/exportada as bibliotecas.

- "rootDir" é a configuração que determinará a raíz do projeto. Por convensão utiliza-se o diretório ./src

- "outDir" é responsável por determinal em qual pasta o conteúdo javascript será gerado, Por convensão utiliza-se o diretório ./dist

- "removeComments" se ativado remove todos os comentários feitos no arquivo ts quando transpilado para js

- "noEmitOnError" é uma configuração interessante para ser utilizada, pois impede que o javascript seja gerado em caso de erros

Feita toda a configuração, basta digitar
$tsc

toda a transpilação deve ocorrer corretamente e no final um diretório ./dist deve aparecer com o arquivo javascript dentro dele.

- Fundamentos: any types, Arrays, Tuples, Enums, Functions e objects.

Javascript possui built-in types que são: number, string, boolean, null, undefined e object.
Typescript introduz novos tipos que são: any, unknown, never, enum e tuple

Podemos declarar explicitamente o tipo das variáveis:

let sales: number = 123_456_789 => number
let couse: string = "typeScript" => string
let is_published: boolean = true => boolean

Porém, o compilador typescript é capaz de inferir cada um desses tipos de forma automatica:

let sales = 123_456_789 => number
let couse = "typeScript" => string
let is_published = true => boolean

Quando uma variável é inicializada mas seu valor omitido, ela adquire o tipo any:
let level => any

Pelas boas práticas é desejável não utilizar o any type para evitar bugs. Também não faz sentido utilizar typescript para se beneficiar se sua tipagem forte ao mesmo tempo em que se utiliza de tipo any.

Ao declararmos uma função devemos nos certificar de atribuir um tipo para o parâmetro de forma explícita, pois o compilador automaticamente o define como any caso isso não seja feito.

- Arrays
Assim como em javascript, em typescript podemos declarar arrays com elementos de tipos diferentes:

let numbers = [1, 2, '3']

Se quisermos passar este array em uma função que aceite apenas array de numbers pode causar erro.
Ao declararmos um array podemos especificar o tipo de seus membros para evitar que isso ocorra e assim aparece o erro na própria declaração:

let numbers: number[] = [1, 2, '3']

Ao declararmos um array cujo tipo de todos os elementos é o mesmo, o tipo do array passa a ser esse e toda tentativa de adicionar um elemento de tipo diferente arremeça um erro.

let numbers = [1, 2, 3]
numbers.push('a')

Se o array for declarado vazio, seu tipo passa a ser any

let numbers = [] => let numbers: any[]

Então, se quisermos declarar um array vazio com um tipo específico precisamos especificar este tipo na declaração:

let numbers: number[]

- Tuples
Tuple é um novo tipo introduzido pelo typescript, ele possui o tamanho de sua length fixa, no qual cada um de seus elementos tem um tipo particular

let user: [number, string] = [1, 'Diego']

- Enums: É um conjunto de constantes relacionadas entre si. Pode ser utilizado como tipo durante declaração de uma variável cujo valor atribuído deve ser um de seus membros. Quando o valor de cada membro não é declarado explicitamente passa a ser uma progrssão dos números naturais começando do 0

enum Size { Small, Medium, Large}

Small, Medium e Large são atribuídas a Size e passam a ter seu valor apenas para leitura. Depois de declarado, o enum pode ser utilizado como o tipo de uma variável.

let mySize: Size = Size.Medium => 1

O valor de cada constante pode ser definido manualmente simplesmente colocando o sinal de igualdade e em seguida passar o valor

enum Color {Red = 'r', Green = 'g', Blue = 'b'}
let myColor: Color = Color.Blue => 'b'

