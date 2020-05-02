package com.example.userlogin;

import android.os.Bundle;
import android.os.Handler;
import androidx.annotation.Nullable;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.textfield.TextInputLayout;
import androidx.appcompat.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class RegisterActivity extends AppCompatActivity {
    EditText editTextUserName;
    EditText editTextPassword;
    EditText editTextFirst;
    EditText editTextLast;
    EditText editTextMovie;
    EditText editTextBook;
    TextInputLayout textInputLayoutUserName;
    TextInputLayout textInputLayoutPassword;
    TextInputLayout textInputLayoutFirst;
    TextInputLayout textInputLayoutLast;
    TextInputLayout textInputLayoutMovie;
    TextInputLayout textInputLayoutBook;
    Button buttonRegister;
    SQLHelper sqlHelper;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        sqlHelper = new SQLHelper(this);
        initTextViewLogin();
        initViews();
        buttonRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (validate()) {
                    String UserName = editTextUserName.getText().toString();
                    String Password = editTextPassword.getText().toString();
                    String First = editTextFirst.getText().toString();
                    String Last = editTextLast.getText().toString();
                    String Movie = editTextMovie.getText().toString();
                    String Book = editTextBook.getText().toString();

                    if (!sqlHelper.ifUsernameExists(UserName)) {
                        sqlHelper.addUser(new User(UserName, Password, First, Last, Movie, Book));
                        Snackbar.make(buttonRegister, "User created successfully! Please Login ", Snackbar.LENGTH_LONG).show();
                        new Handler().postDelayed(new Runnable() {
                            @Override
                            public void run() {
                                finish();
                            }
                        }, Snackbar.LENGTH_LONG);
                    }else {
                        Snackbar.make(buttonRegister, "User already exists! ", Snackbar.LENGTH_LONG).show();
                    }


                }
            }
        });
    }

    private void initTextViewLogin() {
        TextView textViewLogin = (TextView) findViewById(R.id.textViewLogin);
        textViewLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });
    }

    private void initViews() {
        editTextPassword = (EditText) findViewById(R.id.editTextPassword);
        editTextUserName = (EditText) findViewById(R.id.editTextUsername);
        editTextFirst = (EditText) findViewById(R.id.editTextFirst);
        editTextLast = (EditText) findViewById(R.id.editTextLast);
        editTextMovie = (EditText) findViewById(R.id.editTextMovie);
        editTextBook = (EditText) findViewById(R.id.editTextBook);
        textInputLayoutPassword = (TextInputLayout) findViewById(R.id.textInputLayoutPassword);
        textInputLayoutUserName = (TextInputLayout) findViewById(R.id.textInputLayoutUsername);
        textInputLayoutFirst = (TextInputLayout) findViewById(R.id.textInputLayoutFirst);
        textInputLayoutLast = (TextInputLayout) findViewById(R.id.textInputLayoutLast);
        textInputLayoutMovie = (TextInputLayout) findViewById(R.id.textInputLayoutMovie);
        textInputLayoutBook = (TextInputLayout) findViewById(R.id.textInputLayoutBook);
        buttonRegister = (Button) findViewById(R.id.buttonRegister);

    }

    //This method is used to validate input given by user
    public boolean validate() {
        boolean valid = false;

        String UserName = editTextUserName.getText().toString();
        String Password = editTextPassword.getText().toString();

        if (UserName.isEmpty()) {
            valid = false;
            textInputLayoutUserName.setError("Please enter a username!");
        } else {
            valid = true;
        }

        if (Password.isEmpty()) {
            valid = false;
            textInputLayoutPassword.setError("Please enter a password!");
        } else {
            if (Password.length() > 5) {
                valid = true;
                textInputLayoutPassword.setError(null);
            } else {
                valid = false;
                textInputLayoutPassword.setError("Password is to short!");
            }
        }

        return valid;
    }
}