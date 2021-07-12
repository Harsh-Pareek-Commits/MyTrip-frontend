import { Package } from "./package";
import { PaymentDetails } from "./paymentDetails";
import { TicketDetails } from "./ticketDetails";

export class Booking{
    bookingId: number;
    bookType: string;
    bookDescription:string;
    bookTitle:string;
    dateofBooking: string;
    packDetails :Package;
	userId: string;
    paymentDetails: PaymentDetails;
	ticketDetails: TicketDetails;

    constructor(bookingId: number,
        bookingType: string,
        bookingDescription:string,
        bookingTitle:string,
        bookingDate: string,
        pack :Package,
        userId: string,
        payment: PaymentDetails,
        ticket: TicketDetails){
        this.bookingId = bookingId;
		this.bookType = bookingType;
		this.bookDescription = bookingDescription;
		this.bookTitle = bookingTitle;
		this.dateofBooking = bookingDate;
		this.packDetails = pack;
		this.userId = userId;
		this.paymentDetails = payment;
		this.ticketDetails = ticket;

    }


}