/**
 * @author I Wayan Bayu Nugroho
 * @email bayuiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */

import {create} from "zustand";
import {LodingProps} from "./loading.props"

export const LoadingStore = create<LodingProps>((set) => ({
    loading: false,
    setLoading: (open: boolean,) => {
        set(() => ({loading: open
        }));
    },
}));
