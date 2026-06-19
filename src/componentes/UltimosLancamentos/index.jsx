import { filmes } from "./dados.js";
import styled from "styled-components";
import Titulo from "../Titulo";
import CardRecomenda from "../cardRecomenda";
import filmeRecomendado from "../../imagens/filme-recomendado.png";

const LancamentosContainer = styled.section`
    padding: 56px 72px 72px;
    background: #f4f7fb;

    @media (max-width: 720px) {
        padding: 42px 24px 56px;
    }
`

const ListaFilmes = styled.div`
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

function UltimosLancamentos() {
    return (
        <LancamentosContainer>
            <Titulo cor="#156bdc" tamanho="30px">FILMES EM DESTAQUE</Titulo>
            <ListaFilmes>
                {filmes.map((filme) => (
                    <Resultado key={filme.id}>
                        <img src={filme.src} alt={`Pôster de ${filme.nome}`} />
                        <p>{filme.nome}</p>
                    </Resultado>
                ))}
            </ListaFilmes>
            <CardRecomenda
                titulo="Talvez você também goste"
                subtitulo="Memórias do Amanhã"
                descricao="Um mistério de ficção científica sobre escolhas, lembranças e os caminhos que ainda não percorremos."
                imagem={filmeRecomendado}
                altImagem="Pôster de Memórias do Amanhã"
            />
        </LancamentosContainer>
    )
}

export default UltimosLancamentos;
