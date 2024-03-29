CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	status BOOLEAN DEFAULT false,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS devices (
	id SERIAL PRIMARY KEY NOT NULL,
	token TEXT NOT NULL,
	status BOOLEAN DEFAULT true,
	browser_name VARCHAR(255),
	browser_version VARCHAR(255),
	os_name VARCHAR(255),
	os_version VARCHAR(255),
	user_id INTEGER REFERENCES users(id),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);