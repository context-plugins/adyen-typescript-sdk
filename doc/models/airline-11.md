
# Airline 11

Airline information.

## Structure

`Airline11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legs` | [`Leg1[] \| undefined`](../../doc/models/leg-1.md) | Optional | Details about the flight legs for this ticket. |
| `ticketNumber` | `string \| undefined` | Optional | The ticket's unique identifier |

## Example

```ts
import { Airline11 } from 'adyen';

const airline11: Airline11 = {
  legs: [
    {
      arrivalAirportCode: 'arrivalAirportCode8',
      basicFareCode: 'basicFareCode4',
      carrierCode: 'carrierCode6',
      departureAirportCode: 'departureAirportCode4',
      departureDate: 'departureDate8',
    },
    {
      arrivalAirportCode: 'arrivalAirportCode8',
      basicFareCode: 'basicFareCode4',
      carrierCode: 'carrierCode6',
      departureAirportCode: 'departureAirportCode4',
      departureDate: 'departureDate8',
    }
  ],
  ticketNumber: 'ticketNumber8',
};
```

