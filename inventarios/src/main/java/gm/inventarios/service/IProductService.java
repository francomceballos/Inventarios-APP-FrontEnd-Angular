package gm.inventarios.service;

import gm.inventarios.model.Product;
import java.util.List;
public interface IProductService {
    public List<Product> listProducts();

    public Product searchProductById(Integer IdProduct);

    public Product saveProduct(Product product);

    public void deleteProductById(Integer IdProduct);
}
