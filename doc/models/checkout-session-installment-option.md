
# Checkout Session Installment Option

## Structure

`CheckoutSessionInstallmentOption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `plans` | [`Plan1Enum[] \| undefined`](../../doc/models/plan-1-enum.md) | Optional | Defines the type of installment plan. If not set, defaults to **regular**.<br><br>Possible values:<br><br>* **regular**<br>* **revolving**<br>* **bonus**<br>* **with_interest**<br>* **buynow_paylater**<br>* **nointerest_bonus**<br>* **interest_bonus**<br>* **refund_prctg**<br>* **nointeres_refund_prctg**<br>* **interes_refund_prctg** |
| `preselectedValue` | `number \| undefined` | Optional | Preselected number of installments offered for this payment method. |
| `values` | `number[] \| undefined` | Optional | An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`. |

## Example

```ts
import { CheckoutSessionInstallmentOption, Plan1Enum } from 'adyen';

const checkoutSessionInstallmentOption: CheckoutSessionInstallmentOption = {
  plans: [
    Plan1Enum.InterestBonus
  ],
  preselectedValue: 124,
  values: [
    58,
    57,
    56
  ],
};
```

