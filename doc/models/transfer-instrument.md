
# Transfer Instrument

*This model accepts additional fields of type unknown.*

## Structure

`TransferInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccount` | [`BankAccountInfo`](../../doc/models/bank-account-info.md) | Required | - |
| `capabilities` | [`Record<string, SupportingEntityCapability> \| undefined`](../../doc/models/supporting-entity-capability.md) | Optional | List of capabilities for this transfer instrument. |
| `documentDetails` | [`DocumentReference[] \| undefined`](../../doc/models/document-reference.md) | Optional | List of documents uploaded for the transfer instrument. |
| `id` | `string` | Required, Read-only | The unique identifier of the transfer instrument. |
| `legalEntityId` | `string` | Required | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument. |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | The verification errors related to capabilities for this transfer instrument. |
| `type` | [`Type222`](../../doc/models/type-222.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Capability,
  TransferInstrument,
  Type222,
  Type3,
  Type32,
  Type413,
  Type59,
} from 'adyenlib';

const transferInstrument: TransferInstrument = {
  bankAccount: {
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: Type413.AuLocal,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    accountType: 'accountType8',
    bankName: 'bankName6',
    countryCode: 'countryCode6',
    trustedSource: false,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id8',
  legalEntityId: 'legalEntityId4',
  type: Type222.BankAccount,
  capabilities: {
    'key0': {
      allowed: false,
      id: 'id4',
      requested: false,
      verificationStatus: 'verificationStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key1': {
      allowed: false,
      id: 'id4',
      requested: false,
      verificationStatus: 'verificationStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key2': {
      allowed: false,
      id: 'id4',
      requested: false,
      verificationStatus: 'verificationStatus6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  },
  documentDetails: [
    {
      active: false,
      description: 'description4',
      fileName: 'fileName8',
      id: 'id4',
      modificationDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      active: false,
      description: 'description4',
      fileName: 'fileName8',
      id: 'id4',
      modificationDate: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
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
          type: Type3.LegalEntity,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        type: Type32.BankAccount,
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
              type: Type59.DataReview,
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
              type: Type59.DataReview,
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
              type: Type59.DataReview,
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
        },
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
              type: Type59.DataReview,
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
              type: Type59.DataReview,
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
              type: Type59.DataReview,
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
        },
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
              type: Type59.DataReview,
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
              type: Type59.DataReview,
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
              type: Type59.DataReview,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

