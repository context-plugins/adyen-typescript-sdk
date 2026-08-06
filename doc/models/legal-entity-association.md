
# Legal Entity Association

*This model accepts additional fields of type unknown.*

## Structure

`LegalEntityAssociation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `associatorId` | `string \| undefined` | Optional, Read-only | The unique identifier of another legal entity with which the `legalEntityId` is associated. When the `legalEntityId` is associated to legal entities other than the current one, the response returns all the associations. |
| `entityType` | `string \| undefined` | Optional, Read-only | The legal entity type of associated legal entity.<br><br>For example, **organization**, **soleProprietorship** or **individual**. |
| `jobTitle` | `string \| undefined` | Optional | The individual's job title if the `type` is **uboThroughControl** or **signatory**. |
| `legalEntityId` | `string` | Required | The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id). |
| `name` | `string \| undefined` | Optional, Read-only | The name of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).<br><br>- For **individual**, `name.firstName` and `name.lastName`.<br>- For **organization**, `legalName`.<br>- For **soleProprietorship**, `name`. |
| `nominee` | `boolean \| undefined` | Optional | Default value: **false**<br>Set to **true** if the entity association `type` **director**, **secondaryPartner** or **shareholder** is also a nominee. Only applicable to New Zealand. |
| `relationship` | `string \| undefined` | Optional | The individual's relationship to a legal representative if the `type` is **legalRepresentative**. Possible values: **parent**, **guardian**. |
| `settlorExemptionReason` | `string[] \| undefined` | Optional | Defines the KYC exemption reason for a settlor associated with a trust. Only applicable to trusts in Australia.<br><br>For example, **professionalServiceProvider**, **deceased**, or **contributionBelowThreshold**. |
| `type` | [`Type142`](../../doc/models/type-142.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LegalEntityAssociation, Type142 } from 'adyen';

const legalEntityAssociation: LegalEntityAssociation = {
  legalEntityId: 'legalEntityId4',
  type: Type142.TrustOwnership,
  associatorId: 'associatorId6',
  entityType: 'entityType0',
  jobTitle: 'jobTitle2',
  name: 'name8',
  nominee: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

