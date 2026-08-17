
# Web Data

## Structure

`WebData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `webAddress` | `string \| undefined` | Optional | The URL of the website or the app store URL. |
| `webAddressId` | `string \| undefined` | Optional, Read-only | The unique identifier of the web address. |

## Example

```ts
import { WebData } from 'adyen';

const webData: WebData = {
  webAddress: 'webAddress4',
};
```

