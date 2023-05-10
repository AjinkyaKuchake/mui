import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const countryOptions = [
  { name: "India", code: 91 },
  { name: "America", code: 92 },
  { name: "England", code: 93 },
  { name: "Australia", code: 94 },
  { name: "Sri Lanka", code: 95 },
];

const countryOpt = ["India", "Spain", "UK", "Italy", "Singapore", "USA"];

const cityOptions = [
  { label: "Pune", code: 1111 },
  { label: "Mumbai", code: 2222 },
  { label: "Nagpur", code: 3333 },
  { label: "Akola", code: 4444 },
  { label: "Bangalore", code: 5555 },
];

const AutocompleteDemo = () => {
  const [countryValue, setCountryValue] = useState("");
  const [country, setCountry] = useState(countryOpt[0]);
  const [cityValue, setCityValue] = useState("");
  const [groupByCity, setGroupByCity] = useState("");

  return (
    <>
      <h3>Autocomplete for Country Selection</h3>
      <Autocomplete
        id="country-combo-box"
        options={countryOpt}
        sx={{ width: 300 }}
        value={country}
        onChange={(event, newValue) => {
          setCountry(newValue);
        }}
        renderInput={(params) => <TextField label="Country" {...params} />}
      />
      <p>My Country: {country}</p>
      <hr />
      <h3>Autocomplete for Countries and their Codes.</h3>
      <Autocomplete
        id="auto-complete-combo-box-countries"
        options={countryOptions}
        onChange={(event, newValue) => {
          setCountryValue(newValue.name);
        }}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => {
          return <TextField {...params} label="Country with Codes" />;
        }}
      />
      <p>The selected value of Country is: {countryValue}</p>

      <hr />

      <h3>Autocomplete for Cities</h3>
      <Autocomplete
        id="auto-complete-combo-box-cities"
        selectOnFocus
        options={cityOptions}
        inputValue={cityValue}
        onInputChange={(event, newInputValue) => {
          setCityValue(newInputValue);
        }}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
      />
      <p>The selected value of city is: {cityValue}</p>
      <hr />
      <h3>Group By</h3>
      <Autocomplete
        id="group-by-combo-box"
        options={cityOptions}
        sx={{ width: 300 }}
        value={groupByCity}
        onChange={(event, newValue) => {
          if (newValue !== null) {
            setGroupByCity(newValue.label);
          } else{
            setGroupByCity("");
          }
        }}
        renderInput={(params) => {
          return <TextField {...params} label="Group By City" />;
        }}
      />
      <p>The selected value of city using Group by is: {groupByCity}</p>
      <hr />
    </>
  );
};

export default AutocompleteDemo;
