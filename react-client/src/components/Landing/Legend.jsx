import React from "react";
const classNames = [
  "failed",
  "terroristWatch",
  "originalRefurbishment",
  "replacementRefurbishment",
  "originalReplacement",
  "finalReplacement"
];
// const descriptions = [
//   "Failed (Worst)",
//   "Indications of SCR Degradation",
//   "Original WEC Refurbishment",
//   "Replacement WEC Refurbishment",
//   "Original Equipment Replacement",
//   "Final Replacement (Best)"
// ];

const descriptions = [
  "Severe Risk of Terrorist Attacks",
  "High Risk of Terrorist Attacks",
  "Elevated Risk of Terrorist Attacks",
  "General Risk of Terrorist Attacks",
  "Low Risk of Terrorist Attacks",
  "Lowest Risk of Terrorist Attacks"
];

const Legend = () => {
  return (
    <div className="system">
      <div className="center">
        <table>
          <tbody>
            <tr className="sparesTable">
              {descriptions.map((description, i) => (
                <td key={i} className={`legendText ${classNames[i]}`}>
                  {description}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Legend;
