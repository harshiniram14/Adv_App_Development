package com.example.event.Dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder 
@NoArgsConstructor
@AllArgsConstructor
public class EventRequest {
    private Long eventid;
    private String eventname;
    private String eventdesc;
    private String eventimg;
}
