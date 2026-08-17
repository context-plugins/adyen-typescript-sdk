
# Additional Data Modifications

## Structure

`AdditionalDataModifications`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `installmentPaymentDataSelectedInstallmentOption` | `string \| undefined` | Optional | This is the installment option selected by the shopper. It is required only if specified by the user. |

## Example

```ts
import { AdditionalDataModifications } from 'adyen';

const additionalDataModifications: AdditionalDataModifications = {
  installmentPaymentDataSelectedInstallmentOption: 'installmentPaymentData.selectedInstallmentOption2',
};
```

