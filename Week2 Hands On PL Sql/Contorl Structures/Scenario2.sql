-- Step1: Drop customers table if it already exists
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE customers';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

--  Step 2: Create the customers table with balance and is_vip fields
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    balance NUMBER(10,2),
    is_vip VARCHAR2(5) DEFAULT 'FALSE'
);
/

--  Step 3: Insert sample customer data
BEGIN
    INSERT INTO customers VALUES (1, 'Ravi Kumar', 9500, 'FALSE');
    INSERT INTO customers VALUES (2, 'Anita Desai', 12000, 'FALSE');
    INSERT INTO customers VALUES (3, 'George Mathew', 50000, 'FALSE');
    INSERT INTO customers VALUES (4, 'Sunita Rani', 10000, 'FALSE');
    INSERT INTO customers VALUES (5, 'Thomas John', 15000, 'FALSE');
    COMMIT;
END;
/

--  Step 4: Promote customers with balance > 10000 to VIP
BEGIN
    FOR cust IN (
        SELECT customer_id
        FROM customers
        WHERE balance > 10000
    ) LOOP
        UPDATE customers
        SET is_vip = 'TRUE'
        WHERE customer_id = cust.customer_id;
    END LOOP;
    
    COMMIT;
END;
/

--  Step 5: View the final customer records
SELECT * FROM customers;