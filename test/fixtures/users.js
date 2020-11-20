exports.correct = {
  name: 'Pedro',
  lastname: 'Perez',
  email: 'pedro.perez@wolox.co',
  password: '1234adcd'
};

exports.worngMail = {
  name: 'Pedro',
  lastname: 'Perez',
  email: 'pedro.perez@gmail.com',
  password: '1234adcd'
};

exports.noAlphanumericPass = {
  name: 'Pedro',
  lastname: 'Perez',
  email: 'pedro.perez@wolox.co',
  password: '1234#adcd'
};

exports.shortPassword = {
  name: 'Pedro',
  lastname: 'Perez',
  email: 'pedro.perez@wolox.co',
  password: '1234ad'
};
