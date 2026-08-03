
# Balance Mutation

*This model accepts additional fields of type unknown.*

## Structure

`BalanceMutation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balance` | `bigint \| undefined` | Optional | The amount in the payment's currency that is debited or credited on the balance accounting register. |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `received` | `bigint \| undefined` | Optional | The amount in the payment's currency that is debited or credited on the received accounting register. |
| `reserved` | `bigint \| undefined` | Optional | The amount in the payment's currency that is debited or credited on the reserved accounting register. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalanceMutation } from 'adyenlib';

const balanceMutation: BalanceMutation = {
  balance: BigInt(132),
  currency: 'currency8',
  received: BigInt(50),
  reserved: BigInt(66),
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

