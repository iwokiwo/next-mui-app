/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {CircularProgress, Backdrop} from "@mui/material";
import {LoadingStore} from "../../../../../store/loading/loading";

export const Loading: React.FC = () => {
    const {loading, setLoading } = LoadingStore()

    return (
        <Backdrop
            sx={{ color: 'white', zIndex: 1600}}
            open={loading}
            onClick={() => setLoading(false)}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}
