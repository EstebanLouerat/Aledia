exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.splitEntryBoard = (req, res) => {
  res.status(200).send("Split Entry");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};