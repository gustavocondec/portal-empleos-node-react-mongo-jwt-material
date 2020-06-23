import React from "react"
import { Container, Grid, Card, LinearProgress, CardContent, Typography, TextField, Button } from "@material-ui/core"
import axios from "axios"
export default class Login extends React.Component {

    state = {
        email: "",
        password: "",
        isLoading: false
    }
    onChange = (e) => {
        console.log(e)
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("starte: ", this.state)

    }
    iniciarSesion = async (e) => {
        e.preventDefault()
        this.setState({ isLoading: true })
        console.log("Inicia ", this.state)
        await axios({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "Access-Control-Allow-Origin": "*",

            },
            method: "get",
            url: process.env.REACT_APP_API + "/usuarios",
            params: {

                email: "prueba",
                password: "prueba"

            }
        })
            .then(response => {//inicia sesion el postulante
                console.log("Iniciaio ok ", response)
            })
            .catch(error => {//ocurrio un error
                console.log(error)
            })
            .finally(() => {
                this.setState({
                    isLoading: true
                })
                console.log("1")
            })
        console.log("2")
    }
    render () {
        return (
            <Container style={{ height: "720px" }}>
                <Grid container justify="center" alignItems="center" style={{ height: "100%" }}>
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant="h3">Iniciar Sesion</Typography>
                                <br></br>
                                <form onSubmit={this.iniciarSesion}>
                                    <TextField name="email" fullWidth value={this.correo} onChange={this.onChange} variant="outlined" label="Correo" type="email" required></TextField>
                                    <br></br>
                                    <br></br>
                                    <TextField name="password" fullWidth value={this.password} onChange={this.onChange} variant="outlined" label="Contraseña" type="password" required></TextField>
                                    <br></br>
                                    <br></br>
                                    <Button disabled={this.state.isLoading} fullWidth type="submit" variant="contained" color="primary">Iniciar Sesion</Button>
                                    {(this.state.isLoading) ? <LinearProgress /> : null}
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }

}