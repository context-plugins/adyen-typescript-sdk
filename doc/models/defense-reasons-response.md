
# Defense Reasons Response

*This model accepts additional fields of type unknown.*

## Structure

`DefenseReasonsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseReasons` | [`DefenseReason[] \| undefined`](../../doc/models/defense-reason.md) | Optional | The defense reasons that can be used to defend the dispute. |
| `disputeServiceResult` | [`DisputeServiceResult`](../../doc/models/dispute-service-result.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DefenseReasonsResponse } from 'adyen';

const defenseReasonsResponse: DefenseReasonsResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  defenseReasons: [
    {
      defenseReasonCode: 'defenseReasonCode0',
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
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      defenseReasonCode: 'defenseReasonCode0',
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
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      defenseReasonCode: 'defenseReasonCode0',
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
        }
      ],
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

