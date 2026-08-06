
# Clearpay Info

*This model accepts additional fields of type unknown.*

## Structure

`ClearpayInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supportUrl` | `string` | Required | Support Url |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ClearpayInfo } from 'adyen';

const clearpayInfo: ClearpayInfo = {
  supportUrl: 'supportUrl2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

