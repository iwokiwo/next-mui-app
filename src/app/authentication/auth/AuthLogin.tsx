
'use client';
import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import { useRouter } from 'next/navigation';
import {useFormik} from "formik";

import URBS from "@/app/(DashboardLayout)/components";

import {globalAction} from "@/domain/helpers/global-action";

import {AuthStores} from "@/store/auth/auth";
import {NotifStore} from "@/store/notif/notifStore";
import {LoadingStore} from "@/store/loading/loading";
import {LoadingButton} from "@mui/lab";

const validationSchema = yup.object({
  username: yup
      .string()
      .required('Name is required'),
  password: yup
      .string()
      .required('Password is required'),

});

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => {
  const router = useRouter();

  //---STORE---
  const {login, dataAuth, setDataAuth}= AuthStores()
  const {setNotif} = NotifStore();
  const {setLoading } = LoadingStore()

  const NotifStores ={setNotif}
  const LoadingStores ={setLoading}


  const [loadingButtons, setLoadingButtons] = React.useState(false);


  const formik = useFormik({
    initialValues : {
      ...dataAuth
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoadingButtons(true);
      globalAction(LoadingStores, NotifStores,{
        action: async() => await login(values),
        afterAction: () => {
          router.push('/')
        }
      })
    },
  })

  return(
      <>
        <form onSubmit={formik.handleSubmit}>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
              {title}
            </Typography>
        ) : null}

        {subtext}

        <Stack>
          <Box>
            <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="username"
                mb="5px"
            >
              Username
            </Typography>
            {/*<CustomTextField*/}
            {/*    variant="outlined"*/}
            {/*    fullWidth*/}
            {/*    value={formik.values.name}*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    error={formik.touched.name && Boolean(formik.errors.name)}*/}
            {/*    helperText={formik.touched.name && formik.errors.name}*/}
            {/*/>*/}
            <TextField
                fullWidth
                id="name"
                name="name"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.username) && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
          </Box>
          <Box mt="25px">
            <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="password"
                mb="5px"
            >
              Password
            </Typography>
            {/*<CustomTextField*/}
            {/*    type="password"*/}
            {/*    variant="outlined"*/}
            {/*    fullWidth*/}

            {/*    value={formik.values.password}*/}
            {/*    onChange={formik.handleChange}*/}
            {/*    error={formik.touched.password && Boolean(formik.errors.password)}*/}
            {/*    helperText={formik.touched.password && formik.errors.password}*/}
            {/*/>*/}
            <TextField
                fullWidth
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={Boolean(formik.touched.password) && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
          <Stack
              justifyContent="space-between"
              direction="row"
              alignItems="center"
              my={2}
          >
            <FormGroup>
              <FormControlLabel
                  control={<Checkbox defaultChecked/>}
                  label="Remeber this Device"
              />
            </FormGroup>
            <Typography
                component={Link!}
                href="/"
                fontWeight="500"
                sx={{
                  textDecoration: "none",
                  color: "primary.main",
                }}
            >
              Forgot Password ?
            </Typography>
          </Stack>
        </Stack>
        <Box>
          <LoadingButton
              size="large"
              fullWidth
              color="primary"
              type="submit"
              loading={loadingButtons}
              loadingPosition="start"
              // startIcon={<SaveIcon />}
              variant="contained"
          >
            Login
          </LoadingButton>
        </Box>
        {subtitle}
        </form>
        <URBS.Notif />
      </>
  )

}

export default AuthLogin;
