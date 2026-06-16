import styled from "styled-components";

const Card = styled.article`
    display: grid;
    grid-template-columns: 1fr 170px;
    align-items: center;
    gap: 28px;
    max-width: 760px;
    margin: 42px auto 0;
    padding: 32px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 18px 42px rgba(17, 38, 60, 0.12);
    border: 1px solid rgba(21, 107, 220, 0.08);

    @media (max-width: 680px) {
        grid-template-columns: 1fr;
        padding: 26px;
        text-align: center;
    }
`

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 680px) {
        align-items: center;
    }
`

const Etiqueta = styled.span`
    width: fit-content;
    margin-bottom: 14px;
    padding: 6px 10px;
    background: #eef5fb;
    color: #156bdc;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
`

const Titulo = styled.h3`
    margin: 0 0 8px;
    color: #f39f2d;
    font-size: 26px;
    line-height: 1.15;
`

const Subtitulo = styled.h4`
    margin: 0 0 14px;
    color: #17324d;
    font-size: 18px;
    line-height: 1.3;
`

const Descricao = styled.p`
    margin: 0 0 24px;
    color: #52687a;
    font-size: 15px;
    line-height: 1.6;
    max-width: 430px;
`

const Botao = styled.button`
    border: 0;
    border-radius: 8px;
    padding: 13px 20px;
    background: #f39f2d;
    color: #fff;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 12px 24px rgba(243, 159, 45, 0.28);

    &:hover {
        background: #d98613;
        transform: translateY(-2px);
        box-shadow: 0 16px 30px rgba(243, 159, 45, 0.34);
    }
`

const Imagem = styled.img`
    width: 150px;
    justify-self: center;
    filter: drop-shadow(0 18px 20px rgba(17, 38, 60, 0.18));

    @media (max-width: 680px) {
        order: -1;
        width: 130px;
    }
`

function CardRecomenda({titulo, subtitulo, descricao, imagem}) {
    return (
        <Card>
            <Conteudo>
                <Etiqueta>Recomendado</Etiqueta>
                <Titulo>{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
                <Botao>Saiba mais</Botao>
            </Conteudo>
            <Imagem src={imagem} alt={titulo} />
        </Card>
    )
}

export default CardRecomenda;
