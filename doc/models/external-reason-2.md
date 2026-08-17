
# External Reason 2

The external reason of this transfer.

## Structure

`ExternalReason2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | `string \| undefined` | Optional | The namespace for the reason code. |

## Example

```ts
import { ExternalReason2 } from 'adyen';

const externalReason2: ExternalReason2 = {
  code: 'code2',
  description: 'description4',
  namespace: 'namespace8',
};
```

