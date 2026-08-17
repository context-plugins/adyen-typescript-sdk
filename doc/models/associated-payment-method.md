
# Associated Payment Method

## Structure

`AssociatedPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean` | Required | Indicates whether the payment method is enabled (**true**) or disabled (**false**). |
| `id` | `string` | Required | The identifier of the payment method. |
| `type` | `string` | Required | Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). |

## Example

```ts
import { AssociatedPaymentMethod } from 'adyen';

const associatedPaymentMethod: AssociatedPaymentMethod = {
  enabled: false,
  id: 'id2',
  type: 'type8',
};
```

