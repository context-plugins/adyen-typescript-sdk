
# Get Stores Under Account Request

*This model accepts additional fields of type unknown.*

## Structure

`GetStoresUnderAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyAccount` | `string` | Required | The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account. |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account. With this parameter, the response only includes the stores of the specified merchant account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetStoresUnderAccountRequest } from 'adyenlib';

const getStoresUnderAccountRequest: GetStoresUnderAccountRequest = {
  companyAccount: 'companyAccount2',
  merchantAccount: 'merchantAccount0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

