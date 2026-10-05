import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { SimpleReporter } from '../simple-reporter';

describe('ReqRes API', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://reqres.in/api';

  p.request.setDefaultTimeout(30000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  describe('USERS', () => {
    it('deve listar os usuários', async () => {
      await p
        .spec()
        .get(`${baseUrl}/users?page=2`)
        .expectStatus(StatusCodes.OK);
    });

    it('deve buscar um usuário pelo ID', async () => {
      await p
        .spec()
        .get(`${baseUrl}/users/2`)
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          data: {
            id: 2
          }
        });
    });

    it('deve criar um novo usuário', async () => {
      await p
        .spec()
        .post(`${baseUrl}/users`)
        .withJson({
          name: 'Davi',
          job: 'QA'
        })
        .expectStatus(StatusCodes.CREATED)
        .expectJsonLike({
          name: 'Davi',
          job: 'QA'
        });
    });

    it('deve atualizar um usuário', async () => {
      await p
        .spec()
        .put(`${baseUrl}/users/2`)
        .withJson({
          name: 'Davi',
          job: 'QA Senior'
        })
        .expectStatus(StatusCodes.OK)
        .expectJsonLike({
          name: 'Davi',
          job: 'QA Senior'
        });
    });

    it('deve deletar um usuário', async () => {
      await p
        .spec()
        .delete(`${baseUrl}/users/2`)
        .expectStatus(StatusCodes.NO_CONTENT);
    });
  });
});
