
# Identity 2

Contains the identity details of the party.

*This model accepts additional fields of type unknown.*

## Structure

`Identity2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullLegalName` | `string` | Required | The complete legal name of the individual or entity. |
| `name` | `string` | Required | A commonly used or human-readable name for the individual or entity. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Identity2 } from 'adyenlib';

const identity2: Identity2 = {
  fullLegalName: 'fullLegalName2',
  name: 'name4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

