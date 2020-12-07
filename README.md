# Rocketseat Starter ES6
Início: 06/12/2020

ES significa ECMA Script e ES6 é ECMA Script 2015.

A cada ES*, novas funcionalidades são adicionadas.

Babel é responsável por transpilar (converter) a versão mais nova do JavaScript (ES6+) para versão mais antigas e melhor suportadas.

Yarn é um gerenciador de pacotes do JavaScript. Com ele é possível instalar dependências (softwares desenvolvidos por terceiros) nos nossos projetos.

O Yarn utiliza o arquivo package.json, localizado na raiz do projeto, para armazenar todas as dependências e versões utilizadas. O arquivo yarn.lock é um sistema de cache para otimizar a instalação.

> O diretório node_modules representa todas as dependências instaladas via um gerenciador de dependência.

Para iniciar um projeto, digite:
```yarn init```

Dependências instaladas nesse projeto:
- @babel/cli : habilita o babel na linha de comando
- @babel/preset-env : entende qual é o ambiente do projeto (browser, node etc) para converter de forma mais adequada os recursos da melhor forma possível

Para configurar o babel, o primeiro passo é criar um arquivo na raíz do projeto chamado .babelrc. Além disso, esse arquivo deve contém a seguinte configuração mínima:
```
{
  "presets": ["@babel/preset-env"]
}
```

Também é possível adicionar um script customizado para atividades repetidas ou corriqueiras. Para isso vá até o arquivo package.json, adicione a sessão de script e customize o babel, por exemplo:
```
"scripts": {
  "dev": "babel ./main.js -o ./bundle.js -w"
}
```

Como é de conhecimento, a const não permite que seus valores sejam alterados. Contudo, podemos aplicar um conceito chamado Mutação, onde valores de objetos e arrays podem ser alterados desde que mantenham a mesma estrutura/assinatura do original.