package com.example.event.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.event.Dto.response.EventResponse;
import com.example.event.Entity.Event;
import com.example.event.Repository.EventRepo;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class Eventservice {
    @Autowired
    private final EventRepo eventRepo;

    // public Eventservice(EventRepo eventRepo){
    //     this.eventRepo=eventRepo;
    // }

    public List<Event> getAllEvents(){
        return eventRepo.findAll();
    }
    
    public EventResponse getEventByName(String custname){
        Event event = eventRepo.findByEventname(custname).orElseThrow();
        var adminEvent = EventResponse.builder().eventid(event.getEventid()).eventname(event.getEventname()).eventdesc(event.getEventdesc()).eventimg(event.getEventimg()).build();
        return adminEvent;
    }

    @SuppressWarnings("null")
        public Event createEvent(Event event){
        event = eventRepo.save(event);
        return event;
    }


    public Event updateEventByName(String eventname, Event updatedEvent){
        Event existingEvent = eventRepo.findByEventname(eventname).orElseThrow();
    
        if(existingEvent != null){
            existingEvent.setEventdesc(updatedEvent.getEventdesc());
            existingEvent.setEventimg(updatedEvent.getEventimg());
    
            existingEvent = eventRepo.save(existingEvent);
            return existingEvent;
        } else {
            return null;
        }
    }
    
@Transactional
   public boolean deleteEventByEventname(String eventname) {
    Event existingEvent = eventRepo.findByEventname(eventname).orElseThrow();

    if (existingEvent != null) {
        eventRepo.delete(existingEvent);
        return true; // Return true if deletion was successful
    } else {
        return false; // Return false if event with given name doesn't exist
    }
}

}
