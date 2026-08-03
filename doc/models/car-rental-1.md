
# Car Rental 1

[Car rental enhanced scheme data](https://docs.adyen.com/payment-methods/cards/enhanced-scheme-data/car-rental/) that may be required for processing the transaction and/or for interchange savings.

*This model accepts additional fields of type unknown.*

## Structure

`CarRental1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerServicePhoneNumber` | `string \| undefined` | Optional | The customer service phone number of the car rental company.<br><br>* Format: Alphanumeric<br>* maxLength: 17<br>* For US and CA numbers must be 10 characters in length<br>* Must not contain any special characters such as + or -<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.customerServiceTollFreeNumber` |
| `noShow` | `boolean \| undefined` | Optional | Indicates if the customer didn't pick up their rental car.<br><br>* **additionalData key:** `carRental.noShowIndicator` |
| `pickupInfo` | [`PickupInfo \| undefined`](../../doc/models/pickup-info.md) | Optional | - |
| `rateType` | [`RateType \| undefined`](../../doc/models/rate-type.md) | Optional | - |
| `rentalAgreementNumber` | `string \| undefined` | Optional | The rental agreement number for the car rental.<br><br>* Format: ASCII<br>* maxLength: 9 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.rentalAgreementNumber` |
| `rentalClassId` | `string \| undefined` | Optional | The classification of the rental car.<br><br>* Format: Alphanumeric<br>* maxLength: 4 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.rentalClassId` |
| `rentalDays` | `number \| undefined` | Optional | The number of days the car is rented for.<br><br>* Format: Numeric<br>* Max value: 9999<br>* **additionalData key:** `carRental.daysRented` |
| `rentalRate` | `bigint \| undefined` | Optional | Rental rate, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* Frequency of the rental rate is specified in the rateType field.<br>* **additionalData key:** `carRental.rate` |
| `rentalSurcharges` | [`RentalSurcharges \| undefined`](../../doc/models/rental-surcharges.md) | Optional | - |
| `renterName` | `string` | Required | The name of the person renting the car.<br><br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.renterName` |
| `returnInfo` | [`ReturnInfo \| undefined`](../../doc/models/return-info.md) | Optional | - |
| `taxExempt` | `boolean \| undefined` | Optional | Indicates if the goods or services were tax-exempt, or if tax was not collected.<br><br>* **additionalData key:** `carRental.taxExemptIndicator` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CarRental1, RateType } from 'adyenlib';

const carRental1: CarRental1 = {
  renterName: 'renterName8',
  customerServicePhoneNumber: 'customerServicePhoneNumber4',
  noShow: false,
  pickupInfo: {
    city: 'city4',
    countryCode: 'countryCode8',
    date: '2016-03-13T12:52:32.123Z',
    stateOrProvince: 'stateOrProvince4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  rateType: RateType.Daily,
  rentalAgreementNumber: 'rentalAgreementNumber0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

