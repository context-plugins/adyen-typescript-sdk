
# Terms of Service Acceptance Info

## Structure

`TermsOfServiceAcceptanceInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptedBy` | `string \| undefined` | Optional | The unique identifier of the user that accepted the Terms of Service. |
| `acceptedFor` | `string \| undefined` | Optional | The unique identifier of the legal entity for which the Terms of Service are accepted. |
| `createdAt` | `string \| undefined` | Optional | The date when the Terms of Service were accepted, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00. |
| `id` | `string \| undefined` | Optional | An Adyen-generated reference for the accepted Terms of Service. |
| `type` | [`Type64Enum \| undefined`](../../doc/models/type-64-enum.md) | Optional | The type of Terms of Service.<br><br>Possible values:<br><br>* **adyenForPlatformsManage**<br>* **adyenIssuing**<br>* **adyenForPlatformsAdvanced**<br>* **adyenCapital**<br>* **adyenAccount**<br>* **adyenCard**<br>* **adyenFranchisee**<br>* **adyenPccr**<br>* **adyenChargeCard**<br>* **kycOnInvite** |
| `validTo` | `string \| undefined` | Optional | The expiration date for the Terms of Service acceptance, in ISO 8601 extended format. For example, 2022-12-18T00:00:00+01:00. |

## Example

```ts
import { TermsOfServiceAcceptanceInfo, Type64Enum } from 'adyen';

const termsOfServiceAcceptanceInfo: TermsOfServiceAcceptanceInfo = {
  acceptedBy: 'acceptedBy2',
  acceptedFor: 'acceptedFor4',
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  type: Type64Enum.AdyenForPlatformsAdvanced,
};
```

