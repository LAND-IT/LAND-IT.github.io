---
id: discussions
sidebar_label: Discussões
slug: /discussions
sidebar_position: 5
---

# Discussões

As **Discussões** servem para deixar dúvidas, decisões e notas dentro do LAND IT. Cada discussão fica ligada ao cenário, à versão atual ou a polígonos no mapa.

Assim, a conversa não fica perdida fora da plataforma. Todos conseguem ver o que foi falado, onde foi falado e que decisão ficou registada.

Use as discussões quando quiser pedir opinião sobre uma alteração, explicar porque desenhou um polígono de certa forma, validar uma proposta, deixar uma nota para outro utilizador ou registar uma decisão da equipa. É uma forma simples de manter o trabalho e a conversa no mesmo sítio.

Também pode usar as discussões como um diário de trabalho. Por exemplo, pode deixar uma nota no fim do dia a dizer o que fez, o que ficou por rever e onde deve continuar no dia seguinte. Isto ajuda outra pessoa a pegar no trabalho mais tarde. Também ajuda o próprio utilizador a lembrar-se do ponto onde ficou.

Existem dois tipos de discussão:

- **Cenário/Versão**: para assuntos gerais da versão atual.
- **Polígonos**: para assuntos ligados a uma ou mais áreas do mapa.

## Tutorial em Vídeo

Veja este vídeo se quiser acompanhar o processo completo. O vídeo mostra como abrir a ferramenta, criar uma discussão, escolher o tipo de discussão e associar polígonos.

{<video style={{width:"100%"}} src={require('/videos/Discussions/Tutorial 1 - Discussions.mp4').default} controls/>}

## Abrir o Painel de Discussões

Para abrir as discussões, vá ao painel direito **Edição e Análise**.

Na zona **Discussões**, clique no botão **Discussões**. Na imagem, esse botão está assinalado a vermelho.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-tool-button.png').default}
  alt="Ferramenta Discussões disponível no painel direito Edição e Análise."
/>

*Ferramenta Discussões no painel Edição e Análise.*

Depois de clicar, aparece uma nova aba chamada **Discussões** ao lado do mapa.

Esta aba mostra as discussões do cenário e da versão que estão selecionados. Se não houver polígonos selecionados no mapa, vê as discussões gerais da versão. Se houver polígonos selecionados, a lista pode mostrar discussões ligadas a esses polígonos.

Quando ainda não há discussões, aparece a mensagem **Ainda não há discussões neste cenário**. Para criar a primeira discussão, clique em **Iniciar primeira discussão**.

Quando já existem discussões, use o botão **Nova Discussão**.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-empty-state.png').default}
  alt="Painel de discussões aberto junto ao mapa, sem discussões criadas no cenário."
/>

*Painel de discussões aberto junto ao mapa, ainda sem discussões criadas.*

## Tipos de Discussão

Ao criar uma discussão, tem de escolher o tipo. Esta escolha define se a discussão fica ligada à versão ou a polígonos no mapa.

### Cenário/Versão

A discussão do tipo **Cenário/Versão** é para falar da versão atual como um todo.

Use este tipo para decisões gerais, dúvidas sobre o cenário ou comentários que não estão ligados a uma área específica do mapa.

Este tipo **não permite adicionar polígonos**. A conversa fica ligada à versão, mas não a uma área concreta.

Exemplos de uso:

- discutir se a proposta geral da versão está pronta para revisão;
- pedir validação de uma alternativa de planeamento;
- registar uma decisão tomada sobre a versão atual;
- colocar uma dúvida geral sobre o cenário.

### Polígonos

A discussão do tipo **Polígonos** é para falar de uma ou mais áreas do mapa.

Use este tipo quando a conversa depende de uma zona concreta, por exemplo uma mancha de POSP, uma unidade de transformação ou outro polígono.

Neste tipo de discussão, pode adicionar polígonos à conversa.

Exemplos de uso:

- perguntar porque foi escolhida determinada proposta de uso para uma área;
- pedir revisão de um polígono desenhado;
- justificar uma alteração feita numa zona concreta;
- discutir alternativas para uma área específica do território.

### Camada Usada nas Discussões de Polígonos

Nas discussões do tipo **Polígonos**, a camada usada depende da camada que está selecionada no painel **Camadas**.

Antes de adicionar polígonos, confirme sempre se tem a camada certa selecionada. Se a camada errada estiver ativa, pode estar a procurar ou a adicionar polígonos no sítio errado.

Por exemplo, se quiser discutir um polígono da camada **POSA - Ortiga 4.0**, selecione essa camada antes de adicionar o polígono. Se a camada **POSP** estiver selecionada, a discussão fica no contexto de **POSP**.

Quando uma discussão de polígonos ainda não tem nenhum polígono associado, pode aparecer com a etiqueta **Sem camada definida**. Isto quer dizer que a discussão ainda não está ligada a uma camada. Depois de adicionar um polígono, aparece o nome da camada.

## Criar uma Nova Discussão

Para criar uma discussão:

1. Abra o painel **Discussões**.
2. Clique em **Nova Discussão**. Se ainda não existir nenhuma discussão, clique em **Iniciar primeira discussão**.
3. Escreva o **Título da discussão**.
4. Escolha o **Tipo de discussão**:
   - **Cenário/Versão**, se o assunto for geral;
   - **Polígonos**, se o assunto for sobre áreas do mapa.
5. Clique em **Criar** para guardar a discussão.

Se não quiser criar a discussão, clique em **Cancelar** ou feche a janela.

Escolha um título claro. Evite títulos como "Dúvida". Use nomes como "Confirmar alteração junto à estrada principal" ou "Rever proposta de uso na zona norte".

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-create-modal.png').default}
  alt="Janela para criar uma nova discussão, com campo de título e escolha entre Cenário/Versão e Polígonos."
/>

*Janela de criação de uma nova discussão.*

## Lista de Discussões

A lista mostra as discussões disponíveis no contexto atual.

Cada cartão ajuda a perceber rapidamente do que se trata a discussão.

Em cada discussão pode encontrar:

- o **título** da discussão;
- o estado, como **Aberta** ou **Fechada**;
- o tipo, como **Versão** ou **Polígonos**;
- a camada, quando a discussão é sobre polígonos;
- o número total de mensagens;
- o autor;
- a última atividade.

No topo existe uma barra de pesquisa. Pode procurar pelo nome da discussão.

Também existem filtros:

- **Todas**: mostra discussões abertas e fechadas.
- **Abertas**: mostra discussões ainda ativas.
- **Fechadas**: mostra discussões já encerradas.

Use a pesquisa e os filtros quando houver muitas discussões no cenário.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-list.png').default}
  alt="Lista de discussões com pesquisa, filtros e cartões de discussões de polígonos e de cenário."
/>

*Lista de discussões com pesquisa, filtros e cartões de discussão.*

## Entrar numa Discussão

Para abrir uma discussão, clique no cartão da discussão na lista.

Dentro da discussão, vê:

- o título da discussão;
- o autor;
- a data de criação;
- o estado da discussão;
- o tipo de discussão;
- as etiquetas associadas;
- as mensagens da conversa;
- as mensagens automáticas geradas pelo sistema.

As mensagens automáticas mostram o que aconteceu na discussão. Por exemplo, podem indicar que a discussão foi criada, que um polígono foi adicionado ou que a discussão foi fechada.

Na imagem, a discussão ainda tem a etiqueta **Sem camada definida**. Isto acontece porque ainda não foi associado nenhum polígono.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-detail-no-layer.png').default}
  alt="Discussão de polígonos aberta, ainda sem camada definida e sem polígonos associados."
/>

*Exemplo de uma discussão de polígonos aberta, ainda sem camada definida.*

## Adicionar Polígonos a uma Discussão

Só pode adicionar polígonos a discussões do tipo **Polígonos**. As discussões do tipo **Cenário/Versão** não têm esta opção.

Antes de começar, confirme a camada selecionada no painel **Camadas**. A discussão usa essa camada.

Na imagem, os passos estão assinalados a vermelho:

1. Selecione a camada correta no painel **Camadas**.
2. Escolha a ferramenta de seleção.
3. Clique no polígono no mapa.
4. Clique em **Adicionar (1)**.

O número dentro do botão mostra quantos polígonos estão selecionados. Por exemplo, **Adicionar (1)** quer dizer que há um polígono pronto a ser associado à discussão.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-add-polygon.png').default}
  alt="Discussão de polígonos com a camada POSA selecionada e um polígono destacado no mapa antes de ser associado."
/>

*Seleção de um polígono no mapa antes de o associar à discussão.*

Depois de clicar em **Adicionar**, o polígono fica ligado à discussão.

A discussão passa a mostrar:

- a camada usada, por exemplo **POSA - Ortiga 4.0**;
- a contagem, por exemplo **1 polígono**;
- o botão **No mapa**;
- uma mensagem automática a dizer que o polígono foi adicionado.

Se antes aparecia **Sem camada definida**, essa etiqueta é substituída pelo nome da camada.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-polygon-associated.png').default}
  alt="Discussão de polígonos depois de associar um polígono, com contagem, botão No mapa e mensagem automática."
/>

*Discussão depois de o polígono ser associado: aparece a camada, a contagem, o botão No mapa e a mensagem automática.*

## Ver Polígonos no Mapa

As discussões do tipo **Polígonos** têm ligação direta ao mapa.

Quando a discussão tem polígonos associados, use o botão **No mapa** para ir até eles. O LAND IT centra o mapa nessa zona e destaca o polígono.

Também pode abrir a lista de polígonos associados. Cada polígono aparece com uma referência, por exemplo `#113866`.

Essa referência identifica o polígono dentro da discussão. Ao clicar nela, pode voltar ao polígono no mapa.

Isto ajuda todos os utilizadores a perceberem que área está a ser discutida.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-associated-polygons.png').default}
  alt="Discussão de polígonos com a lista de polígonos associados aberta e a referência do polígono visível."
/>

*Lista de polígonos associados dentro da discussão, com a referência do polígono visível.*

## Etiquetas das Discussões

As etiquetas, ou tags, ajudam a organizar as discussões por tema.

Uma etiqueta pode ser usada em várias discussões. Se uma etiqueta estiver a ser usada em mais do que uma discussão, não é possível apagá-la logo. Primeiro, a etiqueta tem de ser removida de todas as discussões onde está a ser usada.

Se criar uma etiqueta por engano e ela ainda não estiver a ser usada em nenhuma discussão, pode apagá-la de imediato.

Se outra pessoa adicionar essa etiqueta por engano a uma discussão, use as próprias discussões para falar com essa pessoa. Assim, podem combinar quem remove a etiqueta e em que discussão.

## Gerir uma Discussão

Dentro de uma discussão existe um menu de três pontos.

Ao abrir esse menu, aparecem estas opções:

- **Mudar título**;
- **Fechar discussão**.

<img
  style={{width:"100%"}}
  src={require('/static/images/scenario_editing/discussions/discussions-menu.png').default}
  alt="Menu de opções de uma discussão, com as ações Mudar título e Fechar discussão."
/>

*Menu de gestão de uma discussão.*

Use **Mudar título** quando o nome da discussão não estiver claro ou quando o assunto mudar.

Use **Fechar discussão** quando o assunto já estiver resolvido.

A diferença é simples:

- uma discussão **Aberta** ainda está em análise;
- uma discussão **Fechada** já está resolvida e fica apenas para consulta.

Fechar discussões resolvidas ajuda a manter a lista organizada.

## Boas Práticas

Use **Cenário/Versão** para assuntos gerais da versão atual.

Use **Polígonos** quando o assunto estiver ligado a uma área concreta do mapa.

Antes de adicionar polígonos, confirme sempre a camada selecionada no painel **Camadas**.

Use discussões para deixar notas sobre o seu histórico de trabalho.

Dê títulos claros às discussões.

Use a pesquisa e os filtros para encontrar discussões mais depressa.

Quando o assunto estiver resolvido, feche a discussão.
