
# Payment Method Group

## Structure

`PaymentMethodGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the group. |
| `paymentMethodData` | `string \| undefined` | Optional | Echo data to be used if the payment method is displayed as part of this group. |
| `type` | `string \| undefined` | Optional | The unique code of the group. |

## Example

```ts
import { PaymentMethodGroup } from 'adyen';

const paymentMethodGroup: PaymentMethodGroup = {
  name: 'name6',
  paymentMethodData: 'paymentMethodData0',
  type: 'type4',
};
```

