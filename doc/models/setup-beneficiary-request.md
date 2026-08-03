
# Setup Beneficiary Request

*This model accepts additional fields of type unknown.*

## Structure

`SetupBeneficiaryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `destinationAccountCode` | `string` | Required | The destination account code. |
| `merchantReference` | `string \| undefined` | Optional | A value that can be supplied at the discretion of the executing user. |
| `sourceAccountCode` | `string` | Required | The benefactor account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SetupBeneficiaryRequest } from 'adyenlib';

const setupBeneficiaryRequest: SetupBeneficiaryRequest = {
  destinationAccountCode: 'destinationAccountCode4',
  sourceAccountCode: 'sourceAccountCode4',
  merchantReference: 'merchantReference4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

