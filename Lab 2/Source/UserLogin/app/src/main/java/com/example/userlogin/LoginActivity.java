package com.example.userlogin;

import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.textfield.TextInputLayout;
import android.text.Html;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {
    EditText editTextUsername;
    EditText editTextPassword;
    TextInputLayout textInputLayoutUsername;
    TextInputLayout textInputLayoutPassword;
    Button buttonLogin;
    SQLHelper sqlHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        sqlHelper = new SQLHelper(this);
        initCreateAccountTextView();
        initViews();

        buttonLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (validate()) {
                    String Username = editTextUsername.getText().toString();
                    String Password = editTextPassword.getText().toString();

                    User currentUser = sqlHelper.Authenticate(new User(Username, Password, null, null, null, null));

                    //Check Authentication is successful or not
                    if (currentUser != null) {
                        Snackbar.make(buttonLogin, "Successfully Logged in!", Snackbar.LENGTH_LONG).show();
                        Intent intent=new Intent(LoginActivity.this,MainActivity.class);
                        intent.putExtra("first", currentUser.first_name);
                        intent.putExtra("last", currentUser.last_name);
                        intent.putExtra("movie", currentUser.movie);
                        intent.putExtra("book", currentUser.book);
                        startActivity(intent);
                        finish();
                    } else {
                        //Login Failed
                        Snackbar.make(buttonLogin, "Failed to log in , please try again", Snackbar.LENGTH_LONG).show();
                    }
                }
            }
        });

    }

    private void initCreateAccountTextView() {
        TextView textViewCreateAccount = (TextView) findViewById(R.id.textViewCreateAccount);
        textViewCreateAccount.setText(Html.fromHtml("<font color='#959595'>I don't have account yet. </font><br/><font color='#959595'>create one</font>"));
        textViewCreateAccount.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
                startActivity(intent);
            }
        });
    }

    private void initViews() {
        editTextUsername = (EditText) findViewById(R.id.editTextUsername);
        editTextPassword = (EditText) findViewById(R.id.editTextPassword);
        textInputLayoutUsername = (TextInputLayout) findViewById(R.id.textInputLayoutUsername);
        textInputLayoutPassword = (TextInputLayout) findViewById(R.id.textInputLayoutPassword);
        buttonLogin = (Button) findViewById(R.id.buttonLogin);

    }

    public boolean validate() {
        boolean valid = false;
        String Password = editTextPassword.getText().toString();

        if (Password.isEmpty()) {
            valid = false;
            textInputLayoutPassword.setError("Please enter valid password!");
        }
        else {
            if (Password.length() > 5) {
                valid = true;
                textInputLayoutPassword.setError(null);
            }
            else {
                valid = false;
                textInputLayoutPassword.setError("Password is to short!");
            }
        }
        return valid;
    }
}