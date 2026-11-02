package com.example.movies;

import org.springframework.stereotype.Service;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

@Service
public class MovieService {
    private final List<Movie> movies = Collections.unmodifiableList(Arrays.asList(
        new Movie(1L, "The Matrix", "Science Fiction", 1999, "Un hacker descubre una realidad oculta y se une a una rebelión contra máquinas inteligentes.", "/assets/posters/cinema.svg", 8.7),
        new Movie(2L, "Spirited Away", "Animación", 2001, "Una niña entra en un mundo gobernado por dioses, brujas y espíritus.", "/assets/posters/cinema.svg", 8.6),
        new Movie(3L, "Interstellar", "Aventura", 2014, "Exploradores viajan por un agujero de gusano para asegurar la supervivencia humana.", "/assets/posters/cinema.svg", 8.6),
        new Movie(4L, "The Grand Budapest Hotel", "Comedia", 2014, "Un conserje y su botones se hacen amigos mientras atraviesan una Europa cambiante.", "/assets/posters/cinema.svg", 8.1),
        new Movie(5L, "The Shawshank Redemption", "Drama", 1994, "Un hombre encuentra esperanza y amistad durante una larga condena injusta.", "/assets/posters/shawshank-redemption.svg", 9.3),
        new Movie(6L, "Inception", "Science Fiction", 2010, "Un especialista en sueños recibe la misión de implantar una idea imposible.", "/assets/posters/inception.svg", 8.8),
        new Movie(7L, "The Silence of the Lambs", "Thriller", 1991, "Una agente busca la ayuda de un brillante asesino para atrapar a otro criminal.", "/assets/posters/silence-of-the-lambs.svg", 8.6),
        new Movie(8L, "Casablanca", "Romance", 1942, "En una ciudad de refugiados, un antiguo amor vuelve a poner todo en juego.", "/assets/posters/casablanca.svg", 8.5),
        new Movie(9L, "Pulp Fiction", "Crimen", 1994, "Historias cruzadas de criminales, lealtades y decisiones inesperadas en Los Ángeles.", "/assets/posters/pulp-fiction.svg", 8.9),
        new Movie(10L, "Parasite", "Drama", 2019, "Una familia descubre una oportunidad peligrosa al entrar en la vida de otra.", "/assets/posters/parasite.svg", 8.5)
    ));

    public List<Movie> findAll() { return movies; }

    public Movie findById(Long id) {
        return movies.stream().filter(movie -> movie.getId().equals(id)).findFirst().orElse(null);
    }

    public List<Movie> searchByTitle(String title) {
        if (title == null || title.trim().isEmpty()) return findAll();
        String query = title.toLowerCase(Locale.ENGLISH);
        return movies.stream().filter(movie -> movie.getTitle().toLowerCase(Locale.ENGLISH).contains(query)).collect(Collectors.toList());
    }
}
