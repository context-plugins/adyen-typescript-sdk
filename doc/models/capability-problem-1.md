
# Capability Problem 1

## Structure

`CapabilityProblem1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entity` | [`CapabilityProblemEntity1 \| undefined`](../../doc/models/capability-problem-entity-1.md) | Optional | - |
| `verificationErrors` | [`VerificationError1[] \| undefined`](../../doc/models/verification-error-1.md) | Optional | - |

## Example

```ts
import {
  CapabilityEnum,
  CapabilityProblem1,
  Type311Enum,
  Type512Enum,
} from 'adyen';

const capabilityProblem1: CapabilityProblem1 = {
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
      type: Type311Enum.LegalEntity,
    },
    type: Type311Enum.BankAccount,
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
          type: Type512Enum.DataReview,
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
          type: Type512Enum.DataReview,
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
          type: Type512Enum.DataReview,
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
    },
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
          type: Type512Enum.DataReview,
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
          type: Type512Enum.DataReview,
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
          type: Type512Enum.DataReview,
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
    },
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
          type: Type512Enum.DataReview,
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
          type: Type512Enum.DataReview,
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
          type: Type512Enum.DataReview,
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

