---
id: extensions-sdk
sidebar_label: Front-end Extensions SDK
sidebar_position: 2
---

# LAND IT Front-end Extensions SDK

This API can be used by the front-end modules of an extension (Custom UI modules) to interact with the LAND IT front-end application and retrieve data such as context data (current scenario and version where the module is being executed/displayed), available layers and geometries.

----

#### `getProps()`

Get context "props" for the extension component (scenarioId and versionId)

<details>
<summary>Example response</summary>

```
{
  "scenarioId": 1,
  "versionId": 2
}
```
</details>
----

#### `getLayers()`

Get information about the existing layers on the current scenario version.

<details>
<summary>Example response</summary>

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

#### `getLayersOfType()`

Get information about the layers of a specific type on the current scenario version.
* **Parameters:**
    * `layerType` — type of layer. Examples: "ScenarioPOSP", "ScenarioIS", "ScenarioES", "POSA", "Edit"
<details>
<summary>Example response</summary>

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

Get geometries of all layers on the current scenario version.

<details>
<summary>Example response</summary>

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

#### `getGeometriesByLayer()`

Get geometries of layers of a specific type on the current scenario version.

<details>
<summary>Example response</summary>

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

#### `executeFunctionModule()`

Execute an extension function module (in the back-end) and retrieve its result.
* **Parameters:**
    * `extension` — id of the extension
    * `module` — id of the module to execute
    * `input` — input to pass to the function module
    * `fileOutput` — true if the module returns a (binary) file, false if it returns json

----