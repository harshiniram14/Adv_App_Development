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

import com.example.event.Dto.response.BookingResponse;
import com.example.event.Entity.Booking;
import com.example.event.Service.Bookingservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
@CrossOrigin(origins="*")
public class Bookingcontroller {
    @Autowired
    private Bookingservice bookingservice;
    @Tag(name = "Get bookings", description = "endpoint for fetching bookings")
    @GetMapping("/getBookings")
    public List<Booking> getAllBookings(){
        List<Booking> bookings = bookingservice.getAllBookings();
        return bookings;
    }
    @GetMapping("/getBookings/{custname}")
    public ResponseEntity<BookingResponse> getBookingByName(@PathVariable("custname") String custname){
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(bookingservice.getBookingByName(custname));
    }
// @GetMapping("/{custname}")
// public ResponseEntity<Booking> getBookingByName(@PathVariable String custname){
//     Booking booking = bookingservice.getBookingByName(custname);
//     if(booking != null){
//         return new ResponseEntity<>(booking, HttpStatus.OK);
//     }else{
//         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//     }
// }
    @PostMapping("/postBookings")
        public Booking createBooking(@RequestBody Booking booking){
        return bookingservice.createBooking(booking);
    }
    @PutMapping("/updateBookings/{custname}")
        public Booking updateBookingByName(@PathVariable String custname, @RequestBody Booking updatedBooking){
        return bookingservice.updateBookingByName(custname, updatedBooking);
    }
    @DeleteMapping("/deleteBookings/{custname}")
    public HttpStatus deleteBookingByCustname(@PathVariable String custname) {
        boolean deleted = bookingservice.deleteBookingByCustname(custname);
        return deleted ? HttpStatus.NO_CONTENT : HttpStatus.NOT_FOUND;
    }
}

