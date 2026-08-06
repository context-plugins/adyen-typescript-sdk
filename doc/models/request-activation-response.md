
# Request Activation Response

*This model accepts additional fields of type unknown.*

## Structure

`RequestActivationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `companyId` | `string \| undefined` | Optional | The unique identifier of the company account. |
| `merchantId` | `string \| undefined` | Optional | The unique identifier of the merchant account you requested to activate. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RequestActivationResponse } from 'adyen';

const requestActivationResponse: RequestActivationResponse = {
  companyId: 'companyId4',
  merchantId: 'merchantId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

