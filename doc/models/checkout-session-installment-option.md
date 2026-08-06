
# Checkout Session Installment Option

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutSessionInstallmentOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `plans` | [`Plan1[] \| undefined`](../../doc/models/plan-1.md) | Optional | Defines the type of installment plan. If not set, defaults to **regular**.<br><br>Possible values:<br><br>* **regular**<br>* **revolving**<br>* **bonus**<br>* **with_interest**<br>* **buynow_paylater**<br>* **nointerest_bonus**<br>* **interest_bonus**<br>* **refund_prctg**<br>* **nointeres_refund_prctg**<br>* **interes_refund_prctg** |
| `preselectedValue` | `number \| undefined` | Optional | Preselected number of installments offered for this payment method. |
| `values` | `number[] \| undefined` | Optional | An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutSessionInstallmentOption, Plan1 } from 'adyen';

const checkoutSessionInstallmentOption: CheckoutSessionInstallmentOption = {
  plans: [
    Plan1.InterestBonus
  ],
  preselectedValue: 124,
  values: [
    58,
    57,
    56
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

