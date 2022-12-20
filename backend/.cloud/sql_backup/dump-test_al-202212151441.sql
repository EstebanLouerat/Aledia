--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0 (Ubuntu 15.0-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)

-- Started on 2022-12-15 14:41:47 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3369 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 16419)
-- Name: split_entry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.split_entry (
    split_name character varying NOT NULL,
    lot_id integer NOT NULL,
    laser_tag character varying NOT NULL,
    split_group character varying NOT NULL,
    split_group_desc character varying NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.split_entry OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16418)
-- Name: split_entry_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.split_entry_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.split_entry_id_seq OWNER TO postgres;

--
-- TOC entry 3370 (class 0 OID 0)
-- Dependencies: 215
-- Name: split_entry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.split_entry_id_seq OWNED BY public.split_entry.id;


--
-- TOC entry 219 (class 1259 OID 16436)
-- Name: split_history_splith_history_pk_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.split_history_splith_history_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.split_history_splith_history_pk_seq OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16413)
-- Name: split_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.split_history (
    split_history_pk integer DEFAULT nextval('public.split_history_splith_history_pk_seq'::regclass) NOT NULL,
    split_refid integer NOT NULL,
    split_lot_id character varying(40),
    split_fk_wafer integer NOT NULL,
    split_group integer,
    split_group_desc character varying(200),
    split_insert_job character varying(40),
    split_date_updating timestamp without time zone,
    split_name character varying(40),
    split_filename character varying(200),
    split_user character varying(200)
);


ALTER TABLE public.split_history OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16509)
-- Name: split_history_refid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.split_history_refid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.split_history_refid_seq OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16499)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    "isAdmin" boolean NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16498)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3371 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 218 (class 1259 OID 16426)
-- Name: wafer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.wafer (
    pk_wafer integer NOT NULL,
    wafer_name text,
    date_updating timestamp without time zone,
    fk_wafer_status integer,
    fk_wafer_scrap_code integer,
    fk_substrat_lot integer,
    substrat_box_name text,
    substrat_slot integer,
    substrat_lasermark text,
    ttv real,
    comments text,
    cops_0_16_micron real,
    part_0_16_micron real,
    cops_0_2_micron real,
    part_0_2_micron real,
    fk_wafer_state integer,
    fk_localisation integer,
    fk_wafer_grade integer,
    fk_substrat_specification integer,
    fk_substrat_delivery integer,
    "stir_all_sites_1_µm" real,
    "polished_thickness_µm" real,
    scrap_date date,
    fk_wafer_qualif integer,
    fk_product integer,
    wafer_insert_job text,
    wafer_date_updating timestamp without time zone,
    "wafer_name   " character varying(50),
    "date_updating          " character varying(50),
    "substrat_lasermark            " character varying(50),
    "ttv   " character varying(50),
    "wafer_insert_job     " character varying(50),
    column28 character varying(50)
);


ALTER TABLE public.wafer OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16425)
-- Name: wafer_pk_wafer_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.wafer_pk_wafer_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wafer_pk_wafer_seq OWNER TO postgres;

--
-- TOC entry 3372 (class 0 OID 0)
-- Dependencies: 217
-- Name: wafer_pk_wafer_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.wafer_pk_wafer_seq OWNED BY public.wafer.pk_wafer;


--
-- TOC entry 3198 (class 2604 OID 16422)
-- Name: split_entry id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.split_entry ALTER COLUMN id SET DEFAULT nextval('public.split_entry_id_seq'::regclass);


--
-- TOC entry 3200 (class 2604 OID 16502)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3199 (class 2604 OID 16429)
-- Name: wafer pk_wafer; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wafer ALTER COLUMN pk_wafer SET DEFAULT nextval('public.wafer_pk_wafer_seq'::regclass);


--
-- TOC entry 3357 (class 0 OID 16419)
-- Dependencies: 216
-- Data for Name: split_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.split_entry (split_name, lot_id, laser_tag, split_group, split_group_desc, id) FROM stdin;
NAME	123	LDFBNA1234	group_1	group_desc_2	1
NAME	124	DANOKN4563	group_1	group_desc_2	2
NAME	125	LDFBJN1523	group_2	group_desc_2	3
NAME	126	DOINH5374	group_2	group_desc_1	4
NAME	127	GDSBDA1234	group_1	group_desc_1	5
NAME	128	LDFBNA1896	group_3	group_desc_1	6
\.


--
-- TOC entry 3355 (class 0 OID 16413)
-- Dependencies: 214
-- Data for Name: split_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.split_history (split_history_pk, split_refid, split_lot_id, split_fk_wafer, split_group, split_group_desc, split_insert_job, split_date_updating, split_name, split_filename, split_user) FROM stdin;
\.


--
-- TOC entry 3362 (class 0 OID 16499)
-- Dependencies: 221
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password, "isAdmin", "createdAt", "updatedAt") FROM stdin;
2	test@gmail.com	1234	f	2022-11-09 15:28:41.134+01	2022-11-09 15:28:41.134+01
3	phil@gmail.com	coi	t	2022-11-09 15:29:07.4+01	2022-11-09 15:29:07.4+01
\.


--
-- TOC entry 3359 (class 0 OID 16426)
-- Dependencies: 218
-- Data for Name: wafer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.wafer (pk_wafer, wafer_name, date_updating, fk_wafer_status, fk_wafer_scrap_code, fk_substrat_lot, substrat_box_name, substrat_slot, substrat_lasermark, ttv, comments, cops_0_16_micron, part_0_16_micron, cops_0_2_micron, part_0_2_micron, fk_wafer_state, fk_localisation, fk_wafer_grade, fk_substrat_specification, fk_substrat_delivery, "stir_all_sites_1_µm", "polished_thickness_µm", scrap_date, fk_wafer_qualif, fk_product, wafer_insert_job, wafer_date_updating, "wafer_name   ", "date_updating          ", "substrat_lasermark            ", "ttv   ", "wafer_insert_job     ", column28) FROM stdin;
1	D20S1381-P22	\N	\N	\N	\N	\N	\N	946BA156MMH1	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
2	E20S1381-P15	\N	\N	\N	\N	\N	\N	123BA156MMH2	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
3	F20S1381-P55	\N	\N	\N	\N	\N	\N	892BA156MMH5	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- TOC entry 3373 (class 0 OID 0)
-- Dependencies: 215
-- Name: split_entry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.split_entry_id_seq', 6, true);


--
-- TOC entry 3374 (class 0 OID 0)
-- Dependencies: 222
-- Name: split_history_refid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.split_history_refid_seq', 12, true);


--
-- TOC entry 3375 (class 0 OID 0)
-- Dependencies: 219
-- Name: split_history_splith_history_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.split_history_splith_history_pk_seq', 9, true);


--
-- TOC entry 3376 (class 0 OID 0)
-- Dependencies: 220
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- TOC entry 3377 (class 0 OID 0)
-- Dependencies: 217
-- Name: wafer_pk_wafer_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.wafer_pk_wafer_seq', 3, true);


--
-- TOC entry 3206 (class 2606 OID 16439)
-- Name: wafer pk_wafer; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wafer
    ADD CONSTRAINT pk_wafer PRIMARY KEY (pk_wafer);


--
-- TOC entry 3202 (class 2606 OID 16433)
-- Name: split_history split_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.split_history
    ADD CONSTRAINT split_history_pkey PRIMARY KEY (split_history_pk);


--
-- TOC entry 3204 (class 2606 OID 16435)
-- Name: split_history split_history_split_ref_id_wafer_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.split_history
    ADD CONSTRAINT split_history_split_ref_id_wafer_id_key UNIQUE (split_refid, split_fk_wafer, split_group);


--
-- TOC entry 3208 (class 2606 OID 16441)
-- Name: wafer substrat_lasermark_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wafer
    ADD CONSTRAINT substrat_lasermark_unique UNIQUE (substrat_lasermark);


--
-- TOC entry 3212 (class 2606 OID 16506)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3210 (class 2606 OID 16443)
-- Name: wafer wafer_name_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.wafer
    ADD CONSTRAINT wafer_name_unique UNIQUE (wafer_name);


-- Completed on 2022-12-15 14:41:48 CET

--
-- PostgreSQL database dump complete
--

