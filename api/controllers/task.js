import { db } from "../db.js";

export const getTask = (_,res) => {
    const q = "SELECT * FROM tasks";

    db.query(q, (err,data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addTask = (req, res) => {
    const q =
      "INSERT INTO tasks(`title`, `task`, favorite, bgcolor) VALUES(?)";
  
    const values = [
      
      req.body.title,
      req.body.task,
      req.body.favorite,
      req.body.bgcolor
    ];
  
    db.query(q, [values], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa criado com sucesso.");
    });
};


export const updateTask = (req, res) => {
    const q =
      "UPDATE tasks SET `title` = ?, `task` = ?, `favorite` = ?, `bgcolor` = ? WHERE `id` = ?";
  
    const values = [
        
        req.body.title,
        req.body.task,
        req.body.favorite,
        req.body.bgcolor
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa atualizado com sucesso.");
    });
  };


export const deleteTask = (req, res) => {
    const q = "DELETE FROM tasks WHERE `id` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(200).json("Tarefa deletado com sucesso.");
    });
};

export const updateTaskColor = (req, res) => {
  const q = "UPDATE tasks SET `bgcolor` = ? WHERE `id` = ?";
  const values = [req.body.bgcolor, req.params.id];

  db.query(q, values, (err) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json("Cor da tarefa atualizada com sucesso.");
  });
};
