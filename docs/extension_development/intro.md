---
id: intro
sidebar_label: Introdução
sidebar_position: 1
---

# Introdução

Esta secção introduz o desenvolvimento de extensões para o LAND IT e irá guiá-lo através do processo de configuração.

## Requisitos

- Git
- Java / Maven
- npm / Node.js
- Para testar e instalar extensões, acesso de administrador a uma instância do LAND IT (preferencialmente, ter o LAND IT a correr localmente no seu PC)

Deve também ter algum conhecimento sobre Java, TypeScript/React (se pretender criar módulos de interface personalizados) e ter uma compreensão sólida dos conceitos básicos do LAND IT (cenários, versões, POSP, POSA, etc.)

## Por onde começar

No repositório de extensões do LAND IT, pode encontrar um [template](https://github.com/LAND-IT/extensions/tree/main/_Template) para usar como ponto de partida. Este contém o esqueleto do código para uma extensão:
- `src/main`: contém o código do back-end (Java) da extensão.
    - `java`: contém o código Java propriamente dito (classes, etc.).
    - `resources`: contém o ficheiro `config.json` com os metadados da extensão (mais sobre isto [aqui](/docs/extension_development/config)).
- `frontend`: contém um pequeno projeto de front-end para a criação de módulos de UI personalizados. Pode ler mais sobre isto [aqui](/docs/extension_development/module_types/custom-ui-modules).
- `pom.xml`: ficheiro de configuração do projeto Maven, incluindo a definição de dependências (back-end) e a informação do projeto.
- `build.sh`/`build.bat`: script de build que compila tanto a parte do front-end como a do back-end da extensão e gera o ficheiro final.

Para que tudo funcione corretamente, após descarregar o template, é necessário fazer o seguinte:
- Entrar na diretoria `frontend` e correr o comando `npm install` para instalar as dependências necessárias.
- Voltar à diretoria raiz e compilar o projeto utilizando o script de build fornecido (`build.sh` ou `build.bat`, dependendo da sua plataforma).

Quando a compilação terminar, deverá encontrar um ficheiro JAR na pasta `target` (por exemplo, `Template-1.0.jar`). Este ficheiro é o que necessita para instalar a extensão no LAND IT.

## Instalar a extensão

Após compilar a extensão, pode tentar instalá-la. Para o fazer, vá às opções de "Comandos de Administrador" e escolha a opção para carregar uma nova extensão:
<img src={require('/static/images/extensions_development/admin-commands.png').default} />

Se o carregamento e a instalação forem bem-sucedidos, passará a conseguir ver a sua extensão na janela de extensões:
<img src={require('/static/images/extensions_development/extensions-window.png').default} />

Também encontrará agora as opções para usar as funcionalidades da extensão na página de edição de cenário, no canto superior direito (ícone do puzzle):
<img src={require('/static/images/extensions_development/extensions-menu-scenario-page.png').default} />

## E agora?

Se chegou até aqui, parabéns! Está pronto para começar a criar a sua própria extensão para o LAND IT. Recomenda-se vivamente que continue a ler a documentação de Desenvolvimento de Extensões para aprender mais sobre como desenvolver extensões para o LAND IT.

Não se esqueça de alterar o ID e o nome da extensão no ficheiro `config.json` (juntamente com outras informações, como colocar o seu nome como autor). Pode também alterar o ficheiro `pom.xml` (`artifactId` e `version`).