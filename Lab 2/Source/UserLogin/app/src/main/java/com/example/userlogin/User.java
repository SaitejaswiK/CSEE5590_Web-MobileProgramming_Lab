package com.example.userlogin;

public class User {
    public String username;
    public String password;
    public String first_name;
    public String last_name;
    public String movie;
    public String book;

    public User(String username, String password, String first, String last, String movie, String book) {
        this.username = username;
        this.password = password;
        this.first_name = first;
        this.last_name = last;
        this.movie = movie;
        this.book = book;
    }
}
