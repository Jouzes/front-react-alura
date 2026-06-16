import { livros } from "./dados.js";
import styled from "styled-components";
import Titulo from "../Titulo/index.js";
import CardRecomenda from "../cardRecomenda/index.js";
import livroRecomendado from "../../imagens/livro2.png";

const LancamentosContainer = styled.section`
    padding: 56px 72px 72px;
    background: #f4f7fb;

    @media (max-width: 720px) {
        padding: 42px 24px 56px;
    }
`

const ListaLivros = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
    max-width: 1080px;
    margin: 0 auto;
`

const Resultado = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 260px;
    padding: 24px 18px;
    cursor: pointer;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 14px 32px rgba(17, 38, 60, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    p {
        margin: 18px 0 0;
        color: #17324d;
        font-weight: 700;
        text-align: center;
        line-height: 1.35;
    }

    img {
        width: 120px;
        height: 168px;
        object-fit: contain;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 44px rgba(17, 38, 60, 0.16);
    }
`

function UlitmosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo cor="#156bdc" tamanho="30px">ÚLTIMOS LANÇAMENTOS</Titulo>
            <ListaLivros>
                {livros.map((livro) => (
                    <Resultado key={livro.id}>
                        <img src={livro.src} alt={livro.nome} />
                        <p>{livro.nome}</p>
                    </Resultado>
                ))}
            </ListaLivros>
            <CardRecomenda
                titulo="Talvez você também goste"
                subtitulo="Angular 11 e Firebase"
                descricao="Construa uma aplicação integrada com recursos modernos para evoluir seus estudos de front-end."
                imagem={livroRecomendado}
            />
        </LancamentosContainer>
    )
}

export default UlitmosLancamentos;
