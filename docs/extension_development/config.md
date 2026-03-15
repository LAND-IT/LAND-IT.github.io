---
id: config
sidebar_label: Ficheiro de Configuração
sidebar_position: 2
---

# Ficheiro de Configuração

O ficheiro de configuração — `config.json` — contém informações importantes (metadados) sobre a extensão e os seus módulos, funcionando como a "fonte de verdade" da mesma. Inclui os seguintes campos (alguns são obrigatórios para o funcionamento da extensão, outros são opcionais):

- **id** [obrigatório]: *string* para identificar a extensão.
- **displayName** [obrigatório]: nome da extensão legível para o utilizador.
- **version** [obrigatório]: versão da extensão; deve ser uma *string* de dígitos separados por pontos (por exemplo, "1.1" ou "1.2.0").
- **author** [obrigatório]: nome(s) do(s) autor(es) da extensão.
- **description**: descrição textual para o utilizador sobre o que a extensão faz.
- **homepage**: ligação para o sítio web/página principal da extensão.
- **repository**: ligação para o repositório com o código da extensão.
- **issueTracker**: ligação para o sistema de acompanhamento de problemas da extensão (para reportar erros/problemas).
- **modules**: *array* de configurações dos módulos da extensão. Uma extensão deve conter, pelo menos, um módulo. Os módulos podem ser de diversos tipos, sendo que a informação de configuração depende do tipo de módulo selecionado.

<details>
<summary>Exemplo de ficheiro de configuração</summary>

Este é um exemplo de um ficheiro `config.json` completo. Pode encontrar mais informações sobre os diferentes tipos de módulos [aqui](/docs/extension_development/module_types).

Este exemplo provém da extensão "GeoJSON Export", que é composta por dois módulos:
- um módulo de função (back-end) que gera o ficheiro GeoJSON;
- um módulo de interface declarativo (front-end) que apresenta o formulário de exportação, permitindo ao utilizador selecionar os parâmetros, executar o módulo de extensão e descarregar o seu output - neste caso, um zip com ficheiros geojson.

```json
{
  "id": "geojson-export",
  "displayName": "Exportação GeoJSON",
  "version": "1.0.0",
  "author": "Diogo Moreira",
  "description": "Permite exportar dados geográficos em formato GeoJSON.",
  "modules": [
    {
      "id": "export-function",
      "type": "function",
      "submitLabel": "Descarregar GeoJSON",
      "result": {
        "type": "file",
        "contentType": "application/zip",
        "defaultFileName": "geojson-export.zip"
      },
      "parameters": [
        {
          "name": "scenario",
          "type": "context",
          "key": "scenarioId"
        },
        {
          "name": "version",
          "type": "context",
          "key": "versionId"
        },
        {
          "name": "filtered",
          "type": "bool",
          "label": "Considerar Filtros?",
          "defaultValue": false
        },
        {
          "name": "crs",
          "type": "selectSingle",
          "label": "Sistema de Coordenadas",
          "values": [
            {"value": "EPSG:4326", "label": "WGS 84 (Global)"},
            {"value": "EPSG:3763", "label": "ETRS89 / Portugal TM06"}
          ],
          "defaultValue": "EPSG:4326"
        },
        {
          "name": "layers",
          "type": "selectMulti",
          "label": "Camadas a exportar",
          "values": [
            {"value": "POSA", "label": "POSA"},
            {"value": "POSP", "label": "POSP"},
            {"value": "Unidades de Transformação", "label": "Unidades de Transformação"},
            {"value": "Serviços de Ecossistemas", "label": "Serviços de Ecossistemas"}
          ]
        }
      ]
    }
  ]
}
```

</details>