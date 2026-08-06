
# Checkout Delegated Authentication Action

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutDelegatedAuthenticationAction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorisationToken` | `string \| undefined` | Optional | A token needed to authorise a payment. |
| `paymentData` | `string \| undefined` | Optional | Encoded payment data. |
| `paymentMethodType` | `string \| undefined` | Optional | Specifies the payment method. |
| `token` | `string \| undefined` | Optional | A token to pass to the delegatedAuthentication component. |
| `type` | [`Type543`](../../doc/models/type-543.md) | Required | **delegatedAuthentication** |
| `url` | `string \| undefined` | Optional | Specifies the URL to redirect to. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutDelegatedAuthenticationAction, Type543 } from 'adyen';

const checkoutDelegatedAuthenticationAction: CheckoutDelegatedAuthenticationAction = {
  type: Type543.DelegatedAuthentication,
  authorisationToken: 'authorisationToken6',
  paymentData: 'paymentData4',
  paymentMethodType: 'paymentMethodType4',
  token: 'token4',
  url: 'url6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

