# Ad insights platform

Ongoing full stack project to create ad insights for particular user needs. Built with Spring boot 3 + React with Vite,
PostgreSQL for the database and docker for containerization.

## Frontend - React + Vite

### Architecture

Feature based architecture with parts of a shared layer for reusable components.

Building with Chakra UI and D3 for graph visualization.

-------------------------------------------------------------------------------------------------
## Backend - Spring Boot + PostgreSQL

### Architecture

Utilizing multi layered architecture with Spring boot project. 

Following recommended architecture for Spring boot to organize and structure code concisely

#### Components

- **Controllers**: Intended for controlling which endpoints exist, can be called, and data to return
- **Services**: Intended for business logic layer
- **Repositories**: Intended for interacting with database tables
- **Models**: Intended for defining db table schemas using JPA
