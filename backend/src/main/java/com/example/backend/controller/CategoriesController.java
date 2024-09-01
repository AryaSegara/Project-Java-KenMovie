package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Categories;
import com.example.backend.repository.CategoriesRepository;

@RestController
@RequestMapping("api/categories")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoriesController {

    @Autowired
    private CategoriesRepository categoriesRepository;

    @GetMapping
    public List<Categories> getAllCategories() {
        return categoriesRepository.findAll();
    }
    
}
