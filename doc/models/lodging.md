
# Lodging

*This model accepts additional fields of type unknown.*

## Structure

`Lodging`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkInDate` | `string \| undefined` | Optional | The check-in date.<br><br>* Min Length: 10 characters<br>* Max Length: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `lodging.checkInDate` |
| `checkOutDate` | `string \| undefined` | Optional | The check-out date.<br><br>* Min Length: 10 characters<br>* Max Length: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `lodging.checkOutDate` |
| `customerServicePhoneNumber` | `string \| undefined` | Optional | The toll-free phone number for the lodging customer service.<br><br>* Format: Alphanumeric<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.customerServiceTollFreeNumber` |
| `fireSafetyCompliance` | `boolean \| undefined` | Optional | Indicates that the facility complies with the Hotel and Motel Fire Safety Act of 1990.<br><br>* **additionalData key:** `lodging.fireSafetyActIndicator` |
| `folio` | [`Folio \| undefined`](../../doc/models/folio.md) | Optional | - |
| `foodBeverageCharges` | `bigint \| undefined` | Optional | Any charges for food and beverages associated with the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.foodBeverageCharges` |
| `lodgingChargeType` | [`LodgingChargeType \| undefined`](../../doc/models/lodging-charge-type.md) | Optional | - |
| `noShow` | `boolean \| undefined` | Optional | Indicates if the customer didn't check in for their booking.<br><br>* **additionalData key:** `lodging.noShowIndicator` |
| `prepaidExpenses` | `bigint \| undefined` | Optional | The prepaid expenses for the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.prepaidExpenses` |
| `propertyPhoneNumber` | `string \| undefined` | Optional | The lodging property location's phone number.<br><br>* Format: Alphanumeric<br>* Min length: 10 characters<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.propertyPhoneNumber` |
| `renterName` | `string \| undefined` | Optional | The name of the person renting the room.<br><br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.renterName` |
| `rooms` | [`Room[] \| undefined`](../../doc/models/room.md) | Optional | The list of rooms booked. |
| `totalRoomTax` | `bigint \| undefined` | Optional | The total room tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.totalRoomTax` |
| `totalTax` | `bigint \| undefined` | Optional | The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.totalTax` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Lodging } from 'adyenlib';

const lodging: Lodging = {
  checkInDate: '2016-03-13T12:52:32.123Z',
  checkOutDate: '2016-03-13T12:52:32.123Z',
  customerServicePhoneNumber: 'customerServicePhoneNumber6',
  fireSafetyCompliance: false,
  folio: {
    cashAdvances: BigInt(122),
    number: 'number8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

