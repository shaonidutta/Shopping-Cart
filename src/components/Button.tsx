import React from 'react'
import '../css/Button.css';
import { Box, Button, Typography } from '@mui/material';

interface ButtonProps {
  orderStatus: string;
}
const InvoiceButton: React.FC<ButtonProps> = ({ orderStatus }) => {
  const buttonClass =
    orderStatus === "Workflow Automation"
      ? "workflow-button"
      : "invoice-button";

  return (
    <Button className={buttonClass}>
      <Typography className="button-text">{orderStatus}</Typography>
    </Button>
  );
};


export default InvoiceButton