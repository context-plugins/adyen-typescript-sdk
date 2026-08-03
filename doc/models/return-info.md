
# Return Info

*This model accepts additional fields of type unknown.*

## Structure

`ReturnInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | `string \| undefined` | Optional | The city where the car must be returned.<br><br>* Format: ASCII<br>* maxLength: 18 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.returnCity` |
| `countryCode` | `string \| undefined` | Optional | The country where the car must be returned, in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.<br><br>* maxLength: 2 characters<br>* **additionalData key:** `carRental.returnCountry` |
| `date` | `string \| undefined` | Optional | The date by which the car must be returned.<br><br>* minLength: 10 characters<br>* maxLength: 10 characters<br>* Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): yyyy-MM-dd<br>* **additionalData key:** `carRental.returnDate` |
| `locationId` | `string \| undefined` | Optional | The agency code, phone number, or address abbreviation.<br><br>* Format: ASCII<br>* maxLength: 10 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.returnLocationId` |
| `stateOrProvince` | `string \| undefined` | Optional | The state or province where the car must be returned.<br><br>* Format: ASCII<br>* maxLength: 3 characters<br>* Must not start with a space or be all spaces.<br>* Must not be all zeros.<br>* **additionalData key:** `carRental.returnStateProvince` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReturnInfo } from 'adyenlib';

const returnInfo: ReturnInfo = {
  city: 'city2',
  countryCode: 'countryCode8',
  date: '2016-03-13T12:52:32.123Z',
  locationId: 'locationId4',
  stateOrProvince: 'stateOrProvince0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

