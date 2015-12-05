var db = require('../models');
var sequelize1 = require('sequelize');
var sequelize = require("../models/sequelize.js");


exports.consultas = {

	insertar_una_clase: function(code,parid, asiid, docid) {
	    return db.TV_CLASE
	      .build({
	        CLA_PASSWORD: code,
	        CLA_FECHA_HORA_INICIO: sequelize1.fn('NOW'),
	        PAR_ID: parid,
	        ASI_ID: asiid,
	        DOC_ID: docid
	      })
	      .save()
	},

	buscar_una_clase: function(code,asiid, parid,docid) {
      return sequelize
      .query("select * from TV_CLASE where CLA_PASSWORD=? and PAR_ID=? and DOC_ID=? and ASI_ID=?", {replacements: [code,asiid,parid,docid], type: sequelize.QueryTypes.SELECT} )
    }

}