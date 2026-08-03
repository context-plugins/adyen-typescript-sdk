
# Disable Permit Request

*This model accepts additional fields of type unknown.*

## Structure

`DisablePermitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `token` | `string` | Required | The permit token to disable. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisablePermitRequest } from 'adyenlib';

const disablePermitRequest: DisablePermitRequest = {
  merchantAccount: 'merchantAccount8',
  token: 'token0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

