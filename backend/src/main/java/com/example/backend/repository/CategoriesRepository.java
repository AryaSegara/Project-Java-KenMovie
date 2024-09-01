package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Categories;

public interface CategoriesRepository extends JpaRepository<Categories ,Long>{
    
}
