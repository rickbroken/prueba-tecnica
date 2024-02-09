import { Grid } from "@mui/material";

interface Props{
  title: string;
}

const TitleMain: React.FC<Props> = ({title}) => {
  return (
    <Grid 
      item
      width={'100%'}
      padding={'10px 20px'}
      borderRadius={'10px'}
      color={'white'}
      fontWeight={'bold'}
      textAlign={'start'}
      className="cont-title-degradado"
    >
      <p>{title}</p>
    </Grid>
  );
}
 
export default TitleMain;