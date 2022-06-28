function handleError(msg, err, res) {
  console.log(err);
  res.status(500).json({
    message: msg,
    error: err
  })
  
}

module.expors = handleError