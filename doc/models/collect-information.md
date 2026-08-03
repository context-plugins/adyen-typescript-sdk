
# Collect Information

*This model accepts additional fields of type unknown.*

## Structure

`CollectInformation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankDetails` | `boolean \| undefined` | Optional | Indicates whether [bank account details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#bank-accounts) must be collected. Default is **true**. |
| `businessDetails` | `boolean \| undefined` | Optional | Indicates whether [business details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#organizations) must be collected. Default is **true**. |
| `individualDetails` | `boolean \| undefined` | Optional | Indicates whether [individual details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals) must be collected. Default is **true**. |
| `legalArrangementDetails` | `boolean \| undefined` | Optional | Indicates whether [legal arrangement details](https://docs.adyen.com/classic-platforms/verification-checks/legal-arrangements) must be collected. Default is **true**. |
| `pciQuestionnaire` | `boolean \| undefined` | Optional | Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/classic-platforms/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**. |
| `shareholderDetails` | `boolean \| undefined` | Optional | Indicates whether [shareholder details](https://docs.adyen.com/classic-platforms/verification-process/accepted-data-format/#individuals) must be collected. Defaults to **true**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CollectInformation } from 'adyenlib';

const collectInformation: CollectInformation = {
  bankDetails: false,
  businessDetails: false,
  individualDetails: false,
  legalArrangementDetails: false,
  pciQuestionnaire: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

