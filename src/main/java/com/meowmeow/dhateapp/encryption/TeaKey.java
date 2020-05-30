package com.meowmeow.dhateapp.encryption;

public class TeaKey implements Key{
    private int[] key;
    //Constructor for new random key
    public TeaKey(){
        key = new int[4];
        for(int i=0;i<4;i++)key[i]=RandomSingleton.getInstance().nextInt();
    }
    //Constructor for cloning keys
    public TeaKey(TeaKey other){
        key = other.key;
    }

    public int[] getKey(){
        return key;
    }
}