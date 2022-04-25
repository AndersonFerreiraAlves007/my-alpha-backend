# Backend

# Postgres script

```SQL
CREATE SCHEMA alpha_profiler;

CREATE EXTENSION pgcrypto;

CREATE TABLE alpha_profiler.user(
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	username VARCHAR(50) NOT NULL,
	password TEXT NOT NULL,
	email VARCHAR(50) NOT NULL,
    image VARCHAR(100) NOT NULL,
	date_birth DATE NOT NULL
)

```
