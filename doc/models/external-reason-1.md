
# External Reason 1

The external reason for the transfer status.

## Structure

`ExternalReason1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | `string \| undefined` | Optional | The namespace for the reason code. |

## Example

```ts
import { ExternalReason1 } from 'adyen';

const externalReason1: ExternalReason1 = {
  code: 'code4',
  description: 'description6',
  namespace: 'namespace6',
};
```

