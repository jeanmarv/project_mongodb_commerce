db.produtos.updateMany(
  { $nor: [{ nome: "McChicken" }] },
  { $addToSet: { ingredientes: "ketchup" } },
  );
db.produtos.find({},
  { nome: true, ingredientes: true, _id: false });