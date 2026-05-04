---
id: extensions
sidebar_label: Extensões
sidebar_position: 6
---

# Extensões

Pode encontrar o menu de extensões ao clicar sobre o seu perfil, conforme indicado na imagem:
<img src={require('/static/images/extensions/extensions-menu-location.png').default} />

Aqui poderá ver a lista de extensões que se encontram disponíveis no LAND IT. Para começar a utilizar uma extensão, é necessário ativá-la primeiro, utilizando o botão "Ativar". Para desativar uma extensão, pressione novamente o mesmo botão.
<img src={require('/static/images/extensions/extensions-menu-enable-example.png').default} />

## Documentação de uma Extensão

Para documentar uma extensão, utilize o seguinte template:

<details>
<summary>Markdown</summary>

```markdown
---
id: template-extension /* id da extensão */
sidebar_label: Template de Extensão /* nome da extensão */
---

# Template de Extensão

- **ID**: template-extension
- **Autor**: Diogo Moreira
  * Contacto: df.moreira@campus.fct.unl.pt /* Endereço de email, página do Github, etc. */
- **Versão Atual**: 1.1.0
- **Sumário**: Curta descrição do propósito da extensão.

### Funcionamento

Utilize esta secção para explicar em maior detalhe como funciona a extensão e como utilizar a mesma. Pode incluir texto, imagens, etc.

### *Changelog*

Utilize esta secção para documentar as alterações realizadas em cada versão da extensão.

- 1.1.0
* Alteração 1
* Alteração 2
* ...
- 1.0.0
* Versão inicial da extensão
```
</details>

<details>
<summary>Exemplo</summary>

## Template de Extensão

- **ID**: template-extension
- **Autor**: Diogo Moreira
  * Contacto: df.moreira@campus.fct.unl.pt
- **Versão Atual**: 1.1.0
- **Sumário**: Curta descrição do propósito da extensão.

### Funcionamento

Utilize esta secção para explicar em maior detalhe como funciona a extensão e como utilizar a mesma. Pode incluir texto, imagens, etc.

### *Changelog*

Utilize esta secção para documentar as alterações realizadas em cada versão da extensão.

- 1.1.0
  * Alteração 1
  * Alteração 2
  * ...
- 1.0.0
  * Versão inicial da extensão
</details>