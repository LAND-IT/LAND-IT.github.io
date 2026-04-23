---
id: kml-export
sidebar_label: KML Export
---

# KML Export

- **ID**: kml-export
- **Autor**: Diogo Moreira
    * Contato: df.moreira@campus.fct.unl.pt
- **Versão Atual**: 1.1.1
- **Sumário**: Esta extensão permite exportar a POSA de uma AIGP e as camadas de uma versão de um cenário (POSP, Unidades de Transformação, Serviços de Ecossistemas) em formato KML.

### Funcionamento

Pode aceder à extensão a partir do menu de extensões da página de edição do cenário (canto superior direito, botão do puzzle > KML Export).

<img src={require('/static/images/extensions/kml-export-example.png').default} />

As opções de exportação são as seguintes:
- ***Considerar Filtros?***: Quando ativo, são exportadas apenas as geometrias visíveis conforme os filtros ativos do utilizador.
- ***Camadas a Exportar***: Quais as camadas (POSA, POSP, Unidades de Transformação, Serviços de Ecossistemas) a exportar.

Após definir estas opções, ao pressionar o botão **"Download KML"** será gerado e descarregado um ficheiro KML correspondente às camadas selecionadas.

### *Changelog*

- 1.1.1
    * Correção de bugs
- 1.1.0
    * Melhorias na interface da extensão
- 1.0.0
    * Versão inicial da extensão
