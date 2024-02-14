package com.example.event.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.event.Entity.Event;

import java.util.Optional;



@Repository
public interface EventRepo extends JpaRepository<Event, Long> {
    public Optional<Event> findByEventname(String eventname);
    void deleteByEventname(String eventname);
}
