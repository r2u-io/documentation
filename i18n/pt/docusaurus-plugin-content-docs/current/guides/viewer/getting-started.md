---

title: Primeiros passos

---

  

Através do site do Viewer, é possível visualizar e interagir com modelos cadastrados na plataforma, testando animações e variações. Para acessar algum modelo, é necessário acessar o link `viewer.r2u.io` passando os parâmetros de consulta `customerId`, com o id do cliente relacionado e `sku`, com o SKU correspondente ao modelo. Por exemplo:

`https://viewer.r2u.io/?customerId=id&sku=sku`

## Parâmetros de customização
Também é possível passar parâmetros de consulta para personalizar a experiência no site do Viewer:

| Parâmetro | Descrição | Tipo | Padrão |
| :-: | - | :-: | :-: |
| `showPdpButton` | Define se o viewer deve ou não exibir um botão de página de produto. Caso nenhum link de página de produto seja especificado nem no cadastro do produto na plataforma nem pelo parâmetro `pdpUrl`, o botão não será mostrado. | *booleano* <br /> `0` \| `1` | `1`
| `pdpUrl` | Define a URL para onde o botão de página de produto deve direcionar. | *link* | *cadastrado na plataforma*
| `pdpButtonText` | Personaliza o texto dentro do botão da página de produto. Caso não seja informado, utilizará o valor padrão na língua utilizada (Espanhol, Português ou Inglês) | *texto* | Ver página de produto
| `logoUrl` | Personaliza a logo que é exibida no Viewer. | *link para imagem* | *cadastrado na plataforma*
| `showLogo` | Define se uma logo deverá ou não aparecer. Por padrão, exibe se existir algum link especificado, seja pelo cadastro na plataforma ou por parâmetro `logoUrl`; caso contrário, não exibe. Caso nenhum link tenha sido especificado mas ainda assim o parâmetro showLogo seja verdadeiro (`1`), o Viewer gera uma logo. | *booleano* <br /> `0` \| `1` | *ver descrição* |