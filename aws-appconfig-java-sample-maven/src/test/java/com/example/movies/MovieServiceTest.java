package com.example.movies;

import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

class MovieServiceTest {
    private final MovieService service = new MovieService();

    @Test
    void returnsMockMovies() { assertEquals(10, service.findAll().size()); }

    @Test
    void findsMovieById() { assertEquals("The Matrix", service.findById(1L).getTitle()); }

    @Test
    void returnsNullForUnknownId() { assertNull(service.findById(99L)); }

    @Test
    void searchesCaseInsensitively() {
        List<Movie> result = service.searchByTitle("matrix");
        assertEquals(1, result.size());
        assertNotNull(result.get(0));
    }

    @Test
    void exposesRatingsForStatistics() { assertEquals(8.7, service.findById(1L).getRating(), 0.01); }
}
