-- Drop and create table
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE accounts';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    holder_name VARCHAR2(100),
    balance NUMBER(10,2)
);
/

-- Insert sample accounts
BEGIN
    INSERT INTO accounts VALUES (101, 'Ravi Kumar', 8000);
    INSERT INTO accounts VALUES (102, 'Anita Desai', 3000);
    COMMIT;
END;
/

-- Create fund transfer procedure
CREATE OR REPLACE PROCEDURE TransferFunds(
    from_acc IN NUMBER,
    to_acc IN NUMBER,
    amount IN NUMBER
) AS
    insufficient_funds EXCEPTION;
    from_balance NUMBER;
BEGIN
    -- Get source account balance
    SELECT balance INTO from_balance FROM accounts WHERE account_id = from_acc;

    -- Check sufficient balance
    IF from_balance < amount THEN
        RAISE insufficient_funds;
    END IF;

    -- Deduct from source
    UPDATE accounts SET balance = balance - amount WHERE account_id = from_acc;

    -- Add to destination
    UPDATE accounts SET balance = balance + amount WHERE account_id = to_acc;

    COMMIT;

EXCEPTION
    WHEN insufficient_funds THEN
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in account ' || from_acc);
END;
/

-- Transfer ₹2000 from Ravi (101) to Anita (102)
BEGIN
    TransferFunds(101, 102, 2000);
END;
/

-- View final balances
SELECT * FROM accounts;