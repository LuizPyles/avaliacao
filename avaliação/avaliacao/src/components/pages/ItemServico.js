function ItemServico({img, nome, descricao}) {
    return (
        <div>
            <h1>{nome}</h1>
            <img src={img} alt={nome} />
            <p>{descricao}</p>
        </div>

    )
}

export default ItemServico