
# Get Stores Under Account Request

## Structure

`GetStoresUnderAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyAccount` | `string` | Required | The company account. If you only specify this parameter, the response includes the stores of all merchant accounts that are associated with the company account. |
| `merchantAccount` | `string \| undefined` | Optional | The merchant account. With this parameter, the response only includes the stores of the specified merchant account. |

## Example

```ts
import { GetStoresUnderAccountRequest } from 'adyen';

const getStoresUnderAccountRequest: GetStoresUnderAccountRequest = {
  companyAccount: 'companyAccount2',
  merchantAccount: 'merchantAccount0',
};
```

