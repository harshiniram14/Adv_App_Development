package com.example.event.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Eventdto {
    private Long eventid;
    private String eventname;
    private String eventdesc;
    private String eventimg;
}
