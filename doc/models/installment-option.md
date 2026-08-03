
# Installment Option

*This model accepts additional fields of type unknown.*

## Structure

`InstallmentOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `maxValue` | `number \| undefined` | Optional | The maximum number of installments offered for this payment method. |
| `plans` | [`Plan1[] \| undefined`](../../doc/models/plan-1.md) | Optional | Defines the type of installment plan. If not set, defaults to **regular**.<br><br>Possible values:<br><br>* **regular**<br>* **revolving** |
| `preselectedValue` | `number \| undefined` | Optional | Preselected number of installments offered for this payment method. |
| `values` | `number[] \| undefined` | Optional | An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstallmentOption, Plan1 } from 'adyenlib';

const installmentOption: InstallmentOption = {
  maxValue: 72,
  plans: [
    Plan1.NointerestBonus
  ],
  preselectedValue: 172,
  values: [
    182,
    181
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

