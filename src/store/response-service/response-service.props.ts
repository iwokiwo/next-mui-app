export interface ResponseServiceProps{
    response: {
        message?: string;
        status?: string;
    }

    setResponse: (data: any) => void;
}
