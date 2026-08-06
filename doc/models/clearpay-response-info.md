
# Clearpay Response Info

*This model accepts additional fields of type unknown.*

## Structure

`ClearpayResponseInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportUrl` | `string \| undefined` | Optional | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ClearpayResponseInfo } from 'adyen';

const clearpayResponseInfo: ClearpayResponseInfo = {
  supportUrl: 'supportUrl2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

