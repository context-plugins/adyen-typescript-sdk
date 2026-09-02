import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type31 = {
  DokuMandiriVa: "doku_mandiri_va",
  DokuCimbVa: "doku_cimb_va",
  DokuDanamonVa: "doku_danamon_va",
  DokuBniVa: "doku_bni_va",
  DokuPermataLiteAtm: "doku_permata_lite_atm",
  DokuBriVa: "doku_bri_va",
  DokuBcaVa: "doku_bca_va",
  DokuAlfamart: "doku_alfamart",
  DokuIndomaret: "doku_indomaret",
  DokuWallet: "doku_wallet",
  DokuOvo: "doku_ovo",
} as const;
export type Type31 = (typeof Type31)[keyof typeof Type31] | (string & {});

export const type31Schema: EnumSchema<Type31> = s.enumOf<Type31>(Type31);
