import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background:
        radial-gradient(circle at top left, rgba(246, 200, 95, 0.28), transparent 34%),
        linear-gradient(135deg, #002f52 0%, #326589 100%);
    color: #fff;
    text-align: center;
    padding: 92px 24px 110px;
    min-height: 430px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #fff;
    font-size: clamp(32px, 5vw, 48px);
    text-align: center;
    margin: 0 0 14px;
    font-weight: 800;
`

const Subtitulo = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 42px;
    color: #d8e7f2;
`

const Resultados = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px;
`

const Resultado = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 14px 18px;
    min-width: 280px;
    max-width: 360px;
    cursor: pointer;
    background: #fff;
    color: #17324d;
    border-radius: 8px;
    box-shadow: 0 16px 34px rgba(0, 20, 40, 0.18);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    p {
        width: auto;
        margin: 0;
        font-weight: 700;
        text-align: left;
    }

    img {
        width: 72px;
    }

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 42px rgba(0, 20, 40, 0.24);
    }
`

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <Resultados>
                { livrosPesquisados.map( livro => (
                    <Resultado key={livro.id}>
                        <img src={livro.src} alt={livro.nome}/>
                        <p>{livro.nome}</p>
                    </Resultado>
                ) ) }
            </Resultados>
        </PesquisaContainer>
    )
}

export default Pesquisa
