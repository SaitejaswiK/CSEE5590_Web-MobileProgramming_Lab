package com.example.userlogin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Intent intent = getIntent();
        String first = intent.getStringExtra("first");
        String last = intent.getStringExtra("last");
        String movie = intent.getStringExtra("movie");
        String book = intent.getStringExtra("book");



        TextView first_name = (TextView) findViewById(R.id.textFirst);
        TextView last_name = (TextView) findViewById(R.id.textLast);
        TextView movie_title = (TextView) findViewById(R.id.textMovie);
        TextView book_title = (TextView) findViewById(R.id.textBook);

        first_name.setText(first);
        last_name.setText(last);
        movie_title.setText(movie);
        book_title.setText(book);


    }
}
