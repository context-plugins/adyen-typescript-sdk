import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalDataAirline = {
  airlineAgencyInvoiceNumber?: string;
  airlineAgencyPlanName?: string;
  airlineAirlineCode?: string;
  airlineAirlineDesignatorCode?: string;
  airlineBoardingFee?: string;
  airlineComputerizedReservationSystem?: string;
  airlineCustomerReferenceNumber?: string;
  airlineDocumentType?: string;
  airlineFlightDate?: string;
  airlineIssueDate?: string;
  airlineLegCarrierCode?: string;
  airlineLegClassOfTravel?: string;
  airlineLegDateOfTravel?: string;
  airlineLegDepartAirport?: string;
  airlineLegDepartTax?: string;
  airlineLegDestinationCode?: string;
  airlineLegFareBaseCode?: string;
  airlineLegFlightNumber?: string;
  airlineLegStopOverCode?: string;
  airlinePassengerDateOfBirth?: string;
  airlinePassengerFirstName?: string;
  airlinePassengerLastName?: string;
  airlinePassengerPhoneNumber?: string;
  airlinePassengerTravellerType?: string;
  airlinePassengerName: string;
  airlineTicketIssueAddress?: string;
  airlineTicketNumber?: string;
  airlineTravelAgencyCode?: string;
  airlineTravelAgencyName?: string;
};

export const additionalDataAirlineSchema: Schema<AdditionalDataAirline> = s.object<AdditionalDataAirline>({
  airlineAgencyInvoiceNumber: s.optional(s.string()),
  airlineAgencyPlanName: s.optional(s.string()),
  airlineAirlineCode: s.optional(s.string()),
  airlineAirlineDesignatorCode: s.optional(s.string()),
  airlineBoardingFee: s.optional(s.string()),
  airlineComputerizedReservationSystem: s.optional(s.string()),
  airlineCustomerReferenceNumber: s.optional(s.string()),
  airlineDocumentType: s.optional(s.string()),
  airlineFlightDate: s.optional(s.string()),
  airlineIssueDate: s.optional(s.string()),
  airlineLegCarrierCode: s.optional(s.string()),
  airlineLegClassOfTravel: s.optional(s.string()),
  airlineLegDateOfTravel: s.optional(s.string()),
  airlineLegDepartAirport: s.optional(s.string()),
  airlineLegDepartTax: s.optional(s.string()),
  airlineLegDestinationCode: s.optional(s.string()),
  airlineLegFareBaseCode: s.optional(s.string()),
  airlineLegFlightNumber: s.optional(s.string()),
  airlineLegStopOverCode: s.optional(s.string()),
  airlinePassengerDateOfBirth: s.optional(s.string()),
  airlinePassengerFirstName: s.optional(s.string()),
  airlinePassengerLastName: s.optional(s.string()),
  airlinePassengerPhoneNumber: s.optional(s.string()),
  airlinePassengerTravellerType: s.optional(s.string()),
  airlinePassengerName: s.string(),
  airlineTicketIssueAddress: s.optional(s.string()),
  airlineTicketNumber: s.optional(s.string()),
  airlineTravelAgencyCode: s.optional(s.string()),
  airlineTravelAgencyName: s.optional(s.string()),
  _keysMap: {
    airlineAgencyInvoiceNumber: "airline.agency_invoice_number",
    airlineAgencyPlanName: "airline.agency_plan_name",
    airlineAirlineCode: "airline.airline_code",
    airlineAirlineDesignatorCode: "airline.airline_designator_code",
    airlineBoardingFee: "airline.boarding_fee",
    airlineComputerizedReservationSystem: "airline.computerized_reservation_system",
    airlineCustomerReferenceNumber: "airline.customer_reference_number",
    airlineDocumentType: "airline.document_type",
    airlineFlightDate: "airline.flight_date",
    airlineIssueDate: "airline.issue_date",
    airlineLegCarrierCode: "airline.leg.carrier_code",
    airlineLegClassOfTravel: "airline.leg.class_of_travel",
    airlineLegDateOfTravel: "airline.leg.date_of_travel",
    airlineLegDepartAirport: "airline.leg.depart_airport",
    airlineLegDepartTax: "airline.leg.depart_tax",
    airlineLegDestinationCode: "airline.leg.destination_code",
    airlineLegFareBaseCode: "airline.leg.fare_base_code",
    airlineLegFlightNumber: "airline.leg.flight_number",
    airlineLegStopOverCode: "airline.leg.stop_over_code",
    airlinePassengerDateOfBirth: "airline.passenger.date_of_birth",
    airlinePassengerFirstName: "airline.passenger.first_name",
    airlinePassengerLastName: "airline.passenger.last_name",
    airlinePassengerPhoneNumber: "airline.passenger.phone_number",
    airlinePassengerTravellerType: "airline.passenger.traveller_type",
    airlinePassengerName: "airline.passenger_name",
    airlineTicketIssueAddress: "airline.ticket_issue_address",
    airlineTicketNumber: "airline.ticket_number",
    airlineTravelAgencyCode: "airline.travel_agency_code",
    airlineTravelAgencyName: "airline.travel_agency_name",
  },
});
