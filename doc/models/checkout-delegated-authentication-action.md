
# Checkout Delegated Authentication Action

## Structure

`CheckoutDelegatedAuthenticationAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationToken` | `string \| undefined` | Optional | A token needed to authorise a payment. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `token` | `string \| undefined` | Optional | A token to pass to the delegatedAuthentication component. |
| `type` | `string` | Required, Constant | **delegatedAuthentication**<br><br>**Value**: `'delegatedAuthentication'` |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |

## Example

```ts
import { CheckoutDelegatedAuthenticationAction } from 'adyen';

const checkoutDelegatedAuthenticationAction: CheckoutDelegatedAuthenticationAction = {
  type: 'delegatedAuthentication',
  authorisationToken: 'authorisationToken6',
  paymentData: 'paymentData4',
  paymentMethodType: 'paymentMethodType4',
  token: 'token4',
  url: 'url6',
};
```

