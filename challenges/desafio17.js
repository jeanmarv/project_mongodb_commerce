db.produtos.insertOne({ nome: "resumoProdutos", franquia: "McDonalds", totalProdutos: 5 });

db.produtos.find({ nome: "resumoProdutos" },
{ franquia: 1, totalProdutos: 1, _id: 0 });