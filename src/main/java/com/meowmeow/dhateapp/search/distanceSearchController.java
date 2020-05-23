package com.meowmeow.dhateapp.search;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
    @GetMapping("/distance")
    public List<searchResult> placeholder(){
        return fake;
    }

    @GetMapping("/interest")
    public  List<searchResult> temporary(){
        return fake;
    }
}
