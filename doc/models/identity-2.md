
# Identity 2

Contains the identity details of the party.

## Structure

`Identity2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullLegalName` | `string` | Required | The complete legal name of the individual or entity. |
| `name` | `string` | Required | A commonly used or human-readable name for the individual or entity. |

## Example

```ts
import { Identity2 } from 'adyen';

const identity2: Identity2 = {
  fullLegalName: 'fullLegalName2',
  name: 'name4',
};
```

