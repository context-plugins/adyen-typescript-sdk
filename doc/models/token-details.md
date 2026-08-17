
# Token Details

## Structure

`TokenDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenData` | `Record<string, string> \| undefined` | Optional | - |
| `tokenDataType` | `string \| undefined` | Optional | - |

## Example

```ts
import { TokenDetails } from 'adyen';

const tokenDetails: TokenDetails = {
  tokenData: {
    'key0': 'tokenData7'
  },
  tokenDataType: 'tokenDataType0',
};
```

