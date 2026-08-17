
# Defense Reasons Response

## Structure

`DefenseReasonsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `defenseReasons` | [`DefenseReason[] \| undefined`](../../doc/models/defense-reason.md) | Optional | The defense reasons that can be used to defend the dispute. |
| `disputeServiceResult` | [`DisputeServiceResult1`](../../doc/models/dispute-service-result-1.md) | Required | The result of the dispute service. |

## Example

```ts
import { DefenseReasonsResponse } from 'adyen';

const defenseReasonsResponse: DefenseReasonsResponse = {
  disputeServiceResult: {
    success: false,
    errorMessage: 'errorMessage8',
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
        },
        {
          available: false,
          defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
          requirementLevel: 'requirementLevel4',
        }
      ],
    },
    {
      defenseReasonCode: 'defenseReasonCode0',
      satisfied: false,
      defenseDocumentTypes: [
        {
          available: false,
          defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
          requirementLevel: 'requirementLevel4',
        },
        {
          available: false,
          defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
          requirementLevel: 'requirementLevel4',
        }
      ],
    },
    {
      defenseReasonCode: 'defenseReasonCode0',
      satisfied: false,
      defenseDocumentTypes: [
        {
          available: false,
          defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
          requirementLevel: 'requirementLevel4',
        },
        {
          available: false,
          defenseDocumentTypeCode: 'defenseDocumentTypeCode0',
          requirementLevel: 'requirementLevel4',
        }
      ],
    }
  ],
};
```

