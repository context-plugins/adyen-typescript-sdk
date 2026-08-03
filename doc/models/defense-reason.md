
# Defense Reason

*This model accepts additional fields of type unknown.*

## Structure

`DefenseReason`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseDocumentTypes` | [`DefenseDocumentType[] \| undefined`](../../doc/models/defense-document-type.md) | Optional | Array of defense document types for a specific defense reason. Indicates the document types that you can submit to the schemes to defend this dispute, and whether they are required. |
| `defenseReasonCode` | `string` | Required | The defense reason code that was selected to defend this dispute. |
| `satisfied` | `boolean` | Required | Indicates if sufficient defense material has been supplied. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DefenseReason } from 'adyenlib';

const defenseReason: DefenseReason = {
  defenseReasonCode: 'defenseReasonCode2',
  satisfied: false,
  defenseDocumentTypes: [
    {
      available: false,
      defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
      requirementLevel: 'requirementLevel4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      available: false,
      defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
      requirementLevel: 'requirementLevel4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      available: false,
      defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
      requirementLevel: 'requirementLevel4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

