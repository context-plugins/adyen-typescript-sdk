
# Currency

*This model accepts additional fields of type unknown.*

## Structure

`Currency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | Surcharge amount per transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `currencyCode` | `string` | Required | Three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). For example, **AUD**. |
| `maxAmount` | `number \| undefined` | Optional | The maximum surcharge amount per transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `percentage` | `number \| undefined` | Optional | Surcharge percentage per transaction. The maximum number of decimal places is two. For example, **1%** or **2.27%**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Currency } from 'adyen';

const currency: Currency = {
  currencyCode: 'currencyCode0',
  amount: 158,
  maxAmount: 148,
  percentage: 85.58,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

