
# Get Terminals Under Account Request

*This model accepts additional fields of type unknown.*

## Structure

`GetTerminalsUnderAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyAccount` | `string` | Required | Your company account. If you only specify this parameter, the response includes all terminals at all account levels. |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account. This is required if you are retrieving the terminals assigned to a store.If you don't specify a `store` the response includes the terminals assigned to the specified merchant account and the terminals assigned to the stores under this merchant account. |
| `store` | `string \| undefined` | Optional | The store code of the store. With this parameter, the response only includes the terminals assigned to the specified store. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTerminalsUnderAccountRequest } from 'adyenlib';

const getTerminalsUnderAccountRequest: GetTerminalsUnderAccountRequest = {
  companyAccount: 'companyAccount0',
  merchantAccount: 'merchantAccount2',
  store: 'store4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

