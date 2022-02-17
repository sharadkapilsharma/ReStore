import { Container, Divider, Paper, Typography } from "@mui/material";
//import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { history } from "../..";

export default function ServerError() {
  //const navigate = useNavigate();
  //navigate("/home");
  //const history = useHistory();
  const { state }: any = useLocation();

  return (
    <Container component={Paper}>
      {state?.error ? (
        <>
          <Typography variant="h5" color="error" gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography>
            {state.error.detail || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" gutterBottom>
          Server error
        </Typography>
      )}
      <button onClick={() => history.push("/catalog")}>
        Go back to the store
      </button>
    </Container>
  );
}
