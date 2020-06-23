import React from "react"
import axios from "axios"
import { Container, Grid, Card, CardContent, Typography, TextField, Button, LinearProgress } from "@material-ui/core"
export default class Register extends React.Component {
    state = {
        nombres: "",
        apellidos: "",
        telefono: "",
        email: "",
        password: "",
        isLoading: false
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    registrar = async (e) => {
        e.preventDefault()
        this.setState({
            isLoading: true
        })
        await axios({
            method: "post",
            url: process.env.REACT_APP_API + "/usuarios",
            data: {
                usuario: this.state
            }
        })
            .then((response) => {
                console.log("ress")
            })
            .catch((error) => {
                console.log("error")
            })
            .finally(() => {
                this.setState({
                    isLoading: false
                })
            })
        console.log("luego del axios")
    }
    render () {
        return (
            <Container>
                <Grid container justify="center" alignItems="center">
                    <Grid item>
                        <Card>
                            <CardContent>
                                <Typography variant="h2">Registrese</Typography>
                                <br></br>
                                <form onSubmit={this.registrar}>
                                    <TextField name="nombres" fullWidth variant="outlined" onChange={this.onChange} label="Nombres" value={this.state.nombres} type="text" required ></TextField>
                                    <br></br>
                                    <br></br>
                                    <TextField name="apellidos" fullWidth variant="outlined" onChange={this.onChange} label="Apellidos" value={this.state.apellidos} type="text" required></TextField>
                                    <br></br>
                                    <br></br>
                                    <TextField name="telefono" fullWidth variant="outlined" onChange={this.onChange} label="Telefono" value={this.state.telefono} type="number" required></TextField>
                                    <br></br>
                                    <br></br>
                                    <TextField name="email" fullWidth variant="outlined" onChange={this.onChange} label="Correo Electronico" value={this.state.email} type="email" required></TextField>
                                    <br></br>
                                    <br></br>
                                    <TextField name="password" fullWidth variant="outlined" onChange={this.onChange} label="Cree su contraseña" value={this.state.password} type="password" required ></TextField>

                                    <br></br>
                                    <br></br>
                                    <Button disabled={this.state.isLoading} type="submit" fullWidth variant="contained" color="primary">Registrarse</Button>
                                    {this.state.isLoading ? <LinearProgress></LinearProgress> : null}
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}