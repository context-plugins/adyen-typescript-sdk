
# Token Details

*This model accepts additional fields of type unknown.*

## Structure

`TokenDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tokenData` | `Record<string, string> \| undefined` | Optional | - |
| `tokenDataType` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TokenDetails } from 'adyen';

const tokenDetails: TokenDetails = {
  tokenData: {
    'key0': 'tokenData7'
  },
  tokenDataType: 'tokenDataType0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

