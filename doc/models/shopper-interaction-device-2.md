
# Shopper Interaction Device 2

*This model accepts additional fields of type unknown.*

## Structure

`ShopperInteractionDevice2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locale` | `string \| undefined` | Optional | Locale on the shopper interaction device. |
| `os` | `string \| undefined` | Optional | Operating system running on the shopper interaction device. |
| `osVersion` | `string \| undefined` | Optional | Version of the operating system on the shopper interaction device. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShopperInteractionDevice2 } from 'adyenlib';

const shopperInteractionDevice2: ShopperInteractionDevice2 = {
  locale: 'locale4',
  os: 'os4',
  osVersion: 'osVersion6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

