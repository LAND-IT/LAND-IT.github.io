---
id: geojson-export
sidebar_label: GeoJSON Export
---

# GeoJSON Export

- **ID**: geojson-export
- **Author**: Diogo Moreira
    * Contact: df.moreira@campus.fct.unl.pt
- **Current Version**: 1.2.1
- **Summary**: This extension allows the export of an AIGP's POSA and the layers of a scenario version (POSP, Transformation Units, Ecosystem Services) in GeoJSON format.

### Functionality

The extension can be accessed via the extensions menu on the scenario editing page (top right corner, puzzle icon > GeoJSON Export).

<img src={require('/static/images/extensions/geojson-export-example.png').default} />

The export options are as follows:
- ***Consider Filters?***: When active, only the geometries currently visible according to the user's active filters are exported.
- ***Coordinate System***: The reference system to be used for the export.
    * **WGS84**: Global reference system.
    * **ETRS89/Portugal TM06**: Official reference system for Mainland Portugal.
- ***Layers to Export***: Selection of which layers (POSA, POSP, Transformation Units, Ecosystem Services) to export.

After defining these options, clicking the **"Download GeoJSON"** button will generate and download a ZIP file containing one GeoJSON file for each exported layer.

### Changelog

- **1.2.1**
    * Bug fixes
- **1.2.0**
    * Added the ability to choose the coordinate system (WGS84 or ETRS89/Portugal TM06)
- **1.1.0**
    * Extension interface improvements
    * Bug fixes
- **1.0.0**
    * Initial version of the extension