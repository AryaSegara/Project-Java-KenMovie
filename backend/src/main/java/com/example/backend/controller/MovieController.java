package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Movie;
import com.example.backend.repository.MovieRepository;

@RestController
@RequestMapping("api/movie")

public class MovieController {
    MovieRepository movieRepository;

    @Autowired
    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @GetMapping
    public List <Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @PostMapping
    public Movie createMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    

}