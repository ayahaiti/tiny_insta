package io.tiny.insta.tinyinstagram;

import com.google.common.collect.Lists;
import io.tiny.insta.tinyinstagram.repositories.Book;
import io.tiny.insta.tinyinstagram.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.util.List;

@SpringBootApplication
@ShellComponent
public class TinyInstagramApplication {

    @Autowired
    BookRepository bookRepository;

    public static void main(String[] args) {
        SpringApplication.run(TinyInstagramApplication.class, args);

    }

    @ShellMethod("Saves a book to Cloud Datastore: save-book <title> <author> <year>")
    public String saveBook(String title, String author, int year) {
        Book savedBook = this.bookRepository.save(new Book(title, author, year));
        return savedBook.toString();
    }

    @ShellMethod("Loads all books")
    public String findAllBooks() {
        Iterable<Book> books = this.bookRepository.findAll();
        return Lists.newArrayList(books).toString();
    }

    @ShellMethod("Loads books by author: find-by-author <author>")
    public String findByAuthor(String author) {
        List<Book> books = this.bookRepository.findByAuthor(author);
        return books.toString();
    }

    @ShellMethod("Loads books published after a given year: find-by-year-after <year>")
    public String findByYearAfter(int year) {
        List<Book> books = this.bookRepository.findByYearGreaterThan(year);
        return books.toString();
    }

    @ShellMethod("Loads books by author and year: find-by-author-year <author> <year>")
    public String findByAuthorYear(String author, int year) {
        List<Book> books = this.bookRepository.findByAuthorAndYear(author, year);
        return books.toString();
    }

    @ShellMethod("Removes all books")
    public void removeAllBooks() {
        this.bookRepository.deleteAll();
    }

}
