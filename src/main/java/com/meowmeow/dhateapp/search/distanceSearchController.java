package com.meowmeow.dhateapp.search;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("search")
@CrossOrigin("*")
public class distanceSearchController {
    static List<searchResult> fake = List.of(
            new searchResult("Chooi He Lin","Male",100,5,"temp","temp"),
            new searchResult("Choo She Lin","Female",150,4,"temp","temp"),
            new searchResult("Chu Helix","Male",200,2,"temp","temp"),
            new searchResult("Chui Hi Ling","Prefer not to disclose",400,10,"temp","temp")
    );
    @GetMapping(path = "/distance/{id}")
    public List<searchResult> placeholder(
            @PathVariable("id")UUID userId,
            @RequestParam(name = "dist", defaultValue = "100")int distance
    ){
        System.out.println(userId + " " + distance);
        return fake;
    }

    @GetMapping(path = "/interest/{id}")
    public  List<searchResult> temporary(
            @PathVariable("id")UUID userId
    ){
        System.out.println(userId);
        return fake;
    }
}
