-- CREATE TABLE IF NOT EXISTS "users" (
-- 	"id" serial(255) NOT NULL UNIQUE,
-- 	"username" varchar(255) NOT NULL UNIQUE,
-- 	"password" varchar(255) NOT NULL,
-- 	CONSTRAINT "users_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE IF NOT EXISTS "orgs" (
-- 	"id" serial(255) NOT NULL,
-- 	"name" varchar(255) NOT NULL UNIQUE,
-- 	"user_id" varchar(255) NOT NULL UNIQUE,
-- 	CONSTRAINT "orgs_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE IF NOT EXISTS "topics" (
-- 	"id" serial(255) NOT NULL,
-- 	"name" varchar(255) NOT NULL UNIQUE,
-- 	"description" varchar(255) NOT NULL UNIQUE,
-- 	CONSTRAINT "topics_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );



-- CREATE TABLE IF NOT EXISTS "items" (
-- 	"id" serial NOT NULL,
-- 	"name" varchar(255) NOT NULL UNIQUE,
-- 	"description" varchar(255) NOT NULL UNIQUE,
-- 	"votes" integer(255) NOT NULL,
-- 	CONSTRAINT "items_pk" PRIMARY KEY ("id")
-- ) WITH (
--   OIDS=FALSE
-- );




-- ALTER TABLE "orgs" ADD CONSTRAINT "orgs_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

-- ALTER TABLE "topics" ADD CONSTRAINT "topics_fk0" FOREIGN KEY ("id") REFERENCES "items"("id");


