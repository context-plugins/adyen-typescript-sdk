
# Balance Mutation

## Structure

`BalanceMutation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balance` | `bigint \| undefined` | Optional | The amount in the payment's currency that is debited or credited on the balance accounting register. |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `received` | `bigint \| undefined` | Optional | The amount in the payment's currency that is debited or credited on the received accounting register. |
| `reserved` | `bigint \| undefined` | Optional | The amount in the payment's currency that is debited or credited on the reserved accounting register. |

## Example

```ts
import { BalanceMutation } from 'adyen';

const balanceMutation: BalanceMutation = {
  balance: BigInt(132),
  currency: 'currency8',
  received: BigInt(50),
  reserved: BigInt(66),
};
```

