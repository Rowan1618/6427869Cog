-- Step 1: Drop the table if it exists
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE customers';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

-- Step 2: Create the table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    age NUMBER,
    loan_interest_rate NUMBER(5,2)
);
/

-- Step 3: Insert sample data
BEGIN
    INSERT INTO customers VALUES (1, 'Ravi Kumar', 65, 8.50);
    INSERT INTO customers VALUES (2, 'Anita Desai', 45, 9.25);
    INSERT INTO customers VALUES (3, 'George Mathew', 70, 7.75);
    INSERT INTO customers VALUES (4, 'Sunita Rani', 59, 9.00);
    INSERT INTO customers VALUES (5, 'Thomas John', 62, 8.00);
    COMMIT;
END;
/

-- Step 4: Apply 1% discount to loan interest for customers above 60
BEGIN
    FOR customer_rec IN (
        SELECT customer_id
        FROM customers
        WHERE age > 60
    ) LOOP
        UPDATE customers
        SET loan_interest_rate = loan_interest_rate - 1
        WHERE customer_id = customer_rec.customer_id;
    END LOOP;
    COMMIT;
END;
/

--  Step 5: Display all records
BEGIN
    FOR rec IN (
        SELECT customer_id, name, age, loan_interest_rate
        FROM customers
        ORDER BY customer_id
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
            'ID: ' || rec.customer_id ||
            ', Name: ' || rec.name ||
            ', Age: ' || rec.age ||
            ', Loan Interest: ' || rec.loan_interest_rate
        );
    END LOOP;
END;
/