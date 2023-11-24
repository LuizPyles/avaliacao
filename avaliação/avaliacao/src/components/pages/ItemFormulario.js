function ItemFormulario({tipo, nome, ph}) {
    return(
        <div>
           
           <label htmlFor={nome}>{ph} </label>
           {tipo == "textarea" ? <textarea placeholder={ph}></textarea> :
            <input type={tipo} id={nome} name={nome}></input>
    }
        </div>
    )
}

export default ItemFormulario