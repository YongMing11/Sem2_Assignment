package com.meowmeow.dhateapp;

import com.meowmeow.dhateapp.encryption.Encryption;
import com.meowmeow.dhateapp.encryption.Key;
import com.meowmeow.dhateapp.encryption.TeaEncryption;
import com.meowmeow.dhateapp.encryption.TeaKey;

public class Test {
    public static void main(String[] args) {
        Encryption test = new TeaEncryption();
        String a = "Hello World Meow!!! Lorem ipsum dolor sit amet i am cat woof woof bepp bepp";
        Key key = new TeaKey();

        a=test.encrypt(a,key);
        System.out.println(a);
        a=test.decrypt(a,key);
        System.out.println(a);
    }
}
