package com.example.event.Dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookingdto {
    private Long bookid;
    private String custname;
    private String booktype;
    private int headcount;
    private LocalDate bookdate;
    private LocalTime booktime;
    private String location;
}
