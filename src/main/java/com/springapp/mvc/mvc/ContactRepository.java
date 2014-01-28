package com.springapp.mvc.mvc;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<User, Long> {
}
