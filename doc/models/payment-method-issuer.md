
# Payment Method Issuer

## Structure

`PaymentMethodIssuer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disabled` | `boolean \| undefined` | Optional | A boolean value indicating whether this issuer is unavailable. Can be `true` whenever the issuer is offline.<br><br>**Default**: `false` |
| `id` | `string` | Required | The unique identifier of this issuer, to submit in requests to /payments. |
| `name` | `string` | Required | A localized name of the issuer. |

## Example

```ts
import { PaymentMethodIssuer } from 'adyen';

const paymentMethodIssuer: PaymentMethodIssuer = {
  id: 'id2',
  name: 'name2',
  disabled: false,
};
```

