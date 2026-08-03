
# Pci Document Info

*This model accepts additional fields of type unknown.*

## Structure

`PciDocumentInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string \| undefined` | Optional | The date the questionnaire was created, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00 |
| `id` | `string \| undefined` | Optional | The unique identifier of the signed questionnaire. |
| `validUntil` | `string \| undefined` | Optional | The expiration date of the questionnaire, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PciDocumentInfo } from 'adyenlib';

const pciDocumentInfo: PciDocumentInfo = {
  createdAt: '2016-03-13T12:52:32.123Z',
  id: 'id4',
  validUntil: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

