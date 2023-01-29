const { query } = require('../config/database');

module.exports.registerUser = async (req, res) => {
  try {
    let { name, surname, gender, old, email, phone, province, branch, accep } =
      req.body;
    let result = await query(
      `INSERT INTO user_member
      (name, surname, gender, old, email, phone, province, branch, accep)
      VALUES(?,?,?,?,?,?,?,?,?)`,
      [name, surname, gender, old, email, phone, province, branch, accep]
    );
    console.log(result);
    if (result.insertId) {
      return res.json({ status: true, message: 'บันทึกข้อมูลสำเร็จ' });
    } else {
      return res.json({ status: false, message: 'Fail regis' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Faild');
  }
};

module.exports.getUserAll = async (req, res) => {
  try {
    let getresult = await query('SELECT * FROM user_member');
    if (getresult.length < 0) {
      return res.json({ status: false, message: 'ไม่พบข้อมูล' });
    } else {
      return res.json({ status: true, data: getresult });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  try {
    let { user, password } = req.body;
    let useradmin = await query(
      'SELECT * FROM admin WHERE user = ? AND password = ?',
      [user, password]
    );
    if (useradmin.length > 0) {
      let admin = useradmin[0];
      return res.json({ status: true, data: admin });
    } else {
      return res.json({ status: false, message: 'ไม่พบuser' });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.report = async (req, res) => {
  try {
    let report = await query(`
      SELECT
      COUNT(CASE WHEN branch = 'a' then 'a' end) as a,
      COUNT(CASE WHEN branch = 'b' then 'b' end) as b, 
      COUNT(CASE WHEN branch = 'c' then 'c' end) as c, 
      COUNT(id) as total
      FROM user_member
      WHERE branch = 'a' OR  branch = 'b'  OR  branch = 'c'
    `);
    if (report.length < 0) {
      return res.json({ status: false, message: 'NO data' });
    }
    return res.json({ status: true, data: report[0] });
  } catch (error) {
    console.log(error);
  }
};
