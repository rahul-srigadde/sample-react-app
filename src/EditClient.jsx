// import React, { useMemo, useState } from "react";
// import EventIcon from "@mui/icons-material/Event";
// import SummarizeIcon from "@mui/icons-material/Summarize";
// import BorderColorIcon from "@mui/icons-material/BorderColor";
// // import clientData from "../../DummyData/finance_clients.json";
// import PersonIcon from "@mui/icons-material/Person";
// import { useNavigate } from "react-router-dom";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import Autocomplete from "@mui/material/Autocomplete";
// import {
//   TextField,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";
// import { Box, styled } from "@mui/material";
// // import { FTable } from "../DataVisualization";
// // import Modal from "../Common/Modal";
// import ModalWithoutButton from "./ModalWithoutButton";
// import { FormComponent } from "./Form";
// // import { makeStyles } from "@mui/styles";
// // const useStyles = makeStyles({
// // root: {
// // display: "grid",
// // gridTemplateColumns: "auto auto auto",
// // },
// // // tablerow : {
// // // "& .MuiTableRow-root:nth-child(even)": {color: "black", backgroundColor: '#666666'}
// // // }
// // });

// const StyledDiv = styled("div")(({ theme }) => ({
//   display: "grid",
//   gridTemplateColumns: "auto auto auto",
// }));

// export function EditClient() {
//   // const classes = useStyles();
//   const options = [
//     "Previous Billing Period",
//     "Last Billing Period",
//     "Current Billing Period",
//     "Next Billing Period",
//     "Custom Range",
//   ];
//   function destructVariableName(str) {
//     // Replace camelCase with Spaces and capitalize the first letter
//     return str
//       .replace(/([a-z])([A-Z])/g, "$1 $2")
//       .replace(/^./, function (str) {
//         return str.toUpperCase();
//       });
//   }
//   const [editOpen, setEditOpen] = useState(false);
//   const [editPropertiesOpen, setEditPropertiesOpen] = useState(false);
//   const actionsButtons = [
//     { button: "SAVE", callback: () => {}, variant: "standard", sortOrder: 1 },
//   ];
//   const actionsConstsntButtons = [
//     { button: "save", callback: () => {}, variant: "standard", sortOrder: 1 },
//     { button: "delete", callback: () => {}, variant: "standard", sortOrder: 2 },
//   ];

//   const RenderComponent = () => {
//     const fields = [
//       { id: "clientName", label: "Client Name", type: "text" },
//       { id: "orgName", label: "Organization Name", type: "text" },
//       {
//         id: "alternateClientName",
//         label: "Alternate Client Name",
//         type: "text",
//       },
//       { id: "ddaClientId", label: "DDA Client Id", type: "number" },
//       { id: "customerNumber", label: "Customer Number", type: "text" },
//       { id: "billingCycle", label: "Billing Cycle", type: "number" },
//       { id: "retention", label: "Retention", type: "text" },
//       { id: "clientId", label: "Client Id", type: "number" },
//     ];

//     return (
//       <StyledDiv>
//         {fields.map((x) => (
//           <TextField
//             key={x.id}
//             autoFocus
//             margin="dense"
//             id={x.id}
//             label={x.label}
//             type={x.type}
//             fullWidth
//             style={{ width: "95%" }}
//             variant="standard"
//             InputLabelProps={{ shrink: true, style: { fontSize: "20px" } }}
//           />
//         ))}
//       </StyledDiv>
//     );
//   };
//   const RenderEditConstsntComponent = () => {
//     const fields = [
//       {
//         id: "property",
//         label: "Property",
//         type: "dropdown",
//         options: ["ship_compare", "ship_field", "ship_value"],
//       },
//       {
//         id: "changeNameTo",
//         label: "Change Name To",
//         type: "dropdown",
//         options: ["ship_compare1", "ship_field1", "ship_value1"],
//       },
//       { id: "name", label: "Name", type: "text" },
//       { id: "currentValue", label: "Current Value", type: "text" },
//     ];
//     return (
//       <>
//         {fields.map((x) => (
//           <div key={x.id}>
//             {x.type === "dropdown" ? (
//               <TextField
//                 select
//                 autoFocus
//                 margin="dense"
//                 id={x.id}
//                 value="ship_compare"
//                 label={x.label}
//                 fullWidth
//                 variant="standard"
//                 InputLabelProps={{ shrink: true, style: { fontSize: "20px" } }}
//               >
//                 {x.options.map((option) => (
//                   <MenuItem key={option} value={option}>
//                     {option}
//                   </MenuItem>
//                 ))}
//               </TextField>
//             ) : (
//               <TextField
//                 key={x.id}
//                 autoFocus
//                 margin="dense"
//                 id={x.id}
//                 label={x.label}
//                 type={x.type}
//                 fullWidth
//                 variant="standard"
//                 InputLabelProps={{ shrink: true, style: { fontSize: "20px" } }}
//               />
//             )}
//           </div>
//         ))}
//       </>
//     );
//   };
//   //   const navigate = useNavigate();
//   //   const actionButton = {
//   //     label: "Actions",
//   //     buttons: [
//   //       {
//   //         icon: <PersonIcon />,
//   //         callback: () => setEditOpen(true),
//   //         tooltip: "Edit Client",
//   //       },
//   //       {
//   //         icon: <ListAltIcon />,
//   //         callback: () => navigate("/clientProperties"),
//   //         tooltip: "Properties",
//   //       },
//   //       {
//   //         icon: <EventIcon />,
//   //         callback: () => navigate("/viewEvents"),
//   //         tooltip: "Events",
//   //       },
//   //       {
//   //         icon: <SummarizeIcon />,
//   //         callback: () => navigate("/viewReportWriter"),
//   //         tooltip: "Report Writer",
//   //       },
//   //     ],
//   //   };

//   const [value, setValue] = useState(options[0]);
//   const [inputValue, setInputValue] = useState("");
//   return (
//     <>
//       <FormComponent />
//       <div className="ml-5">
//         <Box
//           sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}
//         >
//           <Box>
//             <FormControl size="small" sx={{ minWidth: 150, marginRight: 2 }}>
//               <Autocomplete
//                 value={value}
//                 onChange={(event, newValue) => {
//                   setValue(newValue);
//                 }}
//                 inputValue={inputValue}
//                 onInputChange={(event, newInputValue) => {
//                   setInputValue(newInputValue);
//                 }}
//                 id="controllable-states-demo"
//                 options={options}
//                 sx={{ width: 250 }}
//                 renderInput={(params) => (
//                   <TextField {...params} label="Pull Period" />
//                 )}
//               />
//             </FormControl>
//             {/* <Modal
//               buttonText={"Add Client"}
//               buttonVariant={"contained"}
//               title={"Add Client"}
//               handleOpen={() => {}}
//               renderComponent={<RenderComponent />}
//               actionsButtons={actionsButtons}
//               maxWidth={"xl"}
//             /> */}
//           </Box>
//         </Box>
//         {/* <FTable
//           data={clientData}
//           defaultRowsPerPage={20}
//           actions={actionButton}
//         /> */}
//         <ModalWithoutButton
//           title={"Edit Client"}
//           handleOpen={() => {}}
//           renderComponent={<RenderComponent />}
//           actionsButtons={actionsButtons}
//           maxWidth={"xl"}
//           open={editOpen}
//           setOpen={setEditOpen}
//         />
//         <ModalWithoutButton
//           title={"Edit Client Properties"}
//           handleOpen={() => {}}
//           renderComponent={<RenderEditConstsntComponent />}
//           actionsButtons={actionsConstsntButtons}
//           maxWidth={"sm"}
//           open={editPropertiesOpen}
//           setOpen={setEditPropertiesOpen}
//         />
//       </div>
//     </>
//   );
// }

import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState(null);

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="disableCloseOnSelect"
            variant="standard"
          />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="clearOnEscape" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="disableClearable" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label="includeInputInList"
            variant="standard"
          />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="flat" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="controlled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="autoComplete" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-list-wrap"
        disableListWrap
        renderInput={(params) => (
          <TextField {...params} label="disableListWrap" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="open-on-focus"
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label="openOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-highlight"
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label="autoHighlight" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-select"
        autoSelect
        renderInput={(params) => (
          <TextField {...params} label="autoSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disabled"
        disabled
        renderInput={(params) => (
          <TextField {...params} label="disabled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-portal"
        disablePortal
        renderInput={(params) => (
          <TextField {...params} label="disablePortal" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="blur-on-select"
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label="blurOnSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-blur"
        clearOnBlur
        renderInput={(params) => (
          <TextField {...params} label="clearOnBlur" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="select-on-focus"
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="selectOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="readOnly"
        readOnly
        defaultValue={flatProps.options[13]}
        renderInput={(params) => (
          <TextField {...params} label="readOnly" variant="standard" />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
