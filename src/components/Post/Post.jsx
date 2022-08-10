import styled from '../../styles/home.module.css';
export default function Post({index, apagarNota, name, mensagem, urlImagem}){
    function excluir(e){
        e.preventDefault();
        apagarNota(index);
    }
    
    return (
      <div className={styled.Container_Posts}>
            <div className={styled.Container_Post}>
                <img  src="./test.png" alt="icon postado" onClick={(e) => excluir(e)}/>
                <div>
                    <p>{mensagem}</p>
                    <p className={styled.By}><span>Enviado por</span> {name}</p>                
                </div>
                <img src="./delete.png" alt="remover post"/>
            </div>
       </div> 
    );
}