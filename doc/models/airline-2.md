
# Airline 2

## Structure

`Airline2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legs` | [`Leg1[] \| undefined`](../../doc/models/leg-1.md) | Optional | Details about the flight legs for this ticket. |
| `ticketNumber` | `string \| undefined` | Optional | The ticket's unique identifier |

## Example

```ts
import { Airline2 } from 'adyen';

const airline2: Airline2 = {
  legs: [
    {
      arrivalAirportCode: 'arrivalAirportCode8',
      basicFareCode: 'basicFareCode4',
      carrierCode: 'carrierCode6',
      departureAirportCode: 'departureAirportCode4',
      departureDate: 'departureDate8',
    }
  ],
  ticketNumber: 'ticketNumber4',
};
```

