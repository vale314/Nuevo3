const path = require('path');

module.exports ={
  //entran los archivos como jsx
  entry:path.join(__dirname, 'client/src/app.jsx'),

  output:{
    //loa rchivos de salida donde se encontraran
    path: path.join(__dirname, 'client/dist/js'),
    // con que nombre
    filename:'app.js',
  },
  module : {


    loaders:[{
      //lea todo lo que sea jsx
      test:/\.jsx?$/,
      //o busque dentro de client
      include: path.join(__dirname, '/client/src'),
      loader: 'babel',
      //babel
      query:{
        //react a es2015
        presets:["react","es2015"]
      }
    }],
  },
  proxy: {
    "/": "https://localhost:3000"
},
  watch:true
};
