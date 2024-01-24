
# Criando BackEnd

[backend.webm](https://github.com/delanoquirino/core-notes/assets/101298043/4cf0c456-c4fb-4df8-87bc-4e713e573854)

* O nome para o schemma foi utilizado backend2 pois ja tinha criado um chamado backend para o projeto.
* No final do video usar essa configuração - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'delano123' - para trablhar com MySQL localmente.

1. Arquivo `index.js`

- Criada uma instância do objeto express.
- Implementado o modo JSON para processar as requisições e o CORS para evitar conflitos de acesso ao rodar localmente o banco de dados.
- Utiliza o arquivo de rotas tasks.js para manipular as requisições relacionadas às tarefas.
- Determina que o aplicativo utilize a porta 8800 para escutar as requisições.

2. Arquivo `db.js`

- Configuração da conexão com o banco de dados MySQL atráves das credenciais host, user, password, backend.

3. Arquivo `tasks.js` (pasta routes)

- Criada uma constante router para indicar que esta é uma rota.

- Atribui ao router o método GET, com o primeiro parâmetro indicando que será na raiz da rota. No segundo parâmetro, chama a função getTask, contendo a lógica para lidar com a requisição GET.

- Atribui ao router o método POST com a rota "/". Quando essa rota é acionada, a função addTask é chamada para lidar com a requisição de adição de uma nova tarefa.

- Atribui ao router o método PUT com a rota "/:id". Esta rota permite a atualização de dados de uma tarefa específica. A função updateTask é chamada para tratar essa requisição.

- Atribui ao router o método DELETE com a rota "/:id". Essa rota possibilita a exclusão de uma tarefa específica. A função deleteTask é acionada para processar a requisição.

- Atribui ao router o método PUT com a rota "/tasks/:id/color". Ao acessar essa rota, é possível atualizar a cor de fundo de uma tarefa específica. A função updateTaskColor é responsável por lidar com essa requisição.

4. `task.js` (pasta controllers)

- Implementação das funções que vão realizar as operações relacionadas a tarefas.

- `getTask`: Realiza uma consulta ao banco de dados para obter todas as entradas da tabela tasks. A string SQL de consulta é definida, e a função query é usada para executar essa consulta. Em caso de sucesso, os dados são retornados como um JSON na resposta HTTP (status 200), e em caso de erro, o JSON contendo o erro é retornado na resposta.

- `addTask`: Cria uma nova entrada à tabela tasks. A string SQL de inserção, especificando as colunas (title, task, favorite e bgcolor) e utilizando placeholders para os valores. Os valores a serem inseridos são extraídos do corpo da requisição (req.body). Em seguida, a função query é utilizada para executar a inserção no banco de dados. Se ocorrer um erro retorna um JSON contendo o erro. Em caso de sucesso, ela retorna um JSON, com um status HTTP 200.

- `updateTask`: Faz uma atualização de uma entrada na tabela tasks. A string SQL de atualização, que modifica os campos title, task, favorite e bgcolor com os valores fornecidos no corpo da requisição (req.body), onde a condição de atualização é baseada no id especificado como parâmetro de rota (req.params.id). A função query é então utilizada para executar a atualização no banco de dados, com os valores e o id passados como parâmetros.

- `deleteTask`: A função que lidar com a exclusão de uma entrada na tabela tasks e faz isso através da entrada com base no id fornecido como parâmetro de rota (req.params.id).

- `updateTaskColor`: A função que atualiza da a entrada "bgcolor" da tabela tasks. Modifica o campo bgcolor com o valor fornecido no corpo da requisição (req.body.bgcolor), onde a condição de atualização é baseada no id especificado como parâmetro de rota (req.params.id). Os valores a serem atualizados são armazenados no array values, que é passado como parâmetro para a função query.
