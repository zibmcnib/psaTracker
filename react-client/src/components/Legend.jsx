import React from "react";
const classNames = [
  "failed",
  "terroristWatch",
  "originalRefurbishment",
  "replacementRefurbishment",
  "originalReplacement",
  "finalReplacement"
];
const descriptions = [
  "Failed (Worst)",
  "Indications of SCR Degradation",
  "Original WEC Refurbishment",
  "Replacement WEC Refurbishment",
  "Original Equipment Replacement",
  "Final Replacement (Best)"
];

const Legend = props => {
  return (
    <div className="system">
      <div className="center">
        <table>
          <tbody>
            <tr>
              {descriptions.map((description, i) => (
                <td
                  className="legendText"
                  key={i}
                  className={`${classNames[i]}`}
                >
                  {description}
                </td>
                // </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Legend;
