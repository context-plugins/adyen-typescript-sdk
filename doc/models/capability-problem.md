
# Capability Problem

## Structure

`CapabilityProblem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entity` | [`CapabilityProblemEntity2 \| undefined`](../../doc/models/capability-problem-entity-2.md) | Optional | Contains the type of the entity and the corresponding ID. |
| `verificationErrors` | [`VerificationError[] \| undefined`](../../doc/models/verification-error.md) | Optional | Contains information about the verification error. |

## Example

```ts
import {
  CapabilityEnum,
  CapabilityProblem,
  Type212Enum,
  Type33Enum,
} from 'adyen';

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
      type: Type33Enum.LegalEntity,
    },
    type: Type33Enum.LegalEntity,
  },
  verificationErrors: [
    {
      capabilities: [
        CapabilityEnum.UseCardInRestrictedIndustriesCommercial
      ],
      code: 'code0',
      message: 'message8',
      remediatingActions: [
        {
          code: 'code4',
          message: 'message6',
        },
        {
          code: 'code4',
          message: 'message6',
        }
      ],
      subErrors: [
        {
          capabilities: [
            CapabilityEnum.Processing,
            CapabilityEnum.PayoutToTransferInstrument
          ],
          code: 'code2',
          message: 'message4',
          type: Type212Enum.InvalidInput,
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.Processing,
            CapabilityEnum.PayoutToTransferInstrument
          ],
          code: 'code2',
          message: 'message4',
          type: Type212Enum.InvalidInput,
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.Processing,
            CapabilityEnum.PayoutToTransferInstrument
          ],
          code: 'code2',
          message: 'message4',
          type: Type212Enum.InvalidInput,
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
        }
      ],
    }
  ],
};
```

