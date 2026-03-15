---
id: config
sidebar_label: Config File
sidebar_position: 2
---

# Config File

The configuration file - `config.json` - contains important information (metadata) about the extension and its modules, being the "source of truth" of the extension. It includes the following fields (some are required for the extension to work, others are optional):

- **id** [required]: string to identify the extension.
- **displayName** [required]: user-friendly name of the extension.
- **version** [required]: version of the extension, must be a string of digits separated by dots (for example, "1.1" or "1.2.0")
- **author** [required]: name(s) of the author(s) of the extension.
- **description**: user-friendly textual description of what the extension does.
- **homepage**: link to website/homepage of the extension.
- **repository**: link to repository with the extension's code.
- **issueTracker**: link to extension's issue tracker (to report bugs/problems).
- **modules**: array of extension module configurations. An extension should contain at least one module. Modules can be of one of several different types, and the configuration information depends on the type of module. 

<details>
<summary>Configuration file example</summary>

This is an example of a full config.json file. More information about the different module types can be found [here](/docs/extension_development/module_types).

This example comes from the "GeoJSON Export" extension, which is composed of two modules:
- a function module, that contains the logic to generate the GeoJSON files for several layers of a LAND IT scenario version.
- a declarative UI module, that creates an interface to allow the user to select parameters, execute the extension module and get the output - in this case, a zip with geojson files.

```json
{
  "id": "geojson-export",
  "displayName": "GeoJSON Export",
  "version": "1.2",
  "author": "Diogo Moreira",
  "description": "Exportar camadas de uma versão de um cenário em formato GeoJSON.",
  "modules": [
    {
      "id": "geojson-function",
      "type": "function",
      "className": "modules.GeoJSONFunction",
      "inputClass": "modules.GeoJSONFunctionInput",
      "outputClass": "[B"
    },
    {
      "id": "geojson-export-popup",
      "type": "interface-declarative",
      "subtype": "scenario-popup",
      "displayName": "Exportar Camadas para GeoJSON",
      "bindsTo": "geojson-function",
      "ui": {
        "submitLabel": "Download GeoJSON",
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
            ],
            "minSelected": 1
          }
        ]
      }
    }

  ]
}
```

</details>