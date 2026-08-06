
# Additional Data Car Rental

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalDataCarRental`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `carRentalCheckOutDate` | `string \| undefined` | Optional | The pick-up date.<br><br>* Date format: `yyyyMMdd` |
| `carRentalCustomerServiceTollFreeNumber` | `string \| undefined` | Optional | The customer service phone number of the car rental company.<br><br>* Format: Alphanumeric<br>* maxLength: 17<br>* For US and CA numbers must be 10 characters in length<br>* Must not start with a space<br>* Must not contain any special characters such as + or -<br>  *Must not be all zeros. |
| `carRentalDaysRented` | `string \| undefined` | Optional | Number of days for which the car is being rented.<br><br>* Format: Numeric<br>* maxLength: 4<br>* Must not be all spaces |
| `carRentalFuelCharges` | `string \| undefined` | Optional | Any fuel charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: Numeric<br>* maxLength: 12 |
| `carRentalInsuranceCharges` | `string \| undefined` | Optional | Any insurance charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: Numeric<br>* maxLength: 12<br>* Must not be all spaces<br>  *Must not be all zeros. |
| `carRentalLocationCity` | `string \| undefined` | Optional | The city where the car is rented.<br><br>* Format: Alphanumeric<br>* maxLength: 18<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalLocationCountry` | `string \| undefined` | Optional | The country where the car is rented, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br><br>* Format: Alphanumeric<br>* maxLength: 2 |
| `carRentalLocationStateProvince` | `string \| undefined` | Optional | The state or province where the car is rented.<br><br>* Format: Alphanumeric<br>* maxLength: 2<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalNoShowIndicator` | `string \| undefined` | Optional | Indicates if the customer didn't pick up their rental car.<br><br>* Y - Customer did not pick up their car<br>* N - Not applicable |
| `carRentalOneWayDropOffCharges` | `string \| undefined` | Optional | The charge for not returning a car to the original rental location, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* maxLength: 12 |
| `carRentalRate` | `string \| undefined` | Optional | The daily rental rate, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* Format: Alphanumeric<br>* maxLength: 12 |
| `carRentalRateIndicator` | `string \| undefined` | Optional | Specifies whether the given rate is applied daily or weekly.<br><br>* D - Daily rate<br>* W - Weekly rate |
| `carRentalRentalAgreementNumber` | `string \| undefined` | Optional | The rental agreement number for the car rental.<br><br>* Format: Alphanumeric<br>* maxLength: 9<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalRentalClassId` | `string \| undefined` | Optional | The classification of the rental car.<br><br>* Format: Alphanumeric<br>* maxLength: 4<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalRenterName` | `string \| undefined` | Optional | The name of the person renting the car.<br><br>* Format: Alphanumeric<br>* maxLength: 26<br>* If you send more than 26 characters, the name is truncated<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalReturnCity` | `string \| undefined` | Optional | The city where the car must be returned.<br><br>* Format: Alphanumeric<br>* maxLength: 18<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalReturnCountry` | `string \| undefined` | Optional | The country where the car must be returned, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br><br>* Format: Alphanumeric<br>* maxLength: 2 |
| `carRentalReturnDate` | `string \| undefined` | Optional | The last date to return the car by.<br><br>* Date format: `yyyyMMdd`<br>* maxLength: 8 |
| `carRentalReturnLocationId` | `string \| undefined` | Optional | The agency code, phone number, or address abbreviation<br><br>* Format: Alphanumeric<br>* maxLength: 10<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalReturnStateProvince` | `string \| undefined` | Optional | The state or province where the car must be returned.<br><br>* Format: Alphanumeric<br>* maxLength: 3<br>* Must not start with a space or be all spaces<br>  *Must not be all zeros. |
| `carRentalTaxExemptIndicator` | `string \| undefined` | Optional | Indicates if the goods or services were tax-exempt, or if tax was not paid on them.<br><br>Values:<br><br>* Y - Goods or services were tax exempt<br>* N - Tax was not collected |
| `travelEntertainmentAuthDataDuration` | `string \| undefined` | Optional | Number of days the car is rented for. This should be included in the auth message.<br><br>* Format: Numeric<br>* maxLength: 4 |
| `travelEntertainmentAuthDataMarket` | `string \| undefined` | Optional | Indicates what market-specific dataset will be submitted or is being submitted. Value should be 'A' for car rental. This should be included in the auth message.<br><br>* Format: Alphanumeric<br>* maxLength: 1 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalDataCarRental } from 'adyen';

const additionalDataCarRental: AdditionalDataCarRental = {
  carRentalCheckOutDate: 'carRental.checkOutDate8',
  carRentalCustomerServiceTollFreeNumber: 'carRental.customerServiceTollFreeNumber2',
  carRentalDaysRented: 'carRental.daysRented4',
  carRentalFuelCharges: 'carRental.fuelCharges8',
  carRentalInsuranceCharges: 'carRental.insuranceCharges8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

