
# Merchant Purchase Data

*This model accepts additional fields of type unknown.*

## Structure

`MerchantPurchaseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `airline` | [`Airline2 \| undefined`](../../doc/models/airline-2.md) | Optional | - |
| `lodging` | [`Lodging1[] \| undefined`](../../doc/models/lodging-1.md) | Optional | Lodging information. |
| `type` | [`Type87`](../../doc/models/type-87.md) | Required | The type of events data.<br><br>Possible values:<br><br>- **merchantPurchaseData**: merchant purchase data |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantPurchaseData, Type87 } from 'adyen';

const merchantPurchaseData: MerchantPurchaseData = {
  type: Type87.MerchantPurchaseData,
  airline: {
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
    ticketNumber: 'ticketNumber4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  lodging: [
    {
      checkInDate: 'checkInDate0',
      numberOfNights: 50,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      checkInDate: 'checkInDate0',
      numberOfNights: 50,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

