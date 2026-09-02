import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agencySchema, type Agency } from "./agency.js";
import { legSchema, type Leg } from "./leg.js";
import { passengerSchema, type Passenger } from "./passenger.js";
import { ticketSchema, type Ticket } from "./ticket.js";
import { travelAgencySchema, type TravelAgency } from "./travel-agency.js";

export type Airline = {
  agency?: Agency;
  boardingFee?: number;
  code?: string;
  computerizedReservationSystem?: string;
  customerReferenceNumber?: string;
  designatorCode?: string;
  documentType?: string;
  flightDate?: Date;
  legs?: Leg[];
  passengerName: string;
  passengers?: Passenger[];
  ticket?: Ticket;
  travelAgency?: TravelAgency;
};

export const airlineSchema: Schema<Airline> = s.object<Airline>({
  agency: s.optional(s.lazy(() => agencySchema)),
  boardingFee: s.optional(s.number()),
  code: s.optional(s.string()),
  computerizedReservationSystem: s.optional(s.string()),
  customerReferenceNumber: s.optional(s.string()),
  designatorCode: s.optional(s.string()),
  documentType: s.optional(s.string()),
  flightDate: s.optional(s.dateTime()),
  legs: s.optional(s.array(s.lazy(() => legSchema))),
  passengerName: s.string(),
  passengers: s.optional(s.array(s.lazy(() => passengerSchema))),
  ticket: s.optional(s.lazy(() => ticketSchema)),
  travelAgency: s.optional(s.lazy(() => travelAgencySchema)),
});
