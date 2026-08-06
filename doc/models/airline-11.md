
# Airline 11

Airline information.

*This model accepts additional fields of type unknown.*

## Structure

`Airline11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `legs` | [`Leg1[] \| undefined`](../../doc/models/leg-1.md) | Optional | Details about the flight legs for this ticket. |
| `ticketNumber` | `string \| undefined` | Optional | The ticket's unique identifier |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      arrivalAirportCode: 'arrivalAirportCode8',
      basicFareCode: 'basicFareCode4',
      carrierCode: 'carrierCode6',
      departureAirportCode: 'departureAirportCode4',
      departureDate: 'departureDate8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  ticketNumber: 'ticketNumber8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

