
# Certificate Loading Request

## Structure

`CertificateLoadingRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The unique identifier of your merchant account. |
| `setupToken` | `string` | Required | The setup token provided by the SDK in a Mobile solution for in-person payments.<br><br>- When using the Android SDK, obtain the token through the `MerchantAuthenticationService.authenticate(setupToken)` callback of `AuthenticationService`.<br>- When using the iOS SDK, obtain the token through the `PaymentServiceDelegate.register(with:)` callback of `PaymentServiceDelegate`. |
| `store` | `string \| undefined` | Optional | The reference of the store that you want to process transactions for. Do not include this parameter if your account structure uses merchant accounts as stores, or if you are a registered payment facilitator. |
| `subMerchantData` | [`SubMerchantData21 \| undefined`](../../doc/models/sub-merchant-data-21.md) | Optional | The details of the sub-merchant that you want to process transactions for.Required if you are a registered payment facilitator. Do not include this parameter if you are not a payment facilitator. |

## Example

```ts
import { CertificateLoadingRequest } from 'adyen';

const certificateLoadingRequest: CertificateLoadingRequest = {
  merchantAccount: 'merchantAccount6',
  setupToken: 'setupToken8',
  store: 'store8',
  subMerchantData: {
    displayName: 'displayName4',
    id: 'id8',
    mcc: 'mcc8',
    name: 'name8',
    city: 'city2',
    country: 'country2',
    email: 'email8',
    phoneNumber: 'phoneNumber2',
    postalCode: 'postalCode0',
  },
};
```

