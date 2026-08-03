
# Pci Signing Response

*This model accepts additional fields of type unknown.*

## Structure

`PciSigningResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pciQuestionnaireIds` | `string[] \| undefined` | Optional | The unique identifiers of the signed PCI documents. |
| `signedBy` | `string \| undefined` | Optional | The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signed the PCI questionnaire. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PciSigningResponse } from 'adyenlib';

const pciSigningResponse: PciSigningResponse = {
  pciQuestionnaireIds: [
    'pciQuestionnaireIds7',
    'pciQuestionnaireIds8'
  ],
  signedBy: 'signedBy4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

