import * as React from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import {Button, Grid, Snackbar, TextField} from "@mui/material"
import {LoadingButton} from "@mui/lab"
import MuiAlert from '@mui/material/Alert'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Недійсний імейл')
        .required("Імейл обов'язковий"),
    password: yup
        .string()
        .min(4, "Короткий пароль")
        .required('Пароль обов\'язковий'),
});

const Login = (props) => {
    const formik = useFormik({
        initialValues: {
            email: props.email,
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            props.submitLoginForm(values, props.goPrivatePage)
        },
    });
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{minHeight: '100vh', backgroundColor: "#c7c7c720"}}
            >
                <Grid
                    item
                    p={1}
                    xs={3}
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: 2,
                        textAlign: "center"
                    }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            sx={{
                                my: 1
                            }}
                            fullWidth
                            variant={"outlined"}
                            type={"email"}
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            label="password"
                            name="password"
                            variant={"outlined"}
                            type={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <LoadingButton
                            sx={{
                                my: 1,
                            }}
                            loading={props.isFetching}
                            loadingIndicator="Wait..."
                            variant="outlined"
                            type="submit"
                            size="large"
                        >
                            Login
                        </LoadingButton>
                    </form>
                </Grid>
            </Grid>
            <Snackbar open={props.isIncorrectCredentials} autoHideDuration={6000} onClose={props.clearIncorrectError}>
                <Alert onClose={props.clearIncorrectError} severity="error" sx={{ width: '100%' }}>
                    Не правильний логін чи пароль
                </Alert>
            </Snackbar>
        </>
    )
}

export default Login