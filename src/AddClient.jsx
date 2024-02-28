import React from "react";
import { styled } from "@mui/material";
import Modal from "./Common/Modal";
import * as yup from "yup";
import { FormComponent } from "./Common/FormComponent";
// import { validationMessages } from "../Common/ValidationMessages";

const validationMessages = {
  billingClientId: {
    required: "Billing Client ID is required.",
  },
  clientName: {
    required: "Client Name is required.",
  },
  clientNumber: {
    required: "Client Number is required.",
  },
  billingCycle: {
    required: "Billing Cycle is required.",
  },
  retention: {
    required: "Retention is required.",
  },
  billingStartDate: {
    required: "Billing Start Date is required.",
  },
  billingEndDate: {
    required: "Billing End Date is required.",
  },
  sapCustomerNumber: {
    required: "SAP Customer Number is required.",
  },
};

const StyledDiv = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "auto auto auto auto",
}));

const validationSchema = yup.object({
  billingClientId: yup
    .string("")
    .required(validationMessages.billingClientId.required),
  ddaClientId: "",
  clientName: yup.string("").required(validationMessages.clientName.required),
  clientNumber: yup
    .string("")
    .required(validationMessages.clientNumber.required),
  accountManager: "",
  alternateClientId: "",
  alternateClientName: "",
  billingCycle: yup
    .string("")
    .required(validationMessages.billingCycle.required),
  retention: yup.string("").required(validationMessages.retention.required),
  billingStartDate: null,
  billingEndDate: null,
  sapCustomerNumber: "",
});

const initialValues = {
  billingClientId: "",
  ddaClientId: "",
  clientName: "",
  organizationName: "",
  clientNumber: "",
  accountManager: "",
  alternateClientId: "",
  alternateClientName: "",
  billingCycle: "",
  retention: "",
  billingStartDate: null,
  billingEndDate: null,
  sapCustomerNumber: "",
};

export function AddClient() {
  const [open, setOpen] = React.useState(false);
  const actionsButtons = [
    {
      button: "save",
      callback: () => {},
      variant: "standard",
      sortOrder: 1,
      type: "submit",
    },
  ];

  const RenderComponent = () => {
    const fields = [
      {
        id: "billingClientId",
        name: "billingClientId",
        label: "Billing Client ID",
        type: "text",
      },
      {
        id: "ddaClientId",
        name: "ddaClientId",
        label: "DDA Client ID",
        type: "text",
      },
      {
        id: "clientName",
        name: "clientName",
        label: "Client Name",
        type: "text",
      },
      {
        id: "organizationName",
        name: "organizationName",
        label: "Organization Name",
        type: "dropdown",
        options: [
          { value: "Organization1", label: "Organization 1" },
          { value: "Organization2", label: "Organization 2" },
          { value: "Organization3", label: "Organization 3" },
        ],
      },
      {
        id: "clientNumber",
        name: "clientNumber",
        label: "Client Number",
        type: "number",
      },
      {
        id: "accountManager",
        name: "accountManager",
        label: "Account Manager",
        type: "dropdown",
        options: [
          { value: "AM1", label: "AM 1" },
          { value: "AM2", label: "AM 2" },
          { value: "AM3", label: "AM 3" },
        ],
      },
      {
        id: "alternateClientId",
        name: "alternateClientId",
        label: "Alternate Client ID",
        type: "number",
      },
      {
        id: "alternateClientName",
        name: "alternateClientName",
        label: "Alternate Client Name",
        type: "text",
      },
      {
        id: "billingCycle",
        name: "billingCycle",
        label: "Billing Cycle",
        type: "dropdown",
        options: [
          { value: "16-15", label: "16-15" },
          { value: "23-22", label: "23-22" },
          { value: "26-25", label: "26-25" },
        ],
      },
      {
        id: "retention",
        name: "retention",
        label: "Retention",
        type: "text",
      },
      {
        id: "billingStartDate",
        name: "billingStartDate",
        label: "Billing Start Date",
        type: "date",
      },
      {
        id: "billingEndDate",
        name: "billingEndDate",
        label: "Billing End Date",
        type: "date",
      },
      {
        id: "sapCustomerNumber",
        name: "sapCustomerNumber",
        label: "SAP Customer Number",
        type: "text",
      },
    ];

    return (
      <StyledDiv>
        <FormComponent
          validationSchema={validationSchema}
          initialValues={initialValues}
          fields={fields}
          actionsButtons={actionsButtons}
          onSubmit={setOpen}
        />
      </StyledDiv>
    );
  };
  return (
    <Modal
      buttonText={"Add Client"}
      buttonVariant={"contained"}
      title={"Add Client"}
      handleOpen={() => {}}
      open={open}
      setOpen={setOpen}
      renderComponent={<RenderComponent />}
      disableActions
      maxWidth={"xl"}
    />
  );
}
