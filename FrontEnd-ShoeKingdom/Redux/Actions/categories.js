
// export const FILTER = "FILTER";
// import axios from "axios";
// import DATA from '../../src/Data';

// export const getfilter = (nombre) => {
//   console.log("acción de categorías");
//   return function(dispatch){
//     const filteredData = DATA.filter(item => item.brand === nombre);
//     console.log("lo que consigue",filteredData );
//     if(filteredData.length > 0){
//       return dispatch({
//         type: FILTER,
//         payload: filteredData
//       });
//     } else {
//       console.log("No se encontraron objetos con ese nombre de marca.");
//     }
//     }
//   };