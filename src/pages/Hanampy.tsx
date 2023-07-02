import { TextField, Grid } from "@mui/material";

const Hanampy = () => {
  return (
    <form>
      <Grid container spacing={2} p={4}>
        <Grid item xs={12}>
          <TextField id="title" label="Anarana" fullWidth variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            label="Fanampiny"
            fullWidth
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            label="Taona"
            fullWidth
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            label="Finday"
            fullWidth
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            label="CIN"
            fullWidth
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="body"
            label="Fanamariha"
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Hanampy;
