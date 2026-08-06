
# Detailsoftokensthatarenotstoredwith Adyen

*This model accepts additional fields of type unknown.*

## Structure

`DetailsoftokensthatarenotstoredwithAdyen`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `holderName` | `string \| undefined` | Optional | The name of the card holder.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `number` | `string \| undefined` | Optional | The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `storedPaymentMethodId` | `string` | Required | Identifier used to fetch the token from the external service<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | [`Subtype3`](../../doc/models/subtype-3.md) | Required | The external service from which to fetch the token. Supported only for specific companies. Contact Adyen if you want to use this feature. |
| `type` | [`Type67`](../../doc/models/type-67.md) | Required | The type of token. Allowed value: **externalToken**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DetailsoftokensthatarenotstoredwithAdyen,
  Subtype3,
  Type67,
} from 'adyen';

const detailsoftokensthatarenotstoredwithAdyen: DetailsoftokensthatarenotstoredwithAdyen = {
  storedPaymentMethodId: 'storedPaymentMethodId2',
  subtype: Subtype3.Hilton,
  type: Type67.ExternalToken,
  checkoutAttemptId: 'checkoutAttemptId4',
  expiryMonth: 'expiryMonth2',
  expiryYear: 'expiryYear8',
  holderName: 'holderName4',
  number: 'number4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

