package fatec.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;


@Entity
@Table(name="tb_fornecedor")
public class Fornecedor extends AbstractEntity{
    
    private static final long serialVersionUID = 1L;   
     
    @Column(name="nm_fornecedor",length=255,nullable=false)
    private String nome;
       
    
    public Fornecedor(){
        
    }    

	public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

   
}
