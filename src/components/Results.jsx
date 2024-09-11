import { calculateInvestmentResults, formatter } from "../util/investment";


export default function Results({input}){
    

    const resultData =  calculateInvestmentResults(input);
    const initialInvesment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    console.log(resultData);
    return <table id="result">
        <thead>
            <tr>
                <th>year</th>
                <th>Invesment Vlaue</th>
                <th>Interst (Year)</th>
                <th>Total Interest</th>
                <th>Interstes Capital</th>
            </tr>
        </thead>
            
        <tbody>
            {resultData.map(yearData =>{
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * initialInvesment;
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}