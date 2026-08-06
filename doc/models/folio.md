
# Folio

*This model accepts additional fields of type unknown.*

## Structure

`Folio`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cashAdvances` | `bigint \| undefined` | Optional | The folio cash advances, in [minor units](https://docs.adyen.com/development-resources/currency-codes).<br><br>* For example, 2000 means USD 20.00.<br>* Encoding: Numeric<br>* Max value: 10000000000<br>* **additionalData key:** `lodging.folioCashAdvances` |
| `number` | `string \| undefined` | Optional | The card acceptor's internal invoice or billing ID reference number.<br><br>* Format: Alphanumeric<br>* Must not start with a space<br>* Must not contain any special characters<br>* Must not be all zeros.<br>* **additionalData key:** `lodging.folioNumber` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Folio } from 'adyen';

const folio: Folio = {
  cashAdvances: BigInt(122),
  number: 'number8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

