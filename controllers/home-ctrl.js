exports.goToHome = (req, res) => {
  res.render('index', {
    pageTitle: 'ScreenDeets | Home', path: '/home'
  });
}