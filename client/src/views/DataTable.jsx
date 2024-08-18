import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import useDisclousure from "../hooks/useDisclousure";
import CustomDrawer from "../shared-components/CustomDrawer/CustomDrawer";
import { Box, Paper } from "@mui/material";

export default function DataTable() {
  const { handleCloseComponent, handleOpenComponent, open } = useDisclousure();
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "firstName", headerName: "First name", flex: 1 },
    { field: "lastName", headerName: "Last name", flex: 1 },

    {
      field: "Actions",
      headerName: "Actions",
      description: "actions for...",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <Button
          onClick={handleOpenComponent}
          size="small"
          style={{ marginLeft: 16 }}
          tabIndex={params.hasFocus ? 0 : -1}
        >
          Open
        </Button>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div className="px-24 py-12" style={{ width: "100%" }}>
      <CustomDrawer open={open} closeHandler={handleCloseComponent}>
        drawer
      </CustomDrawer>
      <Box className="py-2 flex flex-row justify-end">
        <Button  variant="contained">Add</Button>
      </Box>
      <Paper elevation={0}>
        <DataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          className="shadow"
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Paper>
    </div>
  );
}
