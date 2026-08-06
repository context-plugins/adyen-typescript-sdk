
# Payment Method Group

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the group. |
| `paymentMethodData` | `string \| undefined` | Optional | Echo data to be used if the payment method is displayed as part of this group. |
| `type` | `string \| undefined` | Optional | The unique code of the group. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentMethodGroup } from 'adyen';

const paymentMethodGroup: PaymentMethodGroup = {
  name: 'name6',
  paymentMethodData: 'paymentMethodData0',
  type: 'type4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

