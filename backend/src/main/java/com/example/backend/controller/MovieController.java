package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Movie;
import com.example.backend.repository.CategoriesRepository;
import com.example.backend.repository.MovieRepository;

@RestController
@RequestMapping("api/movie")
@CrossOrigin(origins = "http://localhost:5173")

public class MovieController {

    @Autowired
    CategoriesRepository categoriesRepository;
    // public CategoriesRepository(CategoriesRepository categoriesRepository){
        //     this.categoriesRepository = categoriesRepository;
        // }
        
    @Autowired
    MovieRepository movieRepository;
    // public MovieController(MovieRepository movieRepository) {
    //     this.movieRepository = movieRepository;
    // }

    @GetMapping
    public List <Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping("{id}")
    public Movie getMovieById(@PathVariable Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Movie createMovie(@RequestBody Movie movie, @RequestParam Long idKategori) {
        movie.setIdCategories(categoriesRepository.findById(idKategori).orElse(null));
        return movieRepository.save(movie);
    }


    @PutMapping("{id}")
    public String updateMovie(@PathVariable Long id) {
        movieRepository.findById(id).orElse(null);
        return "Movie updated successfully";
    }


    @DeleteMapping("{id}")
    public String deleteMovie(@PathVariable Long id) {
        movieRepository.deleteById(id);
        return "Movie deleted successfully";
    }

}