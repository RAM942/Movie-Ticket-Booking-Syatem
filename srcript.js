// Movie Ticket Booking System

// Problem: Create a program for booking movie tickets where a user chooses a movie and seat category. The options should be:

// Movie:

// Action: Standard Seat - 10rs, VIP Seat - 20rs

// Comedy: Standard Seat - 8rs, VIP Seat - 15rs

// Drama: Standard Seat -6rs, VIP Seat - 12rs


const movie=prompt("enter the movie type action/comedy/drama: ").toLowerCase()
const series=["action","comedy","drama"]
const seats=["standard","vip"]

if (movie===series[0]){
    const seat=prompt("enter seat type Standard/VIP: ").toLowerCase()
    if (seat===seats[0]){
        console.log("Standard Ticket is 10rs")
    }
    else if (seat===seats[1]){
        console.log("VIP Ticket is 20rs")

    } 
    else {
        console.log("No Classes are Available")
    }
}
else if (movie===series[1]){
    const seat=prompt("enter seat type Standard/VIP: ").toLowerCase()
    if (seat===seats[0]){
        console.log("Standard Ticket is 8rs")
    }
    else if (seat===seats[1]){
        console.log("VIP Ticket is 15rs")

    } 
    else {
        console.log("No Classes are Available")
    }
}
else {
    if (movie===series[2]){
        const seat=prompt("enter seat type Standard/VIP: ").toLowerCase()
        if (seat===seats[0]){
            console.log("Standard Ticket is 6rs")
        }
        else if (seat===seats[1]){
            console.log("VIP Ticket is 12rs")
    
        } 
        else {
            console.log("No Classes are Available")
        }
    }
    else {
        console.log("No other series are available")
    }
}