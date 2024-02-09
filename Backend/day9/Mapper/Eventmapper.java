package com.example.event.Mapper;

import com.example.event.Dto.Eventdto;
import com.example.event.Entity.Event;


public class Eventmapper {
    public static Eventdto maptoEventdto(Event evententity){
        return new Eventdto(
            evententity.getEventid(),
            evententity.getEventname(),
            evententity.getEventdesc(),
            evententity.getEventimg()
        );
    }

    public static Event maptoEvent(Eventdto eventdto){
        return new Event(
            eventdto.getEventid(),
            eventdto.getEventname(),
            eventdto.getEventdesc(),
            eventdto.getEventimg()
        );
    }
}
