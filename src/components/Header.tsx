import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const redirectAdministrador: ()=> void = () => {
    navigate('/administrar-vehiculos');
  }

  return (
    <Grid
      xs={2}
      display={'flex'}
      flexDirection={'column'}
      position={"relative"}
      overflow={"hidden"}
      className="header"
      justifyContent={'center'}
      style={{ height: "95vh" }}
    >
      <Grid
        item
        width={"100%"}
        height={"80px"}
        bgcolor={"#0e4564"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <span style={{ color: "white" }}>LOGO</span>
      </Grid>

      <Grid height={'100%'}>
        <Grid item style={{margin:'10px auto'}} className="nav" width={"95%"} justifyContent={"center"}>
          <ul style={{ width: "100%" }}>
            <Grid 
              item 
              bgcolor={"#cacaca"}
              borderRadius={'5px'}
              padding={'10px 0px'}
              width={"100%"}
              onClick={redirectAdministrador}
              className="pointer"
            >
              <Link
                className="link"
                to={"/administrar-vehiculos"}
              >
                Administrador Vehículo Arrendado
              </Link>
            </Grid>
          </ul>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default Header;
