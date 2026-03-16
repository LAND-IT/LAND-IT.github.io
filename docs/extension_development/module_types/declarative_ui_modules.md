---
id: declarative-ui-modules
sidebar_label: Módulos de Interface Declarativa
sidebar_position: 2
---

# Módulos de Interface Declarativa

Estes módulos permitem criar facilmente uma interface de formulário simples, a ser exibida no *front-end*, que permite aos utilizadores preencher os parâmetros de entrada necessários para executar um módulo de função e obter o seu resultado. São criados declarando no ficheiro de configuração o que deve ser renderizado, em vez de programar componentes React personalizados, daí o seu nome. A sua configuração contém os seguintes campos:

- **id** [obrigatório]: *string* para identificar o módulo dentro da extensão.
- **type** [obrigatório]: "interface-declarative", para módulos de interface declarativos.
- **subtype** [obrigatório]: o tipo de módulo de UI, que dita onde aparecerá no *front-end*. Atualmente, o único suportado é "scenario-popup", para tornar o módulo de UI acessível a partir da página de edição de cenário.
- **bindsTo** [obrigatório]: o ID do módulo de função a executar quando o formulário é submetido.
- **displayName**: *string* legível para o utilizador que aparece nos menus e como cabeçalho do módulo de UI.
- **ui**: objeto que descreve como a própria interface deve ser construída, sendo composto por vários campos:
    - **submitLabel**: *string* legível para o utilizador que aparece como etiqueta do botão de submissão na interface.
    - **result**: objeto que descreve o resultado (output) da execução do módulo de função (o identificado no campo "bindsTo"). É composto por um campo **type**, que pode ser "**json**" ou "**file**". Se o tipo for "file", são também utilizados os seguintes campos:
        - **contentType** [obrigatório]: *string* que representa o tipo MIME do ficheiro (exemplo: "application/zip").
        - **defaultFileName**: nome de ficheiro por omissão utilizado quando o utilizador descarrega o ficheiro.
    - **parameters**: *array* de objetos onde cada um representa um parâmetro de entrada a renderizar na interface. São suportados vários tipos (listados abaixo), mas todos têm em comum os seguintes campos:
        - **name**: nome do parâmetro. **Deve coincidir** com o nome de uma variável na **inputClass** do módulo de função que é executado (o identificado no campo **bindsTo**).
        - **type**: tipo de parâmetro (exemplo: "bool", "selectSingle"). A lista completa de tipos suportados é apresentada abaixo, juntamente com os seus campos específicos.

<details>
<summary> Tipos de parâmetros </summary>

- **Booleano**: valor verdadeiro/falso, renderizado como um interruptor (*switch*) no *front-end*.
    - **type** [obrigatório]: "bool"
    - **label**: texto legível para o utilizador exibido junto ao interruptor.
    - **defaultValue**: valor por omissão para este parâmetro (true/false).
- **Texto**: valor de texto (*string*), renderizado como um campo de introdução de texto no *front-end*.
    - **type** [obrigatório]: "text"
    - **label**: texto legível para o utilizador exibido junto ao campo de texto.
    - **defaultValue**: valor por omissão para este parâmetro.
    - **required**: indica se o preenchimento é obrigatório (por omissão: false).
    - **minLength**: quantidade mínima de caracteres na *string*.
    - **maxLength**: quantidade máxima de caracteres na *string*.
    - **pattern**: expressão regular que o valor deste parâmetro deve cumprir.
- **Número**: valor numérico (inteiro ou flutuante), renderizado como um campo de introdução numérica no *front-end*.
    - **type** [obrigatório]: "number"
    - **label**: texto legível para o utilizador exibido junto ao campo numérico.
    - **defaultValue**: valor por omissão para este parâmetro.
    - **required**: indica se o preenchimento é obrigatório (por omissão: false).
    - **integer**: indica se o valor deve ser um número inteiro (por omissão: false).
    - **minimum**: valor mínimo do número.
    - **maximum**: valor máximo do número.
    - **step**: controla os incrementos do campo numérico no *front-end*.
- **Seleção Única**: seleção de um item de uma lista, renderizada como um *dropdown* no *front-end*.
    - **type** [obrigatório]: "selectSingle"
    - **label**: texto legível para o utilizador exibido junto ao *dropdown*.
    - **defaultValue**: valor selecionado por omissão para este parâmetro.
    - **values** [obrigatório]: *array* de objetos que correspondem às opções de seleção. Estes objetos têm o formato:
        - **value**: o valor em si, que é passado ao módulo de função.
        - **label**: versão legível do valor (pode ser idêntica).
- **Seleção Múltipla**: seleção de zero ou mais itens de uma lista, renderizada como um *dropdown* no *front-end*.
    - **type** [obrigatório]: "selectMulti"
    - **label**: texto legível para o utilizador exibido junto ao *dropdown*.
    - **defaultValues**: *array* de *strings* correspondentes aos valores selecionados por omissão.
    - **minSelected**: quantidade mínima de itens a selecionar.
    - **maxSelected**: quantidade máxima de itens que podem ser selecionados.
    - **values** [obrigatório]: *array* de objetos que correspondem às opções de seleção (mesmo formato da Seleção Única).
- **Contexto**: estes parâmetros são "especiais" pois não são introduzidos pelo utilizador, mas sim preenchidos pela própria aplicação. São utilizados para valores específicos, como o ID do cenário ou o ID da versão.
    - **type** [obrigatório]: "context"
    - **key** [obrigatório]: "scenarioId" ou "versionId"

</details>

<details>
<summary>Exemplos de configuração</summary>

Eis um exemplo de um módulo de interface declarativo com parâmetros de cada tipo:

```json
{
  "id": "full-declarative-ui-example",
  "type": "interface-declarative",
  "subtype": "scenario-popup",
  "displayName": "Declarative UI Example",
  "bindsTo": "hello-function",
  "ui": {
    "submitLabel": "Execute",
    "result": {
      "type": "json"
    },
    "parameters": [
      {
        "name": "boolParam",
        "type": "bool",
        "label": "Boolean Parameter",
        "defaultValue": false
      },
      {
        "name": "textParam",
        "type": "text",
        "label": "Text Parameter",
        "defaultValue": "Placeholder Text",
        "required": true,
        "maxLength": 20
      },
      {
        "name": "numberParam",
        "type": "number",
        "label": "Number Parameter",
        "defaultValue": 123,
        "required": true,
        "integer": true,
        "maximum": 1000
      },
      {
        "name": "selectSingleParam",
        "type": "selectSingle",
        "label": "Select Single Parameter",
        "defaultValue": "option1",
        "values": [
          {"value": "option1", "label": "Option 1"},
          {"value": "option2", "label": "Option 2"},
          {"value": "option3", "label": "Option 3"}
        ]
      },
      {
        "name": "selectMultiParam",
        "type": "selectMulti",
        "label": "Select Multi Parameter",
        "defaultValues": ["option1", "option2"],
        "values": [
          {"value": "option1", "label": "Option 1"},
          {"value": "option2", "label": "Option 2"},
          {"value": "option3", "label": "Option 3"}
        ]
      },
      {
        "name": "scenario",
        "type": "context",
        "key": "scenarioId"
      },
      {
        "name": "version",
        "type": "context",
        "key": "versionId"
      }
    ]
  }
}
```

Isto produz a seguinte interface de formulário (note que a secção "Parâmetros de contexto" apenas é visível para administradores, não para utilizadores regulares):
<img src={require('/static/images/extensions_development/declarative-ui-example.png').default} />


Outro exemplo, proveniente da extensão de GeoJSON Export. Neste caso, o resultado é um ficheiro (zip), pelo que o botão irá despoletar a execução do módulo `geojson-function` e, em seguida, o descarregamento do ficheiro de output resultante.
```json
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
```
Isto produz a seguinte interface:
<img src={require('/static/images/extensions_development/declarative-ui-example-geojson.png').default} />
</details>