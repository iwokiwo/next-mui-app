
'use client';
import React, {ReactElement} from 'react';
import {useFormik} from "formik";
import * as yup from "yup";
import {useTranslation} from "react-i18next";

import {UnitStores} from "../../../store/unit/unit";
import {Button, Grid, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Box} from "@mui/system";

const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),

});

interface UnitProps {
    /**
     * Function on confirm modal
     */
    onSubmit: (data: any) => void

    edit : boolean
}

const UnitForm: React.FC<UnitProps> = (props: UnitProps) => {
    const { t } = useTranslation()
    const {dataStore, setDataStore,dataUpdate, setDataUpdate} = UnitStores()

    const {onSubmit, edit} = props

    //console.log("edit",dataUpdate)
    const dataForm = edit? dataUpdate:dataStore

    const formik = useFormik({
        initialValues : {
            ...dataForm
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log("add",values)
            onSubmit(values)

        },
    })
    //console.log("data",dataStore)

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={12}>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Unit"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <Box textAlign={"right"}>

                            <Button color="primary" variant="text" type="submit" sx={{ mt: 5 }}>
                                <Typography variant="button" display="block"> {t(`common.save`)}</Typography>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
}

export default UnitForm;
