
# Details of Tokens that Are Not Stored with Adyen

## Structure

`DetailsOfTokensThatAreNotStoredWithAdyen`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `holderName` | `string \| undefined` | Optional | The name of the card holder.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `number` | `string \| undefined` | Optional | The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `storedPaymentMethodId` | `string` | Required | Identifier used to fetch the token from the external service<br><br>**Constraints**: *Maximum Length*: `64` |
| `subtype` | `string` | Required, Constant | The external service from which to fetch the token. Supported only for specific companies. Contact Adyen if you want to use this feature.<br><br>**Value**: `'hilton'` |
| `type` | `string` | Required, Constant | The type of token. Allowed value: **externalToken**.<br><br>**Value**: `'externalToken'` |

## Example

```ts
import { DetailsOfTokensThatAreNotStoredWithAdyen } from 'adyen';

const detailsOfTokensThatAreNotStoredWithAdyen: DetailsOfTokensThatAreNotStoredWithAdyen = {
  storedPaymentMethodId: 'storedPaymentMethodId0',
  subtype: 'hilton',
  type: 'externalToken',
  checkoutAttemptId: 'checkoutAttemptId2',
  expiryMonth: 'expiryMonth0',
  expiryYear: 'expiryYear0',
  holderName: 'holderName2',
  number: 'number6',
};
```

