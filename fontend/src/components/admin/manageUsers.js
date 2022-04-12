import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";

const ManageUsers = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;

  const columnHeads = [
    { field: "_id", headerName: "ID", width: 270 },
    { field: "name", headerName: "Full Name", width: 330 },
    { field: "email", headerName: "Email", width: 330 },
  ];

  const fetchData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayData = () => {
    if (!loading) {
      return (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={list}
            columns={columnHeads}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      );
    }
  };

  return <Container>{displayData()}</Container>;
};

export default ManageUsers;
