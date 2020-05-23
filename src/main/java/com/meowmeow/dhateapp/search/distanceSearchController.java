package com.meowmeow.dhateapp.search;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("search")
public class distanceSearchController {
    static List<searchResult> fake = List.of(
            new searchResult("Chooi He Lin",100,5,"temp","temp"),
            new searchResult("Choo She Lin",150,4,"temp","temp"),
            new searchResult("Chooi He Lix",200,2,"temp","temp"),
            new searchResult("Chooi Hee Ling",400,10,"temp","temp")
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
