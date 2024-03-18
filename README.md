# api-Amanhecer

Aplicação utilizou as seguintes tecnologias, para o backend: express + postgres + typescript + typeORM, para o frontend: react + typescript

Para você conseguir rodar a aplicação localmente, para o back end é necessário dar um <strong>npm install</strong> e um <strong>npm run dev</strong>,é necessário também rodar as <i>migrações</i> das entidades que são por esse comando(faça os passos de migrações antes de tentar rodar): <strong>npm run typeorm migration:generate ./src/migrations/CreateTables -- -d ./src/data-source.ts</strong>, logo após esse comando é necessário rodar a migração que é por esse comando: <strong>npm run typeorm migration:run -- -d src/data-source</strong>,para o frontend são os mesmos comandos.