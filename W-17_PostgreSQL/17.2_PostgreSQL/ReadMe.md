# SQL JOINs Explained for Node.js (PostgreSQL)

## ✪ INNER JOIN
Returns records that have matching values in both tables.

```sql
-- Only returns users who have matching addresses
SELECT users.name, addresses.city
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;
```

---

## ✪ LEFT JOIN
Returns all records from the left table (users), and matched records from the right table (addresses). Returns `NULL` for non-matching right records.

```sql
-- Returns all users, and their address if it exists
SELECT users.name, addresses.city
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;
```

---

## ✪ RIGHT JOIN
Returns all records from the right table (addresses), and matched records from the left table (users). Returns `NULL` for non-matching left records.

```sql
-- Returns all addresses, and the user info if matched
SELECT users.name, addresses.city
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;
```

---

## ✪ FULL JOIN
Returns all records when there is a match in either left or right table. If no match, `NULL` is returned on the side that has no match.

```sql
-- Combines LEFT and RIGHT JOIN: returns all users and all addresses
SELECT users.name, addresses.city
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;
```

---

