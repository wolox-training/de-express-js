module.exports = {
  userName: {
    type: 'string',
    example: 'Pedro'
  },
  userLastname: {
    type: 'string',
    example: 'Perez'
  },
  userEmail: {
    type: 'string',
    example: 'pedro.perez@wolox.co'
  },
  userPassword: {
    type: 'string',
    example: '1234abcd'
  },
  User: {
    type: 'object',
    properties: {
      name: {
        $ref: '#/components/schemas/userName'
      },
      lastname: {
        $ref: '#/components/schemas/userLastname'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      },
      password: {
        $ref: '#/components/schemas/userPassword'
      }
    }
  }
};
