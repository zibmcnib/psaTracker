let parsePSADetails = (psa, subgroup) => {
  let parsedPSA = {
    status: "",
    location: "",
    subgroup: "",
    group: "",
    serial: "",
    origin: "",
    fingers: ""
  };

  if (psa.fieldData !== undefined) {
    if (subgroup === 81) {
      parsedPSA.subgroup = "CEA1";
    } else {
      parsedPSA.subgroup = `SG${subgroup}`;
    }
    if (psa.fieldData.failed) {
      parsedPSA.status = "failed";
      if (psa.fieldData.wecRefurb === 1) {
        parsedPSA.origin = "WEC";
      } else {
        parsedPSA.origin = "oh crap...";
      }
    } else if (psa.fieldData.terrorist) {
      parsedPSA.status = "terroristWatch";
      if (psa.fieldData.wecRefurb) {
        parsedPSA.origin = "WEC";
      } else {
        parsedPSA.origin = "NO!";
      }
    } else if (psa.fieldData.breakerRep && !psa.fieldData.wpps) {
      parsedPSA.status = "originalReplacement";
      parsedPSA.origin = "OEM";
    } else if (psa.fieldData.wpps) {
      parsedPSA.status = "finalReplacement";
      parsedPSA.origin = "WPPS";
    } else if (psa.fieldData.replaced && psa.fieldData.wecRefurb) {
      parsedPSA.status = "replacementRefurbishment";
      parsedPSA.origin = "WEC";
    } else if (psa.fieldData.wecRefurb && !psa.fieldData.replaced) {
      parsedPSA.origin = "WEC";
      parsedPSA.status = "originalRefurbishment";
    }

    parsedPSA.group = psa.locationData.group;
    parsedPSA.serial = psa.fieldData.serial;
    parsedPSA.fingers = psa.locationData.finger;
    parsedPSA.location = psa.locationData.location;
  } else {
    parsedPSA.status = "blank";
    parsedPSA.location = " ` ";
    parsedPSA.subgroup = " ` ";
    parsedPSA.group = " ` ";
    parsedPSA.serial = "No PSA";
    parsedPSA.origin = " ` ";
    parsedPSA.fingers = " ` ";
  }
  return parsedPSA;
};

export default parsePSADetails;
