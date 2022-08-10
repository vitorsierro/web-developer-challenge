import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../../Contexts/DadosContext';
import styled from '../../styles/home.module.css';

export default function () {
    const [name, setName] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const global = useContext(GlobalContext);   

    function handleGetFile(e){
        setUrlImage('./image.png')
    }

    function handleSubmit(e) {
            e.preventDefault();
            global.adicionarNota(name,mensagem,urlImage);
            setMensagem("");
            setName(""); 
            setUrlImage("");
    }
   
    return (
        <div className={styled.Container_BoxEscrever}>
            <form className={styled.Container_Escrever} onSubmit={(e) => handleSubmit(e)}>
                <div className={styled.InputImage}>
                    <label htmlFor="arquivo"><img src="./image.png" className={styled.inputCursor} /></label>
                    <input className={styled.InputImage} type="file" id="arquivo" name="arquivo" onChange={(e) => handleGetFile(e)} />
                </div>
                <input type="text" placeholder="Digite seu nome"     id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <textarea placeholder="Mensagem" rows="5" cols="33"  id="mensagem" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                <div className={styled.Container_Buttons}>
                    <button type="submit" className={styled.Descartar} onClick={(e) => { e.preventDefault(); }}>Descartar</button>
                    <button type="submit" className={styled.btnPublicar} >Publicar</button>
                </div>
            </form>
        </div>
    );
}