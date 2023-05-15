import React from 'react';
import { useTheme } from "@mui/material/styles";
import { tokens } from "../../themes";
import { Box } from "@mui/material";
import Header from "../header";
import { contextData } from "../../data/chartData";
import IconButton from "@mui/material/IconButton";
import TableViewIcon from '@mui/icons-material/TableView';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { CSVLink } from "react-csv";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";


export default function ContextChart(props){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <div style={{ width: "100%", height: 500 }}>
            <Box>
                <Header title="Contexto do Artigo" 
                subtitle="Gráfico com a quantidade de artigos divididos pelos seus contextos" />
                
                <IconButton onClick={props.toggleBool} sx={ { color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}}>
                    <TableViewIcon/><h5> Ver tabela</h5>
                </IconButton>
                <CSVLink filename={"contextChart.csv"} data={contextData}>
                    <IconButton sx={ { color: colors.primary[100], "&:hover": { backgroundColor: "transparent" }}} >
                        <FileDownloadIcon /><h5>Exportar</h5>
                    </IconButton>
                </CSVLink>
            </Box>
            <ResponsiveContainer>
                <BarChart
                    width={900}
                    height={500}
                    data={contextData}
                    layout="vertical"
                    margin={{
                        top: 20,
                        right: 20,
                        left: 70,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis hide axisLine={false} type="number"/>
                    <YAxis dataKey="contexto" yAxisId={0}
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    />
                    <Tooltip />
                    <Legend />
                    <Bar name="Análise de Dados" dataKey="analiseDados" stackId="a" fill={colors.blueAccent[500]}/>
                    <Bar name="Projeto" dataKey="projeto" stackId="a" fill={colors.orangeAccent[500]} />
                    <Bar nmae="Programa" dataKey="programa" stackId="a" fill={colors.redAccent[500]} />
                    <Bar name="Ferramenta" dataKey="ferramenta"  stackId="a" fill={colors.greenAccent[500]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};