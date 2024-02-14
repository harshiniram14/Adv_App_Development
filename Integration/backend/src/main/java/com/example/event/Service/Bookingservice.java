package com.example.event.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.event.Dto.response.BookingResponse;
import com.example.event.Entity.Booking;
import com.example.event.Repository.BookingRepo;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.List;
@RequiredArgsConstructor
@Service
public class Bookingservice {
    @Autowired
    private final BookingRepo bookingRepo;

    // public Bookingservice(BookingRepo bookingRepo){
    //     this.bookingRepo=bookingRepo;
    // }

    public List<Booking> getAllBookings(){
        return bookingRepo.findAll();
    }
    

    // public Booking getBookingByName(String custname){
    //     return bookingRepo.findByCustname(custname);
    // }

    public BookingResponse getBookingByName(String custname){
        Booking booking = bookingRepo.findByCustname(custname).orElseThrow();
        var userBook = BookingResponse.builder().bookid(booking.getBookid()).custname(booking.getCustname()).booktype(booking.getBooktype()).headcount(booking.getHeadcount()).bookdate(booking.getBookdate()).booktime(booking.getBooktime()).location(booking.getLocation()).build();
        return userBook;
    }
    

    @SuppressWarnings("null")
        public Booking createBooking(Booking booking){
        booking = bookingRepo.save(booking);
        return booking;
    }

    public Booking updateBookingByName(String custname, Booking updatedBooking){
        Booking existingBooking = bookingRepo.findByCustname(custname).orElseThrow();
    
        if(existingBooking != null){
            existingBooking.setBooktype(updatedBooking.getBooktype());
            existingBooking.setHeadcount(updatedBooking.getHeadcount());
            existingBooking.setBookdate(updatedBooking.getBookdate());
            existingBooking.setBooktime(updatedBooking.getBooktime());
            existingBooking.setLocation(updatedBooking.getLocation());
    
            existingBooking = bookingRepo.save(existingBooking);
            return existingBooking;
        } else {
            return null;
        }
    }
    
    @Transactional
    public boolean deleteBookingByCustname(String custname){
        Booking existingBooking = bookingRepo.findByCustname(custname).orElse(null);
    
        if(existingBooking != null ){
            bookingRepo.delete(existingBooking);
            return true;
        } else {
            return false;
        }
    }
    
}   
