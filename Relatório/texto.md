# Laboratório CSS
## Resumo, Rascunho, Dúvidas...
---
# Propriedade "PERSPECTIVE"
* É usada para aplicar uma perspectiva 3D a um elemento filho, criando uma sensação de profundidade em elementos 2D.
* Quando você aplica perspective a um contêiner, ele afeta como seus elementos filhos são renderizados em 3D, fazendo com que pareçam mais próximos ou mais distantes com base na posição de seus planos.
  - Como Funciona? 
    - *Valor*: A propriedade perspective aceita um valor de distância (em pixels, em, rem, etc.), que define a distância entre o plano de visualização e o elemento. Valores menores criam uma perspectiva mais dramática, enquanto valores maiores resultam em uma perspectiva mais sutil.
    - *Aplicação*: perspective é aplicada ao elemento pai, e seus efeitos são visíveis nos elementos filhos.
  - Considerações
    - A propriedade perspective só tem efeito se houver transformações 3D (transform: rotateY, rotateX, etc.) aplicadas nos elementos filhos.
    - O valor de perspective deve ser positivo e representa a distância do ponto de vista (observador) ao plano Z=0. 
---
# Propriedade "TRANSFORM-STYLE: PRESERVE-3D"
* Quando você usa o valor preserve-3d, os filhos do elemento permanecem em seu contexto 3D, permitindo que transformações tridimensionais sejam aplicadas e mantidas de maneira mais realista.
  - Como Funciona?
    - *Valor preserve-3d*: Mantém o contexto 3D dos elementos filhos, fazendo com que transformações 3D aplicadas aos filhos sejam renderizadas no espaço 3D em relação ao elemento pai.
* Ao utilizar transform-style: preserve-3d, você pode criar cenas 3D mais complexas e realistas em suas páginas web, aproveitando ao máximo as capacidades de transformação tridimensional do CSS.
---
# Prefixo "-WEBKIT"
* Utilizados nas propriedades de scrollbar são específicos para navegadores que usam o motor de renderização WebKit, como o Chrome, Safari e alguns outros navegadores baseados no WebKit.
* Eles são usados para estilizar a barra de rolagem.
  - Scrollbars com Prefixos:
    - ::-webkit-scrollbar: Estiliza a barra de rolagem em navegadores WebKit.
    - ::-webkit-scrollbar-track: Estiliza o trilho da barra de rolagem.
    - ::-webkit-scrollbar-thumb: Estiliza o "polegar" da barra de rolagem, a parte que se move.
---
# Propriedade "BACKFACE-VISIBILITY"
* Controla a visibilidade da face posterior de um elemento 3D.
* Quando um elemento é girado no espaço 3D (como uma carta que gira), ele tem duas faces: a frente e as costas.
* Determina se a face posterior do elemento é visível quando está virada para o usuário.
  - Conclusão:
    - A propriedade backface-visibility: hidden é essencial para animações 3D suaves e limpas, especialmente em elementos que giram no espaço 3D, como cartões giratórios, pois evita que o conteúdo indesejado apareça durante a rotação.
