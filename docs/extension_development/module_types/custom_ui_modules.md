---
id: custom-ui-modules
sidebar_label: Módulos de Interface Personalizada
sidebar_position: 3
---

# Módulos de Interface Personalizada

Estes módulos permitem a criação de componentes React personalizados e podem ser utilizados para criar interfaces mais complexas (como dashboards, por exemplo). São criados num pequeno projeto de "frontend" separado (localizado junto ao restante código da extensão), onde cada módulo é compilado como um ficheiro JS autónomo, gerado em formato IIFE.

A sua configuração aceita os seguintes campos:

- **id** [obrigatório]: *string* para identificar o módulo dentro da extensão.
- **type** [obrigatório]: "interface", para módulos de UI personalizados.
- **subtype** [obrigatório]: o tipo de módulo de UI, que dita onde aparecerá no *frontend*. Atualmente, são suportados os seguintes subtipos:
    - `scenario-popup`: acessível a partir da página de edição de cenário.
    - `singlestats-panel`: acessível a partir da página de estatísticas da versão do cenário.
- **component** [obrigatório]: nome do ficheiro JS gerado que contém este módulo, conforme definido na configuração do Vite (ver exemplos mais abaixo). Não deve conter a extensão de ficheiro ".js" — por exemplo, se o módulo for gerado para um ficheiro chamado "ExamplePopup.js", este campo será simplesmente "ExamplePopup".
- **displayName**: *string* legível para o utilizador que aparece nos menus e como cabeçalho do módulo de UI.

<details>
<summary>Exemplos de configuração</summary>

Exemplo de um módulo de UI personalizado que aparece na página de edição de cenário (subtipo: `scenario-popup`):
```json
{
    "id": "example-ui",
    "type": "interface",
    "subtype": "scenario-popup",
    "component": "ExamplePopup",
    "displayName": "Exemplo de Popup Personalizado"
}
```

Exemplo de um módulo de UI personalizado que aparece na página de estatísticas da versão do cenário (subtipo: `singlestats-panel`):
```json
{
    "id": "models-panel",
    "type": "interface",
    "subtype": "singlestats-panel",
    "component": "ModelsPanel",
    "displayName": "Modelos Económicos"
}
```
</details>

Para comunicar com a aplicação principal, utiliza-se o pacote `landit-extensions-sdk` (instalado a partir de `github:LAND-IT/sdk` como no template), que contém um objeto "api" com vários métodos para obter informações sobre o cenário/versão atual, camadas e geometrias. Mais informação pode ser encontrada [aqui](/docs/extension_development/api/extensions-sdk).

Se estiver a utilizar o template fornecido, o projeto "frontend" consiste num projeto Vite (TypeScript + React), que contém:
- A diretoria `src`: localização do código dos módulos de UI. Cada módulo deve ter um componente React personalizado (ficheiro tsx) e um ficheiro `main.tsx` que define uma função `mount`, como no seguinte exemplo:
<details>
<summary>Exemplo de módulo de UI personalizado</summary>

examplePopup.tsx
```typescript
export function ExamplePopup() {
    ...
    
    return <>
        ...
    </>
}
```

main.tsx
```typescript
function mount() {
    const rootEl = document.getElementById("root");
    if (!rootEl) return;
    
    createRoot(rootEl).render(<ExamplePopup />);
}

mount();
```

</details>

- Ficheiro de configuração Vite para cada módulo, que permite que cada um seja compilado independentemente, como exemplificado a seguir:
<details>
<summary>Exemplo de ficheiro de configuração Vite</summary>

Exemplo para o módulo "ExamplePopup":

vite.examplePopup.config.ts
```typescript
export default defineConfig({
    plugins: [react()],
    build: {
        emptyOutDir: false,
        cssCodeSplit: true,
        assetsInlineLimit: 10000000,
        rollupOptions: {
            input: {
                // Caminho para o ficheiro "main.tsx" do módulo
                "ExamplePopup": "src/examplePopup/main.tsx",
            },
            output: {
                format: "iife",
                entryFileNames: "[name].js", // O ficheiro de output será "ExamplePopup.js"
                inlineDynamicImports: true,
            },
        },
    },
});
```

Depois, no ficheiro `package.json`, adicione um script para este módulo, e adicione-o também ao script `build:all`.
```json
 "scripts": {
    ...
    "build:examplePopup": "vite build --config vite.examplePopup.config.ts",
    "build:all": "npm run build:examplePopup"
  },
```

Se estiver a criar mais do que um módulo, repita este processo: crie o ficheiro de configuração Vite, adicione um script no ficheiro `package.json` e modifique o script `build:all`, por exemplo:
```json
 "scripts": {
    ...
    "build:examplePopup": ...
    "build:anotherComponent": "vite build --config vite.anotherComponent.config.ts",
    "build:all": "npm run build:examplePopup && npm run build:anotherComponent"
  },
```
</details>