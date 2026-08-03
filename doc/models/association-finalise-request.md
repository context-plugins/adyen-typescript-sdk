
# Association Finalise Request

*This model accepts additional fields of type unknown.*

## Structure

`AssociationFinaliseRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `ids` | `string[]` | Required | The list of unique identifiers of the resources that you are associating with the SCA device.<br><br>Maximum: 5 strings. |
| `strongCustomerAuthentication` | [`AssociationDelegatedAuthenticationData`](../../doc/models/association-delegated-authentication-data.md) | Required | - |
| `type` | [`Type103`](../../doc/models/type-103.md) | Required | The type of resource that you are associating with the SCA device.<br><br>Possible value: **PaymentInstrument** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AssociationFinaliseRequest, Type103 } from 'adyenlib';

const associationFinaliseRequest: AssociationFinaliseRequest = {
  ids: [
    'ids5',
    'ids6',
    'ids7'
  ],
  strongCustomerAuthentication: {
    sdkOutput: 'sdkOutput4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: Type103.PaymentInstrument,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

