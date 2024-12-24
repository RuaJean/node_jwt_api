--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Homebrew)
-- Dumped by pg_dump version 14.15 (Homebrew)

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
-- Name: enum_Solicituds_estado; Type: TYPE; Schema: public; Owner: jeanrua
--

CREATE TYPE public."enum_Solicituds_estado" AS ENUM (
    'abierta',
    'cerrada'
);


ALTER TYPE public."enum_Solicituds_estado" OWNER TO jeanrua;

--
-- Name: enum_Usuarios_rol; Type: TYPE; Schema: public; Owner: jeanrua
--

CREATE TYPE public."enum_Usuarios_rol" AS ENUM (
    'empleado',
    'administrador'
);


ALTER TYPE public."enum_Usuarios_rol" OWNER TO jeanrua;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Empleados; Type: TABLE; Schema: public; Owner: jeanrua
--

CREATE TABLE public."Empleados" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    puesto character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Empleados" OWNER TO jeanrua;

--
-- Name: Empleados_id_seq; Type: SEQUENCE; Schema: public; Owner: jeanrua
--

CREATE SEQUENCE public."Empleados_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Empleados_id_seq" OWNER TO jeanrua;

--
-- Name: Empleados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jeanrua
--

ALTER SEQUENCE public."Empleados_id_seq" OWNED BY public."Empleados".id;


--
-- Name: Solicituds; Type: TABLE; Schema: public; Owner: jeanrua
--

CREATE TABLE public."Solicituds" (
    id integer NOT NULL,
    descripcion text NOT NULL,
    estado public."enum_Solicituds_estado" NOT NULL,
    id_empleado integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Solicituds" OWNER TO jeanrua;

--
-- Name: Solicituds_id_seq; Type: SEQUENCE; Schema: public; Owner: jeanrua
--

CREATE SEQUENCE public."Solicituds_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Solicituds_id_seq" OWNER TO jeanrua;

--
-- Name: Solicituds_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jeanrua
--

ALTER SEQUENCE public."Solicituds_id_seq" OWNED BY public."Solicituds".id;


--
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: jeanrua
--

CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    rol public."enum_Usuarios_rol" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Usuarios" OWNER TO jeanrua;

--
-- Name: Usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: jeanrua
--

CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Usuarios_id_seq" OWNER TO jeanrua;

--
-- Name: Usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jeanrua
--

ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;


--
-- Name: empleados; Type: TABLE; Schema: public; Owner: jeanrua
--

CREATE TABLE public.empleados (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    puesto character varying(255) NOT NULL
);


ALTER TABLE public.empleados OWNER TO jeanrua;

--
-- Name: empleados_id_seq; Type: SEQUENCE; Schema: public; Owner: jeanrua
--

CREATE SEQUENCE public.empleados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.empleados_id_seq OWNER TO jeanrua;

--
-- Name: empleados_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jeanrua
--

ALTER SEQUENCE public.empleados_id_seq OWNED BY public.empleados.id;


--
-- Name: solicitudes; Type: TABLE; Schema: public; Owner: jeanrua
--

CREATE TABLE public.solicitudes (
    id integer NOT NULL,
    descripcion text NOT NULL,
    estado character varying(50) NOT NULL,
    id_empleado integer,
    CONSTRAINT solicitudes_estado_check CHECK (((estado)::text = ANY ((ARRAY['abierta'::character varying, 'cerrada'::character varying])::text[])))
);


ALTER TABLE public.solicitudes OWNER TO jeanrua;

--
-- Name: solicitudes_id_seq; Type: SEQUENCE; Schema: public; Owner: jeanrua
--

CREATE SEQUENCE public.solicitudes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.solicitudes_id_seq OWNER TO jeanrua;

--
-- Name: solicitudes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jeanrua
--

ALTER SEQUENCE public.solicitudes_id_seq OWNED BY public.solicitudes.id;


--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: jeanrua
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    rol character varying(50) NOT NULL,
    CONSTRAINT usuarios_rol_check CHECK (((rol)::text = ANY ((ARRAY['empleado'::character varying, 'administrador'::character varying])::text[])))
);


ALTER TABLE public.usuarios OWNER TO jeanrua;

--
-- Name: usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: jeanrua
--

CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.usuarios_id_seq OWNER TO jeanrua;

--
-- Name: usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: jeanrua
--

ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;


--
-- Name: Empleados id; Type: DEFAULT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Empleados" ALTER COLUMN id SET DEFAULT nextval('public."Empleados_id_seq"'::regclass);


--
-- Name: Solicituds id; Type: DEFAULT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Solicituds" ALTER COLUMN id SET DEFAULT nextval('public."Solicituds_id_seq"'::regclass);


--
-- Name: Usuarios id; Type: DEFAULT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);


--
-- Name: empleados id; Type: DEFAULT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.empleados ALTER COLUMN id SET DEFAULT nextval('public.empleados_id_seq'::regclass);


--
-- Name: solicitudes id; Type: DEFAULT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.solicitudes ALTER COLUMN id SET DEFAULT nextval('public.solicitudes_id_seq'::regclass);


--
-- Name: usuarios id; Type: DEFAULT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);


--
-- Name: Empleados Empleados_pkey; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Empleados"
    ADD CONSTRAINT "Empleados_pkey" PRIMARY KEY (id);


--
-- Name: Solicituds Solicituds_pkey; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Solicituds"
    ADD CONSTRAINT "Solicituds_pkey" PRIMARY KEY (id);


--
-- Name: Usuarios Usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_email_key" UNIQUE (email);


--
-- Name: Usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);


--
-- Name: empleados empleados_pkey; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.empleados
    ADD CONSTRAINT empleados_pkey PRIMARY KEY (id);


--
-- Name: solicitudes solicitudes_pkey; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.solicitudes
    ADD CONSTRAINT solicitudes_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_email_key; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- Name: solicitudes solicitudes_id_empleado_fkey; Type: FK CONSTRAINT; Schema: public; Owner: jeanrua
--

ALTER TABLE ONLY public.solicitudes
    ADD CONSTRAINT solicitudes_id_empleado_fkey FOREIGN KEY (id_empleado) REFERENCES public.empleados(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

