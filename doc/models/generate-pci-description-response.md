
# Generate Pci Description Response

*This model accepts additional fields of type unknown.*

## Structure

`GeneratePciDescriptionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string \| undefined` | Optional | The generated questionnaires in a base64 encoded format. |
| `language` | `string \| undefined` | Optional | The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code for the questionnaire. For example, **en**. |
| `pciTemplateReferences` | `string[] \| undefined` | Optional | The array of Adyen-generated unique identifiers for the questionnaires. If empty, the user is not required to sign questionnaires. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GeneratePciDescriptionResponse } from 'adyenlib';

const generatePciDescriptionResponse: GeneratePciDescriptionResponse = {
  content: 'content0',
  language: 'language8',
  pciTemplateReferences: [
    'pciTemplateReferences6',
    'pciTemplateReferences7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

