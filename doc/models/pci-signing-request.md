
# Pci Signing Request

*This model accepts additional fields of type unknown.*

## Structure

`PciSigningRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pciTemplateReferences` | `string[]` | Required | The array of Adyen-generated unique identifiers for the questionnaires. |
| `signedBy` | `string` | Required | The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signs the PCI questionnaire. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PciSigningRequest } from 'adyenlib';

const pciSigningRequest: PciSigningRequest = {
  pciTemplateReferences: [
    'pciTemplateReferences8',
    'pciTemplateReferences9',
    'pciTemplateReferences0'
  ],
  signedBy: 'signedBy2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

