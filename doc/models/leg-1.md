
# Leg 1

## Structure

`Leg1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `arrivalAirportCode` | `string \| undefined` | Optional | The IATA 3-letter airport code of the destination airport. This field is required if the airline data includes leg details. |
| `basicFareCode` | `string \| undefined` | Optional | The basic fare code for this leg. |
| `carrierCode` | `string \| undefined` | Optional | IATA code of the carrier operating the flight. |
| `departureAirportCode` | `string \| undefined` | Optional | The IATA three-letter airport code of the departure airport. This field is required if the airline data includes leg details |
| `departureDate` | `string \| undefined` | Optional | The flight departure date. |
| `flightNumber` | `string \| undefined` | Optional | The flight identifier. |

## Example

```ts
import { Leg1 } from 'adyen';

const leg1: Leg1 = {
  arrivalAirportCode: 'arrivalAirportCode8',
  basicFareCode: 'basicFareCode4',
  carrierCode: 'carrierCode6',
  departureAirportCode: 'departureAirportCode4',
  departureDate: 'departureDate8',
};
```

