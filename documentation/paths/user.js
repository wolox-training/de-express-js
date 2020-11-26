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
    },
    get: {
      tags: ['Users'],
      description: 'List users with paginations',
      operationId: 'listUsers',
      parameters: [
        {
          name: 'Authorization',
          in: 'headers',
          schema: {
            type: 'string',
            default: ''
          },
          required: true,
          description: 'authorization token'
        },
        {
          name: 'page',
          in: 'query',
          schema: {
            type: 'integer',
            default: 1
          },
          required: false
        },
        {
          name: 'size',
          in: 'query',
          schema: {
            type: 'integer',
            default: 10
          },
          required: false
        }
      ],
      responses: {
        200: {
          description: 'successful query'
        },
        401: {
          description: 'Users unauthenticated'
        },
        422: {
          description: 'Invalid parameters on request'
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
