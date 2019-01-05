const Docums = require('../models/docums-md');

exports.goToDocums = (req, res) => {
  Docums.fetchAll(docums => {
    res.render('docums/docums', {
      docums: docums,
      pageTitle: 'ScreenDeets | Documentaries',
      path: '/documentaries'
    });
  })
}

exports.goToDetails = (req, res) => {
  const documId = req.params.documId;
  Docums.fetchDocum(documId, docum => {
    res.render('docums/docum-details', {
      docum,
      pageTitle: 'ScreenDeets | Documentary',
      path: '/docums/docum-details'
    });
  });
}