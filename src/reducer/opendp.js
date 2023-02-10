var initialState = [
  {
    key: "100",
    num: 0,
  },
  {
    key: "110",
    num: 0,
  },
  {
    key: "166",
    num: 0,
  },
  {
    key: "112",
    num: 0,
  },
  {
    key: "113",
    num: 0,
  },
  {
    key: "114",
    num: 0,
  },
  {
    key: "115",
    num: 0,
  },
  {
    key: "116",
    num: 0,
  },
  {
    key: "117",
    num: 0,
  },
  {
    key: "118",
    num: 0,
  },
  {
    key: "119",
    num: 0,
  },
  {
    key: "200",
    num: 0,
  },
  {
    key: "229",
    num: 0,
  },
  {
    key: "220",
    num: 0,
  },
  {
    key: "122",
    num: 0,
  },
  {
    key: "277",
    num: 0,
  },
  {
    key: "133",
    num: 0,
  },
  {
    key: "224",
    num: 0,
  },
  {
    key: "144",
    num: 0,
  },
  {
    key: "226",
    num: 0,
  },
  {
    key: "155",
    num: 0,
  },
  {
    key: "228",
    num: 0,
  },
  {
    key: "300",
    num: 0,
  },
  {
    key: "266",
    num: 0,
  },
  {
    key: "177",
    num: 0,
  },
  {
    key: "330",
    num: 0,
  },
  {
    key: "188",
    num: 0,
  },
  {
    key: "233",
    num: 0,
  },
  {
    key: "199",
    num: 0,
  },
  {
    key: "244",
    num: 0,
  },
  {
    key: "227",
    num: 0,
  },
  {
    key: "255",
    num: 0,
  },
  {
    key: "337",
    num: 0,
  },
  {
    key: "338",
    num: 0,
  },
  {
    key: "339",
    num: 0,
  },
  {
    key: "448",
    num: 0,
  },
  {
    key: "223",
    num: 0,
  },
  {
    key: "288",
    num: 0,
  },
  {
    key: "225",
    num: 0,
  },
  {
    key: "299",
    num: 0,
  },
  {
    key: "335",
    num: 0,
  },
  {
    key: "336",
    num: 0,
  },
  {
    key: "355",
    num: 0,
  },
  {
    key: "400",
    num: 0,
  },
  {
    key: "366",
    num: 0,
  },
  {
    key: "466",
    num: 0,
  },
  {
    key: "377",
    num: 0,
  },
  {
    key: "440",
    num: 0,
  },
  {
    key: "388",
    num: 0,
  },
  {
    key: "334",
    num: 0,
  },
  {
    key: "344",
    num: 0,
  },
  {
    key: "499",
    num: 0,
  },
  {
    key: "445",
    num: 0,
  },
  {
    key: "446",
    num: 0,
  },
  {
    key: "447",
    num: 0,
  },
  {
    key: "556",
    num: 0,
  },
  {
    key: "449",
    num: 0,
  },
  {
    key: "477",
    num: 0,
  },
  {
    key: "559",
    num: 0,
  },
  {
    key: "488",
    num: 0,
  },
  {
    key: "399",
    num: 0,
  },
  {
    key: "660",
    num: 0,
  },
  {
    key: "599",
    num: 0,
  },
  {
    key: "455",
    num: 0,
  },
  {
    key: "500",
    num: 0,
  },
  {
    key: "600",
    num: 0,
  },
  {
    key: "557",
    num: 0,
  },
  {
    key: "558",
    num: 0,
  },
  {
    key: "577",
    num: 0,
  },
  {
    key: "550",
    num: 0,
  },
  {
    key: "588",
    num: 0,
  },
  {
    key: "688",
    num: 0,
  },
  {
    key: "779",
    num: 0,
  },
  {
    key: "699",
    num: 0,
  },
  {
    key: "799",
    num: 0,
  },
  {
    key: "880",
    num: 0,
  },
  {
    key: "566",
    num: 0,
  },
  {
    key: "800",
    num: 0,
  },
  {
    key: "667",
    num: 0,
  },
  {
    key: "668",
    num: 0,
  },
  {
    key: "669",
    num: 0,
  },
  {
    key: "778",
    num: 0,
  },
  {
    key: "788",
    num: 0,
  },
  {
    key: "770",
    num: 0,
  },
  {
    key: "889",
    num: 0,
  },
  {
    key: "899",
    num: 0,
  },
  {
    key: "700",
    num: 0,
  },
  {
    key: "990",
    num: 0,
  },
  {
    key: "900",
    num: 0,
  },
  {
    key: "677",
    num: 0,
  },
];
const OpenDpData = (state = initialState, action) => {
  if (action.type == "AddOpenDp") {
    return action.payload;
  } else {
    return state;
  }
};
export default OpenDpData;
