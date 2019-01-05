exports.goToError = (req, res) => {
  res.status(404).render('error', {
    pageTitle: 'ScreenDeets | Error', path: '/'
  });
}