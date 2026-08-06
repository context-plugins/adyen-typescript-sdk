
# Permit Result

*This model accepts additional fields of type unknown.*

## Structure

`PermitResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `resultKey` | `string \| undefined` | Optional | The key to link permit requests to permit results. |
| `token` | `string \| undefined` | Optional | The permit token which is used to make payments by the partner company. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PermitResult } from 'adyen';

const permitResult: PermitResult = {
  resultKey: 'resultKey4',
  token: 'token6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

