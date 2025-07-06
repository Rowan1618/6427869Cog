package com.example.comparison.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.comparison.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}