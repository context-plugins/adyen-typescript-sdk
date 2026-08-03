
# Capability Problem

*This model accepts additional fields of type unknown.*

## Structure

`CapabilityProblem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entity` | [`CapabilityProblemEntity \| undefined`](../../doc/models/capability-problem-entity.md) | Optional | - |
| `verificationErrors` | [`VerificationError[] \| undefined`](../../doc/models/verification-error.md) | Optional | Contains information about the verification error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Capability, CapabilityProblem, Type21, Type3 } from 'adyenlib';

const capabilityProblem: CapabilityProblem = {
  entity: {
    documents: [
      'documents1',
      'documents2'
    ],
    id: 'id2',
    owner: {
      documents: [
        'documents3',
        'documents4'
      ],
      id: 'id4',
      type: Type3.LegalEntity,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    type: Type3.LegalEntity,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  verificationErrors: [
    {
      capabilities: [
        Capability.UseCardInRestrictedIndustriesCommercial
      ],
      code: 'code0',
      message: 'message8',
      remediatingActions: [
        {
          code: 'code4',
          message: 'message6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          code: 'code4',
          message: 'message6',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      subErrors: [
        {
          capabilities: [
            Capability.Processing,
            Capability.PayoutToTransferInstrument
          ],
          code: 'code2',
          message: 'message4',
          type: Type21.InvalidInput,
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
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
          capabilities: [
            Capability.Processing,
            Capability.PayoutToTransferInstrument
          ],
          code: 'code2',
          message: 'message4',
          type: Type21.InvalidInput,
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
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
          capabilities: [
            Capability.Processing,
            Capability.PayoutToTransferInstrument
          ],
          code: 'code2',
          message: 'message4',
          type: Type21.InvalidInput,
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              code: 'code4',
              message: 'message6',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

