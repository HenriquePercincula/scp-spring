/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fatec.domain.Fornecedor;
import fatec.repository.FornecedorRepository;

@Service
public class FornecedorService implements
 ServiceInterface<Fornecedor> {
 @Autowired
 private FornecedorRepository repository;
 public FornecedorService() {}
 @Override
 public Fornecedor create(Fornecedor obj) {
 repository.save(obj);
 return obj;
 }
 @Override
 public Fornecedor findById(Long id) {
 java.util.Optional<Fornecedor> _Fornecedor = repository.findById(id);
 return _Fornecedor.orElse(null);
 }

@Override
public List<Fornecedor> findAll() {
return (List<Fornecedor>) repository.findAll();
}
@Override	
public boolean update(Fornecedor obj) {
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