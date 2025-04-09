
import React, { useState } from "react";
import { TicketProvider } from "../context/TicketContext";
import TicketStats from "../components/Ticket/TicketState";
import TicketTable from "../components/Ticket/TicketTable";
import AddTicketModal from "../components/Ticket/TicketModal";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTicket from "../components/Ticket/AddTicket";

const TicketDashboard = () => {
  const [show, setShow] = useState(false);

  return (
    <TicketProvider>
      <div className="container mt-5">
        <TicketStats />
        <div className="d-flex justify-content-center"><AddTicket openModal={() => setShow(true)} /></div>
        <TicketTable />
        <AddTicketModal show={show} handleClose={() => setShow(false)} />
      </div>
    </TicketProvider>
  );
};

export default TicketDashboard;