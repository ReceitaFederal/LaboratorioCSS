# CSS Transition

## transition-property 
* Especifica o nome ou nomes das propriedades CSS que as transições serão aplicadas. Somente as propriedades listadas aqui serão animadas durante a transição; alterações e todas outras propriedades ocorrem instantaneamente.

## transition-duration
* Especifica a duração em que as transições devem ocorrer. Você pode especificar uma única duração que se aplica a todas as propriedades durante a transição ou vários valores para permitir que cada propriedade faça a transição em um período de tempo diferente.

## transition-timing-function
* Especifica uma função para definir como os valores intermediários das propriedades são calculados. As timing functions determinam como os valores intermediários da transição são calculados. A maioria das funções de temporização pode ser especificada fornecendo o gráfico da função correspondente, conforme definido por quatro pontos definindo um bezier cúbico.
  - transition-timing-function: ease
  - transition-timing-function: linear
  - transition-timing-function: step-end
  - transition-timing-function: steps(4, end)
  
## transition-delay
* Define quanto tempo esperar entre o momento que uma propriedade é alterada e a transição começa.
---

# Pseudo-Elementos

## ":after" e ":before"
* Os pseuso-elementos ":after" e ":before", assim como o próprio nome indica, são utilizados para inserir um determinado conteúdo antes ou depois de um determinado elemento, independente do elemento selecionado.
* Eles são muito úteis para a inserção de conteúdos dinâmicos no site sem a necessidade de criar elementos extras (divs, span, strong, etc) no código HTML.

## :nth-child
* A pseudoclasse :nth-child casa com um ou mais elementos dependendo da ordem em eles aparecem na marcação HTML. Esta pseudoclasse é uma das mais versáteis e robustas das CSS.
* Exemplo:
* <ol>
    <li>Alpha</li>
    <li>Beta</li>
    <li>Gamma</li>
    <li>Delta</li>
    <li>Epsilon</li>
    <li>Zeta</li>
    <li>Eta</li>
    <li>Theta</li>
    <li>Iota</li>
    <li>Kappa</li>
</ol>
  - Vamos estilizar na cor laranja (orange) o segundo filho.
    - ol :nth-child(2) { color: orange; }
  - Vamos estilizar na cor laranja (orange) os elementos filhos, de dois em dois a partir do segundo, ou seja, as palavras "Beta", "Delta", "Zeta", "Theta" e "Kappa" serão estilizadas.
    - ol :nth-child(2n) { color: orange; }
  - Vamos estilizar na cor laranja (orange) todos os elementos filhos que ocupam a posição par na lista
    - ol :nth-child(even) { color: orange; } 
  - Vamos estilizar na cor laranja (orange) todos os elementos filhos a partir do sexto, ou seja, as palavras "Zeta", "Theta" e "Kappa" serão estilizadas.
    - ol :nth-child(2n+6) { color: orange; }
---

## :nth-last-child    
* A pseudoclasse :nth-last-child é idêntica à pseudoclasse :nth-child exceto que o casamento se dá contando-se os elementos filhos de trás para frente.
  - Vamos estilizar na cor laranja (orange) o segundo elemento filho contando-se de trás para frente, ou seja, a palavra " "Iota" será estilizada.
    - ol :nth-last-child(2) { color: orange; }
  - Vamos estilizar na cor laranja (orange) os elementos filhos, de dois em dois a partir do segundo contado de trás para frente, ou seja, as palavras "Iota," "Eta," "Epsilon," "Gamma" e "Alpha" serão estilizadas.
    - ol:nth-last-child(2n) { color: orange; }
  - Vamos estilizar na cor laranja (orange) todos os elementos filhos que ocupam a posição par na lista, contando-se de trás para frente:
    - ol:nth-last-child(even) { color: orange; }
  - Vamos estilizar na cor laranja (orange) todos os elementos filhos a partir do sexto contando-se de trás para frente, ou seja, as palavras "Epsilon", "Gamma" e "Alpha" serão estilizadas:
    - ol:nth-last-child(2n+6) { color: orange; }

  

