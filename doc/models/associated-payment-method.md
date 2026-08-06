
# Associated Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`AssociatedPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | Indicates whether the payment method is enabled (**true**) or disabled (**false**). |
| `id` | `string` | Required | The identifier of the payment method. |
| `type` | `string` | Required | Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AssociatedPaymentMethod } from 'adyen';

const associatedPaymentMethod: AssociatedPaymentMethod = {
  enabled: false,
  id: 'id2',
  type: 'type8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

