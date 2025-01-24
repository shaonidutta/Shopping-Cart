import apEssentials from "../assets/Group 158.svg";
import apAgility from "../assets/image 55.svg";
import totalAgility from "../assets/Group 144.svg";

const ProductData = [
  {
    id: 1,
    productImage: apEssentials,
    orderStatus: "Invoice Automation",
    productName: "AP Essentials",
    quantity: 1000,
    configurations: [
      { name: "Header,Footer, Line Items" },
      { name: "With Storage" },
      { name: "Include Approval Workflow" },
      { name: "3 Year (Annual)" },
    ],
    addOns: [
      {
        price: 14.64,
        detail:
          "Invoice Capture Service for Microsoft NAV-Entitlement and Overage Part",
      },
      {
        price: 14.64,
        detail:
          "Invoice Capture Service for Microsoft NAV-Entitlement and Overage Part",
      },
    ],
  },
  {
    id: 2,
    productImage: apAgility,
    orderStatus: "Invoice Automation",
    productName: "AP Agility",
    quantity: 1000,
    configurations: [
      { name: "Header,Footer, Line Items" },
      { name: "With Storage" },
      { name: "Include Approval Workflow" },
      { name: "3 Year (Annual)" },
    ],
    addOns: [],
  },
  {
    id: 3,
    productImage: totalAgility,
    orderStatus: "Workflow Automation",
    productName: "Total Agility",
    quantity: 1000,
    configurations: [
      { name: "Header,Footer, Line Items" },
      { name: "With Storage" },
      { name: "Include Approval Workflow" },
      { name: "3 Year (Annual)" },
    ],
    addOns: [],
  },
];
export default ProductData;
