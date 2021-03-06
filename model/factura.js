var database = require('./database');
var factura = {};

factura.selectByEmpresa = function(idEmpresa, callback){
  if(database){
    database.query("SELECT * FROM factura WHERE idEmpresa = ?",idEmpresa,function(error,resultados){
      if(error){
        throw error;
      }else {
        callback(null,resultados);
      }
    });
  }
}
factura.selectByClient = function(idCliente, callback){
  if(database){
    database.query("SELECT * FROM factura WHERE idUsuario = ?",idCliente,function(error,resultados){
      if(error){
        throw error;
      }else {
        callback(null,resultados);
      }
    });
  }
}

factura.selectByServicio = function(idServicio, callback){
  if(database){
    var sql = "SELECT * FROM f.idFactura,f.total,f.idEmpresa,u.nombre, u.idUsuario, f.idServicio FROM Factura f INNER JOIN Usuario u ON u.idUsuario = f.idUsuario WHERE idServicio = ?"
    database.query(sql,idServicio,function(error,resultados){
      if(error){
        throw error;
      }else {
        callback(null,resultados);
      }
    });
  }
}

factura.select = function(id, callback){
  if(database){
    var sql = "SELECT * FROM factura WHERE idfactura = ? ";
    database.query(sql,id,function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null,resultado);
      }
    });
  }
}

factura.insert = function(data,callback){
  if(database){
    database.query("INSERT INTO factura(idServicio, fecha, idUsuario, total, idEmpresa) VALUES (?,?,?,?,?); ",
    [data.idServicio,data.fecha,data.idUsuario,data.total,data.idEmpresa],
    function(error,resultado){
      if(error){
        throw error;
      }else {
        callback(null, {'Mensaje': true})
      }
    });
  }
}


module.exports = factura;
