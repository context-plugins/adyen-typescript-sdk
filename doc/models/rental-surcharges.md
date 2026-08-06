
# Rental Surcharges

*This model accepts additional fields of type unknown.*

## Structure

`RentalSurcharges`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fuel` | `bigint \| undefined` | Optional | The fuel charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `carRental.fuelCharges` |
| `insurance` | `bigint \| undefined` | Optional | Any insurance charges associated with the rental, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `carRental.insuranceCharges` |
| `oneWayDropOff` | `bigint \| undefined` | Optional | The charge for not returning a car to the original rental location, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `carRental.oneWayDropOffCharges` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RentalSurcharges } from 'adyen';

const rentalSurcharges: RentalSurcharges = {
  fuel: BigInt(178),
  insurance: BigInt(34),
  oneWayDropOff: BigInt(110),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

