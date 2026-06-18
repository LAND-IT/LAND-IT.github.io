---
id: backend-service
sidebar_label: Back-end Service API
sidebar_position: 1
---

# LAND IT Back-end Service API

Esta API pode ser utilizada nos módulos de back-end de uma extensão (Módulos de Função) para interagir com os dados do LAND IT.

----

#### `Uni<ScenarioVersionDTO> getPOSPOfVersion(Long scenario, Long version)`

Obtém uma versão de um cenário com os seus polígonos POSP.

* **Parâmetros:**
    * `scenario` — o id do cenário
    * `version` — o id da versão
* **Retorno:** Objeto ScenarioVersionDTO contendo as geometrias da POSP da versão do cenário especificada
----

#### `Uni<ScenarioVersionDTO> getTransformationsOfVersion(Long scenario, Long version)`

Obtém uma versão de um cenário com os seus polígonos de transformação.

* **Parâmetros:**
    * `scenario` — o id do cenário
    * `version` — o id da versão
* **Retorno:** Objeto ScenarioVersionDTO contendo as geometrias dos conjuntos de intervenção da versão do cenário especificada
----

#### `Uni<ScenarioVersionDTO> getEcoServicesOfVersion(Long scenario, Long version)`

Obtém uma versão de um cenário com os seus polígonos de serviços de ecossistemas.

* **Parâmetros:**
    * `scenario` — o id do cenário
    * `version` — o id da versão
* **Retorno:** Objeto ScenarioVersionDTO contendo as geometrias dos serviços de ecossistemas da versão do cenário especificada
----

#### `Uni<DataLayerDTO> getPOSAOfScenario(Long scenario)`

Obtém a camada POSA de um cenário.

* **Parâmetros:** `scenario` — o id do cenário
* **Retorno:** Objeto DataLayerDTO que representa a camada POSA do cenário com as suas geometrias
----

#### `Uni<ScenariosFilterDTO> getLayersWithUserFilters(Long scenario, Long version)`

Obtém as geometrias das camadas POSP, Transformações e Serviços de Ecossistemas de uma versão de um cenário, filtradas pelos filtros do utilizador.

* **Parâmetros:**
    * `scenario` — o id do cenário
    * `version` — o id da versão
* **Retorno:** Objeto ScenariosFilterDTO contendo as geometrias das camadas filtradas e as expressões de filtragem
----

#### `Uni<DataLayerDTO> newEditLayer(NewEditLayerDTO dto, String aigp)`

Cria uma nova camada de edição.

* **Parâmetros:**
    * `dto` — NewEditLayerDTO com a informação da camada
    * `aigp` — nome da AIGP onde a camada será criada
* **Retorno:** Objeto DataLayerDTO que representa a camada de edição criada
----

#### `Uni<List<DataLayerDTO>> getUserEditLayers(String aigp)`

Obtém uma lista das camadas de edição do utilizador de uma determinada AIGP.

* **Parâmetros:** `aigp` — nome da AIGP
* **Retorno:** Lista de objetos DataLayerDTO que representam as camadas de edição do utilizador
----

#### `Uni<Void> updateLayerInfo(NewEditLayerDTO newEditLayerDTO, Long layerid)`

Atualiza a informação de uma camada de edição.

* **Parâmetros:**
    * `newEditLayerDTO` — NewEditLayerDTO com a informação da camada atualizada
    * `layerid` — id da camada cuja informação deve ser atualizada
----

#### `Uni<List<GeometryDTO>> addPolygonToLayer(Long layerId, GeometryReqDTO dto, String aigp)`

Adiciona novos polígonos a uma camada.

* **Parâmetros:**
    * `layerId` — o id da camada onde o polígono será adicionado
    * `dtos` — lista de objetos GeometryReqDTO com a informação dos polígonos a adicionar
    * `aigp` — nome da AIGP
* **Retorno:** Lista contendo as geometrias adicionadas
----

#### `Uni<Void> removePolygonsFromLayer(Long layerId, IdsDTO dto)`

Remove polígonos selecionados de uma camada.

* **Parâmetros:**
    * `layerId` — o id da camada de onde os polígonos serão removidos
    * `dto` — objeto IdsDTO contendo os ids dos polígonos a remover
----

#### `Uni<Void> editGeometriesInUserLayer(Long layerId, EditGeometriesDTO dto)`

Edita polígonos selecionados de uma camada.

* **Parâmetros:**
    * `layerId` — o id da camada onde os polígonos serão atualizados
    * `dto` — objeto EditGeometriesDTO contendo a informação dos polígonos a atualizar
----

#### `Uni<ScenariosFilterDTO> saveFilter(Long scenarioId, Long versionId, ScenariosFilterInputDTO dto)`

Cria e guarda um novo filtro para o cenário e versão especificados.

Para criar um filtro, é necessário um objeto ScenariosFilterInputDTO. Por exemplo:
<details>
<summary>Exemplo de criação de ScenariosFilterInputDTO</summary>

```java
List<FilterExpression.Layer> layers = List.of(new FilterExpression.Layer("POSP", json));
FilterExpression exp = new FilterExpression("Example Filter", layers, true);
ScenariosFilterInputDTO filterInput = new ScenariosFilterInputDTO(List.of(exp));
```

Onde `json` é uma string JSON JsonLogic válida. Aqui está um exemplo simples de uma regra JSON:
```json
{
   "and": [
       { "==": [{ "var": "POSP" }, "Florestas de eucalipto"] },
       { ">=": [{ "var": "area" }, 30000] }
   ]
}
```
</details>

* **Parâmetros:**
    * `scenarioId` — o id do cenário
    * `versionId` — o id da versão
    * `dto` — objeto ScenariosFilterInputDTO com informações sobre o filtro a criar
* **Retorno:** objeto ScenariosFilterDTO que representa o filtro criado.
----

#### `Uni<ScenariosFilterDTO> updateFilter(Long scenarioId, Long versionId, Long filterId, ScenariosFilterInputDTO dto)`

Atualiza um filtro existente para o cenário, versão e ID de filtro especificados.

* **Parâmetros:**
    * `scenarioId` — o id do cenário
    * `versionId` — o id da versão
    * `filterId` — o id do filtro a atualizar
    * `dto` — objeto ScenariosFilterInputDTO com informações sobre o filtro a atualizar. Consulte a documentação do método saveFilter para mais informações sobre este objeto.

* **Retorno:** objeto ScenariosFilterDTO que representa o filtro atualizado.
----

#### `Uni<ScenariosFilterDTO> deleteFilter(Long scenarioId, Long versionId, Long filterId)`

Elimina um filtro específico com base no ID do filtro, para o cenário e versão indicados.

* **Parâmetros:**
    * `scenarioId` — o id do cenário
    * `versionId` — o id da versão
    * `filterId` — o id do filtro a eliminar
* **Retorno:** objeto ScenariosFilterDTO que representa o filtro eliminado.
----

#### `Uni<ScenariosFilterDTO> getFilter(Long scenarioId, Long versionId, Long filterId)`

Obtém um filtro específico pelo seu ID, para o cenário e versão indicados.

* **Parâmetros:**
    * `scenarioId` — o id do cenário
    * `versionId` — o id da versão
    * `filterId` — o id do filtro a obter
* **Retorno:** objeto ScenariosFilterDTO que representa o filtro pedido.
----

#### `Uni<ScenariosFilterDTO> getUserFilters(Long scenarioId, Long versionId)`

Obtém a lista de filtros de um utilizador aplicados ao cenário e versão especificados.

* **Parâmetros:**
    * `scenarioId` — o id do cenário
    * `versionId` — o id da versão
* **Retorno:** objeto ScenariosFilterDTO com os filtros do utilizador para o cenário e versão indicados.
----

#### `List<GeometryDTO> differenceBetweenLayers(List<GeometryDTO> entryLayer, List<GeometryDTO> overLayer, boolean returnMulti) throws IOException`

Executa uma operação de diferença entre duas camadas de geometrias (entryLayer - overLayer).

* **Parâmetros:**
    * `entryLayer` — lista de geometrias da camada de entrada
    * `overLayer` — lista de geometrias da camada de sobreposição
    * `returnMulti` — se true retorna multi-geometrias, se false divide-as em geometrias individuais
* **Retorno:** Lista de geometrias resultantes da operação de diferença
----

#### `List<GeometryDTO> intersectionBetweenLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean returnMulti) throws IOException`

Executa uma operação de interseção entre duas camadas de geometrias.

* **Parâmetros:**
    * `first` — lista de geometrias da primeira camada
    * `second` — lista de geometrias da segunda camada
    * `returnMulti` — se true retorna multi-geometrias, se false divide-as em geometrias individuais
* **Retorno:** Lista de geometrias resultantes da operação de interseção
----

#### `List<GeometryDTO> unionOfLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean overlappedOriginally) throws IOException`

Executa uma operação de união entre duas camadas de geometrias.

* **Parâmetros:**
    * `first` — lista de geometrias da primeira camada
    * `second` — lista de geometrias da segunda camada
    * `overlappedOriginally` true se uma das camadas de input tem geometrias sobrepostas, false caso contrário
* **Retorno:** Lista de geometrias resultantes da operação de união
----

#### `List<GeometryDTO> leftIntersectionBetweenLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean returnMulti) throws IOException`

Executa uma operação de interseção à esquerda (*left intersection*) entre duas camadas de geometrias.

* **Parâmetros:**
    * `first` — lista de geometrias da primeira camada (a da esquerda)
    * `second` — lista de geometrias da segunda camada
    * `returnMulti` — se true retorna multi-geometrias, se false divide-as em geometrias individuais
* **Retorno:** Lista de geometrias resultantes da operação de interseção à esquerda
----

#### `List<GeometryDTO> fullIntersectionBetweenLayers(List<GeometryDTO> first, List<GeometryDTO> second, boolean returnMulti) throws IOException`

Executa uma operação de interseção total (*full intersection*) entre duas camadas de geometrias.

* **Parâmetros:**
    * `first` — lista de geometrias da primeira camada
    * `second` — lista de geometrias da segunda camada
    * `returnMulti` — se true retorna multi-geometrias, se false divide-as em geometrias individuais
* **Retorno:** Lista de geometrias resultantes da operação de interseção total
----

#### `List<GeometryDTO> dissolveGeometries(List<GeometryDTO> geoms, boolean returnMulti) throws IOException`

Executa uma operação de dissolução (*dissolve*) numa camada de geometrias.

* **Parâmetros:**
    * `geoms` — lista de geometrias da camada a dissolver
    * `returnMulti` — se true retorna multi-geometrias, se false divide-as em geometrias individuais
* **Retorno:** Lista de geometrias resultantes da operação de dissolução