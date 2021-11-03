const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('express');
const app = express();
const port = 3012;
let request;
app.use(express.json());

app.get('/',function(req,res){
    res.send(`Hola`);
})

app.listen(port, () => {
    app.get('/status',function(req,res){
        res.send(`Server is running on ${port}`);
    })
});

app.post('/Precios',function(req,res){
    request =req.body;
    var Contador= 0;
    console.log(request);
    Contador=+(request.Manzana.Precio*request.Manzana.Cantidad)+(request.Banana.Precio*request.Banana.Cantidad)+(request.Lechuga.Precio*request.Lechuga.Cantidad)+(request.Papa.Precio*request.Papa.Cantidad);
    for(var Producto in request){
        console.log(Producto.Precio); 
            //res.send(Producto + ": $"+ request.Producto.Precio + " Cantidad:"+Producto.Cantidad);
          res.send("Manzana"+ ": $"+ request.Manzana.Precio + " Cantidad:"+request.Manzana.Cantidad+"||"+"Banana"+ ": $"+ request.Banana.Precio + " Cantidad:"+request.Banana.Cantidad+"||"+"Lechuga"+ ": $"+ request.Lechuga.Precio + " Cantidad:"+request.Lechuga.Cantidad+"||"+"Papa"+ ": $"+ request.Papa.Precio + " Cantidad:"+request.Papa.Cantidad+" // "+"La suma total de la compra es de "+Contador);
        }
    
    
})
