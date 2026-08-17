
# Business Lines

## Structure

`BusinessLines`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessLines` | [`BusinessLine[]`](../../doc/models/business-line.md) | Required | List of business lines. |

## Example

```ts
import {
  BusinessLines,
  CapabilityEnum,
  ServiceEnum,
  Type311Enum,
  Type512Enum,
} from 'adyen';

const businessLines: BusinessLines = {
  businessLines: [
    {
      id: '',
      industryCode: 'industryCode2',
      legalEntityId: 'legalEntityId4',
      service: ServiceEnum.Issuing,
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
      salesChannels: [
        'salesChannels4',
        'salesChannels5'
      ],
      sourceOfFunds: {
        adyenProcessedFunds: false,
        amount: {
          currency: 'currency2',
          value: BigInt(110),
        },
        assetMonthsHeld: 46,
        cryptocurrencyExchange: 'cryptocurrencyExchange2',
        dateOfFundsReceived: '2016-03-13T12:52:32.123Z',
        dateOfSourceEvent: '2016-03-13T12:52:32.123Z',
      },
      webData: [
        {
          webAddress: 'webAddress4',
        },
        {
          webAddress: 'webAddress4',
        },
        {
          webAddress: 'webAddress4',
        }
      ],
    }
  ],
};
```

