
# Transfer Instrument

## Structure

`TransferInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccountInfo1`](../../doc/models/bank-account-info-1.md) | Required | Contains information about the legal entity's bank account. |
| `capabilities` | [`Record<string, SupportingEntityCapability> \| undefined`](../../doc/models/supporting-entity-capability.md) | Optional | List of capabilities for this transfer instrument. |
| `documentDetails` | [`DocumentReference[] \| undefined`](../../doc/models/document-reference.md) | Optional | List of documents uploaded for the transfer instrument. |
| `id` | `string` | Required, Read-only | The unique identifier of the transfer instrument. |
| `legalEntityId` | `string` | Required | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument. |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | The verification errors related to capabilities for this transfer instrument. |
| `type` | [`Type221Enum`](../../doc/models/type-221-enum.md) | Required | The type of transfer instrument.<br><br>Possible value: **bankAccount**. |

## Example

```ts
import {
  CapabilityEnum,
  TransferInstrument,
  Type221Enum,
  Type311Enum,
  Type512Enum,
} from 'adyen';

const transferInstrument: TransferInstrument = {
  bankAccount: {
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: 'type2',
    },
    accountType: 'accountType8',
    bankName: 'bankName6',
    countryCode: 'countryCode6',
  },
  id: '',
  legalEntityId: 'legalEntityId4',
  type: Type221Enum.BankAccount,
  capabilities: {
    'key0': {
    },
    'key1': {
    },
    'key2': {
    }
  },
  documentDetails: [
    {
      active: false,
      description: 'description4',
      fileName: 'fileName8',
      id: 'id4',
      modificationDate: '2016-03-13T12:52:32.123Z',
    },
    {
      active: false,
      description: 'description4',
      fileName: 'fileName8',
      id: 'id4',
      modificationDate: '2016-03-13T12:52:32.123Z',
    }
  ],
  problems: [
    {
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
    }
  ],
};
```

