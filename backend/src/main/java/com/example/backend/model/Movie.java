package com.example.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column (name = "image" , length = 1000)
    private String image;

    private String year;

    @Column (name = "description" , length = 1000)
    private String description;

    private String durasi;

    private String language;

    private Integer rate;

    @ManyToOne
    @JoinColumn(name = "id_kategori", referencedColumnName = "id")
    private Categories idCategories;

}
