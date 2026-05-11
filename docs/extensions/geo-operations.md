---
id: geo-operations
sidebar_label: GeoOperations
---

# GeoOperations

- **ID**: geo-operations
- **Autor**: Francisco de Abreu Freire
- **Versão Atual**: 1.2.0
- **Sumário**: Esta extensão permite realizar operações geométricas (interseção, união, diferença, "dissolve") nas camadas de edição do utilizador.

### Funcionamento

Pode aceder à extensão a partir do menu de extensões da página de edição do cenário (canto superior direito, botão do puzzle > GeoOperations).

<img src={require('/static/images/extensions/geo-operations-example.png').default} />

As opções são as seguintes:
- ***Operação***: Escolher qual a operação geométrica a realizar - Interseção, União, Diferença ou *Dissolve*.
- ***Camadas***: Escolher quais as camadas que estarão envolvidas na operação. A operação *dissolve* requer apenas uma camada, as restantes necessitam de duas. Para a operação de diferença, a ordem é importante - a segunda camada será subtraída à primeira.
- ***Nome da Nova Camada***: O nome da camada onde o resultado da operação será guardado.

Ao pressionar "Executar", a operação definida será realizada. A camada com o resultado só será criada se a operação for concluída com sucesso e se houver pelo menos uma geometria no resultado (por exemplo, se a interseção entre duas camadas for vazia, a operação será realizada, mas não será criada qualquer camada).

### *Changelog*

- **1.2.0**
    * Melhoria no feedback quando as operações são realizadas com sucesso
    * Correção de bugs
- **1.1.0**
    * Algumas alterações na interface
    * Correção de bugs
- **1.0.0**
    * Versão inicial da extensão