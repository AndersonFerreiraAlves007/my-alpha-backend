# Backend

# Postgres script

## ref: https://x-team.com/blog/storing-secure-passwords-with-postgresql/


```SQL
CREATE TABLE public.users (
	"id" serial NOT NULL,
	"username" varchar(40) NOT NULL,
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
