---
id: function-modules
sidebar_label: Function Modules
sidebar_position: 1
---

# Function Modules

These are back-end modules that take an input and execute some code to produce an output. Their config contains the following fields:

- **id** [required]: string to identify the module within the extension.
- **type** [required]: "function", for function modules.
- **className** [required]: Java class that implements this module.
- **inputClass**: Java class that represents the input of the function module. If omitted, "Void" will be used.
- **outputClass**: Java class that represents the output of the function module. If omitted, "Void" will be used.
    - "[B" can be used to represent a Java byte array, if the output of the function module is a **file**.

<details>
<summary>Config examples</summary>

Example of a function module config. This function module is implemented by the `ModelsFunction` class, receives an input of type `ModelsInput` and produces an output of type `ModelsOutput`:
```json
{
      "id": "models-function",
      "type": "function",
      "className": "ModelsFunction",
      "inputClass": "ModelsInput",
      "outputClass": "ModelsOutput"
}
```

Function module that returns a file, with the output being of type `[B` (byte array):
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

The Java class needs to implement the `FunctionModule` interface, which also requires types for the input and output. The function modules requires the following methods to be implemented:
- **`void initialize(BackendService backendService)`**: run on the extension's initialization. It receives an object that can be stored, allowing the extension to interact with the LAND IT data. More information about it can be found [here](/docs/extension_development/api/backend-service).
- **`Uni<O> execute(I input)`**: run on demand, when someone requests to execute this module. It receives an object of type I ("I" is specified in the **inputClass** field of the config; this object is the result of the deserialization of the JSON body of the request) and produces an output of type Uni\<O\> (with "O" being specified in the **outputClass** field of the config) that is returned to the user that requested this module to be executed.

It is worth noting that it is necessary to work with the SmallRye Mutiny's "Uni" type due to the reactive nature of Quarkus.

The input classes can optionally implement the `Validatable` interface and defining its `validate` method, which should return true when the input is valid, and false otherwise. If implemented, the system will only execute the function module when the provided input is valid according to the defined method.