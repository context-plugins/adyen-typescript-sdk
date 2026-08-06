
# Web Data

*This model accepts additional fields of type unknown.*

## Structure

`WebData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webAddress` | `string \| undefined` | Optional | The URL of the website or the app store URL. |
| `webAddressId` | `string \| undefined` | Optional, Read-only | The unique identifier of the web address. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WebData } from 'adyen';

const webData: WebData = {
  webAddress: 'webAddress4',
  webAddressId: 'webAddressId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

