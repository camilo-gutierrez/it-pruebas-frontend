import React from "react";
import { useSelector } from "react-redux";
import { TitleStyle } from "../styles";

export default function Title() {

    const flightsList = useSelector((state) => state.flights.flight.name)
   
    return (
        <TitleStyle>
            {!flightsList ? (
                <h6>Hola, bienvenido, sabemos que quieres viajar en un ?, por favor
                diligencia el siguiente formulario:” </h6>
            ): (
                <h6>Hola, bienvenido, sabemos que quieres viajar en un {flightsList}, por favor
                diligencia el siguiente formulario:” </h6>)}
        </TitleStyle>
    )
}
