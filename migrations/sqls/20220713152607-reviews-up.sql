CREATE TABLE reviews (
    id SERIAL PRIMARY KEY NOT NULL,
    resturant_id INTEGER NOT NULL REFERENCES resturants (id) ON DELETE CASCADE ,
    name VARCHAR(50),
    review TEXT NOT NULL,
    rate INTEGER NOT NULL CHECK (rate >= 0 and rate <= 5)
);