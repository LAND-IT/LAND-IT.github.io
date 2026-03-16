---
id: function-modules
sidebar_label: Módulos de Função
sidebar_position: 1
---

# Módulos de Função

Estes são módulos de *back-end* que recebem um dado input e executam código para produzir um output. A sua configuração contém os seguintes campos:

- **id** [obrigatório]: *string* para identificar o módulo dentro da extensão.
- **type** [obrigatório]: "function", para módulos de função.
- **className** [obrigatório]: classe Java que implementa este módulo.
- **inputClass**: classe Java que representa o input do módulo de função. Se omitido, será utilizado "Void".
- **outputClass**: classe Java que representa o output do módulo de função. Se omitido, será utilizado "Void".
    - "[B" pode ser utilizado para representar um *array* de bytes Java, caso o output do módulo de função seja um **ficheiro**.

<details>
<summary>Exemplos de configuração</summary>

Exemplo de configuração de um módulo de função. Este módulo é implementado pela classe `ModelsFunction`, recebe um input do tipo `ModelsInput` e produz um output do tipo `ModelsOutput`:
```json
{
      "id": "models-function",
      "type": "function",
      "className": "ModelsFunction",
      "inputClass": "ModelsInput",
      "outputClass": "ModelsOutput"
}
```

Módulo de função que retorna um ficheiro, sendo o output do tipo [B (array de bytes):
```json
{
      "id": "geojson-function",
      "type": "function",
      "className": "modules.GeoJSONFunction",
      "inputClass": "modules.GeoJSONFunctionInput",
      "outputClass": "[B"
}
```

</details>

A classe Java deve implementar a interface `FunctionModule`, que também requer a definição dos tipos para o input e output. Os módulos de função exigem a implementação dos seguintes métodos:

- **`void initialize(BackendService backendService)`**: executado na inicialização da extensão. Recebe um objeto que pode ser armazenado, permitindo que a extensão interaja com os dados do LAND IT. Pode encontrar mais informações sobre isto [aqui](/docs/extension_development/api/backend-service).
- **`Uni<O> execute(I input)`**: executado a pedido, quando alguém solicita a execução deste módulo. Recebe um objeto do tipo I ("I" é especificado no campo **inputClass** da configuração; este objeto é o resultado da desserialização do corpo JSON do pedido) e produz um output do tipo Uni\<O\> (sendo "O" especificado no campo **outputClass** da configuração) que é retornado ao utilizador que solicitou a execução do módulo.

É importante notar que é necessário trabalhar com o tipo "Uni" do SmallRye Mutiny devido à natureza reativa do Quarkus.

As classes de input podem opcionalmente implementar a interface `Validatable` e definir o seu método `validate`, que deve retornar *true* quando o input é válido e *false* caso contrário. Se implementado, o sistema apenas executará o módulo de função quando o input fornecido for válido de acordo com o método definido.