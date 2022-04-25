const styles = theme => {
    return ({
        taskboard : {
            display : "flex",
            alignItems : "center"
        },
        shape : {
            // backgroundColor : "red",
            backgroundColor : theme.color.primary,
            // color : "white",
            color : theme.shape.textColor,
            // borderColor : "#cccccc",
            borderColor : theme.shape.borderColor,
            padding : 20,
            margin : 10,
            // borderRadius : 4
            borderRadius : theme.shape.borderRadius 
        }

    })
}

export default styles