--  Step 1: Drop old tables if they exist
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE loans';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE output_log';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

--  Step 2: Create loans table
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    due_date DATE
);
/

-- 📋 Step 3: Create output_log table for messages
CREATE TABLE output_log (
    message VARCHAR2(500)
);
/

--  Step 4: Insert sample loan data
BEGIN
    -- due within next 30 days
    INSERT INTO loans VALUES (1, 'Ravi Kumar', SYSDATE + 5);
    INSERT INTO loans VALUES (2, 'Anita Desai', SYSDATE + 15);
    -- due after 30 days
    INSERT INTO loans VALUES (3, 'George Mathew', SYSDATE + 45);
    -- already due
    INSERT INTO loans VALUES (4, 'Sunita Rani', SYSDATE - 2);
    INSERT INTO loans VALUES (5, 'Thomas John', SYSDATE + 25);
    COMMIT;
END;
/

--  Step 5: Insert reminder messages for loans due in next 30 days
BEGIN
    FOR loan_rec IN (
        SELECT loan_id, customer_name, due_date
        FROM loans
        WHERE due_date BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        INSERT INTO output_log VALUES (
            'Reminder: Loan ID ' || loan_rec.loan_id || 
            ' for customer ' || loan_rec.customer_name ||
            ' is due on ' || TO_CHAR(loan_rec.due_date, 'DD-MON-YYYY')
        );
    END LOOP;

    COMMIT;
END;
/

--  Step 6: View the reminder messages
SELECT * FROM output_log;