
# Pci Signing Response

## Structure

`PciSigningResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pciQuestionnaireIds` | `string[] \| undefined` | Optional | The unique identifiers of the signed PCI documents. |
| `signedBy` | `string \| undefined` | Optional | The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signed the PCI questionnaire. |

## Example

```ts
import { PciSigningResponse } from 'adyen';

const pciSigningResponse: PciSigningResponse = {
  pciQuestionnaireIds: [
    'pciQuestionnaireIds7',
    'pciQuestionnaireIds8'
  ],
  signedBy: 'signedBy4',
};
```

