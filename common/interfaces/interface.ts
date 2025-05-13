export interface Fee {
  currency: string;
  price: string;
  fee_name: string;
}

export interface Installment {
  installment_id: number;
  fee_type_id: number;
  fee_name: string;
  currency: string;
  price: string;
}

export interface InstallmentPlan {
  id: number;
  name: string;
  installment_count: number;
  installments: Installment[][];
}

export interface FeePlan {
  id: number;
  origin: string;
  name: string;
  delivery_mode: { id: number; name: string };
  registration_fee: { currency: string; price: string };
  approximate_total: { currency: string; total: number };
  fees: Fee[];
  installment_plans: InstallmentPlan[];
}

export interface Title {
  title: string;
  subtitle: string;
}