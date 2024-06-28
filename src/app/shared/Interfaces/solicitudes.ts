/*
    Estado 0: No Modificado
    Estado 1: Modificado
*/

export interface Solicitudes {
    solicitudID: number;
    usuarioSolicitante: string;
    codigoSolicitud: number;
    detalleSolicitud: string;
    fechaRegistro: string;
    estado: number;

}
