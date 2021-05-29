import React from 'react'

export const Footer = () => {
    let FooterStyle = {
        position: "relative",
        width: "100%",
        // margin: "auto"
    }
    return (
        
        <div className="bg-dark text-light my-0" style={FooterStyle}>
            <p className="text-center py-3" >Copyright &copy; Tanmay Thole</p>
        </div>
    )
}
