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
-- Data for Name: Empleados; Type: TABLE DATA; Schema: public; Owner: jeanrua
--

INSERT INTO public."Empleados" VALUES (1, 'Jean Rúa', 'Ingeniero de Software - Desarrollador fullstack', '2024-12-23 21:49:32.84-05', '2024-12-23 21:49:32.84-05');


--
-- Data for Name: Solicituds; Type: TABLE DATA; Schema: public; Owner: jeanrua
--

INSERT INTO public."Solicituds" VALUES (2, 'Prueba solicitud', 'abierta', 1, '2024-12-23 22:15:46.744-05', '2024-12-23 22:15:46.744-05');


--
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: jeanrua
--

INSERT INTO public."Usuarios" VALUES (1, 'Jean', 'jeank1415@gmail.com', '$2b$10$isB7B18IEsOQfEzVLNYUEOLJJUlaFeOOkZOAa37nCgxqWUIXP1FO.', 'administrador', '2024-12-23 16:57:02.758-05', '2024-12-23 16:57:02.758-05');
INSERT INTO public."Usuarios" VALUES (2, 'Carlos', 'carlos@gmail.com', '$2b$10$SeSDYHVikafBx1S3teU9ce5ibGlYVfygZvrRxTVBi78zV4KB5Yije', 'empleado', '2024-12-23 17:07:31.097-05', '2024-12-23 17:07:31.097-05');
INSERT INTO public."Usuarios" VALUES (3, 'Jean', 'jean@gmail.com', '$2b$10$w8Dh5LeQl0pIHLFpataaUe8uolDL8g9fbwie5mFs.PcTl54mkIui6', 'administrador', '2024-12-23 21:46:03.5-05', '2024-12-23 21:46:03.5-05');
INSERT INTO public."Usuarios" VALUES (4, 'Jean', 'jean1@gmail.com', '$2b$10$weZ/wMC9bo6GMCzkKEQ5d.FkqcE23sZ7nJ0V38TMnTXeyTovSsZc6', 'empleado', '2024-12-23 21:47:41.249-05', '2024-12-23 21:47:41.249-05');


--
-- Data for Name: empleados; Type: TABLE DATA; Schema: public; Owner: jeanrua
--



--
-- Data for Name: solicitudes; Type: TABLE DATA; Schema: public; Owner: jeanrua
--



--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: jeanrua
--



--
-- Name: Empleados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jeanrua
--

SELECT pg_catalog.setval('public."Empleados_id_seq"', 1, true);


--
-- Name: Solicituds_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jeanrua
--

SELECT pg_catalog.setval('public."Solicituds_id_seq"', 2, true);


--
-- Name: Usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jeanrua
--

SELECT pg_catalog.setval('public."Usuarios_id_seq"', 4, true);


--
-- Name: empleados_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jeanrua
--

SELECT pg_catalog.setval('public.empleados_id_seq', 1, false);


--
-- Name: solicitudes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jeanrua
--

SELECT pg_catalog.setval('public.solicitudes_id_seq', 1, false);


--
-- Name: usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: jeanrua
--

SELECT pg_catalog.setval('public.usuarios_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

