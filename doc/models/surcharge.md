
# Surcharge

## Structure

`Surcharge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `value` | `bigint` | Required | The [surcharge](https://docs.adyen.com/online-payments/surcharge/) amount to apply to the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes). When you apply surcharge, include the surcharge in the `amount.value` field.<br><br>Review our [Surcharge compliance guide](https://docs.adyen.com/development-resources/surcharge-compliance/) to learn about how to comply with regulatory requirements when applying surcharge. |

## Example

```ts
import { Surcharge } from 'adyen';

const surcharge: Surcharge = {
  value: BigInt(224),
};
```

