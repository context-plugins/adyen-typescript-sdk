
# Clearpay Response Info 1

**clearpay** details

*This model accepts additional fields of type unknown.*

## Structure

`ClearpayResponseInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportUrl` | `string \| undefined` | Optional | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ClearpayResponseInfo1 } from 'adyen';

const clearpayResponseInfo1: ClearpayResponseInfo1 = {
  supportUrl: 'supportUrl8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

