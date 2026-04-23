---
id: kml-export
sidebar_label: KML Export
---

# KML Export

- **ID**: kml-export
- **Author**: Diogo Moreira
    * Contact: df.moreira@campus.fct.unl.pt
- **Current Version**: 1.1.1
- **Summary**: This extension allows exporting the POSA of an AIGP and the layers of a scenario version (POSP, Transformation Units, Ecosystem Services) in KML format.

### Functionality

You can access the extension from the extensions menu on the scenario editing page (top right corner, puzzle button > KML Export).

<img src={require('/static/images/extensions/kml-export-example.png').default} />

The export options are as follows:
- ***Consider Filters?***: When active, only the geometries visible according to the user's active filters are exported.
- ***Layers to Export***: Which layers (POSA, POSP, Transformation Units, Ecosystem Services) to export.

After defining these options, pressing the **"Download KML"** button will generate and download a KML file corresponding to the selected layers.

### Changelog

- **1.1.1**
    * Bug fixes
- **1.1.0**
    * Improvements to the extension interface
- **1.0.0**
    * Initial version of the extension