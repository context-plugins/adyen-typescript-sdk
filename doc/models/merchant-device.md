
# Merchant Device

Merchant device information.

*This model accepts additional fields of type unknown.*

## Structure

`MerchantDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `os` | `string \| undefined` | Optional | Operating system running on the merchant device. |
| `osVersion` | `string \| undefined` | Optional | Version of the operating system on the merchant device. |
| `reference` | `string \| undefined` | Optional | Merchant device reference. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantDevice } from 'adyenlib';

const merchantDevice: MerchantDevice = {
  os: 'os4',
  osVersion: 'osVersion6',
  reference: 'reference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

