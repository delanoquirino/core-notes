1. `Layout.tsx`

   - Adicionado o componente `TaskProvider` para gerenciar o estado das tarefas.
   - Incluído o componente `Header` na aplicação.

2. `Home.tsx`

   - Foi Adicionado o componente `AddTaskForm` que é um formulario para criar novas tarefas.
   - Incluído o componente `CardTask` para exibir as tarefas cadastradas.
   - Adicionando `react-toastify` para exibir notificações.

3. Componente `AddTaskForm.tsx`

   - formulário para adicionar tarefas atraves do `React Hook Form`.
   - Implementado o envio de dados atraves do onSubmit fazendo as requisições PUT e POST na API usando a biblioteca `axios`.

4. Componente `CardTask.tsx`

   - Componente que vai exibir os cards das tarefas cadastradas.
   - Foi adicionado os botões para editar, excluir, e alterar a cor das tarefas chamando respectivamente handleEDit, handleDelete e handleColorSelected.

5. Componente `ListTasks.tsx`

   - Componente é responsável por exibir uma lista de tarefas, separando-as em favoritas e não favoritas, permitindo a edição, exclusão e atualização de cores dessas tarefas.

   - handleEdit: Vai realizar edição do cards ao chamar setOnEdit com os dados da tarefa selecionada.

   - handleDelete: Exclui uma tarefa atraves da requisição DELETE, atualiza o estado local (tasks) e exibe uma notificação de sucesso ou log de erro.

   - handleColorSelected: Atualiza a cor de uma tarefa ao fazer uma requisição PUT para adicionar a cor selecionada, atualiza o estado local (tasks) e lida com erros.

   - As tarefas são filtradas em duas categorias: "Favoritas" e "Outras". Isso é feito usando as propriedades favorite das tarefas e atráves do map é renderizar os componentes CardTasks correspondentes.

   - Componente Loading que faz uma verificação decidir se exibir o componente Loading ou o conteúdo da lista de tarefas.

6. Componente `Loading.tsx`

   - Criado o componente `Loading` para exibir um spinner durante operações assíncronas.

7. Componente `EditBgColor.tsx`

   - Criado o componente `EditBgColor` para selecionar e alterar cores de fundo.
   - Utilizado o pacote `Material UI` para criar um popover de seleção de cores.

8. Componente `GridContainer.tsx`

   - Adicionado o componente `GridContainer` para organizar as tarefas em colunas de forma responsiva.

9. Componente `Header.tsx`

   - Componente `Header` com logo e barra de busca.

10. Componente `Loading.tsx`

    - Criado o componente `Loading` para exibir um spinner durante operações assíncronas.

11. Contexto `TaskContext.tsx`

    - Implementado o contexto `TaskContext` para gerenciar o estado global das tarefas.
    - No contexto foi armazenado os state que armazena os dados das tarefas, os dados que são editados e o state para carregamento do spinner.
    - Criada a função assíncrona `getTasks` que faz a requisição GET dos Dados na Api e armazena no state tasks.

12. Types `types.tsx`
    Neste arquivo basicamente estão armazenadas os tipos e interfaces TypeScript utilizados na aplicação.
