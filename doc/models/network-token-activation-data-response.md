
# Network Token Activation Data Response

*This model accepts additional fields of type unknown.*

## Structure

`NetworkTokenActivationDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `sdkInput` | `string \| undefined` | Optional | A block of data that contains the activation data for a network token. This `sdkInput` is required to initialize Adyen's SDK for network token provisioning.<br><br>For more information, see the repositories for Adyen's SDKs for network token provisioning:<br><br>* [Adyen Apple Pay Provisioning SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).<br>* [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android) |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NetworkTokenActivationDataResponse } from 'adyenlib';

const networkTokenActivationDataResponse: NetworkTokenActivationDataResponse = {
  sdkInput: 'sdkInput6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

