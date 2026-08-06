
# Additional Data Modifications

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalDataModifications`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installmentPaymentDataSelectedInstallmentOption` | `string \| undefined` | Optional | This is the installment option selected by the shopper. It is required only if specified by the user. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalDataModifications } from 'adyen';

const additionalDataModifications: AdditionalDataModifications = {
  installmentPaymentDataSelectedInstallmentOption: 'installmentPaymentData.selectedInstallmentOption2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

