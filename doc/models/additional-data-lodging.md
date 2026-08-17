
# Additional Data Lodging

## Structure

`AdditionalDataLodging`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lodgingSpecialProgramCode` | `string \| undefined` | Optional | A code that corresponds to the category of lodging charges for the payment. Possible values:<br><br>* 1: Lodging<br>* 2: No show reservation<br>* 3: Advanced deposit |
| `lodgingCheckInDate` | `string \| undefined` | Optional | The arrival date.<br><br>* Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**. |
| `lodgingCheckOutDate` | `string \| undefined` | Optional | The departure date.<br><br>* Date format: **yyyyMmDd**. For example, for 2023 April 22, **20230422**. |
| `lodgingCustomerServiceTollFreeNumber` | `string \| undefined` | Optional | The toll-free phone number for the lodging.<br><br>* Format: numeric<br>* Max length: 17 characters.<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros. |
| `lodgingFireSafetyActIndicator` | `string \| undefined` | Optional | Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Must be 'Y' or 'N'.<br><br>* Format: alphabetic<br>* Max length: 1 character |
| `lodgingFolioCashAdvances` | `string \| undefined` | Optional | The folio cash advances, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: numeric<br>* Max length: 12 characters |
| `lodgingFolioNumber` | `string \| undefined` | Optional | The card acceptor’s internal invoice or billing ID reference number.<br><br>* Max length: 25 characters<br>* Must not start with a space<br>* Must not contain any special characters<br>* Must not be all zeros. |
| `lodgingFoodBeverageCharges` | `string \| undefined` | Optional | Any charges for food and beverages associated with the booking, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: numeric<br>* Max length: 12 characters |
| `lodgingNoShowIndicator` | `string \| undefined` | Optional | Indicates if the customer didn't check in for their booking.<br>Possible values:<br><br>* **Y**: the customer didn't check in<br>* **N**: the customer checked in |
| `lodgingPrepaidExpenses` | `string \| undefined` | Optional | The prepaid expenses for the booking.<br><br>* Format: numeric<br>* Max length: 12 characters |
| `lodgingPropertyPhoneNumber` | `string \| undefined` | Optional | The lodging property location's phone number.<br><br>* Format: numeric<br>* Min length: 10 characters<br>* Max length: 17 characters<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>* Must not be all zeros. |
| `lodgingRoom1NumberOfNights` | `string \| undefined` | Optional | The total number of nights the room is booked for.<br><br>* Format: numeric<br>* Must be a number between 0 and 99<br>* Max length: 4 characters |
| `lodgingRoom1Rate` | `string \| undefined` | Optional | The rate for the room, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number |
| `lodgingTotalRoomTax` | `string \| undefined` | Optional | The total room tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number |
| `lodgingTotalTax` | `string \| undefined` | Optional | The total tax amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: numeric<br>* Max length: 12 characters<br>* Must not be a negative number |
| `travelEntertainmentAuthDataDuration` | `string \| undefined` | Optional | The number of nights. This should be included in the auth message.<br><br>* Format: numeric<br>* Max length: 4 characters |
| `travelEntertainmentAuthDataMarket` | `string \| undefined` | Optional | Indicates what market-specific dataset will be submitted. Must be 'H' for Hotel. This should be included in the auth message.<br><br>* Format: alphanumeric<br>* Max length: 1 character |

## Example

```ts
import { AdditionalDataLodging } from 'adyen';

const additionalDataLodging: AdditionalDataLodging = {
  lodgingSpecialProgramCode: 'lodging.SpecialProgramCode6',
  lodgingCheckInDate: 'lodging.checkInDate0',
  lodgingCheckOutDate: 'lodging.checkOutDate4',
  lodgingCustomerServiceTollFreeNumber: 'lodging.customerServiceTollFreeNumber2',
  lodgingFireSafetyActIndicator: 'lodging.fireSafetyActIndicator2',
};
```

