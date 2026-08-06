
# Ideal Authenticate Request

*This model accepts additional fields of type unknown.*

## Structure

`IdealAuthenticateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier for an account holder.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `150` |
| `payload` | `string` | Required | A payload provided by iDEAL to complete the authentication process.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `400` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IdealAuthenticateRequest } from 'adyen';

const idealAuthenticateRequest: IdealAuthenticateRequest = {
  accountHolderId: 'AH00000000000000000000000',
  payload: 'https://ideal.auth/somePayload',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

