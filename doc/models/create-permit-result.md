
# Create Permit Result

*This model accepts additional fields of type unknown.*

## Structure

`CreatePermitResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `permitResultList` | [`PermitResult[] \| undefined`](../../doc/models/permit-result.md) | Optional | List of new permits. |
| `pspReference` | `string \| undefined` | Optional | A unique reference associated with the request. This value is globally unique; quote it when communicating with us about this request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CreatePermitResult } from 'adyenlib';

const createPermitResult: CreatePermitResult = {
  permitResultList: [
    {
      resultKey: 'resultKey4',
      token: 'token6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      resultKey: 'resultKey4',
      token: 'token6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  pspReference: 'pspReference0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

