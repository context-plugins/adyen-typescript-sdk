
# External Reason

## Structure

`ExternalReason`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | `string \| undefined` | Optional | The namespace for the reason code. |

## Example

```ts
import { ExternalReason } from 'adyen';

const externalReason: ExternalReason = {
  code: 'code6',
  description: 'description8',
  namespace: 'namespace4',
};
```

