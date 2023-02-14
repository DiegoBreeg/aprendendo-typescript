//Enums
//É um conjunto de constantes relacionadas entre si.
//Pode ser utilizado como tipo durante declaração de uma variável cujo valor atribuído deve ser um de seus membros.
//Quando o valor de cada membro não é declarado explicitamente passa a ser uma progrssão dos números naturais começando do 0

enum Size { Small, Medium, Large}

//Small, Medium e Large são atribuídas a Size e passam a ter seu valor apenas para leitura.
//Depois de declarado, o enum pode ser utilizado como o tipo de uma variável.

let mySize: Size = Size.Medium //=> 1

//O valor de cada constante pode ser definido manualmente simplesmente colocando o sinal de igualdade e em seguida passar o valor.

enum Color {Red = 'r', Green = 'g', Blue = 'b'}
let myColor: Color = Color.Blue //=> 'b'