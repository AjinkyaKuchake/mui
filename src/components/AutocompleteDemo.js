import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutocompleteDemo = () => {
  const countryOptions = [
    { name: "India", code: 91 },
    { name: "America", code: 92 },
    { name: "England", code: 93 },
    { name: "Australia", code: 94 },
    { name: "Sri Lanka", code: 95 },
  ];

  const cityOptions = [
    { label: "Pune", code: 1111 },
    { label: "Mumbai", code: 2222 },
    { label: "Nagpur", code: 3333 },
    { label: "Akola", code: 4444 },
    { label: "Bangalore", code: 5555 },
  ];
  return (
    <>
      <h3>Autocomplete for Countries</h3>
      <Autocomplete
        id="auto-complete-combo-box-countries"
        options={countryOptions}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => {
          return <TextField {...params} label="Country" />;
        }}
      />
      <br />
      <h3>Autocomplete for Cities</h3>
      <Autocomplete
        id="auto-complete-combo-box-cities"
        options={cityOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
    </>
  );
};

export default AutocompleteDemo;
