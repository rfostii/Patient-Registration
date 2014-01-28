package com.springapp.mvc.mvc;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<User, Long> {
}
