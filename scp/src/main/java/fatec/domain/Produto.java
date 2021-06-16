package fatec.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="tb_produto")
public class Produto extends AbstractEntity{
    
    private static final long serialVersionUID = 1L;
    
    
    
    @Column(name="nm_produto",length=255,nullable=false)
    private String nome;
    
    @ManyToOne
    //@JoinColumn(name="fk_fornecedor")
    private Fornecedor fornecedor;

    public Produto() {
    }

	

	public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Fornecedor getFornecedor() {
        return fornecedor;
    }

    public void setFornecedor(Fornecedor fornecedor) {
        this.fornecedor = fornecedor;
    }

  
	
    
    
}
