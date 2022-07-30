import {
  AppBar,
  Container,
  Box,
  Typography,
  Toolbar,
  CssBaseline,
} from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const dates = [
  {
    title: "Chop Chop Shop v premium",
    start: moment("2022-09-16T17:00:00-05:00").toDate(),
    end: moment("2022-09-16T20:00:00-05:00").toDate(),
  },
  {
    title: "Chop Chop Shop Premium",
    start: moment("2022-09-02T17:00:00-05:00").toDate(),
    end: moment("2022-09-02T20:00:00-05:00").toDate(),
  },
  {
    title: "Chop Chop Shop Overdress",
    start: moment("2022-09-30T17:00:00-05:00").toDate(),
    end: moment("2022-09-30T20:00:00-05:00").toDate(),
  },
  {
    title: "Chop Chop Shop Weiss Schwarz",
    start: moment("2022-09-09T17:00:00-05:00").toDate(),
    end: moment("2022-09-09T20:00:00-05:00").toDate(),
  },
  {
    title: "Estigia games v premium",
    start: moment("2022-08-27T14:00:00-05:00").toDate(),
    end: moment("2022-08-27T18:00:00-05:00").toDate(),
  },
  {
    title: "Estigia games Weiss Schwarz",
    start: moment("2022-09-11T14:00:00-05:00").toDate(),
    end: moment("2022-09-11T18:00:00-05:00").toDate(),
  },
  {
    title: "Estigia games premium",
    start: moment("2022-09-17T14:00:00-05:00").toDate(),
    end: moment("2022-09-17T18:00:00-05:00").toDate(),
  },
  {
    title: "Estigia games overdress",
    start: moment("2022-09-24T14:00:00-05:00").toDate(),
    end: moment("2022-09-24T18:00:00-05:00").toDate(),
  },
];

const localizer = momentLocalizer(moment);

function App() {
  return (
    <Box>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Shop Challenges Mexico</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 2 }}>
        <Calendar
          localizer={localizer}
          events={dates}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          defaultDate={moment().year(2022).month(7).toDate()}
        />
      </Container>
    </Box>
  );
}

export default App;
