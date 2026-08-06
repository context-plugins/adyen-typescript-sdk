
# Clearpay Info 1

Details to provide if `type` is **clearpay**.

*This model accepts additional fields of type unknown.*

## Structure

`ClearpayInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportUrl` | `string` | Required | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ClearpayInfo1 } from 'adyen';

const clearpayInfo1: ClearpayInfo1 = {
  supportUrl: 'supportUrl0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

