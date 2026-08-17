
# Request Activation Response

## Structure

`RequestActivationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string \| undefined` | Optional | The unique identifier of the company account. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant account you requested to activate. |

## Example

```ts
import { RequestActivationResponse } from 'adyen';

const requestActivationResponse: RequestActivationResponse = {
  companyId: 'companyId4',
  merchantId: 'merchantId0',
};
```

