DROP TABLE IF EXISTS listo;

CREATE TABLE listo (
    id SERIAL PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    complete BOOLEAN NOT NULL DEFAULT false,
    checked BOOLEAN NOT NULL DEFAULT false,
    listOrder SERIAL
)
