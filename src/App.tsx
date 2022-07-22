import { AppBar, Container, Box, Typography } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const dates = [
  {
    title: "Chop Chop Shop v premium",
    start: moment("2022-08-26T17:00:00-05:00").toDate(),
    end: moment("2022-08-26T20:00:00-05:00").toDate(),
  },
  {
    title: "Chop Chop Shop Premium",
    start: moment("2022-09-03T17:00:00-05:00").toDate(),
    end: moment("2022-09-03T20:00:00-05:00").toDate(),
  },
  {
    title: "Chop Chop Shop Overdress",
    start: moment("2022-09-23T17:00:00-05:00").toDate(),
    end: moment("2022-09-23T20:00:00-05:00").toDate(),
  },
  {
    title: "Chop Chop Shop Weiss Schwarz",
    start: moment("2022-09-30T17:00:00-05:00").toDate(),
    end: moment("2022-09-30T20:00:00-05:00").toDate(),
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
      <AppBar>
        <Typography>Shop Challenges Mexico</Typography>
      </AppBar>
      <Container>
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
