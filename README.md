# Ignite Feed - Fundamentos do React

Este projeto foi desenvolvido como parte do curso de React da RocketSeat, com foco no aprendizado dos fundamentos essenciais da biblioteca. Trata-se de uma aplicação de feed de posts semelhante a uma rede social, onde os usuários podem publicar conteúdo, comentar e interagir através de "aplausos".

## 📚 Tópicos Estudados

### Fundamentos do React

- Componentes e componentização
- Propriedades (Props) e interfaces com TypeScript
- Estados e gerenciamento com useState
- Imutabilidade e manipulação segura de dados
- Hooks (useState, ChangeEvent, FormEvent)
- TypeScript no React (tipagem de props, eventos e estados)
- Renderização condicional
- Comunicação entre componentes

### Funcionalidades Implementadas

- Feed de posts com perfil do autor e data de publicação
- Sistema de comentários com validação de formulário
- Formatação de datas absolutas e relativas com date-fns
- Aplaudir comentários (contador de aplausos)
- Exclusão de comentários
- Validação de formulário vazio
- Layout responsivo para dispositivos móveis
- Estilização com CSS Modules

## 🧩 Estrutura do Projeto

### Componentes Principais

- **Post**: Exibe os posts com título, conteúdo e comentários
- **Comment**: Componentes de comentários com funcionalidade de aplaudir e excluir
- **Header**: Cabeçalho da aplicação com logo
- **Sidebar**: Barra lateral com perfil do usuário
- **Avatar**: Componente reutilizável para exibir avatares de usuários

### Recursos Técnicos

- Uso de CSS Modules para estilos isolados por componente
- Tipagem forte com TypeScript para props e estados
- Componentes funcionais com hooks
- Gerenciamento de estado local para comentários e aplausos
- Formatos de dados JSON para simulação de API
- Padrões de design de UI da interface Ignite

## 🛠️ Tecnologias Utilizadas

- [React 19](https://react.dev/) - Biblioteca front-end
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
- [Vite](https://vitejs.dev/) - Build tool e dev server
- [CSS Modules](https://github.com/css-modules/css-modules) - Estilização com escopo local
- [date-fns](https://date-fns.org/) - Formatação de datas
- [phosphor-react](https://phosphoricons.com/) - Biblioteca de ícones

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências

```bash
npm install
```

3. Inicie a aplicação em modo de desenvolvimento

```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

## 🧪 Scripts Disponíveis

```bash
# Iniciar em modo de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Visualizar versão de produção localmente
npm run preview

# Executar verificação de lint
npm run lint
```

## 📝 Licença

Este projeto está sob a licença MIT.

---

Feito com ❤️ durante o curso da RocketSeat.
