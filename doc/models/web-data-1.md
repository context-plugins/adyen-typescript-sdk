
# Web Data 1

The website and app URL of the legal entity.

## Structure

`WebData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webAddress` | `string \| undefined` | Optional | The URL of the website or the app store URL. |
| `webAddressId` | `string \| undefined` | Optional, Read-only | The unique identifier of the web address. |

## Example

```ts
import { WebData1 } from 'adyen';

const webData1: WebData1 = {
  webAddress: 'webAddress4',
};
```

