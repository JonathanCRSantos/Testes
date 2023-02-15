const Responsavel = require("../models/Responsavel");

const responsavelController = {
	create: async (req, res) => {
		try {
			const responsavel = {
				nome: req.body.nome,
				cargo: req.body.cargo,
				telefone: req.body.telefone,
				email: req.body.email,
			};

			const responseCreate = await Responsavel.create(responsavel);

			res.redirect("/api/responsavel");
		} catch (error) {
			console.log(`ERRO: ${error}`);
		}
	},
	read: async (req, res) => {
		try {
			const responseRead = await Responsavel.find();

			res.status(200).render("../views/responsavel.ejs", {
				responseRead: responseRead,
			});
		} catch (error) {
			console.log(`ERRO: ${error}`);
		}
	},
	update: async (req, res) => {
		try {
			const id = req.params.id;

			const responsavel = {
				nome: req.body.nome,
				cargo: req.body.cargo,
				telefone: req.body.telefone,
				email: req.body.email,
			};

			const responseUpdate = await Responsavel.findByIdAndUpdate(
				id,
				responsavel
			);

			if (!responseUpdate) {
				const msg = "Responsável não encontrado!!";
				return res.render("../views/erro.ejs", { msg });
			}

			res.redirect("/api/responsavel");
		} catch (error) {
			console.log(`ERRO: ${error}`);
		}
	},
	delete: async (req, res) => {
		try {
			const id = req.params.id;

			const responsavel = await Responsavel.findById(id);

			if (!responsavel) {
				const msg = "Responsável não encontrado!!";
				return res.render("../views/erro.ejs", { msg });
			}

			const responseDelete = await Responsavel.findByIdAndDelete(id);

			res.redirect("/api/responsavel");
		} catch (error) {
			console.log(`ERRO: ${error}`);
		}
	},
};

module.exports = responsavelController;
