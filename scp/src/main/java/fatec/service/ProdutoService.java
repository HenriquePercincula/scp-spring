/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fatec.domain.Produto;
import fatec.repository.ProdutoRepository;

@Service
public class ProdutoService implements
 ServiceInterface<Produto> {
 @Autowired
 private ProdutoRepository repository;
 public ProdutoService() {}
 @Override
 public Produto create(Produto obj) {
 repository.save(obj);
 return obj;
 }
 @Override
 public Produto findById(Long id) {
 java.util.Optional<Produto> _Produto = repository.findById(id);
 return _Produto.orElse(null);
 }

@Override
public List<Produto> findAll() {
return (List<Produto>) repository.findAll();
}


public List<Produto> listarProdutos (Long id) {
return (List<Produto>) repository.listarProdutos(id);
}

@Override	
public boolean update(Produto obj) {
	if (repository.existsById(obj.getId())) {
		repository.save(obj);
		return true;
	}
	return false;
}

@Override
public boolean delete(Long id) {
	if (repository.existsById(id)) {
		repository.deleteById(id);
		return true;
	}
	return false;
}
}