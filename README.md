Estudos sobre Typescript

- Características


Tipagem estática, completação de código, refatoração, notações shorthand.

Typescript é essencialmente javascript com checagem de tipos, um código feito em typescript é compilado para javascript, o nome desse processo é transpilação.

- Configurações de ambiente

Typescript é um superset de javascript, ele tem tudo que existe no javascript e um adicional de features. Qualquer código javascrip é um código typescrip válido.

É necessário ter o node instalado, e a partir do node podemos utilizar o npm para instalar o typescript de forma global no sistema:

```bash
$npm i -g typescrip
```

Para verificar se a instalação foi feita corretamente basta utilizar:

```bash
$tsc -v
```

Também é necessário ter um editor de código instalado, recomendo fortemente a utilização do vs code.

Por padrão typescript transpila para ES5, ou seja, ao declarar-mos uma let ela será transpirada para var, porém podemos configurar para que seja transpiloado para ES6.

Podemos criar um arquivo de configuração para o compilador typescript com o seguinte código

```bash
$tsc --init
```

O resultado deve ser um arquivo chamado tsconfig.json e o terminal exibirá mensaguem parecida com esta:

```console
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true
```

- "target" é o responsável por alterar a versão alvo em que javascript será transpilado. Apagando es2016 do value, segurando ctrl+spaço podemos verificar quais versões podem ser utilizadas.

- "module" assim como em package.json também é possível alterar a forma como será importada/exportada as bibliotecas.

- "rootDir" é a configuração que determinará a raíz do projeto. Por convensão utiliza-se o diretório ./src

- "outDir" é responsável por determinal em qual pasta o conteúdo javascript será gerado, Por convensão utiliza-se o diretório ./dist

- "removeComments" se ativado remove todos os comentários feitos no arquivo ts quando transpilado para js

- "noEmitOnError" é uma configuração interessante para ser utilizada, pois impede que o javascript seja gerado em caso de erros

Feita toda a configuração, basta digitar
```bash
$tsc
```

toda a transpilação deve ocorrer corretamente e no final um diretório ./dist deve aparecer com o arquivo javascript dentro dele.

- Fundamentos: any types, Arrays, Tuples, Enums, Functions e objects.

Javascript possui built-in types que são: number, string, boolean, null, undefined e object.
Typescript introduz novos tipos que são: any, unknown, never, enum e tuple

Podemos declarar explicitamente o tipo das variáveis:

```ts
let sales: number = 123_456_789 //=> number
let couse: string = "typeScript" //=> string
let is_published: boolean = true //=> boolean
```

Porém, o compilador typescript é capaz de inferir cada um desses tipos de forma automatica:

```ts
let sales = 123_456_789 //=> number
let couse = "typeScript" //=> string
let is_published = true //=> boolean
```

Quando uma variável é inicializada mas seu valor omitido, ela adquire o tipo any:

```ts
let level //=> any
```

Pelas boas práticas é desejável não utilizar o any type para evitar bugs. Também não faz sentido utilizar typescript para se beneficiar se sua tipagem forte ao mesmo tempo em que se utiliza de tipo any.

Ao declararmos uma função devemos nos certificar de atribuir um tipo para o parâmetro de forma explícita, pois o compilador automaticamente o define como any caso isso não seja feito.

- Arrays

Assim como em javascript, em typescript podemos declarar arrays com elementos de tipos diferentes:

```ts
let numbers = [1, 2, '3']
```

Se quisermos passar este array em uma função que aceite apenas array de numbers pode causar erro.
Ao declararmos um array podemos especificar o tipo de seus membros para evitar que isso ocorra e assim aparece o erro na própria declaração:

```ts
let numbers: number[] = [1, 2, '3']
```

Ao declararmos um array cujo tipo de todos os elementos é o mesmo, o tipo do array passa a ser esse e toda tentativa de adicionar um elemento de tipo diferente arremeça um erro.

```ts
let numbers = [1, 2, 3]
numbers.push('a')
```

Se o array for declarado vazio, seu tipo passa a ser any

```ts
let numbers = [] //=> let numbers: any[]
```

Então, se quisermos declarar um array vazio com um tipo específico precisamos especificar este tipo na declaração:

```ts
let numbers: number[]
```

- Tuples
  
  Tuple é um novo tipo introduzido pelo typescript, ele possui o tamanho de sua length fixa, no qual cada um de seus elementos tem um tipo particular

```ts
let user: [number, string] = [1, 'Diego']
```

- Enums

  É um conjunto de constantes relacionadas entre si. Pode ser utilizado como tipo durante declaração de uma variável cujo valor atribuído deve ser um de seus membros. Quando o valor de cada membro não é declarado explicitamente passa a ser uma progrssão dos números naturais começando do 0

```ts
enum Size { Small, Medium, Large}
```

  Small, Medium e Large são atribuídas a Size e passam a ter seu valor apenas para leitura. Depois de declarado, o enum pode ser utilizado como o tipo de uma variável.

```ts
let mySize: Size = Size.Medium //=> 1
```

O valor de cada constante pode ser definido manualmente simplesmente colocando o sinal de igualdade e em seguida passar o valor

```ts
enum Color {Red = 'r', Green = 'g', Blue = 'b'}
let myColor: Color = Color.Blue //=> 'b'
```

- Functions

Ao declarar uma função, é possível definir o tipo do argumento e do retorno. O compilador infere automaticamente o tipo do retorno, se não houver retorno o tipo será void. Porém, pelas boas práticas, é recomendável declararmos o tipo dos argumentos e em seguida do retorno, principalmente se estivermos construíndo uma API que outras pessoas usarão:

```ts
function calculateTax( income: number): number {
    return 0;
}
```

Existe uma configuração no tsconfig.json que se chama noUnusedParameters, ela define se o compilador permitirá parâmetros que não são utilizados nas funções.

Se definirmos um retorno, e em seguida colocarmos o retorno dentro de uma condição, o compilador arremeça um erro dizendo um dos caminhos do códio está retornando ```undefined```. Isso acontece porque por padrão uma função javascript sem retorno declarado retorna "undefined", e como o retorno foi especificado como ```number``` o erro acontece:

```ts
function calculateTax( income: number): number {
    if (income < 50_000)
        return income * 1.2
    //undefined
}
```

Se removermos a declaração do tipo do retorno o compilador não arremeçará mais o erro, porém nossa aplicação poderá gerar bugs, portanto, é altemente recomendável explicitar o tipo de retorno das funções.

```ts
function calculateTax( income: number) {
    if (income <50_000)
        return income * 1.2
    //undefined
}
```
Dica: para que um bug como este não passe despercebido existe uma configuração em tsconfig chamda "noImplicitReturns", quando ativada, esta configuração faz com que o compilador avise que há um caminho no código da função sem retorno.

Ao ativar a configuração, para fazer o código funcionar normalmente basta definir todos os retornos:

```ts
function calculateTax( income: number): number {
    if (income <50_000)
        return income * 1.2
    return income * 1.3
}
```

Ainda sobre funções, existe uma configuração no tsconfig.json chamada "noUnusedLocals", quando ativada gera erro ao declararmos variáveis que não são usadas no escopo da função.

Se declararmos uma função que recebe dois parâmetros, ao executá-la devemos fornecer exatamente 2 parâmetros. Se passarmos mais ou menos do que isso o compilador gera erro. Para podermos passar mais ou menos parâmetros podemos usar o tornar opicial colocando um sinal de interrocação (?) no nome do parâmetro:

```ts
function calculateTax( income: number, taxYear?: number):number  {
    if ( taxYear < 2022)
        return income * 1.2
    return income * 1.3
}

calculateTax(10_000)
```

Note que desta forma o compilador ainda acusará um erro, pois o valor de ```taxYear``` neste caso será ```undefined```. Javascript por padrão coloca o valor ```undefined``` nas variáveis que não são utilizadas. Para resolvermos este problema basta definir um valor padrão caso ```taxYear``` não seja infomado:

```ts
function calculateTax( income: number, taxYear?: number):number  {
    if ( (taxYear || 2022) < 2022)
        return income * 1.2
    return income * 1.3
}

calculateTax(10_000)
```

Outra forma de tornar um parâmetro opcional é definir um valor padrão para ele caso não seja informado e consequentemente impedir que seja undefined:

```ts
function calculateTax( income: number, taxYear = 2022):number  {
    if ( taxYear < 2022)
        return income * 1.2
    return income * 1.3
}
```
Desta forma o compilador entende que o segundo parâmetro é opicial e deve ser do tipo number, uma vez que o valor padrão é number, também, se o valor não for informado passa a ser o valor padrão.

- Objects

Em javascript objetos são dinâmicos, então sua forma pode mudar ao longo da vida de nosso programa. Em typescript isso não é válido:

```ts
let employee = { id: 1}
employee.name = 'Diego'
```
Para que seja possível adicionar um novo valor no objeto a propriedade já deve ter sido declarada:

```ts
let employee: {
    id: number,
    name: string
} = { id: 1, name: '' }
employee.name = 'Diego'
```

Também é possível tornar a propropriedade do objeto opicional:

```ts
let employee: {
    id: number,
    name?: string
} = { id: 1 }
employee.name = 'Diego'
```

Se quisermos determinar que uma das propriedades deste objeto seja apenas para leitura basta colocarmos o prefixo ```readonly``` no nome da propriedade:

```ts
let employee: {
    readonly id: number,
    name: string
} = { id: 1, name: 'Diego'}
employee.id = 0
```

Quanto aos métodos, podemos criar assinaturas para eles, que serão responsáveis por determinar o tipo dos parâmetros e do retorno do método.

```js
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Diego',
    retire: (date: Date) => {
        console.log(date)
    }
}
```

- Tipos Avançados: Type aliases, unions and intersections, type narrowing, nullable types, the never type.

- Type Aliases

O código que utilizamos anteriormente para explicar o funcionamento dos objetos possui três problemas.

O primeiro problema é que se quisermos criar outro objeto employee seguindo essa implementação teremos que repitir o código do shape portanto geraremos código duplicado. Isso viola o princípio dry: não se repita.

O segundo problema é que o outro objeto employee terá outras propriedades, então suas propriedads serão incosistentes. Isso ocorre porque não teremos um único local para definir o shape de ambos os objetos.

O terceiro problema é que essa estrutura torna o código um pouco difícil de se entender.

Para resolver estes problema podemos umsar o tipo alias. Usando o tipo alias podemos definir um tipo customizado

```ts
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void    
}

let employee: Employee = {
    id: 1,
    name: 'Diego',
    retire: (date: Date) => {
        console.log(date)
    }
}
```

Agora temos um único local utilizado para configurar o shape de todos os employees que criarmos.


