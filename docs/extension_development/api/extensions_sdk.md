---
id: extensions-sdk
sidebar_label: Front-end Extensions SDK
sidebar_position: 2
---

# LAND IT Front-end Extensions SDK

Esta API pode ser utilizada pelos módulos de front-end de uma extensão (Módulos de UI personalizados) para interagir com a aplicação front-end do LAND IT e obter dados, tais como dados de contexto (cenário e versão atual onde o módulo está a ser executado/exibido), camadas disponíveis e geometrias.

Estes métodos são assíncronos (retornam Promises), uma vez que o método `postMessage()` é utilizado para a comunicação entre o IFrame da extensão e a aplicação principal.

----

#### `getProps()`

Obtém as "props" de contexto para o componente da extensão (scenarioId e versionId).

<details>
<summary>Exemplo de resposta</summary>

```
{
  "scenarioId": 1,
  "versionId": 2
}
```
</details>
----

#### `getLayers()`

Obtém informações sobre as camadas existentes na versão atual do cenário.

<details>
<summary>Exemplo de resposta</summary>

```
[
  {
    "name": "POSP",
    "description": "...",
    "scenarioId": 1,
    "versionId": 2,
    "id": 21,
    "visible": true,
    "selected": 0,
    "type": "ScenarioPOSP",
    "geometryType": "POLYGONS",
    "renderer": {...}
  },
  {
      ...
  }
]
```
</details>
----

#### `getLayersOfType(layerType: string)`

Obtém informações sobre as camadas de um tipo específico na versão atual do cenário.
* **Parâmetros:**
    * `layerType` — tipo de camada. Exemplos: "ScenarioPOSP", "ScenarioIS", "ScenarioES", "POSA", "Edit".

<details>
<summary>Exemplo de resposta</summary>

layerType = "ScenarioPOSP"
```
[
    {
        "name": "POSP",
        "description": "...",
        "scenarioId": 1,
        "versionId": 2,
        "id": 21,
        "visible": true,
        "selected": 0,
        "type": "ScenarioPOSP",
        "geometryType": "POLYGONS",
        "renderer": {...}
    }
]
```
</details>
----

#### `getLayersGeometries()`

Obtém as geometrias de todas as camadas na versão atual do cenário.

<details>
<summary>Exemplo de resposta</summary>

```
[
    {
      "layer": 21,
      "geoms": [
          {
              "id": 1000,
              "geojson": "...",
              "geomType": "POLYGONS",
              "area": 731.8,
              "perimeter": 195.8,
              "attributes": [...]
          },
          ...
      ]
    },
    {
        ...
    }
]
```
</details>
----

#### `getGeometriesByLayer(layerType: string)`

Obtém as geometrias de camadas de um tipo específico na versão atual do cenário.
* **Parâmetros:**
    * `layerType` — tipo de camada. Exemplos: "ScenarioPOSP", "ScenarioIS", "ScenarioES", "POSA", "Edit".

<details>
<summary>Exemplo de resposta</summary>

layerType = "ScenarioPOSP"
```
[
    [
          {
              "id": 1000,
              "geojson": "...",
              "geomType": "POLYGONS",
              "area": 731.8,
              "perimeter": 195.8,
              "attributes": [...]
          },
          ...
    ]
]
```
</details>
----

#### `executeFunctionModule(extension: string, module: string, input: any, fileOutput: boolean = false)`

Executa um módulo de função de uma extensão (no back-end) e obtém o seu resultado.
* **Parâmetros:**
    * `extension` — id da extensão.
    * `module` — id do módulo a executar.
    * `input` — input a passar ao módulo de função.
    * `fileOutput` — true se o módulo retornar um ficheiro (binário), false se retornar json.

----