
# Application Info 1

*This model accepts additional fields of type unknown.*

## Structure

`ApplicationInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `adyenLibrary` | [`AdyenLibrary \| undefined`](../../doc/models/adyen-library.md) | Optional | - |
| `adyenPaymentSource` | [`AdyenPaymentSource \| undefined`](../../doc/models/adyen-payment-source.md) | Optional | - |
| `externalPlatform` | [`ExternalPlatform2 \| undefined`](../../doc/models/external-platform-2.md) | Optional | - |
| `merchantApplication` | [`MerchantApplication \| undefined`](../../doc/models/merchant-application.md) | Optional | - |
| `merchantDevice` | [`MerchantDevice2 \| undefined`](../../doc/models/merchant-device-2.md) | Optional | - |
| `shopperInteractionDevice` | [`ShopperInteractionDevice2 \| undefined`](../../doc/models/shopper-interaction-device-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApplicationInfo1 } from 'adyen';

const applicationInfo1: ApplicationInfo1 = {
  adyenLibrary: {
    name: 'name8',
    version: 'version4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  adyenPaymentSource: {
    name: 'name2',
    version: 'version8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  externalPlatform: {
    integrator: 'integrator0',
    name: 'name4',
    version: 'version0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantApplication: {
    name: 'name2',
    version: 'version8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchantDevice: {
    os: 'os4',
    osVersion: 'osVersion6',
    reference: 'reference8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

