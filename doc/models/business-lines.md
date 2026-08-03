
# Business Lines

*This model accepts additional fields of type unknown.*

## Structure

`BusinessLines`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `businessLines` | [`BusinessLine[]`](../../doc/models/business-line.md) | Required | List of business lines. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BusinessLines,
  Capability,
  Service,
  Type3,
  Type32,
  Type59,
} from 'adyenlib';

const businessLines: BusinessLines = {
  businessLines: [
    {
      id: 'id0',
      industryCode: 'industryCode2',
      legalEntityId: 'legalEntityId4',
      service: Service.Issuing,
      industryCodeDescription: 'industryCodeDescription4',
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
      salesChannels: [
        'salesChannels4',
        'salesChannels5'
      ],
      sourceOfFunds: {
        adyenProcessedFunds: false,
        amount: {
          currency: 'currency2',
          value: BigInt(110),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        assetMonthsHeld: 46,
        cryptocurrencyExchange: 'cryptocurrencyExchange2',
        dateOfFundsReceived: '2016-03-13T12:52:32.123Z',
        dateOfSourceEvent: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      webData: [
        {
          webAddress: 'webAddress4',
          webAddressId: 'webAddressId8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          webAddress: 'webAddress4',
          webAddressId: 'webAddressId8',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          webAddress: 'webAddress4',
          webAddressId: 'webAddressId8',
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

