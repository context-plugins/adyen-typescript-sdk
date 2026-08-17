
# Merchant Device

Merchant device information.

## Structure

`MerchantDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `os` | `string \| undefined` | Optional | Operating system running on the merchant device. |
| `osVersion` | `string \| undefined` | Optional | Version of the operating system on the merchant device. |
| `reference` | `string \| undefined` | Optional | Merchant device reference. |

## Example

```ts
import { MerchantDevice } from 'adyen';

const merchantDevice: MerchantDevice = {
  os: 'os4',
  osVersion: 'osVersion6',
  reference: 'reference8',
};
```

