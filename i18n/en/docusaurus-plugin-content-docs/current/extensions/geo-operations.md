---
id: geo-operations
sidebar_label: GeoOperations
---

# GeoOperations

- **ID**: geo-operations
- **Authors**: Francisco de Abreu Freire
- **Current Version**: 1.2.0
- **Summary**: This extension allows performing geometric operations (intersection, union, difference, dissolve) on the user's edit layers.

### Functionality

You can access the extension from the extensions menu on the scenario editing page (top right corner, puzzle button > GeoOperations).

<img src={require('/static/images/extensions/geo-operations-example.png').default} />

The options are as follows:
- ***Operation***: Choose which geometric operation to perform - Intersection, Union, Difference or Dissolve.
- ***Layers***: Choose which layers will be involved in the operation. The dissolve operation takes only one layer, the others need two layers. For the difference operation, the order is important - the second layer will be subtracted from the first.
- ***New Layer Name***: The name of the layer where the operation result will be saved.

By pressing "Execute", the defined operation will be performed. A layer with the result will only be created if the operation is performed successfully and if there is at least one geometry in the result (for example, if the intersection between two layers is empty, the operation will be performed but no layer will be created).

### Changelog

- **1.2.0**
    * Improved feedback when operations are performed successfully
    * Bug fixes
- **1.1.0**
    * Some changes to the UI
    * Bug fixes
- **1.0.0**
    * Initial version of the extension
