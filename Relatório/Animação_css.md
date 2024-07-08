# Propriedades Principais de Animação em CSS
---

* As principais propriedades de animação em CSS são:
  - *animation-name*: Especifica o nome da regra @keyframes que define a animação. Cada @keyframes contém os estilos que devem ser aplicados em diferentes momentos da animação.
  - *animation-duration*: Define o tempo total que a animação deve levar para completar um ciclo.
  - *animation-timing-function*: Controla a velocidade da animação ao longo do tempo, permitindo aceleração, desaceleração ou variações na velocidade.
  - *animation-delay*: Especifica o atraso antes que a animação comece.
  - *animation-iteration-count*: Determina quantas vezes a animação deve repetir.
  - *animation-direction*: Define se a animação deve ser reproduzida na direção normal, inversa, alternativa ou alternativa inversa.
  - *animation-fill-mode*: Especifica os estilos que devem ser aplicados antes e depois da execução da animação.
  - *animation-play-state*: Permite pausar ou retomar a animação.
  - *animation-timeline*: Não está presente nas especificações padrão do CSS, mas é mencionada no contexto de discussões sobre animações avançadas. Essa propriedade permite associar uma animação a uma linha do tempo específica, como a progressão de rolagem de um elemento ou a visibilidade de um elemento dentro de um contêiner de rolagem.
---

## Uso da Propriedade animation
* A propriedade “animation” é uma propriedade abreviada que permite definir todas as propriedades de animação em uma única declaração.
* A ordem das propriedades é importante e deve seguir a ordem: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, e animation-play-state.
---

## Keyframes
* Os keyframes são uma regra CSS que permite definir animações. Eles são usados para criar sequências de estilos que são aplicados a um elemento ao longo do tempo, permitindo que o elemento se mova, mude de cor, altere tamanho, e assim por diante, de maneira controlada.

### Como Funcionam os keyframes
* Você cria um keyframe com um nome específico e, em seguida, usa essa regra para definir a sequência de estilos que a animação deve seguir.
* Por exemplo, “0%” representa o início da animação e “100%” representa o final. Esses seletores de keyframe podem ser listados em qualquer ordem, pois o navegador os ordenará corretamente com base na porcentagem especificada.
* Para aplicar uma animação definida com keyframes a um elemento, você usa a propriedade “animation-name” no CSS do elemento, referenciando o nome do keyframe definido. Isso associa a animação ao elemento, como é mostrado no exemplo abaixo.
---

## Transições CSS
* As transições CSS são uma maneira prática de adicionar efeitos de animação a elementos HTML sem a necessidade de JavaScript ou outra linguagem de programação.
* Elas permitem que você crie uma experiência de usuário mais suave e interativa, especialmente em resposta a interações da pessoa usuária, como passar o mouse sobre um elemento ou focar em um campo de entrada.

### Como Funcionam as Transições CSS
* As transições CSS são aplicadas a propriedades CSS que podem ter valores diferentes. Quando um valor de uma propriedade CSS muda, a transição suaviza a mudança, em vez de aplicá-la instantaneamente.
* Isso é especialmente útil para propriedades que podem ser animadas, como “opacity”, “background-color”, “width”, “height”, e “transform”.
* Para criar uma transição, você precisa especificar:
  - A propriedade CSS que deseja animar;
  - A duração da transição;
  - O timing-function (ou função de tempo), que controla a velocidade da transição.
* Exemplo: transition: background-color  0.5s ease;
---

## Transform CSS
* As animações de transformação em CSS são uma forma poderosa de adicionar movimento e interatividade aos elementos de uma página web.
* Utilizando a propriedade transform, os desenvolvedores podem aplicar transformações 2D ou 3D aos elementos, como rotação, escala, movimento (translate), inclinação (skew), e até mesmo transformações 3D como rotação em torno de um eixo.
* Essas transformações podem ser aplicadas de forma estática ou podem ser animadas para criar efeitos dinâmicos e atraentes.

### Como Funcionam as Transformações CSS
* A propriedade transform aceita uma ou mais funções de transformação que podem ser aplicadas ao elemento.
* As funções são aplicadas na ordem em que aparecem, o que significa que a ordem das transformações pode afetar o resultado final.
* Por exemplo, aplicar uma rotação seguida por uma escala resultará em um efeito diferente do que aplicar a escala primeiro e depois a rotação.
* Exemplo de uso: 
  - div {
    border: solid red;
    width:  200px;
    height:  24px;
    padding: 24px;
}

div:hover {
  transform: translate(30px,  20px) rotate(20deg);
  transition:  1s ease-in-out
}
  - Neste exemplo, o elemento <div> é movido 30 pixels para a direita e 20 pixels para baixo (translate(30px, 20px)) e então rotacionado 20 graus no sentido horário (rotate(20deg)). A ordem das transformações é crucial para o resultado final.
  
### Considerações de Acessibilidade
* Ao utilizar animações de transformação, é importante considerar a acessibilidade. Animações que envolvem escala ou rotação podem ser problemáticas para usuários com certos tipos de condições de saúde adversas como labirintite.
* É recomendável fornecer uma opção para desativar as animações ou usar a media feature “prefers-reduced-motion” para detectar a preferência do usuário por animações reduzidas.
