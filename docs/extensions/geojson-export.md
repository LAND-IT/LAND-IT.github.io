---
id: geojson-export
sidebar_label: GeoJSON Export
---

# GeoJSON Export

- **ID**: geojson-export
- **Autor**: Diogo Moreira
    * Contato: df.moreira@campus.fct.unl.pt
- **Versão Atual**: 1.2.1
- **Sumário**: Esta extensão permite exportar a POSA de uma AIGP e as camadas de uma versão de um cenário (POSP, Unidades de Transformação, Serviços de Ecossistemas) em formato GeoJSON.

### Funcionamento

Pode aceder à extensão a partir do menu de extensões da página de edição do cenário (canto superior direito, botão do puzzle > GeoJSON Export).

<img src={require('/static/images/extensions/geojson-export-example.png').default} />

As opções de exportação são as seguintes:
- ***Considerar Filtros?***: Quando ativo, são exportadas apenas as geometrias visíveis conforme os filtros ativos do utilizador.
- ***Sistema de Coordenadas***: Qual o sistema de referência a utilizar na exportação. 
  * WGS84: Sistema de referência global.
  * ETRS89/Portugal TM06: Sistema de referência oficial em Portugal Continental.
- ***Camadas a Exportar***: Quais as camadas (POSA, POSP, Unidades de Transformação, Serviços de Ecossistemas) a exportar.

Após definir estas opções, ao pressionar o botão **"Download GeoJSON"** será gerado e descarregado um ficheiro ZIP contendo um ficheiro GeoJSON por cada camada exportada.

### *Changelog*

- 1.2.1
    * Correção de bugs
- 1.2.0
    * Adicionada a possibilidade de escolher o sistema de coordenadas (WGS84 ou ETRS89/Portugal TM06)
- 1.1.0
    * Melhorias na interface da extensão
    * Correção de bugs
- 1.0.0
    * Versão inicial da extensão
