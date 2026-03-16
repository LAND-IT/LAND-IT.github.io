---
id: backend-service
sidebar_label: Back-end Service API
sidebar_position: 1
---

# LAND IT Back-end Service API

This API can be used in the back-end modules of an extension (Function Modules) to interact with LAND IT data.

----

#### `Uni<ScenarioVersionDTO> getPOSPOfVersion(Long scenario, Long version)`

Get a scenario version with its POSP polygons.

* **Parameters:**
    * `scenario` — the id of the scenario
    * `version` — the id of the version
* **Returns:** ScenarioVersionDTO object containing the geometries of the POSP of the given scenario version
----

#### `Uni<ScenarioVersionDTO> getTransformationsOfVersion(Long scenario, Long version)`

Get a scenario version with its transformation polygons.

* **Parameters:**
    * `scenario` — the id of the scenario
    * `version` — the id of the version
* **Returns:** ScenarioVersionDTO object containing the geometries of the intervention sets of the given scenario version
----

#### `Uni<ScenarioVersionDTO> getEcoServicesOfVersion(Long scenario, Long version)`

Get a scenario version with its ecosystem services polygons.

* **Parameters:**
    * `scenario` — the id of the scenario
    * `version` — the id of the version
* **Returns:** ScenarioVersionDTO object containing the geometries of the ecosystem services of the given scenario version
----

#### `Uni<DataLayerDTO> getPOSAOfScenario(Long scenario)`

Get the POSA layer of a scenario.

* **Parameters:** `scenario` — the id of the scenario
* **Returns:** DataLayerDTO object representing the POSA layer of the scenario with its geometries
----

#### `Uni<ScenariosFilterDTO> getLayersWithUserFilters(Long scenario, Long version)`

Get the geometries of the POSP, Transformations and Ecosystem Services layers of a scenario version, filtered by the user's filters.

* **Parameters:**
    * `scenario` — the id of the scenario
    * `version` — the id of the version
* **Returns:** ScenariosFilterDTO object containing the filtered layer geometries and the filter expressions
----

#### `Uni<DataLayerDTO> newEditLayer(NewEditLayerDTO dto, String aigp)`

Create a new edit layer.

* **Parameters:**
    * `dto` — NewEditLayerDTO with the layer information
    * `aigp` — name of the AIGP where to create the layer
* **Returns:** DataLayerDTO object representing the created edit layer
----

#### `Uni<List<DataLayerDTO>> getUserEditLayers(String aigp)`

Get a list of the user's edit layers of a given AIGP.

* **Parameters:** `aigp` — name of the AIGP
* **Returns:** List of DataLayerDTO objects representing the user's edit layers
----

#### `Uni<Void> updateLayerInfo(NewEditLayerDTO newEditLayerDTO, Long layerid)`

Update the information of an edit layer.

* **Parameters:**
    * `newEditLayerDTO` — NewEditLayerDTO with the updated layer information
    * `layerid` — id of the layer to update information
----

#### `Uni<List<GeometryDTO>> addPolygonToLayer(Long layerId, GeometryReqDTO dto, String aigp)`

Add a new polygon to a layer.

* **Parameters:**
    * `layerId` — the id of the layer where to add the polygon
    * `dto` — GeometryReqDTO object with the polygon's information
    * `aigp` — name of the AIGP
* **Returns:** List containing the added geometries
----

#### `Uni<Void> removePolygonsFromLayer(Long layerId, IdsDTO dto)`

Remove selected polygons from a layer.

* **Parameters:**
    * `layerId` — the id of the layer where to remove the polygons
    * `dto` — IdsDTO object containing the ids of the polygons to remove
----

#### `Uni<Void> editGeometriesInUserLayer(Long layerId, EditGeometriesDTO dto)`

Edit selected polygons of a layer.

* **Parameters:**
    * `layerId` — the id of the layer where to update the polygons
    * `dto` — EditGeometriesDTO object containing the information of the polygons to update
----

#### `List<GeometryDTO> differenceBetweenLayers(List<GeometryDTO> entryLayer, List<GeometryDTO> overLayer, boolean returnMulti) throws IOException`

Perform a difference operation between two layers of geometries (entryLayer - overLayer).

* **Parameters:**
    * `entryLayer` — list of geometries of the input layer
    * `overLayer` — list of geometries of the overlay layer
    * `returnMulti` — if true return multi-geometries, if false split them into individual geometries
* **Returns:** List of geometries that result from performing the difference operation
----

#### `List<GeometryDTO> intersectionBetweenLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean returnMulti) throws IOException`

Perform an intersection operation between two layers of geometries.

* **Parameters:**
    * `first` — list of geometries of the first layer
    * `second` — list of geometries of the second layer
    * `returnMulti` — if true return multi-geometries, if false split them into individual geometries
* **Returns:** List of geometries that result from performing the intersection operation
----

#### `List<GeometryDTO> unionOfLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean overlappedOriginally) throws IOException`

Perform a union operation between two layers of geometries.

* **Parameters:**
    * `first` — list of geometries of the first layer
    * `second` — list of geometries of the second layer
    * `overlappedOriginally` true if one of the input layers has any overlapping geometries, false otherwise
* **Returns:** List of geometries that result from performing the union operation
----

#### `List<GeometryDTO> leftIntersectionBetweenLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean returnMulti) throws IOException`

Perform a left intersection operation between two layers of geometries.

* **Parameters:**
    * `first` — list of geometries of the first layer (the left one)
    * `second` — list of geometries of the second layer
    * `returnMulti` — if true return multi-geometries, if false split them into individual geometries
* **Returns:** List of geometries that result from performing the left intersection operation
----

#### `List<GeometryDTO> fullIntersectionBetweenLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean returnMulti) throws IOException`

Perform a full intersection operation between two layers of geometries.

* **Parameters:**
    * `first` — list of geometries of the first layer
    * `second` — list of geometries of the second layer
    * `returnMulti` — if true return multi-geometries, if false split them into individual geometries
* **Returns:** List of geometries that result from performing the full intersection operation
