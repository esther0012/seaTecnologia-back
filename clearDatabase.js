const fs = require('fs');

const clearDatabase = () => {
	const db = {
		usuarios: []
	};

	fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
		if (err) {
			console.error('Erro ao limpar o banco de dados:', err);
		} else {
			console.log('Banco de dados limpo com sucesso.');
		}
	});
};

clearDatabase();