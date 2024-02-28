package gm.inventarios.service;

import gm.inventarios.model.Product;
import gm.inventarios.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService{

    @Autowired
    private ProductRepository productRepository;
    @Override
    public List<Product> listProducts() {
       return this.productRepository.findAll();
    }

    @Override
    public Product searchProductById(Integer IdProduct) {
        Product product = this.productRepository.findById(IdProduct).orElse(null);
        return product;
    }

    @Override
    public Product saveProduct(Product product) {

       return this.productRepository.save(product);

    }

    @Override
    public void deleteProductById(Integer IdProduct) {
    this.productRepository.deleteById(IdProduct);
    }
}
