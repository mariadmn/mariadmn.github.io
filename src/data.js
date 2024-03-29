export const yearChartData = [
        {
            id:1,
            ano: 2010,
            totalPublicacoes: 48,
            totalPublicacoesTematica: 0,
        },
        {
            id:2,
            ano: 2011,
            totalPublicacoes: 124,
            totalPublicacoesTematica: 0,
        },
        {
            id:3,
            ano: 2012,
            totalPublicacoes: 154,
            totalPublicacoesTematica: 0,
        },
        {
            id:4,
            ano: 2013,
            totalPublicacoes: 160,
            totalPublicacoesTematica: 0,
        },
        {
            id:5,
            ano: 2014,
            totalPublicacoes: 211,
            totalPublicacoesTematica: 0,
        },
        {
            id:6,
            ano: 2015,
            totalPublicacoes: 249,
            totalPublicacoesTematica: 0,
        },
        {
            id:7,
            ano: 2016,
            totalPublicacoes: 287,
            totalPublicacoesTematica: 0,
        },
        {
            id:8,
            ano: 2017,
            totalPublicacoes: 398,
            totalPublicacoesTematica: 0,
        },
        {
            id:9,
            ano: 2018,
            totalPublicacoes: 407,
            totalPublicacoesTematica: 0,
        },
        {
            id:10,
            ano: 2019,
            totalPublicacoes: 612,
            totalPublicacoesTematica: 22,
        },
        {
            id:11,
            ano: 2020,
            totalPublicacoes: 768,
            totalPublicacoesTematica: 28,
        },
        {
            id:12,
            ano: 2021,
            totalPublicacoes: 1238,
            totalPublicacoesTematica: 36,
        },
        {
            id:13,
            ano: 2022,
            totalPublicacoes: 836,
            totalPublicacoesTematica: 22,
        },
];

export const columnsYearChart = [
    {
      field: "ano",
      headerName: "Ano",
      type: "text",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "totalPublicacoes",
      headerName: "Total de Publicações",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
        field: "totalPublicacoesTematica",
        headerName: "Total de Publicações Temática",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },

];

export const categoryChartData = [
    {
        id: 1,
        categoria: "Fora do Escopo",
        foraEscopo: 20,
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 20,
        porcentagem: 18.52,
    },
    {
        id: 2,
        categoria: "Analise de Dados",
        foraEscopo: 0,
        analiseDados: 44,
        projeto: 0,
        programa: 0,
        ferramenta: 0,
        total: 44,
        porcentagem: 40.74,
    },
    {
        id: 3,
        categoria: "Projeto",
        foraEscopo: 0,
        analiseDados: 0,
        projeto: 39,
        programa: 0,
        ferramenta: 0,
        total: 39,
        porcentagem: 36.11,
    },
    {
        id: 4,
        categoria: "Programa",
        foraEscopo: 0,
        analiseDados: 0,
        projeto: 0,
        programa: 15,
        ferramenta: 0,
        total: 15,
        porcentagem: 13.89,
    },
    {
        id: 5,
        categoria: "Ferramenta",
        foraEscopo: 0,
        analiseDados: 0,
        projeto: 0,
        programa: 0,
        ferramenta: 10,
        total: 10,
        porcentagem: 9.26,
    },
];

export const categoryColumns = [
    {
        field: "categoria",
        headerName: "Categoria",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "total",
        headerName: "Total",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "porcentagem",
        headerName: "Porcentagem (%)",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
];

export const eventChartData = [
    {
        id: 1,
        ano: 2019,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 0,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 0,
            WIT: 22,
            RBIE: 0,
        },
        total: 22,
    },
    {
        id: 2,
        ano: 2020,
        evento:{
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 0,
            SEMIEDU: 0,
            WEI: 2,
            WIE: 1,
            WIT: 25,
            RBIE: 0,
        },
        total: 28,
    },
    {
        id: 3,
        ano: 2021,
        evento:{
            CB: 0,
            EDUCOMP: 2,
            LATINOWARE: 0,
            SBES: 1,
            SBGAMES: 1,
            SBIE: 0,
            SBSI: 0,
            SEMIEDU: 1,
            WEI: 0,
            WIE: 1,
            WIT: 29,
            RBIE: 1,
        },
        total: 36,
    },
    {
        id: 4,
        ano: 2022,
        evento:{
            CB: 1,
            EDUCOMP: 0,
            LATINOWARE: 1,
            SBES: 3,
            SBGAMES: 0,
            SBIE: 1,
            SBSI: 1,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 2,
            WIT: 13,
            RBIE: 0,
        },
        total: 22,
    },
];

export const colecaoData = [
        {
          tipoColecao: "Anais de Eventos",
          totalEventos: 10
        },
        {
          tipoColecao: "Jornais",
          totalEventos: 0
        },
        {
          tipoColecao: "Livros/Capítulos",
          totalEventos: 2
        }
];

export const totalEvents = [
    {
        id: 1,
        ano: 2010,
        evento:{
            id: 1,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 48,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 0,
            WIT: 0,
            RBIE: 0,
        },
        total: 48,
    },
    {
        id: 2,
        ano: 2011,
        evento:{
            id: 2,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 54,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 70,
            WIT: 0,
            RBIE: 0,
        },
        total: 124,
    },
    {
        id: 3,
        ano: 2012,
        evento:{
            id: 3,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 105,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 49,
            WIT: 0,
            RBIE: 0,
        },
        total: 154,
    },
    {
        id: 4,
        ano: 2013,
        evento:{
            id: 4,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 110,
            SEMIEDU: 0,
            WEI: 0,
            WIE: 50,
            WIT: 0,
            RBIE: 0,
        },
        total: 160,
    },
    {
        id: 5,
        ano: 2014,
        evento:{
            id: 5,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 96,
            SEMIEDU: 43,
            WEI: 0,
            WIE: 72,
            WIT: 0,
            RBIE: 0,
        },
        total: 211,
    },
    {
        id: 6,
        ano: 2015,
        evento:{
            id: 6,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 136,
            SEMIEDU: 45,
            WEI: 0,
            WIE: 68,
            WIT: 0,
            RBIE: 0,
        },
        total: 249,
    },
    {
        id: 7,
        ano: 2016,
        evento:{
            id: 7,
            CB: 0,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 111,
            SEMIEDU: 0,
            WEI: 47,
            WIE: 104,
            WIT: 25,
            RBIE: 0,
        },
        total: 287,
    },
    {
        id: 8,
        ano: 2017,
        evento:{
            id: 8,
            CB: 86,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 125,
            SEMIEDU: 0,
            WEI: 25,
            WIE: 134,
            WIT: 28,
            RBIE: 0,
        },
        total: 398,
    },
    {
        id: 9,
        ano: 2018,
        evento:{
            id: 9,
            CB: 81,
            EDUCOMP: 0,
            LATINOWARE: 0,
            SBES: 0,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 166,
            SEMIEDU: 0,
            WEI: 52,
            WIE: 78,
            WIT: 30,
            RBIE: 0,
        },
        total: 407,
    },
    {
        id: 10,
        ano: 2019,
        evento:{
            id: 10,
            CB: 88,
            EDUCOMP: 0,
            LATINOWARE: 32,
            SBES: 39,
            SBGAMES: 0,
            SBIE: 0,
            SBSI: 173,
            SEMIEDU: 0,
            WEI: 49,
            WIE: 198,
            WIT:33,
            RBIE: 0,
        },
        total: 612,
    },
    {
        id: 11,
        ano: 2020,
        evento:{
            id: 11,
            CB: 70,
            EDUCOMP: 0,
            LATINOWARE: 32,
            SBES: 134,
            SBGAMES: 0,
            SBIE: 190,
            SBSI: 152,
            SEMIEDU: 52,
            WEI: 41,
            WIE: 55,
            WIT: 42,
            RBIE: 0,
        },
        total: 768,
    },
    {
        id: 12,
        ano: 2021,
        evento:{
            id: 12,
            CB: 50,
            EDUCOMP: 78,
            LATINOWARE: 31,
            SBES: 62,
            SBGAMES: 177,
            SBIE: 122,
            SBSI: 159,
            SEMIEDU: 377,
            WEI: 51,
            WIE: 33,
            WIT: 48,
            RBIE: 50,
        },
        total: 1238,
    },
    {
        id: 13,
        ano: 2022,
        evento:{
            id: 13,
            CB: 55,
            EDUCOMP: 58,
            LATINOWARE: 29,
            SBES: 53,
            SBGAMES: 200,
            SBIE: 128,
            SBSI: 172,
            SEMIEDU: 34,
            WEI: 40,
            WIE: 36,
            WIT: 30,
            RBIE: 1,
        },
        total: 836,
    },
];

export const eventsColumns = [
    {
        field: "ano",
        headerName: "Ano",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.3,
    },
    {
        field: "evento.CB",
        valueGetter: (params) => params.row.evento.CB,
        headerName: "CB",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.2,
    },
    {
        field: "evento.EDUCOMP",
        valueGetter: (params) => params.row.evento.EDUCOMP,
        headerName: "EDUCOMP",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "evento.LATINOWARE",
        valueGetter: (params) => params.row.evento.LATINOWARE,
        headerName: "LATINOWARE",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "evento.SBES",
        valueGetter: (params) => params.row.evento.SBES,
        headerName: "SBES",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.6,
    },
    {
        field: "evento.SBGAMES",
        valueGetter: (params) => params.row.evento.SBGAMES,
        headerName: "SBGAMES",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "evento.SBIE",
        valueGetter: (params) => params.row.evento.SBIE,
        headerName: "SBIE",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.6,
    },
    {
        field: "evento.SBSI",
        valueGetter: (params) => params.row.evento.SBSI,
        headerName: "SBSI",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.6,
    },
    {
        field: "evento.SEMIEDU",
        valueGetter: (params) => params.row.evento.SEMIEDU,
        headerName: "SEMIEDU",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "evento.WEI",
        valueGetter: (params) => params.row.evento.WEI,
        headerName: "WEI",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.4,
    },
    {
        field: "evento.WIE",
        valueGetter: (params) => params.row.evento.WIE,
        headerName: "WIE",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.4,
    },
    {
        field: "evento.WIT",
        valueGetter: (params) => params.row.evento.WIT,
        headerName: "WIT",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.4,
    },
    {
        field: "evento.RBIE",
        valueGetter: (params) => params.row.evento.RBIE,
        headerName: "RBIE",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 0.5,
    },
];

export const contextData=[
        {
            id:1,
            contexto: "Visibilidade ao tema",
            analiseDados: 6,
            projeto: 5,
            programa: 2,
            ferramenta: 7,
            total: 20,
            porcentagem: 18.52,
        },
        {
            id:2,
            contexto: "Perfil das mulheres",
            analiseDados: 6,
            projeto: 0,
            programa: 0,
            ferramenta: 0,
            total: 6,
            porcentagem: 5.56,
    },
        {
            id:3,
            contexto: "Fatores de influência",
            analiseDados: 9,
            projeto: 3,
            programa: 0,
            ferramenta: 0,
            total: 12,
            porcentagem: 11.11,
        },
        {
            id:4,
            contexto: "Fortalecimento, motivação e pertencimento",
            analiseDados: 0,
            projeto: 31,
            programa: 13,
            ferramenta: 3,
            total: 47,
            porcentagem: 43.52,
        },
        {
            id:5,
            contexto: "Representatividade acadêmica",
            analiseDados: 8,
            projeto: 0,
            programa: 0,
            ferramenta: 0,
            total: 8,
            porcentagem: 7.41,
        },
        {
            id:6,
            contexto: "Desempenho acadêmico",
            analiseDados: 5,
            projeto: 0,
            programa: 0,
            ferramenta: 0,
            total: 5,
            porcentagem: 4.63,
        },
        {
            id:7,
            contexto: "Representatividade no mercado",
            analiseDados: 2,
            projeto: 0,
            programa: 0,
            ferramenta: 0,
            total: 2,
            porcentagem: 1.85,
        },
        {
            id:8,
            contexto: "Desempenho no mercado",
            analiseDados: 1,
            projeto: 0,
            programa: 0,
            ferramenta: 0,
            total: 1,
            porcentagem: 0.93,
        },
        {
            id:9,
            contexto: "Representatividade na pesquisa",
            analiseDados: 7,
            projeto: 0,
            programa: 0,
            ferramenta: 0,
            total: 7,
            porcentagem: 6.48,
        },
];

export const contextColumns = [
    {
        field: "contexto",
        headerName: "Contexto do Artigo",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 3,
      },
      {
        field: "analiseDados",
        headerName: "Análise de Dados",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 2,
      },
      {
          field: "projeto",
          headerName: "Projeto",
          type: "number",
          headerAlign: "left",
          align: "left",
          flex: 1,
      },
      {
        field: "programa",
        headerName: "Programa",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: 'ferramenta',
        headerName: "Ferramenta",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field:"total",
        headerName: "Total",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "porcentagem",
        headerName: "Porcentagem",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
];

export const techniqueData = [
    {
        id:1,
        tecnica: "Apresentação",
        analiseDados: 0,
        projeto: 9,
        programa: 26,
        ferramenta: 0,
        total: 35
    },
    {
        id:2,
        tecnica: "Campanha",
        analiseDados: 0,
        projeto: 4,
        programa: 8,
        ferramenta: 0,
        total: 12
    },
    {
        id:3,
        tecnica: "Curso",
        analiseDados: 0,
        projeto: 24,
        programa: 17,
        ferramenta: 0,
        total: 41
    },
    {
        id:4,
        tecnica: "Evento",
        analiseDados: 0,
        projeto: 2,
        programa: 8,
        ferramenta: 0,
        total: 10
    },
    {
        id:5,
        tecnica: "Fonte de Dados",
        analiseDados: 42,
        projeto: 4,
        programa: 8,
        ferramenta: 0,
        total: 54
    },
    {
        id:6,
        tecnica: "Gameficação",
        analiseDados: 0,
        projeto: 5,
        programa: 4,
        ferramenta: 9,
        total: 18
    },
    {
        id:7,
        tecnica: "Grupo Social",
        analiseDados: 0,
        projeto: 3,
        programa: 4,
        ferramenta: 0,
        total: 7
    },
    {
        id:8,
        tecnica: "Material",
        analiseDados: 0,
        projeto: 2,
        programa: 2,
        ferramenta: 1,
        total: 5
    }
];


export const techniqueColumns = [
    {
        field: "tecnica",
        headerName: "Técnica",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 2,
    },
    {
        field: "analiseDados",
        headerName: "Análise de Dados",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 2,
    },
    {
        field: "projeto",
        headerName: "Projeto",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: "programa",
        headerName: "Programa",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
    {
        field: 'ferramenta',
        headerName: "Ferramenta",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 2,
    },
    {
        field:"total",
        headerName: "Total",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
];

export const brazilChartData = [
    ["Estado", "Total de Artigos"],
    ["Acre",0],
    ["Alagoas",4],
    ["Amapá",1],
    ["Amazonas",0],
    ["Bahia",2],
    ["Ceará",3],
    ["Distrito Federal",5],
    ["Espírito Santo",2],
    ["Goiás",3],
    ["Maranhão",2],
    ["Mato Grosso",2],
    ["Mato Grosso do Sul",1],
    ["Minas Gerais",11],
    ["Pará",2],
    ["Paraíba",5],
    ["Paraná",4],
    ["Pernambuco",1],
    ["Piauí",0],
    ["Rio de Janeiro",7],
    ["Rio Grande do Norte",2],
    ["Rio Grande do Sul",8],
    ["Rondônia",0],
    ["Roraima",0],
    ["Santa Catarina",7],
    ["São Paulo",6],
    ["Sergipe",1],
    ["Tocantins",0],
];

export const brazilTableData = [
    {
        id: 1,
        estado: "Acre",
        total: 0
    },
    {
        id: 2,
        estado: "Alagoas",
        total: 4
    },
    {
        id: 3,
        estado: "Amapá",
        total: 1
    },
    {
        id: 4,
        estado: "Amazonas",
        total: 0
    },
    {
        id: 5,
        estado: "Bahia",
        total: 2
    },
    {
        id: 6,
        estado: "Ceará",
        total: 3
    },
    {
        id: 7,
        estado: "Distrito Federal",
        total: 5
    },
    {
        id: 8,
        estado: "Espírito Santo",
        total: 2
    },
    {
        id: 9,
        estado: "Goiás",
        total: 3
    },
    {
        id: 10,

        estado: "Maranhão",
        total: 2
    },
    {
        id: 11,
        estado: "Mato Grosso",
        total: 2
    },
    {
        id: 12,
        estado: "Mato Grosso do Sul",
        total: 1
    },
    {
        id: 13,
        estado: "Minas Gerais",
        total: 11
    },
    {
        id: 14,
        estado: "Pará",
        total: 2
    },
    {
        id: 15,
        estado: "Paraíba",
        total: 5
    },
    {
        id: 16,
        estado: "Paraná",
        total: 4
    },
    {
        id: 17,
        estado: "Pernambuco",
        total: 1
    },
    {
        id: 18,
        estado: "Piauí",
        total: 0
    },
    {
        id: 19,
        estado: "Rio de Janeiro",
        total: 7
    },
    {
        id: 20,
        estado: "Rio Grande do Norte",
        total: 2
    },
    {
        id: 21,
        estado: "Rio Grande do Sul",
        total: 8
    },
    {
        id: 22,
        estado: "Rondônia",
        total: 0
    },
    {
        id: 23,
        estado: "Roraima",
        total: 0
    },
    {
        id: 24,
        estado: "Santa Catarina",
        total: 7
    },
    {
        id: 25,
        estado: "São Paulo",
        total: 6
    },
    {
        id: 26,
        estado: "Sergipe",
        total: 1
    },
    {
        id: 27,
        estado: "Tocantins",
        total: 0
    },

];

export const brazilTableColumns = [
    {
        field: "estado",
        headerName: "Estado",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 2,
    },
    {
        field: "total",
        headerName: "Total de Artigos",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
];

export const worldTableColumns = [
    {
        field: "regiao",
        headerName: "Região",
        type: "text",
        headerAlign: "left",
        align: "left",
        flex: 2,
    },
    {
        field: "total",
        headerName: "Total de Artigos",
        type: "number",
        headerAlign: "left",
        align: "left",
        flex: 1,
    },
];

export const worldTableData = [
    {
        id: 1,
        regiao: "América do Norte",
        total: 3,
    },
    {
        id: 2,
        regiao: "América do Sul",
        total: 83,
    },

];

export const worldChartData = [
    ['Código da Região', 'Continente', 'Total de Artigos'],
    ['021', 'América do Norte', 3],
    ['005', 'América do Sul', 83],
];
