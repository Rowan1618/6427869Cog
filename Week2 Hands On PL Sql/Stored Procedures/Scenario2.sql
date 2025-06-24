-- Drop and create table
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE employees';
EXCEPTION
    WHEN OTHERS THEN NULL;
END;
/

CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    name VARCHAR2(100),
    department VARCHAR2(50),
    salary NUMBER(10,2)
);
/

-- Insert sample data
BEGIN
    INSERT INTO employees VALUES (1, 'Alice', 'HR', 50000);
    INSERT INTO employees VALUES (2, 'Bob', 'Sales', 60000);
    INSERT INTO employees VALUES (3, 'Charlie', 'Sales', 70000);
    INSERT INTO employees VALUES (4, 'David', 'IT', 65000);
    COMMIT;
END;
/

-- Create procedure to update bonus by department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN VARCHAR2,
    bonus_pct IN NUMBER
) AS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * (bonus_pct / 100))
    WHERE department = dept_name;
    COMMIT;
END;
/

-- Execute the procedure (give 10% bonus to Sales)
BEGIN
    UpdateEmployeeBonus('Sales', 10);
END;
/

-- View updated employee data
SELECT * FROM employees;