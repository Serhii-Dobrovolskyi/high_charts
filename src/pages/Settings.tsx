import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useContext, useState } from "react";
import { ChartsContext } from "../context/chartsContext";
import ChartModal from "../components/ChartModal";
import EditChart from "../components/EditChart"
import {TChart} from '../types/chart'
import CreateChart from '../components/CreateChart'

const Settings = () => {
  const { charts, setCharts, deleteChart } = useContext(ChartsContext);
  // const [isModalOpen, setModalOpen] = useState(false);
  // const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  // const [isEditOpen, setEditOpen] = useState(false);
  // const [selectedChartId, setSelectedChartId] = useState<number | null>(null);

  // const handleEditClick = (id: number) => {
  //   setSelectedChartId(id);
  //   setEditOpen(true);
  // };
  // const handleAddClick = () => {
  //   setModalMode("add");
  //   setSelectedChartId(null); // Сбрасываем ID, чтобы открыть пустую форму
  //   setModalOpen(true);
  // };

  const onEditChart = (id: number, data: Omit<TChart, 'id'>) => {
    const editedCharts = charts.map((chart) => chart.id === id ? {id, ...data} : chart);

    setCharts(editedCharts)
  }

  const onSaveChart = (data: Omit<TChart, 'id'>) => {
    const newChart = {
      id: Date.now(),
      ...data
    }
    setCharts((prev) => [...prev, newChart])
  }

  return (
    <div>
      <CreateChart onSubmit={onSaveChart} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Data</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {charts.map(({id, ...chart}) => (
              <TableRow key={id}>
                <TableCell>{chart.name}</TableCell>
                <TableCell>{chart.type}</TableCell>
                <TableCell>
                  <span
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      backgroundColor: chart.color,
                      borderRadius: "50%",
                    }}
                  />
                </TableCell>
                <TableCell>{chart.dataType}</TableCell>
                <TableCell align="center">
                  <EditChart initialData={chart} onSubmit={(data) => onEditChart(id, data)} />
                  <IconButton
                    onClick={() => deleteChart(id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Settings;
