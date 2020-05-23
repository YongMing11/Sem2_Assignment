package com.meowmeow.dhateapp.user;

import java.util.UUID;

public class User {
    private String username;
    private UUID id;

    public User(String username){
        this.username = username;
        this.id = UUID.randomUUID();
    }
}
