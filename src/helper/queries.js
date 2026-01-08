const urlServicios = import.meta.env.VITE_SERVICIOS;

export const listarProductosApi = async () => {
    try {
        const respuesta = await fetch(urlServicios)
        return respuesta
    } catch (error) {
        console.error(error);
    }
}