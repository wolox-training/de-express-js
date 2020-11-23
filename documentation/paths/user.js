module.exports = {
  '/users': {
    post: {
      tags: ['Users'],
      description: 'create users',
      operationId: 'createUsers',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/User'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'Users created'
        },
        400: {
          description: 'Duplicated user'
        },
        422: {
          description: 'Invalid parameters on body'
        }
      }
    }
  },
  '/users/sessions': {
    post: {
      tags: ['Users'],
      description: 'Sing In users',
      operationId: 'createUsers',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SingInUser'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'Users authenticated'
        },
        401: {
          description: 'Users unauthenticated'
        }
      }
    }
  }
};
