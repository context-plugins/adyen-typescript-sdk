
# Apple Pay Session Request

*This model accepts additional fields of type unknown.*

## Structure

`ApplePaySessionRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `displayName` | `string` | Required | This is the name that your shoppers will see in the Apple Pay interface.<br><br>The value returned as `configuration.merchantName` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.<br><br>**Constraints**: *Maximum Length*: `64` |
| `domainName` | `string` | Required | The domain name you provided when you added Apple Pay in your Customer Area.<br><br>This must match the `window.location.hostname` of the web shop. |
| `merchantIdentifier` | `string` | Required | Your merchant identifier registered with Apple Pay.<br><br>Use the value of the `configuration.merchantId` field from the [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApplePaySessionRequest } from 'adyenlib';

const applePaySessionRequest: ApplePaySessionRequest = {
  displayName: 'displayName4',
  domainName: 'domainName2',
  merchantIdentifier: 'merchantIdentifier2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

