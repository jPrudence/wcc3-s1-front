// import { CheckBox } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Lisitra } from "./Lisitra";

const Filter = () => {
  const campagnes = Lisitra.map((item) => item.campagne);

  return (
    <>
      <Grid>
        <Box width="100%">
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            textAlign="start"
            m={2}
          >
            TATAVANO
          </Typography>
        </Box>
        <Divider />
        <Box m={2}>
          <Autocomplete
            disablePortal
            size="small"
            id="combo-box-demo"
            style={{ paddingBottom: 20 }}
            noOptionsText="Tsy misy"
            options={campagnes}
            renderInput={(params) => <TextField {...params} label="Tanàna" />}
          />
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label="Ampy tao"
            labelPlacement="end"
          />
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Ampela"
              />
              <FormControlLabel value="male" control={<Radio />} label="Lahy" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
    </>
  );
};

export default Filter;
