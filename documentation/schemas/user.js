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
  singInEmail: {
    type: 'string',
    example: 'email@email.com'
  },
  singInPassword: {
    type: 'string',
    example: 'password'
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
  },
  SingInUser: {
    type: 'object',
    properties: {
      email: {
        $ref: '#/components/schemas/singInEmail'
      },
      password: {
        $ref: '#/components/schemas/singInPassword'
      }
    }
  }
};
