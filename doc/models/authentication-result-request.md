
# Authentication Result Request

*This model accepts additional fields of type unknown.*

## Structure

`AuthenticationResultRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which the authentication was processed. |
| `pspReference` | `string` | Required | The pspReference identifier for the transaction. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AuthenticationResultRequest } from 'adyen';

const authenticationResultRequest: AuthenticationResultRequest = {
  merchantAccount: 'merchantAccount2',
  pspReference: 'pspReference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

