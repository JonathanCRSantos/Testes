const rifasController = require("../rifa");

describe("Gerenciamento de rifas", () => {
	beforeEach(() => {
		rifasController.limpar();
	});

	it("01 - A função adicionarRifa cria uma nova rifa", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		expect(rifasController.rifas[1]).toEqual({
			nome: "Rifa 1",
			preco: 10,
			quantidade: 5,
		});
	});

	it("02 - A função adicionarRifa não adiciona uma rifa com id duplicado no array", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		rifasController.adicionarRifa(1, "Rifa 2", 20, 10);
		expect(rifasController.rifas[1]).toEqual({
			nome: "Rifa 1",
			preco: 10,
			quantidade: 5,
		});
	});

	it("03 - A função venderRifa vende certa quantidade de rifas", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.venderRifa(1, 3);
		expect(preco).toBe(30);
		expect(rifasController.rifas[1].quantidade).toBe(2);
	});

	it("04 - A função venderRifa não vende rifas se não houver quantidade suficiente na rifa cadastrada", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.venderRifa(1, 10);
		expect(preco).toBe(0);
	});

	it("05 - A função calcularPreco calcula o preço total de uma quantidade de rifas", () => {
		rifasController.adicionarRifa(2, "Rifa 1", 20, 5);
		const preco = rifasController.calcularPreco(2, 3);
		expect(preco).toBe(60);
	});

	it("06 - A função calcularPreco retorna 0 se o tipo não existir", () => {
		const preco = rifasController.calcularPreco(3, 10);
		expect(preco).toBe(0);
	});

	it("07 - A função calcularPreco retorna 0 se a quantidade for 0", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.calcularPreco(1, 0);
		expect(preco).toBe(0);
	});

	it("08 - A função adicionarRifa não adiciona uma rifa com dados inválidos", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, -5);
		expect(rifasController.rifas[1]).toBeUndefined(); // se eu mudar o valor do array pra outro que não seja 1 ou 2  ele dá certo é como se já tivessem alocado um lugar fixo
	});

	it("09 - A função venderRifa retorna 0 se a quantidade for negativa", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 10);
		const preco = rifasController.venderRifa(1, -1);
		expect(preco).toBe(0);
	});

	it("10 - A função venderRifa retorna 0 se a quantidade for 0", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.venderRifa(1, 0);
		expect(preco).toBe(0);
		expect(rifasController.rifas[1].quantidade).toBe(5);
	});

	it("11 - A função venderRifa retorna 0 se o tipo for um objeto", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.venderRifa({}, 2);
		expect(preco).toBe(0);
	});

	it("12 - A função calcularPreco retorna 0 se o tipo for um objeto", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.calcularPreco({}, 2);
		expect(preco).toBe(0);
	});

	it("13 - A função calcularPreco retorna 0 se a quantidade de rifas for negativa", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.calcularPreco(1, -1);
		expect(preco).toBe(0);
	});

	it("14 - A função calcularPreco retorna 0 se o preço da rifa for negativo", () => {
		rifasController.adicionarRifa(1, "Rifa 1", -10, 5);
		const preco = rifasController.calcularPreco(1, 2);
		expect(preco).toBe(0);
	});

	it("15 - A função venderRifa retorna 0 se a rifa não existe", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.venderRifa(2, 1);
		expect(preco).toBe(0);
	});

	it("16 - A função calcularPreco retorna 0 se a rifa não existe", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.calcularPreco(2, 2);
		expect(preco).toBe(0);
	});

	it("17 - A função calcularPreco retorna o preço correto para uma quantidade de rifas válida", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.calcularPreco(1, 3);
		expect(preco).toBe(30);
	});

	it("18 - A função venderRifa retorna 0 se o preço da rifa for negativo", () => {
		rifasController.adicionarRifa(1, "Rifa 1", -10, 5);
		const preco = rifasController.venderRifa(1, 2);
		expect(preco).toBe(0);
	});

	it("19 - A função venderRifa retorna 0 se a quantidade de rifas for negativa", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 10, 5);
		const preco = rifasController.venderRifa(1, -1);
		expect(preco).toBe(0);
	});

	it("20 - A função adicionarRifa não adiciona uma rifa com preço menor ou igual a 0 no array", () => {
		rifasController.adicionarRifa(1, "Rifa 1", 0, 5);
		expect(rifasController.rifas[1]).toBeUndefined();
	});
  
});
