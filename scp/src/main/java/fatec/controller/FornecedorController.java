/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fatec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fatec.domain.Fornecedor;
import fatec.service.FornecedorService;
@RestController
@RequestMapping("/fornecedor")
public class FornecedorController implements
 ControllerInterface<Fornecedor> {
 @Autowired
 private FornecedorService service;
 
 @GetMapping
 public ResponseEntity<List<Fornecedor>> getAll() {
	 return ResponseEntity.ok(service.findAll());
	 }

 @GetMapping(value = "/{id}")
 public ResponseEntity<?> get(@PathVariable("id") Long id){
 Fornecedor _obj = service.findById(id);
 if (_obj != null) {
 return ResponseEntity.ok(_obj);
 }
 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
 }

 @PostMapping
 public ResponseEntity<Fornecedor> post(@RequestBody Fornecedor obj)
 {
 service.create(obj);
 return ResponseEntity.ok(obj);
 }
 
 @PutMapping
 public ResponseEntity<?> put(@RequestBody Fornecedor _obj)
 {
 if (service.update(_obj)) {
 return ResponseEntity.ok(_obj);
 }
 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
 }

 @DeleteMapping(value = "/{id}")
 public ResponseEntity<?> delete(@PathVariable("id") Long id) {
 if (service.delete(id)) {
 return ResponseEntity.ok().build();
 }
 return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
 }
}