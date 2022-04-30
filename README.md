
<h1 align="center">Trabalho em grupo do Alpha Edtech</h1>

<h2 align="center">Integrantes</h2>

---

- Anderson Ferreira Alves

    <a href="" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
    <a href="" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 	  <a href="" target="_blank"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a>
    <a href="" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" target="_blank"></a>
    <a href = ""><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

- Bruno



- Jaime



- João Lucas



- Wash

---
<h2 align="center">Desafio</h2>

---

Escopo

- Crie um novo projeto em react no github chamado my-alpha-profiler.
- A aplicação será de uma página só, e deverá conter o seguinte escopo:


- Banco de dados: PostgreSQL;
- Backend API: NodeJS (Express e livre escolha de libs e dependências);
- Frontend: ReactJS (projeto my-alpha-profiler).

---
<h2 align="center">Tecnologias utilizadas</h2>

---

<div style="display: inline_block"><br>
  <img align="center" alt="Rafa-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="Rafa-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
  <img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
  <img align="center" alt="Rafa-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg" />
</div>

<br/>

---
<h2 align="center">Especificações do backend</h2>

---

- Crie um novo projeto em nodejs no github chamado my-alpha-backend;
- Crie um módulo chamado profiler no seu back-end.


- O módulo deve ser capaz de contactar o módulo de database, realizar as seguintes operações:

  1. Inserir um usuário = user.insert (nome, senha, foto, data de nascimento, e-mail)
  2. Deletar um usuário = user.delete
  3. Editar um usuário = user.edit
  4. Validar um usuário = user.validate
  5. Visualizar um usuário = user.view (por id, nome, e-mail)

- Os seguintes campos devem ser validados pelo back-end no ato de INSERIR UM USUÁRIO (user.insert):

  1. senha (8 caracteres contendo 1 número)
  2. email ( * @ domain .com )
  2. data de nascimento ( DD/MM/AAAA )

- O controle de sessão deve ser realizado com JWT.

---
<h2 align="center">Especificações do frontend</h2>

---

  Acesse o repositório do frontend deste exercícios para mais detalhes:

[Lisnk do frontend](https://github.com/AndersonFerreiraAlves007/my-alpha-profiler)

---
<h2 align="center">Script postgres</h2>

---

```SQL
CREATE TABLE public.users (
	"id" serial NOT NULL,
	"name" varchar(80) NOT NULL,
	"email" varchar(320) NOT NULL UNIQUE,
	"password" varchar(80) NOT NULL,
	"image" TEXT NOT NULL,
	"birth_date" DATE NOT NULL,
	"create_at" timestamp with time zone,
	"create_by" integer,
	"update_at" timestamp with time zone,
	"update_by" integer,
	"delete_at" timestamp with time zone,
	"delete_by" integer,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
```
