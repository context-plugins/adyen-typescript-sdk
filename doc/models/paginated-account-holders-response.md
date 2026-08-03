
# Paginated Account Holders Response

*This model accepts additional fields of type unknown.*

## Structure

`PaginatedAccountHoldersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolders` | [`AccountHolder2[]`](../../doc/models/account-holder-2.md) | Required | List of account holders. |
| `hasNext` | `boolean` | Required | Indicates whether there are more items on the next page. |
| `hasPrevious` | `boolean` | Required | Indicates whether there are more items on the previous page. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AllowedLevel,
  Capability,
  FundingSource,
  Interval,
  PaginatedAccountHoldersResponse,
  Type21,
  Type3,
  Type4,
} from 'adyenlib';

const paginatedAccountHoldersResponse: PaginatedAccountHoldersResponse = {
  accountHolders: [
    {
      id: 'id2',
      legalEntityId: 'legalEntityId8',
      balancePlatform: 'balancePlatform4',
      capabilities: {
        'key0': {
          allowed: false,
          allowedLevel: AllowedLevel.High,
          allowedSettings: {
            amountPerIndustry: {
              'key0': {
                currency: 'currency8',
                value: BigInt(56),
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              'key1': {
                currency: 'currency8',
                value: BigInt(56),
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            },
            authorizedCardUsers: false,
            fundingSource: [
              FundingSource.Credit,
              FundingSource.Debit,
              FundingSource.Prepaid
            ],
            interval: Interval.Daily,
            maxAmount: {
              currency: 'currency4',
              value: BigInt(160),
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          enabled: false,
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
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        'key1': {
          allowed: false,
          allowedLevel: AllowedLevel.High,
          allowedSettings: {
            amountPerIndustry: {
              'key0': {
                currency: 'currency8',
                value: BigInt(56),
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              },
              'key1': {
                currency: 'currency8',
                value: BigInt(56),
                additionalProperties: {
                  'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                },
              }
            },
            authorizedCardUsers: false,
            fundingSource: [
              FundingSource.Credit,
              FundingSource.Debit,
              FundingSource.Prepaid
            ],
            interval: Interval.Daily,
            maxAmount: {
              currency: 'currency4',
              value: BigInt(160),
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          enabled: false,
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
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      },
      contactDetails: {
        address: {
          city: 'city6',
          country: 'country0',
          houseNumberOrName: 'houseNumberOrName4',
          postalCode: 'postalCode8',
          street: 'street6',
          stateOrProvince: 'stateOrProvince4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        email: 'email6',
        phone: {
          number: 'number8',
          type: Type4.Landline,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        webAddress: 'webAddress0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description2',
      metadata: {
        'key0': 'metadata9',
        'key1': 'metadata8'
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  hasNext: false,
  hasPrevious: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

