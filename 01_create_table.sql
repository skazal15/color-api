CREATE SEQUENCE color_id_seq;
CREATE TABLE public.color(
    id integer NOT NULL DEFAULT nextval('color_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_d15e531d60a550fbf23e1832343" PRIMARY KEY (id)
);
