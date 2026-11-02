package com.example.movies;

public class Movie {
    private Long id;
    private String title;
    private String genre;
    private int year;
    private String synopsis;
    private String posterUrl;
    private double rating;

    public Movie() { }

    public Movie(Long id, String title, String genre, int year, String synopsis, String posterUrl, double rating) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.synopsis = synopsis;
        this.posterUrl = posterUrl;
        this.rating = rating;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getGenre() { return genre; }
    public int getYear() { return year; }
    public String getSynopsis() { return synopsis; }
    public String getPosterUrl() { return posterUrl; }
    public double getRating() { return rating; }
}
