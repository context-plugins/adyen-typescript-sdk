
# Merchant Purchase Data

## Structure

`MerchantPurchaseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `airline` | [`Airline11 \| undefined`](../../doc/models/airline-11.md) | Optional | Airline information. |
| `lodging` | [`Lodging1[] \| undefined`](../../doc/models/lodging-1.md) | Optional | Lodging information. |
| `type` | `string` | Required, Constant | The type of events data.<br><br>Possible values:<br><br>- **merchantPurchaseData**: merchant purchase data<br><br>**Value**: `'merchantPurchaseData'` |

## Example

```ts
import { MerchantPurchaseData } from 'adyen';

const merchantPurchaseData: MerchantPurchaseData = {
  type: 'merchantPurchaseData',
  airline: {
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
      },
      {
        arrivalAirportCode: 'arrivalAirportCode8',
        basicFareCode: 'basicFareCode4',
        carrierCode: 'carrierCode6',
        departureAirportCode: 'departureAirportCode4',
        departureDate: 'departureDate8',
      }
    ],
    ticketNumber: 'ticketNumber4',
  },
  lodging: [
    {
      checkInDate: 'checkInDate0',
      numberOfNights: 50,
    },
    {
      checkInDate: 'checkInDate0',
      numberOfNights: 50,
    }
  ],
};
```

