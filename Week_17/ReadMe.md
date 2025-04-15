# PostgreSQL in Web Development (MERN → PERN Stack)

## Overview

This project demonstrates how to use **PostgreSQL** as the database in a web application built with the **PERN stack**:

- **P**: PostgreSQL (Database)
- **E**: Express.js (Backend Framework)
- **R**: React.js (Frontend Framework)
- **N**: Node.js (Runtime Environment)

PostgreSQL is a robust, open-source relational database system, ideal for structured data and complex queries.

---

## Why Use PostgreSQL Instead of MongoDB?

- 🧠 Strong Data Integrity (Relational)
- 🔒 ACID Compliance
- 📦 Rich Data Types (JSON, Arrays)
- 📈 Better for SQL-based reporting and analytics
- 🔌 Full-text Search & Extensions (PostGIS, etc.)

---

## Tech Stack

- **Frontend**: React.js + Axios
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL
- **ORM**: Prisma or Sequelize (optional)

---

## Setup Instructions

``` bash/terminal commands 
sudo apt update
sudo apt install postgresql postgresql-contrib


==================================================================================================
==================================================================================================
==================================================================================================


## MongoDB (Native)
➤ Schema enforced: ❌ No (schemaless)
➤ Validation: Optional or manual
➤ Use case: Flexible inserts
➤ Field control: None by default

## Mongoose (ODM)
➤ Schema enforced: ✅ Yes (schema-based)
➤ Validation: Built-in
➤ Use case: Structured development
➤ Field control: Strict by default

