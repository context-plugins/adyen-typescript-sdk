
# Payment Method Group 2

The group where this payment method belongs to.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodGroup2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the group. |
| `paymentMethodData` | `string \| undefined` | Optional | Echo data to be used if the payment method is displayed as part of this group. |
| `type` | `string \| undefined` | Optional | The unique code of the group. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentMethodGroup2 } from 'adyen';

const paymentMethodGroup2: PaymentMethodGroup2 = {
  name: 'name0',
  paymentMethodData: 'paymentMethodData6',
  type: 'type0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

