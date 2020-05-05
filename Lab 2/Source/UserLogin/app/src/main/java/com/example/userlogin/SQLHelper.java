package com.example.userlogin;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

public class SQLHelper extends SQLiteOpenHelper {

    public static final String DATABASE_NAME = "UserDB";
    public static final int DATABASE_VERSION = 1;
    public static final String TABLE_USERS = "users";

    //Columns for Users
    public static final String KEY_USER_NAME = "username";
    public static final String KEY_PASSWORD = "password";
    public static final String KEY_FIRST = "first_name";
    public static final String KEY_LAST = "last_name";
    public static final String KEY_MOVIE = "movie";
    public static final String KEY_BOOK = "book";


    //Generate Users table
    public static final String SQL_TABLE_USERS = " CREATE TABLE " + TABLE_USERS
            + " ( "
            + KEY_USER_NAME + " TEXT, "
            + KEY_FIRST + " TEXT, "
            + KEY_LAST + " TEXT, "
            + KEY_MOVIE + " TEXT, "
            + KEY_BOOK + " TEXT, "
            + KEY_PASSWORD + " TEXT"
            + " ) ";


    public SQLHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        //Build table
        sqLiteDatabase.execSQL(SQL_TABLE_USERS);

    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {
        //drop table to create new one if database version updated
        sqLiteDatabase.execSQL(" DROP TABLE IF EXISTS " + TABLE_USERS);
    }

    //using this method we can add users to user table
    public void addUser(User user) {
        SQLiteDatabase db = this.getWritableDatabase();

        ContentValues values = new ContentValues();

        values.put(KEY_USER_NAME, user.username);
        values.put(KEY_PASSWORD, user.password);
        values.put(KEY_FIRST, user.first_name);
        values.put(KEY_LAST, user.last_name);
        values.put(KEY_MOVIE, user.movie);
        values.put(KEY_BOOK, user.book);

        db.insert(TABLE_USERS, null, values);
    }

    public User Authenticate(User user) {
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.query(TABLE_USERS, new String[]{KEY_USER_NAME, KEY_PASSWORD},
                KEY_USER_NAME + "=?", new String[]{user.username}, null, null, null);

        if (cursor != null && cursor.moveToFirst()&& cursor.getCount()>0) {
            User user_test = new User(cursor.getString(0), cursor.getString(1),
                     "Test", "Test", "Test", "Test");

            //Match both passwords check they are same or not
            if (user.password.equalsIgnoreCase(user_test.password)) {
                return user_test;
            }
        }

        return null;
    }

    public boolean ifUsernameExists(String username) {
        SQLiteDatabase db = this.getReadableDatabase();
        Cursor cursor = db.query(TABLE_USERS, new String[]{KEY_USER_NAME, KEY_PASSWORD},
                KEY_USER_NAME + "=?", new String[]{username},
                null, null, null);

        if (cursor != null && cursor.moveToFirst()&& cursor.getCount()>0) {
            return true;
        }
        return false;
    }

}
