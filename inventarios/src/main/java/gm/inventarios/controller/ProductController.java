package gm.inventarios.controller;

import gm.inventarios.model.Product;
import gm.inventarios.service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("inventory-app")
@CrossOrigin(value ="http://localhost:4200")
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public List<Product> getProducts(){
        List<Product> products =this.productService.listProducts();
        logger.info("Obtained products");
        products.forEach((product -> logger.info(product.toString())));
        return products;
    }

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        logger.info("adding product: " + product);
       return this.productService.saveProduct(product);
    }

}
