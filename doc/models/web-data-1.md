
# Web Data 1

The website and app URL of the legal entity.

*This model accepts additional fields of type unknown.*

## Structure

`WebData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webAddress` | `string \| undefined` | Optional | The URL of the website or the app store URL. |
| `webAddressId` | `string \| undefined` | Optional, Read-only | The unique identifier of the web address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WebData1 } from 'adyenlib';

const webData1: WebData1 = {
  webAddress: 'webAddress4',
  webAddressId: 'webAddressId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

