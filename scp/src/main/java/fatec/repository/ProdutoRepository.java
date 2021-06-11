package fatec.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fatec.domain.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	@Query("Select p from Produto p where p.fornecedor.id = ?1 ")
	List<Produto> listarProdutos (Long id);	
	
}