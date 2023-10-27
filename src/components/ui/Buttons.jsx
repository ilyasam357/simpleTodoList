
const Button = (props)=>{
   

    let bg = style.biru

        if (props.bg === "biru") {
            bg = style.biru
        }
        if (props.bg === "merah") {
            bg = style.merah
        }

    return (
        <button className={`${style.btn} ${bg}`} type={props.tipe}>
            {props.children}
        </button>
    )
}

export default Button