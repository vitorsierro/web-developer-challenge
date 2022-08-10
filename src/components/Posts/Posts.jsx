import { useContext } from 'react';
import { useEffect } from 'react';
import { GlobalContext } from '../../Contexts/DadosContext';
import Post from '../Post/Post';
export default function Posts() {
    const global = useContext(GlobalContext);   
    return (
        <ul>
            {global.notas.length > 0  ?
                global.notas.map((nota, key) => {
                    return (
                        <li key={key}>
                            <Post
                                index={key}
                                apagarNota={global.apagarNota}
                                name={nota.name}
                                mensagem={nota.mensagem}
                                urlImagem={nota.urlImagem}
                            />
                        </li>
                    )
                })
                : <></>
            }
        </ul>
    )
}