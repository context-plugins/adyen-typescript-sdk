
# External Reason 2

The external reason of this transfer.

*This model accepts additional fields of type unknown.*

## Structure

`ExternalReason2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | `string \| undefined` | Optional | The reason code. |
| `description` | `string \| undefined` | Optional | The description of the reason code. |
| `namespace` | `string \| undefined` | Optional | The namespace for the reason code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExternalReason2 } from 'adyen';

const externalReason2: ExternalReason2 = {
  code: 'code2',
  description: 'description4',
  namespace: 'namespace8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

