import { useState } from 'react';

import './MorgageCalculator.css';
import { TextInput } from '../../components/TextInput';
import { SelectInput } from '../../components/SelectInput';

const AMORTIZATION = () => {
  let result = [];
  for (var index = 0; index < 30; index++) {
    result = [...result, {label: index + 1, value: index + 1}];
  }
  return result;
};

// const PAYMENT = [
//   { value:"AccW", label: "ccelerated Weekly" },
//   { value:"W", label: "Weekly" },
//   { value:"AccBiW", label: "Accelerated Bi-weekly" },
//   { value:"BiW", label: "Bi-Weekly (every 2 weeks)" },
//   { value:"SemiM", label: "Semi-monthly (24x per year)" },
//   { value:"M", label: "Monthly (12x per year)" }
// ];

// const TERM = [
//   { value:"1", label: '1 Year' },
//   { value:"2", label: '2 Years' },
//   { value:"3", label: '3 Years' },
//   { value:"4", label: '4 Years' },
//   { value:"5", label: '5 Years' },
//   { value:"6", label: '6 Years' },
//   { value:"7", label: '7 Years' },
//   { value:"8", label: '8 Years' },
//   { value:"9", label: '9 Years' },
//   { value:"10", label: '10 Years' }
// ];

const MorgageCalculator = () => {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);
  const [amortizationPeriod, setAmortizationPeriod] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(null);


  const handleOnSubmit = (e) => {
    const realMortgageAmount = mortgageAmount - prepaymentAmount

    // calculations taken here https://stackoverflow.com/questions/36096825/javascript-mortgage-calculator
    const percentageRate = interestRate / 1200;
    const monthlyPayment = (realMortgageAmount * percentageRate) / (1 - (Math.pow((1 + percentageRate) , amortizationPeriod * -1)));
    setMonthlyPayment((monthlyPayment / 12).toFixed(2));

    e.preventDefault();
  };

  return (
    <div className="mortgageCalculator">
      <h1>Mortgage Calculator</h1>
      <div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="form">
            <div className="half">
              <h3>Payment Plan</h3>
              <TextInput name="mortgageAmount" label="Mortgage Amount:" placeholder="100,000.00" type="cash" value={mortgageAmount} handleOnChange={setMortgageAmount} />
              <TextInput name="interestRate" label="Interest Rate:" placeholder="5.00" type="percentage" value={interestRate} handleOnChange={setInterestRate} />
              <SelectInput name="amortizationPeriod" label="Amortization Period:" options={ AMORTIZATION() } value={amortizationPeriod} handleOnChange={setAmortizationPeriod} />
              {/* <SelectInput name="amortizationPeriod" label="Amortization Period:" value={ AMORTIZATION() } />
              <SelectInput name="paymentFrequency" label="Payment Frequency:" value={ PAYMENT } />
              <SelectInput name="term" label="Term:" selected="5" value={ TERM } /> */}
            </div>
            <div className="half">
              <h3>Prepayment Plan</h3>
                <TextInput name="prepaymentAmount" label="Prepayment Amount:" placeholder="0.00" type="cash" value={prepaymentAmount} handleOnChange={setPrepaymentAmount} />
            </div>
          </div>
          <div className="submitButton">
            <button type="submit">Calculate</button>
          </div>
        </form>
      </div>
      {monthlyPayment &&
        <div>
          <h2>Calculation Summary</h2>
          <p><b>Monthly payment :</b>${monthlyPayment}</p>
        </div>
      }
    </div>
  );
}

export default MorgageCalculator;
