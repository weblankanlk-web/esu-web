"use client";

import { useTheme } from "@/lib/ThemeContext";
import React from "react";

interface Fee {
  currency: string;
  price: string;
  fee_name: string;
}

interface Installment {
  installment_id: number;
  fee_type_id: number;
  fee_name: string;
  currency: string;
  price: string;
}

interface InstallmentPlan {
  id: number;
  name: string;
  installment_count: number;
  installments: Installment[][];
}

interface FeePlan {
  id: number;
  origin: string;
  name: string;
  delivery_mode: { id: number; name: string };
  registration_fee: { currency: string; price: string };
  approximate_total: { currency: string; total: number };
  fees: Fee[];
  installment_plans: InstallmentPlan[];
}

interface FeesProps {
  fees?: { fee_plans?: FeePlan[] };
}

const CourseFees: React.FC<FeesProps> = ({ fees }) => {
  const { color } = useTheme();

  return (
    <>
      <div className="course-details-wrapper">
        <div id="section6" className="related-coures-div course-title">
          <h5>
            <span>
              Course <span style={{ color }}>Fees</span>
            </span>
          </h5>
        </div>
        <div>
          <p className="con">
            Total investment is an approximate figure and includes registration
            fees and university fees (calculated at 1 USD = 300 LKR). <br />
            Monthly instalment plans available.
            <br />
            Conditions Apply
          </p>
        </div>
        <div className="fee-box-wrap d-flex flex-wrap">
          {fees?.fee_plans?.map((plan) => (
            <div key={plan.id} className="fee-box">
              <div className="fee-box-inner">
                <h6>
                  {plan.origin === "local"
                    ? "Sri Lankan Students"
                    : "Foreign Students"}
                  <span className="d-block">
                    ({plan.delivery_mode.name}-Fee)
                  </span>
                </h6>
                <ul>
                  <li>
                    Registration Fee:
                    <span>
                      {plan.registration_fee.currency}
                      {parseFloat(plan.registration_fee.price).toLocaleString()}
                    </span>
                  </li>
                  <li>
                    Total Investment:
                    <span>
                      {plan.approximate_total.currency}
                      {plan.approximate_total.total.toLocaleString()}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
          {!fees?.fee_plans?.length && <p>No fee information available.</p>}
        </div>
      </div>
    </>
  );
};

export default CourseFees;
