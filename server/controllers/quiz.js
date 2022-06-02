const query = require('../config/db');

const questions = async (req, res) => {
  try {
    const sawal = await query('SELECT * from questions ORDER BY RAND() LIMIT 5');
    return res.status(200).json( sawal );
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Unexpected Error Occured!" });
  }
}



module.exports = {
  questions
};