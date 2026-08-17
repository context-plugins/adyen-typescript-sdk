
# Verification Errors

## Structure

`VerificationErrors`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | List of the verification errors. |

## Example

```ts
import {
  CapabilityEnum,
  Type311Enum,
  Type512Enum,
  VerificationErrors,
} from 'adyen';

const verificationErrors: VerificationErrors = {
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
    },
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
    },
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

