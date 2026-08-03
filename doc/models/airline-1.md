
# Airline 1

[Airline enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/airline/) that may be required for processing the transaction and/or for interchange savings.

*This model accepts additional fields of type unknown.*

## Structure

`Airline1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `agency` | [`Agency \| undefined`](../../doc/models/agency.md) | Optional | - |
| `boardingFee` | `bigint \| undefined` | Optional | The amount charged for boarding the plane, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Encoding: Numeric<br>* minLength: 1 character<br>* maxLength: 11 characters<br>* **additionalData key:** `airline.boarding_fee` |
| `code` | `string \| undefined` | Optional | The [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX) that identifies the carrier.<br><br>* Format: IATA 3-digit accounting code (PAX)<br>* Example: KLM = 074<br>* minLength: 3 characters<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.airline_code` |
| `computerizedReservationSystem` | `string \| undefined` | Optional | The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.<br><br>* Encoding: ASCII<br>* minLength: 4 characters<br>* maxLength: 4 characters<br>* **additionalData key:** `airline.computerized_reservation_system` |
| `customerReferenceNumber` | `string \| undefined` | Optional | The alphanumeric customer reference number.<br><br>* Encoding: ASCII<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the customer reference number is truncated<br>* Must not start with a space or be all spaces.<br>* **additionalData key:** `airline.customer_reference_number` |
| `designatorCode` | `string \| undefined` | Optional | The [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX) that identifies the carrier.<br><br>* Encoding: ASCII<br>* Example: KLM = KL<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* Must not start with a space or be all spaces.<br>* **additionalData key:** `airline.airline_designator_code` |
| `documentType` | `string \| undefined` | Optional | A code that identifies the type of item bought. The description of the code can appear on credit card statements.<br><br>* Encoding: ASCII<br>* Example: Passenger ticket = 01<br>* minLength: 2 characters<br>* maxLength: 2 characters<br>* **additionalData key:** `airline.document_type` |
| `flightDate` | `string \| undefined` | Optional | The flight departure date. Time is optional.<br><br>* Format for date only: `yyyy-MM-dd`<br>* Format for date and time: `yyyy-MM-ddTHH:mm`<br>* Use local time of departure airport.<br>* minLength: 10 characters<br>* maxLength: 16 characters<br>* **additionalData key:** `airline.flight_date` |
| `legs` | [`Leg[] \| undefined`](../../doc/models/leg.md) | Optional | - |
| `passengerName` | `string` | Required | The passenger's name, initials, and title.<br><br>* Format: last name + first name or initials + title<br>* Example: *FLYER / MARY MS*<br>* minLength: 1 character<br>* maxLength: 20 characters<br>* If you send more than 20 characters, the name is truncated<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `airline.passenger_name` |
| `passengers` | [`Passenger[] \| undefined`](../../doc/models/passenger.md) | Optional | - |
| `ticket` | [`Ticket \| undefined`](../../doc/models/ticket.md) | Optional | - |
| `travelAgency` | [`TravelAgency \| undefined`](../../doc/models/travel-agency.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Airline1 } from 'adyenlib';

const airline1: Airline1 = {
  passengerName: 'passengerName4',
  agency: {
    invoiceNumber: 'invoiceNumber6',
    planName: 'planName6',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  boardingFee: BigInt(164),
  code: 'code6',
  computerizedReservationSystem: 'computerizedReservationSystem8',
  customerReferenceNumber: 'customerReferenceNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

