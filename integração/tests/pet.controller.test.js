const request = require("supertest");
const app = require("../server");
const Pet = require("../models/Pet");

jest.setTimeout(20000);

describe("Pet controller", () => {
  beforeEach(async () => {
    await Pet.deleteMany({});
  });

  test("01 - Deve ser possível adicionar um novo pet", async () => {
    const petData = {
      nome: "Toby",
      tutor: "Carlos",
      telefone: "1111111111",
      endereco: "Rua X, 123",
    };

    const response = await request(app)
      .post("/api/pet")
      .send(petData)
      .expect(200);

    expect(response.body).toMatchObject(petData);
    const pet = await Pet.findById(response.body._id);
    expect(pet).toMatchObject(petData);
  });

  test("02 - Deve ser possível listar todos os pets do banco", async () => {
    const pets = [
      {
        nome: "Toby",
        tutor: "Carlos",
        telefone: "1111111111",
        endereco: "Rua X, 123",
      },
      {
        nome: "Pretinha",
        tutor: "Maria",
        telefone: "2222222222",
        endereco: "Rua Y, 456",
      },
    ];

    await Pet.insertMany(pets);

    const response = await request(app).get("/api/pet").expect(200);

    expect(response.body).toHaveLength(2);
    expect(response.body).toEqual(expect.arrayContaining(pets));
  });
});