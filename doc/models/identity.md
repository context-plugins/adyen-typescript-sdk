
# Identity

*This model accepts additional fields of type unknown.*

## Structure

`Identity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullLegalName` | `string` | Required | The complete legal name of the individual or entity. |
| `name` | `string` | Required | A commonly used or human-readable name for the individual or entity. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Identity } from 'adyen';

const identity: Identity = {
  fullLegalName: 'fullLegalName2',
  name: 'name4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

