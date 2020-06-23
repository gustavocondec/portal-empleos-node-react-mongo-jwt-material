import React from "react"
import { Grid, TextField, Card, Typography, Container, InputAdornment, CardHeader, CardContent, CardMedia } from "@material-ui/core"
import { Facebook, Twitter, LinkedIn, Pageview } from "@material-ui/icons"
import "./Home.css"
export default class Home extends React.Component {
    render () {
        return (
            <div>
                <Grid container justify="center" alignItems="center" className="presentacion">
                    <Grid item xs={10} md={8}>
                        <Typography variant="h2">
                            ¿Estás listo para dar el siguiente paso?
                        </Typography>
                    </Grid>
                    <Grid item xs={10} md={5}>
                        <div >
                            <form >
                                <TextField
                                    label="Busca un puesto, área o empresa"
                                    variant="filled"
                                    color="primary"
                                    fullWidth
                                    className="buscar"
                                    InputProps={{
                                        endAdornment:
                                            (
                                                <InputAdornment position="end">
                                                    <Pageview style={{ fontSize: 80 }} color="secondary"></Pageview>
                                                </InputAdornment>
                                            )
                                    }}
                                >

                                </TextField>
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <br></br>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="Card">
                            <img src="https://krowdy.s3.amazonaws.com/portales/bolsas/laborum/471351-11.jpg" alt="img 1"></img>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="Card">
                            <img src="https://www.laborum.pe/admin/47493/5de54c258234f.png" alt="img 2"></img>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className="Card">
                            <img src="https://krowdy.s3.amazonaws.com/portales/bolsas/laborum/364000-logo-final-curvas_Mesa-de-trabajo-1.png" alt="img 3"></img>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h2">Ofertas laborales</Typography>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardHeader>Titulo</CardHeader>
                            <CardContent>cuerpo contenido</CardContent>
                            <CardMedia>media</CardMedia>

                        </Card>
                    </Grid>
                </Grid>
                <div className="footerHome">
                    <Container>
                        <Grid container justify="center" style={{ textAlign: "center" }}>
                            <Grid item xs={12} md={3}>
                                <h2>Laborum</h2>
                                <p>Terminos y condiciones</p>
                                <h2>Contactanos</h2>
                                <p>+51 924 172 369</p>
                                <p>+51 987 561 340</p>
                                <p>postulantes@laborum.pe</p>
                                <p>Lunes a Viernes</p>
                                <p>de 9:00 am a 1:00 pm</p>
                                <p>y de 3:00 pm a 6:00 pm</p>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <h2>Postulantes</h2>
                                <p>Arma tu cv</p>
                                <p>Busca trabajo</p>
                                <p>Tu opinion nos importa</p>
                                <p>Preguntas frecuentes</p>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <h2>Empresas</h2>
                                <p>Registra tu empresa</p>
                                <p>Nuestras soluciones</p>
                                <p>Tu opinion nos importa</p>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Grid className="bloqueRedes" container direction="row" alignItems="center" justify="center">
                                    <Grid item>
                                        <Facebook fontSize="large"></Facebook>
                                    </Grid>
                                    <Grid item >
                                        <Twitter fontSize="large"></Twitter>
                                    </Grid>
                                    <Grid item >
                                        <LinkedIn fontSize="large"></LinkedIn>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Container>
                    <Grid container justify="center" alignItems="center" style={{ textAlign: "center" }}>
                        <Grid item md={3} xs={12}>
                            <span>2020 @Laborum powered by Krowdy</span>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <span>Terminos y condiciones</span>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <span>Proteccion de datos</span>
                        </Grid>
                        <Grid item md={3} xs={12}>
                            <span>Calle Mariano Odicio 153 of. 2A - Surquillo</span>
                        </Grid>
                    </Grid>

                </div>
            </div >
        )
    }
}