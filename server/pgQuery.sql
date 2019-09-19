CREATE TABLE "users" (
	"id" serial NOT NULL UNIQUE,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "orgs" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	CONSTRAINT "orgs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "topics" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"orgs_id" integer NOT NULL,
	CONSTRAINT "topics_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "items" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"vote" integer NOT NULL,
	"topics_id" integer NOT NULL,
	"users_id" integer NOT NULL,
	CONSTRAINT "items_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "userorg" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"org_id" integer NOT NULL,
	CONSTRAINT "userorg_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "topics" ADD CONSTRAINT "topics_fk0" FOREIGN KEY ("orgs_id") REFERENCES "orgs"("id");

ALTER TABLE "items" ADD CONSTRAINT "items_fk0" FOREIGN KEY ("topics_id") REFERENCES "topics"("id");
ALTER TABLE "items" ADD CONSTRAINT "items_fk1" FOREIGN KEY ("users_id") REFERENCES "users"("id");

ALTER TABLE "userorg" ADD CONSTRAINT "userorg_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");
ALTER TABLE "userorg" ADD CONSTRAINT "userorg_fk1" FOREIGN KEY ("org_id") REFERENCES "orgs"("id");
