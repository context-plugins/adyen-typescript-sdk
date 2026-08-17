
# Pickup Info

## Structure

`PickupInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The city where the car is rented.<br><br>* Format: ASCII<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.locationCity` |
| `countryCode` | `string \| undefined` | Optional | The country where the car is rented, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br><br>* maxLength: 2 characters<br>* **additionalData key:** `carRental.locationCountry` |
| `date` | `string \| undefined` | Optional | The pick-up date.<br><br>* minLength: 10 characters<br>* maxLength: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `carRental.checkOutDate` |
| `stateOrProvince` | `string \| undefined` | Optional | The state or province where the car is rented.<br><br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.locationStateProvince` |

## Example

```ts
import { PickupInfo } from 'adyen';

const pickupInfo: PickupInfo = {
  city: 'city4',
  countryCode: 'countryCode8',
  date: '2016-03-13T12:52:32.123Z',
  stateOrProvince: 'stateOrProvince4',
};
```

