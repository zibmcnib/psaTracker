const locationDCIDS = {
  "JSFNC01A*SG1*IPWSUP": {
    subgroup: 1,
    group: "RG3",
    finger: 12,
    ceas: [2, 3, 4, 5]
  },
  "JSFNC01A*SG10*IPWSUP": {
    subgroup: 10,
    group: "SDB",
    finger: 12,
    ceas: [35, 37, 39, 41]
  },
  "JSFNC01A*SG2*IPWSUP": {
    subgroup: 2,
    group: "SDA",
    finger: 12,
    ceas: [6, 8, 10, 12]
  },
  "JSFNC01A*SG3*IPWSUP": {
    subgroup: 3,
    group: "SDA",
    finger: 12,
    ceas: [7, 9, 11, 13]
  },
  "JSFNC01A*SG4*IPWSUP": {
    subgroup: 4,
    group: "RG5",
    finger: 4,
    ceas: [14, 15, 16, 17]
  },
  "JSFNC01A*SG5*IPWSUP": {
    subgroup: 5,
    group: "RG4",
    finger: 4,
    ceas: [18, 19, 20, 21]
  },
  "JSFNC01A*SG6*IPWSUP": {
    subgroup: 6,
    group: "SDB",
    finger: 12,
    ceas: [22, 24, 26, 28]
  },
  "JSFNC01A*SG7*IPWSUP": {
    subgroup: 7,
    group: "SDB",
    finger: 12,
    ceas: [23, 25, 27, 29]
  },
  "JSFNC01A*SG8*IPWSUP": {
    subgroup: 8,
    group: "PS1",
    finger: 4,
    ceas: [30, 31, 32, 33]
  },
  "JSFNC01A*SG9*IPWSUP": {
    subgroup: 9,
    group: "SDB",
    finger: 12,
    ceas: [34, 36, 38, 40]
  },
  "JSFNC01B*SG11*IPWSUP": {
    subgroup: 11,
    group: "RG3",
    finger: 4,
    ceas: [42, 43, 44, 45]
  },
  "JSFNC01B*SG12*IPWSUP": {
    subgroup: 12,
    group: "PS2",
    finger: 4,
    ceas: [46, 48, 50, 52]
  },
  "JSFNC01B*SG13*IPWSUP": {
    subgroup: 13,
    group: "PS2",
    finger: 4,
    ceas: [47, 49, 51, 53]
  },
  "JSFNC01B*SG14*IPWSUP": {
    subgroup: 14,
    group: "RG1",
    finger: 12,
    ceas: [54, 57, 60, 63]
  },
  "JSFNC01B*SG-CEA1*IPWSUP": {
    subgroup: 81,
    group: "PS1",
    finger: 4,
    ceas: [1, null, null, null]
  },
  "JSFNC01C*SG15*IPWSUP": {
    subgroup: 15,
    group: "RG1",
    finger: 12,
    ceas: [56, 59, 62, 65]
  },
  "JSFNC01C*SG16*IPWSUP": {
    subgroup: 16,
    group: "SDB",
    finger: 12,
    ceas: [55, 58, 61, 64]
  },
  "JSFNC01C*SG17*IPWSUP": {
    subgroup: 17,
    group: "RG2",
    finger: 4,
    ceas: [66, 68, 70, 72]
  },
  "JSFNC01C*SG18*IPWSUP": {
    subgroup: 18,
    group: "RG2",
    finger: 4,
    ceas: [67, 69, 71, 73]
  },
  "JSFNC01C*SG19*IPWSUP": {
    subgroup: 19,
    group: "SDA",
    finger: 12,
    ceas: [74, 76, 78, 80]
  },
  "JSFNC01C*SG20*IPWSUP": {
    subgroup: 20,
    group: "SDA",
    finger: 12,
    ceas: [75, 77, 79, 81]
  },
  "JSFNC01C*SG21*IPWSUP": {
    subgroup: 21,
    group: "RG3",
    finger: 4,
    ceas: [82, 83, 84, 85]
  },
  "JSFNC01C*SG22*IPWSUP": {
    subgroup: 22,
    group: "RG4",
    finger: 4,
    ceas: [86, 87, 88, 89]
  },
  blank: {
    subgroup: "BLANK",
    group: null,
    finger: null,
    ceas: null
  },
  HBCP: {
    subgroup: "HBCP",
    group: null,
    finger: null,
    ceas: null
  },
  HBPSA: {
    subgroup: "HBPSA",
    group: null,
    finger: null,
    ceas: null
  }
};

const ATop = [
  "JSFNC01A*SG1*IPWSUP",
  "JSFNC01A*SG3*IPWSUP",
  "JSFNC01A*SG5*IPWSUP",
  "JSFNC01A*SG7*IPWSUP",
  "JSFNC01A*SG9*IPWSUP"
];
const ABot = [
  "JSFNC01A*SG2*IPWSUP",
  "JSFNC01A*SG4*IPWSUP",
  "JSFNC01A*SG6*IPWSUP",
  "JSFNC01A*SG8*IPWSUP",
  "JSFNC01A*SG10*IPWSUP"
];
const BTop = [
  "JSFNC01B*SG11*IPWSUP",
  "JSFNC01B*SG-CEA1*IPWSUP",
  "blank",
  "JSFNC01B*SG13*IPWSUP"
];
const BBot = ["JSFNC01B*SG12*IPWSUP", "HBPSA", "HBCP", "JSFNC01B*SG14*IPWSUP"];

const CTop = [
  "JSFNC01C*SG15*IPWSUP",
  "JSFNC01C*SG17*IPWSUP",
  "JSFNC01C*SG19*IPWSUP",
  "JSFNC01C*SG21*IPWSUP"
];
const CBot = [
  "JSFNC01C*SG16*IPWSUP",
  "JSFNC01C*SG18*IPWSUP",
  "JSFNC01C*SG20*IPWSUP",
  "JSFNC01C*SG22*IPWSUP"
];

module.exports = {
  ATop,
  ABot,
  BTop,
  BBot,
  CTop,
  CBot,
  locationDCIDS
};
