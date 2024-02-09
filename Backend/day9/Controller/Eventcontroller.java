package com.example.event.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.Dto.response.EventResponse;
import com.example.event.Entity.Event;
import com.example.event.Repository.EventRepo;
import com.example.event.Service.Eventservice;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins = "*")
public class Eventcontroller {
    @Autowired
    private  Eventservice eventservice;
    @Autowired
    EventRepo eventRepo;

    @GetMapping("/getEvents")
    public List<Event> getAllEvents(){
    List<Event> events = eventservice.getAllEvents();
    return events;
    }
@GetMapping("/getEvents/{eventname}")
public ResponseEntity<EventResponse> getEventByName(@PathVariable("eventname") String eventname){
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(eventservice.getEventByName(eventname));
}


@PostMapping("/postEvents")
public Event createEvent(@RequestBody Event event){
    return eventservice.createEvent(event);
}


@PutMapping("/updateEvents/{eventname}")
public Event updateEventByName(@PathVariable String eventname, @RequestBody Event updatedEvent){
    return eventservice.updateEventByName(eventname, updatedEvent);
}

  @DeleteMapping("/deleteEvents/{eventname}")
  public HttpStatus deleteEventByEventname(@PathVariable String eventname) {
      boolean deleted = eventservice.deleteEventByEventname(eventname);
      return deleted ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND;
  }
  

}
 