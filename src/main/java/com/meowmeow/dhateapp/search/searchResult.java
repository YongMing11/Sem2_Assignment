package com.meowmeow.dhateapp.search;

public class searchResult {
    private String username;
    private int distance;
    private int match;
    private String profileImageLink;
    private String profileLink;

    public searchResult(String username, int distance, int match, String profileImageLink, String profileLink) {
        this.username = username;
        this.distance = distance;
        this.match = match;
        this.profileImageLink = profileImageLink;
        this.profileLink = profileLink;
    }

    public String getUsername() {
        return username;
    }

    public int getDistance() {
        return distance;
    }

    public int getMatch() {
        return match;
    }

    public String getProfileImageLink() {
        return profileImageLink;
    }

    public String getProfileLink() {
        return profileLink;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public void setMatch(int match) {
        this.match = match;
    }

    public void setProfileImageLink(String profileImageLink) {
        this.profileImageLink = profileImageLink;
    }

    public void setProfileLink(String profileLink) {
        this.profileLink = profileLink;
    }
}
