
# Shopper Interaction Device

Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests.

*This model accepts additional fields of type unknown.*

## Structure

`ShopperInteractionDevice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locale` | `string \| undefined` | Optional | Locale on the shopper interaction device. |
| `os` | `string \| undefined` | Optional | Operating system running on the shopper interaction device. |
| `osVersion` | `string \| undefined` | Optional | Version of the operating system on the shopper interaction device. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShopperInteractionDevice } from 'adyen';

const shopperInteractionDevice: ShopperInteractionDevice = {
  locale: 'locale2',
  os: 'os2',
  osVersion: 'osVersion4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

