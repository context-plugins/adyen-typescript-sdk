
# Identity

## Structure

`Identity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fullLegalName` | `string` | Required | The complete legal name of the individual or entity. |
| `name` | `string` | Required | A commonly used or human-readable name for the individual or entity. |

## Example

```ts
import { Identity } from 'adyen';

const identity: Identity = {
  fullLegalName: 'fullLegalName2',
  name: 'name4',
};
```

