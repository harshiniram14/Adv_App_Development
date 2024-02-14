package com.example.event.Dto.request;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder 
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    private Long bookid;
    private String custname;
    private String booktype;
    private int headcount;
    private LocalDate bookdate;
    private LocalTime booktime;
    private String location;
}
