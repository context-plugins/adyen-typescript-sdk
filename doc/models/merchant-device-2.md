
# Merchant Device 2

*This model accepts additional fields of type unknown.*

## Structure

`MerchantDevice2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `os` | `string \| undefined` | Optional | Operating system running on the merchant device. |
| `osVersion` | `string \| undefined` | Optional | Version of the operating system on the merchant device. |
| `reference` | `string \| undefined` | Optional | Merchant device reference. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantDevice2 } from 'adyen';

const merchantDevice2: MerchantDevice2 = {
  os: 'os2',
  osVersion: 'osVersion4',
  reference: 'reference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

